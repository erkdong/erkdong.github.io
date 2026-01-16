import clsx from "clsx";
import { useTheme } from "@mui/material/styles";

import googleLogo from "@/assets/google.svg";
import hyperloopLogo from "@/assets/hyperloop.svg";
import yahooLogo from "@/assets/yahoo.svg";
import uscLogo from "@/assets/usc.svg";
import { rgbGradientBackground } from "@/const";

const companyLogos = [
  { src: googleLogo, label: "6 years" },
  { src: hyperloopLogo, label: "3 years" },
  { src: yahooLogo, label: "1 year" },
];

const EducationAndExperience = () => {
  const theme = useTheme();

  const mainColor = theme.palette.primary.main;

  return (
    <div
      className={clsx("h-full", "flex flex-col", "items-center text-center")}
    >
      {/* Education */}
      <div
        className={clsx(
          "w-full",
          "flex flex-col xl:flex-row items-center gap-4",
          "my-2 py-3 px-4"
        )}
        style={rgbGradientBackground(mainColor)}
      >
        <img
          src={uscLogo}
          alt="USC Logo"
          className={clsx("max-w-24")}
          style={{ width: "15vw", filter: "invert(80%)" }}
        />

        <div className={clsx("flex flex-col", "text-left")}>
          <p className="my-2 text-lg text-center xl:text-left">
            University of Southern California
          </p>
          <p
            className="text-sm text-center xl:text-left"
            style={{ color: theme.palette.secondary.main }}
          >
            B.S. Computer Science
          </p>
          <p
            className="text-sm text-center xl:text-left"
            style={{ color: theme.palette.secondary.main }}
          >
            M.S. Computer Science
          </p>
        </div>
      </div>

      {/* Industry Experience */}
      <div
        className={clsx(
          "w-full",
          "relative",
          "flex flex-col items-center justify-center",
          "py-3 px-4"
        )}
        style={rgbGradientBackground(mainColor)}
      >
        <p className="text-lg mb-4">Industry Experience</p>

        <div
          className={clsx(
            "flex justify-center",
            "w-full",
            "gap-2 xl:gap-5",
            "mb-2"
          )}
        >
          {companyLogos.map(({ src, label }) => (
            <div
              key={src}
              className={clsx("flex flex-col items-center", "gap-2")}
            >
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
                  style={{ maxWidth: "unset" }}
                />
              </div>
              <div className={clsx("flex flex-col", "text-left")}>
                <p className="text-md">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationAndExperience;
