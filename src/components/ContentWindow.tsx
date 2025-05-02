import clsx from "clsx";
import * as motion from "motion/react-client";
import { useTheme } from "@mui/material/styles";
import { withAlpha } from "../const";

interface ContentWindowProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const ContentWindow = ({ children, className, style }: ContentWindowProps) => {
  const theme = useTheme();

  return (
    <div
      className={clsx(
        "relative",
        "w-full",
        "flex flex-col",
        "gap-4",
        "transition-all",
        "duration-1000",
        "ease-in-out",
        className
      )}
      style={{
        border: `2px solid ${theme.palette.primary.light}`,
        borderRadius: "16px",
        backgroundColor: withAlpha(theme.palette.primary.dark, 0.5),
        ...style,
      }}
    >
      {children}

      <motion.span
        className={clsx("absolute", "bottom-3 right-6")}
        animate={{ opacity: [1, 0, 1] }}
        transition={{
          duration: 1,
          times: [0, 0.5, 1],
          repeat: Infinity,
          repeatType: "loop",
        }}
        style={{
          width: "20px",
          height: "4px",
          backgroundColor: theme.palette.primary.light,
        }}
      />
    </div>
  );
};

export default ContentWindow;
