import { useAppDispatch, useAppSelector } from "@/app/hooks";
import {
  DisplayScreenPage,
  nextPage,
  previousPage,
} from "./display-screen-page-slice";
import LandingPage from "./pages/LandingPage";
import { useTheme } from "@mui/material/styles";

import rightArrow from "/img/arrow-right.png";
import leftArrow from "/img/arrow-left.png";
import clsx from "clsx";
import WorkPage from "./pages/WorkPage";

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

  return (
    <div className="w-full h-full">
      {renderPage()}

      {/* Page navigation buttons */}
      <button
        className={clsx("absolute bottom-6 left-10")}
        onClick={() => canGoPrevious && dispatch(previousPage())}
        disabled={!canGoPrevious}
      >
        <div
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
