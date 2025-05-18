import { Backdrop, IconButton, useTheme } from "@mui/material";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import clsx from "clsx";
import { DialogProps } from "./index";
import { AnimatePresence, motion } from "framer-motion";

interface BaseDialogProps extends DialogProps {
  title: string;
  children: React.ReactNode;
  id?: string;
  style?: React.CSSProperties;
}

const BaseDialog = ({
  open,
  onClose,
  title,
  children,
  id = "",
  style = {},
}: BaseDialogProps) => {
  const theme = useTheme();

  const initialYScale = 0.02;

  return (
    <Backdrop
      sx={{
        color: "#fff",
        zIndex: 1,
        position: "absolute",
        width: "100%",
      }}
      open={open}
      onClick={onClose}
    >
      <div
        id={id}
        className={clsx(
          "absolute top-1/2 left-1/2",
          "-translate-x-1/2 -translate-y-1/2",
          "w-5/6"
        )}
        style={style}
      >
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{
                scaleX: 0,
                scaleY: initialYScale,
              }}
              animate={{
                scaleX: [0, 1, 1],
                scaleY: [initialYScale, initialYScale, 1],
              }}
              transition={{
                duration: 0.4,
                times: [0, 0.6, 1],
                ease: "circIn",
              }}
              exit={{
                scaleX: 0,
                scaleY: 0,
                transition: {
                  duration: 0.2,
                  ease: "circIn",
                },
              }}
              className={clsx(
                "w-full h-full",
                "py-8 px-10",
                "flex items-center justify-center",
                "text-white"
              )}
              style={{
                display: open ? "block" : "none",
                border: `2px solid ${theme.palette.primary.light}`,
                backgroundColor: theme.palette.primary.dark,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 0.1,
                  delay: 0.5,
                }}
              >
                {/* Header */}
                <p className={clsx("text-4xl", "mb-8")}>{title}</p>
                <div className={clsx("absolute top-0.5 right-0.5")}>
                  <IconButton
                    onClick={onClose}
                    sx={{
                      padding: 1,
                      color: theme.palette.primary.light,
                      "&:hover": {
                        color: theme.palette.secondary.light,
                      },
                    }}
                  >
                    <CancelPresentationIcon
                      sx={{ transform: "scaleY(1.1)" }}
                      fontSize="large"
                    />
                  </IconButton>
                </div>
                {children}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Backdrop>
  );
};

export default BaseDialog;
