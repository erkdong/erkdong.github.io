import Background from "./features/background/Background";

import "./App.css";
import clsx from "clsx";
import { useTheme } from "@mui/material/styles";

import EducationAndExperience from "./components/EducationAndExperience";
import Skills from "./components/Skills";
import OctagonContainer from "./components/OctagonContainer";

const BORDER_THICKNESS = "24px";
const CUT_SIZE = 50;

function App() {
  const theme = useTheme();

  // const PanelFrame = ({ children }: { children: React.ReactNode }) => (
  //   <div
  //     className={clsx("w-full h-full", "border-2")}
  //     style={{ borderColor: theme.palette.primary.main, borderRadius: "32px" }}
  //   >
  //     {children}
  //   </div>
  // );

  return (
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

          <Background />
        </OctagonContainer>

        <div
          className={clsx("flex flex-col", "w-1/5")}
          style={{
            gap: BORDER_THICKNESS,
          }}
        >
          {/* Profile picture */}
          <OctagonContainer
            className={clsx("bg-zinc-950", "w-full", "p-2")}
            style={{ aspectRatio: "1/1" }}
            cut={CUT_SIZE}
          >
            <p>profile picture</p>
          </OctagonContainer>

          <OctagonContainer
            className={clsx(
              "bg-zinc-950",
              "w-full",
              "flex-grow",
              "overflow-scroll"
            )}
            cut={CUT_SIZE}
          >
            <EducationAndExperience />
          </OctagonContainer>

          <OctagonContainer
            className={clsx("bg-zinc-950", "w-full")}
            cut={CUT_SIZE}
          >
            <Skills />
          </OctagonContainer>
        </div>
      </div>
    </div>
  );
}

export default App;
