import { rgbGradientBackground } from "@/const";
import { useTheme } from "@mui/material/styles";
import clsx from "clsx";
import "./Skills.css";

const skills = [
  "react",
  "angular",
  "typescript",
  "html/css/js",
  "python",
  "nodejs",
  "[no]sql",
  "aws",
  "cloudformation",
  "ci/cd",
];

const Skills = () => {
  const theme = useTheme();
  const mainColor = theme.palette.primary.main;

  const divider = (
    <div
      className={clsx(
        "fade-out-edges-horizontal",
        "self-center",
        "w-3/4",
        "border-2 border-dashed"
      )}
      style={{ borderColor: mainColor }}
    />
  );

  return (
    <div
      className={clsx("flex flex-col", "w-full h-full", "py-8", "gap-4")}
      style={rgbGradientBackground(mainColor)}
    >
      {divider}

      <div
        className={clsx(
          "overflow-hidden",
          "relative",
          "fade-out-edges-horizontal"
        )}
      >
        <div
          className={clsx("flex", "gap-2", "min-w-max")}
          style={{
            animation: "left-scroll 12s linear infinite",
          }}
        >
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={`${skill}-${index}`}
              className={clsx("border-2", "py-1 px-2", "rounded-full")}
              style={{ borderColor: theme.palette.primary.light }}
            >
              <p className="text-md">{skill}</p>
            </div>
          ))}
        </div>
      </div>

      {divider}
    </div>
  );
};

export default Skills;
