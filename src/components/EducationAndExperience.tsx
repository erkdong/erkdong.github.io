import clsx from "clsx";
import { useTheme } from "@mui/material/styles";

import googleLogo from "/img/google.svg";
import hyperloopLogo from "/img/hyperloop.svg";
import yahooLogo from "/img/yahoo.svg";
import uscLogo from "/img/usc.svg";

const BORDER_RADIUS = "40px";

const companyLogos = [
  { src: googleLogo, label: "Google", subheader: "(6 yrs)" },
  { src: hyperloopLogo, label: "Hyperloop One", subheader: "(3 yrs)" },
  { src: yahooLogo, label: "Yahoo", subheader: "(intern)" },
];

const withAlpha = (themeColor: string, alpha: number) =>
  themeColor.replace("rgb(", "rgba(").replace(")", `, ${alpha})`);

const EducationAndExperience = () => {
  const theme = useTheme();

  return (
    <div
      className={clsx(
        "bg-zinc-950",
        "w-full",
        "px-4 py-6",
        "flex flex-col flex-grow",
        "items-center text-center"
      )}
      style={{ borderRadius: BORDER_RADIUS }}
    >
      {/* Education */}
      <div className={clsx("flex flex-col", "items-center", "p-1")}>
        <img src={uscLogo} alt="USC Logo" style={{ filter: "invert(80%)" }} />
        <p className="my-2 text-xl">University of Southern California</p>
        <p className="text-lg" style={{ color: theme.palette.secondary.main }}>
          B.S. Computer Science
        </p>
        <p className="text-lg" style={{ color: theme.palette.secondary.main }}>
          M.S. Computer Science
        </p>
      </div>

      {/* Industry Experience */}
      <div
        className={clsx("relative", "mt-6 px-4 py-2", "w-full")}
        style={{
          background: `linear-gradient(to bottom, ${withAlpha(
            theme.palette.primary.main,
            0
          )}, ${withAlpha(theme.palette.primary.main, 0.5)}, ${withAlpha(
            theme.palette.primary.main,
            0
          )})`,
        }}
      >
        <p className="text-xl mb-6">Industry Experience</p>

        <div className={clsx("flex flex-col", "w-full", "gap-4")}>
          {companyLogos.map(({ src, label, subheader }) => (
            <div className={clsx("flex items-center", "gap-4")}>
              <div
                className={clsx(
                  "flex justify-center items-center",
                  "p-3",
                  "border-2 rounded-full"
                )}
                style={{
                  borderColor: theme.palette.primary.main,
                  aspectRatio: "1/1",
                }}
              >
                <img
                  src={src}
                  width={40}
                  height={40}
                  style={{ filter: "brightness(1)" }}
                />
              </div>
              <div className={clsx("flex flex-col", "text-left")}>
                <p className="text-md">{label}</p>
                <p
                  className="text-sm"
                  style={{ color: theme.palette.secondary.main }}
                >
                  {subheader}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationAndExperience;
