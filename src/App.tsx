import Background from "./features/background/Background";

import "./App.css";
import clsx from "clsx";
import { useTheme } from "@mui/material/styles";

import OctagonContainer from "./components/OctagonContainer";
import DisplayScreen from "./features/display-screen/DisplayScreen";
import StatPanel from "./features/stat-panel/StatPanel";
import { BORDER_THICKNESS, CUT_SIZE } from "./const";
import { Box, useMediaQuery } from "@mui/material";

import chromeDino from "./assets/chrome-dino.png";

function App() {
  const theme = useTheme();

  const isSmallScreen = useMediaQuery("(max-width: 1000px)");

  return isSmallScreen ? (
    <Box
      className={clsx(
        "w-screen h-screen",
        "flex flex-col",
        "pt-36 px-12",
        "gap-4"
      )}
      sx={{
        backgroundColor: "primary.dark",
        color: "secondary.light",
      }}
    >
      <img
        src={chromeDino}
        className="w-1/2"
        style={{
          filter: "invert(1)",
        }}
      />
      <p className="text-5xl">:(</p>
      <p className="text-2xl">
        My website is best viewed on a larger screen. Please open it on desktop
        or tablet!
      </p>
    </Box>
  ) : (
    <div className="min-h-screen bg-transparent">
      <div
        className={clsx("w-screen h-screen", "absolute top-0 left-0", "flex")}
        style={{
          padding: BORDER_THICKNESS,
          gap: BORDER_THICKNESS,
          backgroundColor: theme.palette.primary.dark,
          color: theme.palette.secondary.light,
        }}
      >
        <OctagonContainer
          className={clsx("relative", "h-full", "overflow-hidden", "flex-grow")}
          cut={CUT_SIZE}
        >
          {/* Trapezoid thing with title name */}
          <div
            className={clsx(
              "absolute",
              "-top-2 left-1/2 -translate-x-1/2",
              "z-20",
              "flex items-center justify-center"
            )}
            style={{
              width: "45vw",
              height: "60px",
              backgroundColor: theme.palette.primary.dark,
              clipPath: "polygon(0% 0%, 100% 0%, 80% 100%, 20% 100%)",
            }}
          >
            <p className="text-4xl">ERIC DONG</p>
          </div>

          <DisplayScreen />

          <Background />
        </OctagonContainer>

        <StatPanel />
      </div>
    </div>
  );
}

export default App;
