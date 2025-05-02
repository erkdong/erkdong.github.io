import clsx from "clsx";
import { useTheme } from "@mui/material/styles";

import googleLogo from "/img/google.svg";
import hyperloopLogo from "/img/hyperloop.svg";
import yahooLogo from "/img/yahoo.svg";
import uscLogo from "/img/usc.svg";
import { gradientBackground } from "@/const";

const companyLogos = [
  { src: googleLogo, label: "Google", subheader: "6 years" },
  { src: hyperloopLogo, label: "Hyperloop One", subheader: "3 years" },
  { src: yahooLogo, label: "Yahoo", subheader: "1 year" },
];

const EducationAndExperience = () => {
  const theme = useTheme();

  const mainColor = theme.palette.primary.main;

  return (
    <div
      className={clsx(
        "py-3",
        "flex flex-col justify-between",
        "items-center text-center"
      )}
    >
      {/* Education */}
      <div
        className={clsx(
          "w-full",
          "flex flex-col",
          "items-center",
          "my-2 py-3 px-4"
        )}
        style={gradientBackground(mainColor)}
      >
        <img
          src={uscLogo}
          alt="USC Logo"
          className={clsx("max-w-32")}
          style={{ width: "10vh", filter: "invert(80%)" }}
        />

        <p className="my-2 text-xl">University of Southern California</p>
        <p className="text-md" style={{ color: theme.palette.secondary.main }}>
          B.S. Computer Science
        </p>
        <p className="text-md" style={{ color: theme.palette.secondary.main }}>
          M.S. Computer Science
        </p>
      </div>

      {/* Industry Experience */}
      <div
        className={clsx("w-full", "relative", "my-2 py-3 px-4")}
        style={gradientBackground(mainColor)}
      >
        <p className="text-xl mb-6">Industry Experience</p>

        <div className={clsx("flex flex-col", "w-full", "gap-3", "px-8")}>
          {companyLogos.map(({ src, label, subheader }) => (
            <div key={src} className={clsx("flex items-center", "gap-4")}>
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
                <p className="text-lg">{label}</p>
                <p
                  className="text-md"
                  style={{ color: theme.palette.secondary.main }}
                >
                  <i>{subheader}</i>
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
