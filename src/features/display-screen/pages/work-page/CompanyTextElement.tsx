import TypewriterText from "@/components/TypewriterText";
import { TYPEWRITER_SPEED } from "@/const";

const CompanyTextElement = ({
  text,
  className,
}: {
  text: string;
  className: string;
}) => {
  return (
    <TypewriterText
      text={text}
      className={className}
      speed={TYPEWRITER_SPEED}
    />
  );
};

export default CompanyTextElement;
