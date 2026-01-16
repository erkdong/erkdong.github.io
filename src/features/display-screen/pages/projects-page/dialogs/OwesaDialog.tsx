import clsx from "clsx";
import { DialogProps } from "./index";
import BaseDialog from "./BaseDialog";
import { Button, Divider, useTheme } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";

const OwesaDialog = ({ open, onClose }: DialogProps) => {
  const theme = useTheme();

  return (
    <BaseDialog title="Owesa" open={open} onClose={onClose}>
      <div className={clsx("flex flex-col")}>
        <p className={clsx("text-lg")}>
          A business networking platform featuring content feeds, interest
          groups, messaging, and job postings.
        </p>

        <p className={clsx("text-lg mt-2")}>
          I inherited an AI-generated frontend codebase that was functional but
          lacking in UI/UX.
        </p>

        <Divider
          color={theme.palette.secondary.light}
          sx={{
            my: 3,
          }}
        />

        <p className={clsx("text-xl")}>
          My work was to refine and polish the end-to-end user experience across
          the entire platform, redesigning and rebuilding components, layouts,
          and user flows.
        </p>

        <Button
          variant="outlined"
          color="secondary"
          endIcon={<LaunchIcon />}
          className={clsx("self-end")}
          onClick={() => {
            window.open("https://owesa.com/", "_blank");
          }}
          sx={{
            "&:hover": {
              color: theme.palette.secondary.light,
            },
            width: "fit-content",
            mt: 4,
          }}
        >
          Check It Out
        </Button>
      </div>
    </BaseDialog>
  );
};

export default OwesaDialog;
