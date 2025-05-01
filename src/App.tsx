import Background from "./features/background/Background";

import "./App.css";
import clsx from "clsx";
import { useTheme } from "@mui/material/styles";

import EducationAndExperience from "./components/EducationAndExperience";

const BORDER_RADIUS = "40px";
const BORDER_THICKNESS = "24px";

function App() {
  const theme = useTheme();

  const PanelFrame = ({ children }: { children: React.ReactNode }) => (
    <div
      className={clsx("w-full h-full", "border-2")}
      style={{ borderColor: theme.palette.primary.main, borderRadius: "32px" }}
    >
      {children}
    </div>
  );

  const panelClassName = clsx("bg-zinc-950", "w-full", "p-2");

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
        <div
          className={clsx("relative", "h-full", "overflow-hidden", "flex-grow")}
          style={{
            borderRadius: BORDER_RADIUS,
          }}
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
            <p className="text-3xl">ERIC DONG</p>
          </div>

          <Background />
        </div>

        <div
          className={clsx("flex flex-col", "w-1/5")}
          style={{
            gap: BORDER_THICKNESS,
          }}
        >
          {/* Profile picture */}
          <div
            className={panelClassName}
            style={{ borderRadius: BORDER_RADIUS, aspectRatio: "1/1" }}
          >
            <PanelFrame>
              <p>profile picture</p>
            </PanelFrame>
          </div>

          <EducationAndExperience />

          <div
            className={panelClassName}
            style={{ borderRadius: BORDER_RADIUS, aspectRatio: "1/1" }}
          >
            <p>profile picture</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
