import ContentWindow from "@/components/ContentWindow";
import TypewriterText from "@/components/TypewriterText";
import clsx from "clsx";
import googleLogo from "@/assets/google.svg";
import hyperloopLogo from "@/assets/hyperloop.svg";
import yahooLogo from "@/assets/yahoo.svg";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { TYPEWRITER_SPEED, rgbWithAlpha } from "@/const";

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

  const [selectedCompany, setSelectedCompany] = useState<Company>(
    Company.GOOGLE
  );

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
      <div className={clsx("w-3/4 h-[80%]", "flex flex-col", "items-center")}>
        {/* Introduction */}
        <ContentWindow className={clsx("px-7 py-6")}>
          <TypewriterText
            text="Here are the companies I've worked at — click to see what I was up to."
            className={clsx("text-xl")}
            speed={TYPEWRITER_SPEED}
          />
        </ContentWindow>

        {/* Company cards */}
        <div className={clsx("flex", "gap-10", "my-5")}>
          {companies.map((company) => (
            <div
              key={company.type}
              className={clsx(
                "company-card",
                "flex",
                "items-center",
                "px-10 py-2",
                "cursor-pointer",
                "transition-transform",
                "duration-100",
                "rounded-lg"
              )}
              style={{
                border: `2px solid ${theme.palette.primary.light}`,
                backgroundColor: rgbWithAlpha(theme.palette.primary.dark, 0.5),
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
                <img width={50} src={company.logo} alt={company.label} />
                <p className={clsx("text-xl")}>{company.label}</p>
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
