import clsx from "clsx";

import futurbeats from "/img/futurbeats.svg";
import fiverr from "/img/fiverr.svg";
import dewey from "/img/dewey.png";
import twitch from "/img/twitch.svg";
import minesweeper from "/img/minesweeper.svg";
import Project from "@/const/project";
import ProjectCard from "./ProjectCard";
import Grid from "@mui/material/Grid2";
import ContentWindow from "@/components/ContentWindow";
import TypewriterText from "@/components/TypewriterText";
import { TYPEWRITER_SPEED } from "@/const";

const ProjectsPage = () => {
  const projects: Project[] = [
    {
      title: "FuturBeats",
      img: futurbeats,
      description: "Landing page for the FuturBeats VST plugin.",
      onClick: () => {
        window.open(
          "https://d2vgxf9eqbi5p.cloudfront.net/futurbeats/index.html",
          "_blank"
        );
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
      onClick: () => {},
    },
    {
      title: "Twitch store alerts",
      img: twitch,
      description:
        "Real time livestream alerts when a purchase is made from the streamer's online store.",
      onClick: () => {},
    },
    {
      title: "FPS Minesweeper",
      img: minesweeper,
      description:
        "From my school days, but I'm quite proud of this one. Minesweeper reimagined as an FPS shooter!",
      onClick: () => {},
    },
  ];

  return (
    <div className={clsx("w-full h-full", "flex items-center justify-center")}>
      <div
        className={clsx(
          "w-3/4 h-5/6",
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
          spacing={10}
          sx={{
            width: "65vw",
            height: "80%",
            justifyContent: "center",
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default ProjectsPage;
