import React, { useEffect, useRef } from "react";

interface Square {
  row: number;
  col: number;
  element: HTMLDivElement;
}

const GAP = 20;
const SQUARE_SIZE = 150;
const FADE_FACTOR = 0.004;
const UPDATE_INTERVAL = 1000 / 30; // 30 FPS
const BORDER_STYLE = "1px solid rgb(50, 50, 100)";

const Background: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const squaresRef = useRef<Square[]>([]);
  const mousePosRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();
  const lastUpdateRef = useRef<number>(0);

  const initSquares = () => {
    const container = containerRef.current;
    if (!container) return;

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const numRows = Math.ceil(containerHeight / SQUARE_SIZE);
    const numCols = Math.ceil(containerWidth / SQUARE_SIZE);

    // Create grid container
    const gridContainer = document.createElement("div");
    gridContainer.style.cssText = `
      display: grid;
      grid-template-columns: repeat(${numCols}, ${SQUARE_SIZE}px);
      grid-template-rows: repeat(${numRows}, ${SQUARE_SIZE}px);
      width: 100%;
      height: 100%;
      gap: ${GAP}px;
    `;
    container.appendChild(gridContainer);

    // Create squares
    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        const element = document.createElement("div");
        element.style.cssText = `
          width: ${SQUARE_SIZE}px;
          height: ${SQUARE_SIZE}px;
          background: none;
          border: ${BORDER_STYLE};
          border-radius: 10px;
          opacity: 0;
          will-change: opacity;
        `;
        gridContainer.appendChild(element);
        squaresRef.current.push({ row, col, element });
      }
    }
  };

  useEffect(() => {
    initSquares();
    window.addEventListener("resize", initSquares);
    return () => window.removeEventListener("resize", initSquares);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (timestamp - lastUpdateRef.current < UPDATE_INTERVAL) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }
      lastUpdateRef.current = timestamp;

      const { x: mouseX, y: mouseY } = mousePosRef.current;

      // Update opacity of each square based on distance from mouse
      squaresRef.current.forEach((square) => {
        const element = square.element;
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distance = Math.sqrt(
          Math.pow(centerX - mouseX, 2) + Math.pow(centerY - mouseY, 2)
        );

        element.style.opacity = `${Math.min(
          0.4,
          Math.exp(-distance * FADE_FACTOR)
        )}`;
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden bg-zinc-950"
      style={{ zIndex: -1 }}
    />
  );
};

export default Background;
