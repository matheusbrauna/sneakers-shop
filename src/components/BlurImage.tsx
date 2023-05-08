import clsx from "clsx";
import Image, { ImageProps } from "next/image";
import { useState } from "react";

export function BlurImage({ src, alt, ...props }: ImageProps) {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      alt={alt}
      src={src}
      fill
      className={clsx(
        "duration-700 ease-in-out group-hover:opacity-75 object-cover object-center",
        {
          "scale-100 blur-lg grayscale": isLoading,
          "scale-100 blur-0 grayscale-0": !isLoading,
        }
      )}
      onLoadingComplete={() => setLoading(false)}
      {...props}
    />
  );
}
