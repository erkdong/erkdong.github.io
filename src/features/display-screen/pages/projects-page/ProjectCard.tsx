import Project from "@/const/project";
import clsx from "clsx";
import { useTheme } from "@mui/material/styles";
import { rgbWithAlpha } from "@/const";
import { motion } from "framer-motion";
import { Box } from "@mui/material";

interface ProjectCardProps {
  project: Project;
  entryDelay?: number;
}

const ProjectCard = ({ project, entryDelay = 0 }: ProjectCardProps) => {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.4, delay: entryDelay, ease: "circOut" }}
    >
      {/* Outer border */}
      <motion.div
        whileHover={{ opacity: 1 }}
        initial={{ opacity: 0.4 }}
        transition={{ duration: 0.05 }}
        className={clsx(
          "flex items-center justify-center",
          "border-2",
          "p-2",
          "cursor-pointer"
        )}
        style={{
          width: "16vw",
          maxWidth: "250px",
          height: "16vw",
          maxHeight: "250px",
          borderColor: theme.palette.primary.main,
        }}
        onClick={project.onClick}
      >
        {/* Inner border */}
        <Box
          className={clsx(
            "relative",
            "flex items-center justify-center",
            "w-full h-full",
            "border-4",
            "p-8"
          )}
          sx={{
            borderColor: theme.palette.primary.main,
            background: `radial-gradient(circle, ${rgbWithAlpha(
              theme.palette.primary.light,
              0.1
            )} 50%, ${theme.palette.primary.main} 100%)`,
          }}
        >
          {/* Project image */}
          <img
            src={project.img}
            alt={project.title}
            className={clsx("h-full")}
          />

          {/* Project title */}
          <p className={clsx("absolute bottom-1 left-2", "text-lg")}>
            {project.title}
          </p>
        </Box>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
