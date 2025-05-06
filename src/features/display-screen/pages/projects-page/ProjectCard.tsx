import Project from "@/const/project";
import clsx from "clsx";
import { useTheme } from "@mui/material/styles";
import { withAlpha } from "@/const";
import { motion } from "framer-motion"; // ✅ Import motion

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const theme = useTheme();

  return (
    // Outer border
    <motion.div
      whileHover={{ opacity: 1 }}
      initial={{ opacity: 0.4 }}
      transition={{ duration: 0.05 }}
      className={clsx("flex items-center justify-center", "border-2", "p-2")}
      style={{
        width: "16vw",
        maxWidth: "270px",
        height: "16vw",
        maxHeight: "270px",
        borderColor: theme.palette.primary.main,
      }}
    >
      {/* Inner border */}
      <div
        className={clsx(
          "relative",
          "flex items-center justify-center",
          "w-full h-full",
          "border-4",
          "p-8",
          "cursor-pointer"
        )}
        style={{
          borderColor: theme.palette.primary.main,
          background: `radial-gradient(circle, ${withAlpha(
            theme.palette.primary.light,
            0.1
          )} 50%, ${theme.palette.primary.main} 100%)`,
        }}
        onClick={project.onClick}
      >
        {/* Project image */}
        <img src={project.img} alt={project.title} className={clsx("h-full")} />

        {/* Project title */}
        <p className={clsx("absolute bottom-2 left-2", "text-lg")}>
          {project.title}
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
