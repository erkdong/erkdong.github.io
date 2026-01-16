import clsx from "clsx";

import futurbeats from "@/assets/futurbeats.svg";
import hungyhungy from "@/assets/hungyhungy.png";
import forgetmenot from "@/assets/forgetmenot.png";
import owesa from "@/assets/owesa.svg";
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
import FuturBeatsDialog from "./dialogs/FuturBeatsDialog";
import OwesaDialog from "./dialogs/OwesaDialog";

const ProjectsPage = () => {
  const [selectedDialog, setSelectedDialog] = useState<Dialogs | null>(null);

  const projects: Project[] = [
    {
      title: "ForgetMeNot",
      img: forgetmenot,
      onClick: () =>
        window.open(
          "https://forget-me-not.co",
          "_blank",
          "noopener,noreferrer"
        ),
    },
    {
      title: "HungyHungy",
      img: hungyhungy,
      onClick: () =>
        window.open("https://hungyhungy.com", "_blank", "noopener,noreferrer"),
    },
    {
      title: "Owesa",
      img: owesa,
      onClick: () => setSelectedDialog(Dialogs.OWESA),
    },
    {
      title: "FuturBeats",
      img: futurbeats,
      onClick: () => setSelectedDialog(Dialogs.FUTURBEATS),
    },
    {
      title: "Dewey",
      img: dewey,
      onClick: () => setSelectedDialog(Dialogs.DEWEY),
    },
    {
      title: "Twitch store alerts",
      img: twitch,
      onClick: () => setSelectedDialog(Dialogs.STORE_ALERTS),
    },
    {
      title: "FPS Minesweeper",
      img: minesweeper,
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
          "gap-8 xl:gap-12"
        )}
      >
        {/* Introduction */}
        <ContentWindow className={clsx("px-7 py-6")}>
          <TypewriterText
            text="Cool projects below!"
            className={clsx("text-xl")}
            speed={TYPEWRITER_SPEED}
          />
        </ContentWindow>

        <Grid
          container
          spacing={{ xs: 3, lg: 5 }}
          sx={{
            width: "70vw",
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

      <FuturBeatsDialog
        open={selectedDialog === Dialogs.FUTURBEATS}
        onClose={() => setSelectedDialog(null)}
      />
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
      <OwesaDialog
        open={selectedDialog === Dialogs.OWESA}
        onClose={() => setSelectedDialog(null)}
      />
    </div>
  );
};

export default ProjectsPage;
