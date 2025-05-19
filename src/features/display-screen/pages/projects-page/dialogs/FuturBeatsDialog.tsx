import { DialogProps } from "./index";
import BaseDialog from "./BaseDialog";
import clsx from "clsx";
import { Button, Divider, useTheme } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";

const FuturBeatsDialog = ({ open, onClose }: DialogProps) => {
  const theme = useTheme();

  return (
    <BaseDialog title="FuturBeats" open={open} onClose={onClose}>
      <div className={clsx("flex flex-col")}>
        <p className={clsx("text-lg")}>
          This client developed a plugin for music production, and needed a web
          platform featuring:
        </p>

        <ul className={clsx("list-disc", "text-lg", "pl-8", "mt-2")}>
          <li>A download page for getting the plugin</li>
          <li>Account creation, login, and management</li>
          <li>
            An e-commerce store for purchasing credits to be used in the plugin
          </li>
        </ul>

        <Divider
          color={theme.palette.secondary.light}
          sx={{
            my: 3,
          }}
        />

        <p className={clsx("text-xl")}>
          Most of the functionality is still in development, but the landing
          page is cool enough to show off!
        </p>

        <Button
          variant="outlined"
          color="secondary"
          endIcon={<LaunchIcon />}
          className={clsx("self-end")}
          onClick={() => {
            window.open("https://futurbeats.com/", "_blank");
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

export default FuturBeatsDialog;
