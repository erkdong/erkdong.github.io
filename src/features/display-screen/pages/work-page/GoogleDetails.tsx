import clsx from "clsx";
import CompanyTextElement from "./CompanyTextElement";
import { useSequentialDelay } from "@/app/hooks";

const GoogleDetails = () => {
  const paragraphSpacing = " mt-3 ";
  const delays = useSequentialDelay();

  return (
    <div className={clsx("")}>
      {/* Google */}
      <CompanyTextElement text="Google" className="text-2xl" />
      <CompanyTextElement
        text="Software Engineer, Full Time 2019 - 2024"
        className="text-md mt-1"
        delay={delays.next()}
      />

      {/* Cloud Marketplace */}
      <CompanyTextElement
        text="Cloud Marketplace (2021-2024)"
        className="text-xl mt-4"
        delay={delays.next()}
      />
      <CompanyTextElement
        text="Full stack engineer working on Cloud's marketplace platform, the platform enabling businesses to list and sell products/services to enterprise customers."
        className="text-md mt-4"
        delay={delays.next()}
      />
      <CompanyTextElement
        text="Joined as one of the earliest engineers on a new team, playing a key role in shaping the team's direction through technical leadership, project ownership, and mentorship."
        className={`text-md ${paragraphSpacing}`}
        delay={delays.next()}
      />
      <ul className={clsx("ml-8", paragraphSpacing, "list-disc")}>
        <CompanyTextElement
          text="<li>Accelerated deal cycles by launching a comprehensive suite of buyer/seller actions, improving UX and reducing turnaround time.</li>"
          className="text-md"
          delay={delays.next()}
        />
        <CompanyTextElement
          text="<li>Built and launched PDF exports for enterprise deals, developing a backend service to generate downloadable files; the feature quickly reached 100+ weekly downloads.</li>"
          className="text-md"
          delay={delays.next()}
        />
        <CompanyTextElement
          text="<li>Drove cross-functional initiatives spanning engineering, product, and design, to deliver features end-to-end with minimal oversight.</li>"
          className="text-md"
          delay={delays.next()}
        />
      </ul>

      {/* Google Ads */}
      <CompanyTextElement
        text="Google Ads (2019-2021)"
        className="text-xl mt-4"
        delay={delays.next()}
      />
      <CompanyTextElement
        text="Full stack engineer working on advertiser-facing tools that helped users plan and allocate ad spend."
        className="text-md mt-4"
        delay={delays.next()}
      />
      <CompanyTextElement
        text="I began my Google career here, rapidly learning and growing thanks to a complex, established product, an abundance of impactful work, and great mentorship. Towards the end of my time on the team, I was working fairly independently on larger projects."
        className={`text-md ${paragraphSpacing}`}
        delay={delays.next()}
      />
      <CompanyTextElement
        text="One such project delivered a high-visibility integration of our product with Search Ads 360, extending our reach to advertisers on other platforms (e.g. Yahoo, Bing, etc.)."
        className={`text-md ${paragraphSpacing}`}
        delay={delays.next()}
      />
    </div>
  );
};

export default GoogleDetails;
