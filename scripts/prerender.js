// scripts/prerender.js — post-build Playwright snapshot of every route.
// Renders each route in a real headless browser and writes the fully-rendered
// DOM to a static file, so crawlers and AI engines see real content instead of
// an empty <div id="root">. Keep ROUTES in sync with public/sitemap.xml.
//
// This site is a single-URL app (views are swapped via Redux state, not the URL),
// so there is only one route: "/". The landing copy is typed out imperatively by
// TypewriterText (requestAnimationFrame + innerHTML), so we wait for the last
// sentence to finish typing before snapshotting.
import path from "node:path";
import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { preview } from "vite";
import { chromium } from "playwright";
import { LANDING_LINK_TEXT } from "../src/const/landing-link.js";

const ROUTES = ["/"];
// The landing link is the last thing typed, so its text appearing means all four
// TypewriterText paragraphs have finished. It embeds an anchor (TypewriterText
// writes via innerHTML), so snapshotting earlier would capture a half-typed tag.
const READY_TEXT = LANDING_LINK_TEXT;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");

async function main() {
  const server = await preview({
    root: rootDir,
    preview: { port: 0 },
    logLevel: "warn",
  });
  const origin = server.resolvedUrls?.local?.[0]?.replace(/\/$/, "");
  if (!origin) throw new Error("Could not resolve preview URL");

  const browser = await chromium.launch();
  try {
    // Desktop viewport: the app shows a "best viewed on a larger screen" message
    // below 1000px (MUI useMediaQuery), so render wide to capture the real content.
    const page = await browser.newPage({
      viewport: { width: 1280, height: 900 },
    });
    for (const route of ROUTES) {
      await page.goto(origin + route, { waitUntil: "load", timeout: 30000 });
      // Wait for the typewriter to finish so the typed copy is in the DOM.
      // Case-insensitive: innerText returns *rendered* text, and the landing
      // link is styled `text-transform: uppercase`.
      await page.waitForFunction(
        (text) => document.body.innerText.toLowerCase().includes(text),
        READY_TEXT.toLowerCase(),
        { timeout: 30000 },
      );
      await page.waitForTimeout(300);
      const html =
        "<!DOCTYPE html>\n" +
        (await page.evaluate(() => document.documentElement.outerHTML));
      const out =
        route === "/"
          ? path.join(distDir, "index.html")
          : path.join(distDir, route.replace(/^\//, ""), "index.html");
      await fs.mkdir(path.dirname(out), { recursive: true });
      await fs.writeFile(out, html, "utf8");
      console.log(`prerendered ${route}`);
    }
  } finally {
    await browser.close();
    await new Promise((r) => server.httpServer.close(r));
  }
}

main().catch((e) => {
  console.error("prerender failed:", e);
  process.exit(1);
});
