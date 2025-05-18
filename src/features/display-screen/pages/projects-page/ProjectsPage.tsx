import clsx from "clsx";

import futurbeats from "@/assets/futurbeats.svg";
import fiverr from "@/assets/fiverr.svg";
import dewey from "@/assets/dewey.png";
import twitch from "@/assets/twitch.svg";
import minesweeper from "@/assets/minesweeper.svg";
import Project from "@/const/project";
import ProjectCard from "./ProjectCard";
import Grid from "@mui/material/Grid2";
import ContentWindow from "@/components/ContentWindow";
import TypewriterText from "@/components/TypewriterText";
import { TYPEWRITER_SPEED } from "@/const";
import { useState } from "react";
import DeweyDialog from "./dialogs/DeweyDialog";
import { Dialogs } from "./dialogs";
import StoreAlertsDialog from "./dialogs/StoreAlertsDialog";
import MinesweeperDialog from "./dialogs/MinesweeperDialog";

const ProjectsPage = () => {
  const [selectedDialog, setSelectedDialog] = useState<Dialogs | null>(null);

  const projects: Project[] = [
    {
      title: "FuturBeats",
      img: futurbeats,
      description: "Landing page for the FuturBeats VST plugin.",
      onClick: () => {
        window.open("https://futurbeats.com/", "_blank");
      },
    },
    {
      title: "Rafael",
      img: fiverr,
      description: "Personal website for my client Rafael.",
      onClick: () => {
        window.open(
          "https://d2vgxf9eqbi5p.cloudfront.net/rafael/index.html",
          "_blank"
        );
      },
    },
    {
      title: "Dewey",
      img: dewey,
      description: "Manage the chaos of the too-much-information age.",
      onClick: () => setSelectedDialog(Dialogs.DEWEY),
    },
    {
      title: "Twitch store alerts",
      img: twitch,
      description:
        "Real time livestream alerts when a purchase is made from the streamer's online store.",
      onClick: () => setSelectedDialog(Dialogs.STORE_ALERTS),
    },
    {
      title: "FPS Minesweeper",
      img: minesweeper,
      description:
        "From my school days, but I'm quite proud of this one. Minesweeper reimagined as an FPS shooter!",
      onClick: () => setSelectedDialog(Dialogs.MINESWEEPER),
    },
  ];

  return (
    <div
      className={clsx(
        "relative",
        "w-full h-full",
        "flex items-center justify-center"
      )}
    >
      <div
        className={clsx(
          "w-3/4 h-[80%]",
          "flex flex-col",
          "items-center",
          "gap-12"
        )}
      >
        {/* Introduction */}
        <ContentWindow className={clsx("px-7 py-6")}>
          <TypewriterText
            text="These are some of the projects I've worked on."
            className={clsx("text-xl")}
            speed={TYPEWRITER_SPEED}
          />
        </ContentWindow>

        <Grid
          container
          spacing={5}
          sx={{
            width: "65vw",
            height: "80%",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              entryDelay={index * 0.1 + 0.4}
            />
          ))}
        </Grid>
      </div>

      <DeweyDialog
        open={selectedDialog === Dialogs.DEWEY}
        onClose={() => setSelectedDialog(null)}
      />
      <StoreAlertsDialog
        open={selectedDialog === Dialogs.STORE_ALERTS}
        onClose={() => setSelectedDialog(null)}
      />
      <MinesweeperDialog
        open={selectedDialog === Dialogs.MINESWEEPER}
        onClose={() => setSelectedDialog(null)}
      />
    </div>
  );
};

export default ProjectsPage;
