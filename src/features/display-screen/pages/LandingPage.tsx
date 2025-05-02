import ContentWindow from "@/components/ContentWindow";
import TypewriterText from "@/components/TypewriterText";
import clsx from "clsx";
import { TYPEWRITER_SPEED } from "@/const";

const LandingPage = () => {
  return (
    <div className={clsx("w-full h-full", "flex items-center justify-center")}>
      <div className={clsx("w-3/4", "flex flex-col", "items-center")}>
        <ContentWindow className={clsx("px-7 py-10")}>
          <TypewriterText
            text="Hi there! I'm Eric, an app developer and freelance software
      engineer."
            className={clsx("text-3xl font-medium", "mb-4")}
            speed={TYPEWRITER_SPEED}
          />

          <TypewriterText
            text="With a background in computer science, I spent close to a decade
      working in the tech industry before leaving to work independently."
            className={clsx("text-lg")}
            startDelay={300}
            speed={TYPEWRITER_SPEED}
          />

          <TypewriterText
            text="Much of that time was spent at Google, giving me the skills to work
      effectively with others and develop high quality software."
            className={clsx("text-lg")}
            startDelay={600}
            speed={TYPEWRITER_SPEED}
          />
        </ContentWindow>
      </div>
    </div>
  );
};

export default LandingPage;
