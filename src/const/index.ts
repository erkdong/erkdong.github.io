export const withAlpha = (themeColor: string, alpha: number) =>
  themeColor.replace("rgb(", "rgba(").replace(")", `, ${alpha})`);

// Linear gradient from top (transparent) to middle (50% opacity) to bottom
// (transparent)
export const gradientBackground = (color: string) => ({
  background: `linear-gradient(to bottom, ${withAlpha(
    color,
    0
  )} 10%, ${withAlpha(color, 0.45)}, ${withAlpha(color, 0)} 90%)`,
});

export const BORDER_THICKNESS = "24px";
export const CUT_SIZE = 50;
