import ContentWindow from "@/components/ContentWindow";
import TypewriterText from "@/components/TypewriterText";
import clsx from "clsx";
import googleLogo from "/img/google.svg";
import hyperloopLogo from "/img/hyperloop.svg";
import yahooLogo from "/img/yahoo.svg";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { TYPEWRITER_SPEED, withAlpha } from "@/const";

import "./WorkPage.css";
import GoogleDetails from "./GoogleDetails";
import HyperloopDetails from "./HyperloopDetails";
import YahooDetails from "./YahooDetails";

enum Company {
  GOOGLE = "GOOGLE",
  HYPERLOOP = "HYPERLOOP",
  YAHOO = "YAHOO",
}

const WorkPage = () => {
  const theme = useTheme();

  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);

  const companies = [
    {
      type: Company.GOOGLE,
      logo: googleLogo,
      label: "Google",
    },
    {
      type: Company.HYPERLOOP,
      logo: hyperloopLogo,
      label: "Hyperloop One",
    },
    {
      type: Company.YAHOO,
      logo: yahooLogo,
      label: "Yahoo",
    },
  ];

  const handleCompanyClick = (companyType: Company) => {
    setSelectedCompany(companyType);
  };

  return (
    <div
      className={clsx(
        "w-full h-full",
        "flex items-center justify-center",
        "pb-10"
      )}
    >
      <div className={clsx("w-3/4 h-5/6", "flex flex-col", "items-center")}>
        {/* Introduction */}
        <ContentWindow className={clsx("px-7 py-6")}>
          <TypewriterText
            text="Here are some of the companies I've worked at — click to learn more about what I did there."
            className={clsx("text-xl")}
            speed={TYPEWRITER_SPEED}
          />
        </ContentWindow>

        {/* Company cards */}
        <div className={clsx("flex", "gap-10", "my-8")}>
          {companies.map((company) => (
            <div
              key={company.type}
              className={clsx(
                "company-card",
                "flex",
                "items-center",
                "px-10 py-3",
                "cursor-pointer",
                "transition-transform",
                "duration-100",
                "rounded-lg"
              )}
              style={{
                border: `2px solid ${theme.palette.primary.light}`,
                backgroundColor: withAlpha(theme.palette.primary.dark, 0.5),
              }}
              onClick={() => handleCompanyClick(company.type)}
            >
              <div
                className={clsx(
                  "flex items-center",
                  "gap-4",
                  "overflow-scroll"
                )}
                // Skew in the opposite direction to counteract the skew of
                // the parent
                style={{ transform: "skewX(30deg)" }}
              >
                <img width={60} src={company.logo} alt={company.label} />
                <p className={clsx("text-2xl")}>{company.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Company details */}
        <ContentWindow
          className={clsx("px-7 py-8 flex-grow", "overflow-hidden")}
        >
          <div className={clsx("overflow-scroll")}>
            {selectedCompany === Company.GOOGLE && <GoogleDetails />}
            {selectedCompany === Company.HYPERLOOP && <HyperloopDetails />}
            {selectedCompany === Company.YAHOO && <YahooDetails />}
          </div>
        </ContentWindow>
      </div>
    </div>
  );
};

export default WorkPage;
