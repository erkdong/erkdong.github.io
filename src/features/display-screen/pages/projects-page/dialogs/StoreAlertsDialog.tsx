import { Button, Divider, useTheme } from "@mui/material";
import clsx from "clsx";
import BaseDialog from "./BaseDialog";
import { DialogProps } from "./index";
import storeAlertsGif from "@/assets/store-alert.gif";
import LaunchIcon from "@mui/icons-material/Launch";

interface StoreAlertsDialogProps extends DialogProps {}

const DESIGN_URL =
  "https://github.com/erkdong/erkdong.github.io?tab=readme-ov-file#twitch-store-alerts";

const StoreAlertsDialog = ({ open, onClose }: StoreAlertsDialogProps) => {
  const theme = useTheme();

  return (
    <BaseDialog open={open} onClose={onClose} title="Twitch Store Alerts">
      <div className={clsx("flex gap-8")}>
        {/* Left column - GIF */}
        <div className={clsx("w-5/12", "flex items-center justify-center")}>
          <img
            src={storeAlertsGif}
            alt="Store Alerts Demo"
            className={clsx("w-full", "rounded-lg")}
          />
        </div>

        {/* Right column - Text content */}
        <div className={clsx("w-2/3", "flex flex-col gap-6")}>
          <p className={clsx("text-2xl")}>
            Twitch streamer who also sells merchandise on an online store.
          </p>

          <Divider color={theme.palette.secondary.light} />

          <p className={clsx("text-lg")}>
            If they are streaming at the same time that a user purchases from
            their online store, a visual alert shows up on the livestream for
            all to see.
          </p>

          <div className="flex-grow" />

          <Button
            variant="outlined"
            color="secondary"
            endIcon={<LaunchIcon />}
            className={clsx("self-end")}
            onClick={() => {
              window.open(DESIGN_URL, "_blank");
            }}
            sx={{
              "&:hover": {
                color: theme.palette.secondary.light,
              },
              width: "fit-content",
              mt: 4,
            }}
          >
            System Design
          </Button>
        </div>
      </div>
    </BaseDialog>
  );
};

export default StoreAlertsDialog;
