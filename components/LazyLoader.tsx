import React, { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";
import NextImage, { ImageProps as NextImageProps } from "next/image"; // Import the NextImage component

interface LazyLoaderProps extends NextImageProps {
  hash: string;
}

const LazyLoader = (props: LazyLoaderProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);

  useEffect(() => {
    const img = new Image();
    img.src = props.src as string;
    img.onload = () => setIsImageLoaded(true);
  }, [props.src]);

  const transitionStyle = {
    transition: "opacity 1s ease-in-out",
    opacity: isImageLoaded ? 1 : 0,
  };

  return (
    <div className="relative h-full" style={{ ...transitionStyle }}>
      <Blurhash
        hash={props.hash}
        width="100%"
        height="100%"
        resolutionX={32}
        resolutionY={32}
        punch={1}
        className="animate-pulse"
      />
      {/* Replace the normal <img> with NextImage */}
      <NextImage
        {...props}
        width={1000}
        height={1000}
        className={`${
          props.className
        } fade_in absolute inset-0 h-full w-full object-cover opacity-${
          isImageLoaded
            ? "100"
            : "0 transition-opacity duration-1000 ease-in-out"
        }`}
      />
    </div>
  );
};

export default LazyLoader;
