import { useInView } from "motion/react";
import { useState, useEffect, useRef } from "react";

interface TypewriterProps {
  text: string;
  startDelay?: number; // How long to wait before starting to type in ms
  speed?: number; // Time per character in ms
  className?: string;
}

const TypewriterText: React.FC<TypewriterProps> = ({
  text,
  startDelay = 0,
  speed = 20,
  className = "",
}) => {
  const ref = useRef(null);
  const frameRef = useRef<number>();
  const startTimeRef = useRef<number>();
  const isInView = useInView(ref, { once: true });
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!isInView) return;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      // Wait for the start delay to pass before starting to type.
      const elapsed = timestamp - startTimeRef.current;
      if (elapsed < startDelay) {
        frameRef.current = requestAnimationFrame(animate);
        return;
      }

      const adjustedElapsed = elapsed - startDelay;
      const charsToShow = Math.floor(adjustedElapsed / speed);
      const newText = text.substring(0, charsToShow);

      if (newText !== displayedText) {
        setDisplayedText(newText);
      }

      if (charsToShow < text.length) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [text, speed, isInView, startDelay]);

  return (
    <p
      ref={ref}
      className={className}
      // We want to respect any tags in the text such as <i>. It's okay to
      // dangerously set because the text is coming from us, not anyone else.
      dangerouslySetInnerHTML={{ __html: displayedText }}
    ></p>
  );
};

export default TypewriterText;
