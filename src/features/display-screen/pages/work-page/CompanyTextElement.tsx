import TypewriterText from "@/components/TypewriterText";
import { TYPEWRITER_SPEED } from "@/const";

const CompanyTextElement = ({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className: string;
  delay?: number;
}) => {
  return (
    <TypewriterText
      text={text}
      className={className}
      speed={TYPEWRITER_SPEED}
      startDelay={delay}
    />
  );
};

export default CompanyTextElement;
