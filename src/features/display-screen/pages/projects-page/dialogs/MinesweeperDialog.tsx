import { DialogProps } from ".";
import { Dialog, IconButton, useTheme, Slide } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { TransitionProps } from "@mui/material/transitions";
import { forwardRef } from "react";
import clsx from "clsx";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MinesweeperDialog = ({ open, onClose }: DialogProps) => {
  const theme = useTheme();

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={onClose}
      slots={{ transition: Transition }}
      sx={{
        "& .MuiDialog-paper": {
          bgcolor: "#09090b", // tailwind zinc-950
          border: `4px solid ${theme.palette.primary.main}`,
        },
      }}
    >
      <div
        className={clsx("w-full", "flex flex-col items-center", "pt-16 gap-12")}
      >
        <p
          className={clsx("text-2xl", "text-center")}
          style={{ color: theme.palette.secondary.light }}
        >
          From my school days, but I'm quite proud of this one. Minesweeper
          reimagined as an FPS shooter!
        </p>

        <iframe width={960} height={600} src="/minesweeper/index.html" />
      </div>

      <IconButton
        onClick={onClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: theme.palette.primary.light,
          "&:hover": {
            color: theme.palette.secondary.light,
          },
        }}
        size="large"
      >
        <CloseIcon fontSize="large" />
      </IconButton>
    </Dialog>
  );
};

export default MinesweeperDialog;
