import clsx from "clsx";

interface BackgroundImageProps {
  imageUrl: string;
  opacity?: number;
}

const BackgroundImage = ({
  imageUrl,
  opacity = 0.03,
}: BackgroundImageProps) => {
  return (
    <div
      className={clsx(
        "absolute top-0 left-0 w-full h-full",
        "bg-cover bg-center bg-no-repeat"
      )}
      style={{
        backgroundImage: `url(${imageUrl})`,
        opacity,
      }}
    />
  );
};

export default BackgroundImage;
