import React, { useEffect, useRef } from "react";

interface Square {
  row: number;
  col: number;
  element: HTMLDivElement;
}

const GAP = 10;
const SQUARE_SIZE = 150;
const FADE_FACTOR = 0.004;
const UPDATE_INTERVAL = 1000 / 30; // 30 FPS
const BORDER_STYLE = "2px solid rgb(50, 50, 100)";
const MIN_SCALE = 0.85;
const SCALE_FACTOR = 0.009;

const Background: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const squaresRef = useRef<Square[]>([]);
  const gridContainerRef = useRef<HTMLDivElement | null>(null);
  const mousePosRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();
  const lastUpdateRef = useRef<number>(0);

  const createSquare = (row: number, col: number) => {
    const element = document.createElement("div");
    element.style.cssText = `
      width: ${SQUARE_SIZE}px;
      height: ${SQUARE_SIZE}px;
      background: none;
      border: ${BORDER_STYLE};
      border-radius: 10px;
      opacity: 0;
      will-change: opacity, transform;
      transition: transform .2s ease-in-out;
      transform-origin: center;
    `;
    return { row, col, element };
  };

  const updateGrid = () => {
    const container = containerRef.current;
    if (!container) return;

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const numRows = Math.ceil(containerHeight / SQUARE_SIZE) + 1;
    const numCols = Math.ceil(containerWidth / SQUARE_SIZE) + 1;

    // Create or update grid container
    if (!gridContainerRef.current) {
      gridContainerRef.current = document.createElement("div");
      container.appendChild(gridContainerRef.current);
    }

    gridContainerRef.current.style.cssText = `
      display: grid;
      grid-template-columns: repeat(${numCols}, ${SQUARE_SIZE}px);
      grid-template-rows: repeat(${numRows}, ${SQUARE_SIZE}px);
      width: 100%;
      height: 100%;
      gap: ${GAP}px;
    `;

    // Calculate how many squares we need
    const currentSquares = squaresRef.current.length;
    const neededSquares = numRows * numCols;

    // Add or remove squares as needed
    if (currentSquares < neededSquares) {
      // Add new squares
      for (let i = currentSquares; i < neededSquares; i++) {
        const row = Math.floor(i / numCols);
        const col = i % numCols;
        const square = createSquare(row, col);
        gridContainerRef.current.appendChild(square.element);
        squaresRef.current.push(square);
      }
    } else if (currentSquares > neededSquares) {
      // Remove excess squares
      const excessSquares = currentSquares - neededSquares;
      for (let i = 0; i < excessSquares; i++) {
        const square = squaresRef.current.pop();
        if (square) {
          gridContainerRef.current.removeChild(square.element);
        }
      }
    }

    // Update row and column indices for all squares
    squaresRef.current.forEach((square, index) => {
      square.row = Math.floor(index / numCols);
      square.col = index % numCols;
    });
  };

  // Listen for window resize and adjust the grid
  useEffect(() => {
    updateGrid();
    const handleResize = () => {
      updateGrid();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Listen for mouse move and update the mouse ref's position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animate the squares
  useEffect(() => {
    const animate = (timestamp: number) => {
      if (timestamp - lastUpdateRef.current < UPDATE_INTERVAL) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }
      lastUpdateRef.current = timestamp;

      const { x: mouseX, y: mouseY } = mousePosRef.current;

      squaresRef.current.forEach((square) => {
        const element = square.element;
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distance = Math.sqrt(
          Math.pow(centerX - mouseX, 2) + Math.pow(centerY - mouseY, 2)
        );

        // Calculate opacity and scale based on distance
        const opacity = Math.min(0.4, Math.exp(-distance * FADE_FACTOR));
        const scale = Math.max(
          MIN_SCALE,
          1 - Math.exp(-distance * SCALE_FACTOR)
        );

        element.style.opacity = `${opacity}`;
        element.style.transform = `scale(${scale})`;
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
      className="fixed inset-0 overflow-hidden bg-zinc-950 -z-50"
    />
  );
};

export default Background;
