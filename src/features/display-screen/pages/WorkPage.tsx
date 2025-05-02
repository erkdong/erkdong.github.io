import ContentWindow from "@/components/ContentWindow";
import TypewriterText from "@/components/TypewriterText";
import clsx from "clsx";
import googleLogo from "/img/google.svg";
import hyperloopLogo from "/img/hyperloop.svg";
import yahooLogo from "/img/yahoo.svg";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { withAlpha } from "@/const";

enum Company {
  GOOGLE = "GOOGLE",
  HYPERLOOP = "HYPERLOOP",
  YAHOO = "YAHOO",
}

const WorkPage = () => {
  const typewriterSpeed = 10;
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
    <div className={clsx("w-full h-full", "flex items-center justify-center")}>
      <div className={clsx("w-3/4", "flex flex-col", "items-center")}>
        <ContentWindow className={clsx("px-7 py-10")}>
          <TypewriterText
            text="Here are some of the companies I've worked at — click to learn more about what I did there."
            className={clsx("text-2xl")}
            speed={typewriterSpeed}
          />
        </ContentWindow>

        <div className={clsx("flex", "gap-8")}>
          {companies.map((company) => (
            <div
              key={company.type}
              className={clsx(
                "flex",
                "items-center",
                "px-6 py-3",
                "rounded-3xl",
                "cursor-pointer",
                "transition-all",
                "duration-200",
                "hover:scale-105",
                "active:scale-90"
              )}
              style={{
                border: `2px solid ${theme.palette.primary.light}`,
                backgroundColor: withAlpha(theme.palette.primary.dark, 0.5),
              }}
              onClick={() => handleCompanyClick(company.type)}
            >
              <img width={80} src={company.logo} alt={company.label} />
              <p className={clsx("text-3xl", "ml-4")}>{company.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
