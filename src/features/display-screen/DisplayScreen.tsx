import { useAppDispatch, useAppSelector } from "@/app/hooks";
import {
  DisplayScreenPage,
  nextPage,
  previousPage,
} from "./display-screen-page-slice";
import LandingPage from "./pages/LandingPage";
import { useTheme } from "@mui/material/styles";
import { Description } from "@mui/icons-material";

import rightArrow from "@/assets/arrow-right.png";
import leftArrow from "@/assets/arrow-left.png";
import linkedInLogo from "@/assets/linkedin.svg";
import fiverrLogo from "@/assets/fiverr.svg";

import clsx from "clsx";
import WorkPage from "./pages/work-page/WorkPage";
import ProjectsPage from "./pages/projects-page/ProjectsPage";

import "./DisplayScreen.css";

const DisplayScreen = () => {
  const dispatch = useAppDispatch();
  const theme = useTheme();

  const { pages, currentPageIdx } = useAppSelector(
    (state) => state.displayScreenPage
  );
  const currentPage = pages[currentPageIdx];

  const canGoNext = currentPageIdx < pages.length - 1;
  const canGoPrevious = currentPageIdx > 0;

  const renderPage = () => {
    switch (currentPage) {
      case DisplayScreenPage.LandingPage:
        return <LandingPage />;
      case DisplayScreenPage.WorkPage:
        return <WorkPage />;
      case DisplayScreenPage.ProjectsPage:
        return <ProjectsPage />;
      default:
        return null;
    }
  };

  const navButtonStyle = (canNavigate: boolean) => ({
    width: "8vw",
    aspectRatio: "1/1",
    backgroundColor: theme.palette.primary.main,
    maskSize: "contain",
    maskRepeat: "no-repeat",
    maskPosition: "center",
    opacity: canNavigate ? 1 : 0.2,
    cursor: canNavigate ? "pointer" : "default",
  });

  const socialMediaLinks = [
    {
      href: "https://www.linkedin.com/in/dongeric/",
      src: linkedInLogo,
      alt: "LinkedIn",
    },
    {
      href: "https://resume.erkdong.com",
      icon: Description,
      alt: "Resume",
    },
  ];

  return (
    <div className="w-full h-full">
      {renderPage()}

      {/* Social media links */}
      <div className={clsx("absolute top-2 right-10", "flex gap-3")}>
        {socialMediaLinks.map(({ href, src, alt, icon: Icon }) => (
          <a href={href} target="_blank">
            {Icon ? (
              <Icon
                aria-label={alt}
                sx={{ fontSize: 36 }}
                className={clsx(
                  "opacity-30",
                  "hover:opacity-100",
                  "duration-100"
                )}
                style={{
                  border: "2px solid white",
                  padding: 1,
                  borderRadius: "0.24rem",
                }}
              />
            ) : (
              <img
                width={36}
                src={src}
                alt={alt}
                className={clsx(
                  "opacity-30",
                  "hover:opacity-100",
                  "duration-100"
                )}
              />
            )}
          </a>
        ))}
      </div>

      {/* Page navigation buttons */}
      <button
        className={clsx("absolute bottom-6 left-10")}
        onClick={() => canGoPrevious && dispatch(previousPage())}
        disabled={!canGoPrevious}
      >
        <div
          className={`${canGoPrevious ? "nav-button-hover" : ""}`}
          style={{
            maskImage: `url(${leftArrow})`,
            ...navButtonStyle(canGoPrevious),
          }}
        />
      </button>

      <button
        className={clsx("absolute bottom-6 right-10")}
        onClick={() => canGoNext && dispatch(nextPage())}
        disabled={!canGoNext}
      >
        <div
          className={`${canGoNext ? "nav-button-hover" : ""}`}
          style={{
            maskImage: `url(${rightArrow})`,
            ...navButtonStyle(canGoNext),
          }}
        />
      </button>
    </div>
  );
};

export default DisplayScreen;
