import React, { useRef, useEffect, useState } from "react";

type OctagonContainerProps = {
  cut?: number; // Length in pixels of the 45° corner cut
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

const OctagonContainer: React.FC<OctagonContainerProps> = ({
  cut = 20,
  className,
  style,
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      const el = containerRef.current;
      if (el) {
        const { width, height } = el.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    updateSize();

    const resizeObserver = new ResizeObserver(updateSize);
    if (containerRef.current) resizeObserver.observe(containerRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  const { width, height } = dimensions;

  // Ensure cuts don't exceed half of width or height
  const maxCut = Math.min(width, height) / Math.SQRT2 / 2;
  const clampedCut = Math.min(cut, maxCut);
  const diagCut = clampedCut / Math.SQRT2;

  const polygonPoints = [
    `${diagCut}px 0px`,
    `${width - diagCut}px 0px`,
    `${width}px ${diagCut}px`,
    `${width}px ${height - diagCut}px`,
    `${width - diagCut}px ${height}px`,
    `${diagCut}px ${height}px`,
    `0px ${height - diagCut}px`,
    `0px ${diagCut}px`,
  ].join(", ");

  const combinedStyle: React.CSSProperties = {
    clipPath: `polygon(${polygonPoints})`,
    ...style,
  };

  return (
    <div ref={containerRef} className={className} style={combinedStyle}>
      {children}
    </div>
  );
};

export default OctagonContainer;
