import clsx from "clsx";
import { DialogProps } from "./index";
import BaseDialog from "./BaseDialog";
import { Button, Divider, useTheme } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";

const DESIGN_URL =
  "https://github.com/erkdong/erkdong.github.io?tab=readme-ov-file#dewey";

const DeweyDialog = ({ open, onClose }: DialogProps) => {
  const theme = useTheme();

  return (
    <BaseDialog title="Dewey" open={open} onClose={onClose}>
      <div className={clsx("flex flex-col")}>
        <p className={clsx("text-lg")}>
          A big problem with note-taking is the time and effort that goes into
          structuring and organizing them so you're able to look back over them
          later. This is especially true for random misc information. Think:
        </p>

        <ul className={clsx("list-disc", "text-lg", "pl-8", "mt-2")}>
          <li>Your friend's unit number</li>
          <li>The Airbnb's lock code</li>
          <li>When you got your last physical</li>
          <li>Where she got those cool glasses from</li>
          <li>The names of literally everybody</li>
        </ul>

        <Divider
          color={theme.palette.secondary.light}
          sx={{
            my: 3,
          }}
        />

        <p className={clsx("text-lg")}>
          Dewey solves this by using an LLM to read your notes and tell you
          exactly what you're looking for.
        </p>

        <p className={clsx("w-3/5", "text-md mt-8", "text-right self-end")}>
          ...at least it used to, until certain popular LLM apps added memory to
          their chat models and rendered Dewey obsolete :')
        </p>

        <div className={clsx("self-end", "flex gap-4")}>
          <Button
            variant="contained"
            color="secondary"
            endIcon={<LaunchIcon />}
            onClick={() => {
              window.open("https://www.heydewey.com", "_blank");
            }}
            sx={{
              "&:hover": {
                color: theme.palette.secondary.light,
              },
              width: "fit-content",
              mt: 4,
            }}
          >
            Try it out
          </Button>

          <Button
            variant="outlined"
            color="secondary"
            endIcon={<LaunchIcon />}
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

export default DeweyDialog;
