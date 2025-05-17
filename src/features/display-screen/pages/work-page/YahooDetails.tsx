import clsx from "clsx";
import CompanyTextElement from "./CompanyTextElement";
import { useSequentialDelay } from "@/app/hooks";

const YahooDetails = () => {
  const delays = useSequentialDelay();

  return (
    <div className={clsx("")}>
      <CompanyTextElement text="Yahoo" className="text-2xl" />
      <CompanyTextElement
        text="Intern summer 2015 & 2016"
        className="text-md mt-1"
        delay={delays.next()}
      />

      <CompanyTextElement
        text="Web Video Player"
        className="text-xl mt-4"
        delay={delays.next()}
      />
      <CompanyTextElement
        text="It all began here as a small sprout on the web video player team 🌱"
        className="text-md mt-4"
        delay={delays.next()}
      />
      <CompanyTextElement
        text="My most exciting project was integrating the video player into Yahoo
          Sports Reel (sadly discontinued sometime in 2024). This was a video
          player experience on the Sports home page that showed recent
          highlights and clips from the sports world."
        className="text-md mt-4"
        delay={delays.next()}
      />
    </div>
  );
};

export default YahooDetails;
