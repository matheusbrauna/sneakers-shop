import Link from "next/link";
import { Sneaker } from "../../../contexts/CartContext";
import { formatPrice } from "../../../utils/formatPrice";
import { BlurImage } from "../../../components/BlurImage";

interface HomeSneakerCardProps {
  sneaker: Sneaker;
}

export function HomeSneakerCard({ sneaker }: HomeSneakerCardProps) {
  const formattedPrice = formatPrice({
    price: sneaker.price,
  });

  return (
    <Link
      href={`/products/${sneaker.slug}`}
      className="grid gap-5 keen-slider__slide place-content-center"
    >
      <div className="relative w-full h-[23.3125rem]">
        <BlurImage
          src={sneaker.image.url}
          alt={sneaker.name}
          priority
          quality={100}
        />
      </div>

      <div className="flex justify-between">
        <div className="grid gap-2">
          <h2 className="text-base font-bold leading-5 text-neutral-900">
            {sneaker.name}
          </h2>

          <span className="text-xs leading-4 text-neutral-600">
            {sneaker.category?.name}
          </span>
        </div>

        <p className="text-sm font-bold leading-5 text-neutral-900">
          {formattedPrice}
        </p>
      </div>
    </Link>
  );
}
