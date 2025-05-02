import { gradientBackground } from "@/const";
import { useTheme } from "@mui/material/styles";
import clsx from "clsx";

const Skills = () => {
  const theme = useTheme();
  const mainColor = theme.palette.primary.main;

  const skills = [
    ["react", "typescript", "html/css/js"],
    ["python", "nodejs", "[no]sql"],
    ["aws", "cloudformation", "ci/cd"],
  ];

  return (
    <div
      className={clsx("flex flex-col", "w-full h-full", "p-8", "gap-4")}
      style={gradientBackground(mainColor)}
    >
      {/* Header and divider */}
      <div className={clsx("flex flex-col", "gap-2")}>
        <p className="text-xl">Skills & Expertise</p>

        <div
          className={clsx("w-full", "mb-3", "border-2 border-dashed")}
          style={{ borderColor: mainColor }}
        />
      </div>

      {/* For each stack area */}
      {skills.map((area) => (
        <div key={area.join("-")} className={clsx("flex", "gap-2")}>
          {/* For each skill in the area */}
          {area.map((skill) => (
            <div
              key={skill}
              className={clsx("border-2", "py-1 px-2", "rounded-full")}
              style={{ borderColor: theme.palette.primary.light }}
            >
              <p className="text-sm">{skill}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Skills;
