/**
 * Converts an RGB color string to RGBA by adding an alpha channel
 * @param rgbColor - RGB color string in format "rgb(r, g, b)"
 * @param alpha - Alpha value between 0 and 1
 * @returns RGBA color string in format "rgba(r, g, b, a)"
 * @throws Error if rgbColor is not in valid RGB format
 */
export const rgbWithAlpha = (rgbColor: string, alpha: number): string => {
  if (!rgbColor.match(/^rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)$/)) {
    throw new Error("Invalid RGB color format. Expected format: rgb(r, g, b)");
  }
  return rgbColor.replace("rgb(", "rgba(").replace(")", `, ${alpha})`);
};

/**
 * Converts a hex color string to hex with alpha channel
 * @param hexColor - Hex color string in format "#RRGGBB" or "RRGGBB"
 * @param alpha - Alpha value between 0 and 1
 * @returns Hex color string with alpha in format "#RRGGBBAA"
 * @throws Error if hexColor is not in valid hex format
 */
export const hexWithAlpha = (hexColor: string, alpha: number): string => {
  const hex = hexColor.replace("#", "");
  if (!hex.match(/^[0-9A-Fa-f]{6}$/)) {
    throw new Error(
      "Invalid hex color format. Expected format: #RRGGBB or RRGGBB"
    );
  }
  return `#${hex}${alphaToHex(alpha)}`;
};

/**
 * Converts an alpha value to a two-digit hex string
 * @param alpha - Alpha value between 0 and 1
 * @returns Two-digit hex string representing the alpha value
 */
function alphaToHex(alpha: number): string {
  const clamped = Math.round(Math.min(1, Math.max(0, alpha)) * 255);
  return clamped.toString(16).padStart(2, "0").toUpperCase();
}

export const rgbGradientBackground = (color: string) => ({
  background: `linear-gradient(to bottom, ${rgbWithAlpha(
    color,
    0
  )} 5%, ${rgbWithAlpha(color, 0.45)}, ${rgbWithAlpha(color, 0)} 95%)`,
});

export const BORDER_THICKNESS = "24px";
export const CUT_SIZE = 50;
export const TYPEWRITER_SPEED = 5;
