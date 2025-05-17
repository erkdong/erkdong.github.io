import { useInView } from "motion/react";
import { useEffect, useRef } from "react";
import raf from "raf";

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
  const ref = useRef<HTMLParagraphElement>(null);
  const frameRef = useRef<number>();
  const startTimeRef = useRef<number>();
  const displayedTextRef = useRef("");
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      // Wait for the start delay to pass before starting to type
      const elapsed = timestamp - startTimeRef.current;
      if (elapsed < startDelay) {
        frameRef.current = raf(animate);
        return;
      }

      const adjustedElapsed = elapsed - startDelay;
      const charsToShow = Math.floor(adjustedElapsed / speed);
      const newText = text.substring(0, charsToShow);

      if (newText !== displayedTextRef.current) {
        displayedTextRef.current = newText;
        if (ref.current) {
          ref.current.innerHTML = newText;
        }
      }

      if (charsToShow < text.length) {
        frameRef.current = raf(animate);
      }
    };

    frameRef.current = raf(animate);

    return () => {
      if (frameRef.current) {
        raf.cancel(frameRef.current);
      }
    };
  }, [text, speed, isInView, startDelay]);

  return <p ref={ref} className={className}></p>;
};

export default TypewriterText;
