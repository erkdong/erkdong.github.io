interface GradientBorderProps {
  leftColor: string;
  rightColor: string;
}

const GradientBorder = ({ leftColor, rightColor }: GradientBorderProps) => {
  return (
    <div className="w-full">
      <div
        style={{
          height: "2px",
          background: `linear-gradient(to right, ${leftColor}, ${rightColor})`,
        }}
      />
    </div>
  );
};

export default GradientBorder;
