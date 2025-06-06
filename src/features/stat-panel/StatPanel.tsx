import EducationAndExperience from "@/features/stat-panel/EducationAndExperience";
import OctagonContainer from "@/components/OctagonContainer";
import clsx from "clsx";

import profileImg from "@/assets/profile.jpg";
import Skills from "@/features/stat-panel/Skills";
import { BORDER_THICKNESS, CUT_SIZE } from "@/const";

const StatPanel = () => {
  return (
    <div
      className={clsx("flex flex-col", "items-center", "w-2/5 max-w-80")}
      style={{
        gap: BORDER_THICKNESS,
      }}
    >
      {/* Profile picture */}
      <OctagonContainer
        className={clsx("bg-zinc-950", "w-4/5 max-w-64")}
        style={{ aspectRatio: "1/1" }}
        cut={CUT_SIZE}
      >
        <img src={profileImg} alt="profile" />
      </OctagonContainer>

      {/* Education and experience */}
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

      {/* Skills */}
      <OctagonContainer
        className={clsx("bg-zinc-950", "w-full")}
        cut={CUT_SIZE}
      >
        <Skills />
      </OctagonContainer>
    </div>
  );
};

export default StatPanel;
