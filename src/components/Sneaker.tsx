import Link from "next/link";
import { Star } from "phosphor-react";
import type { Sneaker as ISneaker } from "../contexts/CartContext";
import { formatPrice } from "../utils/formatPrice";
import { promotionPrice } from "../utils/promotionPrice";
import { Button } from "./Button";
import { BlurImage } from "./BlurImage";

type SneakerProps = {
  sneaker: ISneaker;
};

export function Sneaker({ sneaker }: SneakerProps) {
  const formattedPrice = formatPrice({ price: sneaker.price });

  const formattedPromotionPrice = promotionPrice({
    price: sneaker.price,
    discount: 30,
    format: true,
  });

  return (
    <div className="grid gap-2 justify-self-center place-content-center">
      <div className="relative w-full h-96">
        <BlurImage
          src={sneaker.image.url}
          alt={sneaker.name}
          quality={100}
          priority
        />
      </div>

      <span className="mt-2 text-xs font-bold text-neutral-600">
        {sneaker.brand?.name}
      </span>

      <h2 className="text-base font-bold uppercase text-neutral-900">
        {sneaker.name}
      </h2>

      <div className="flex gap-1">
        <Star size={16} weight="fill" className="text-yellow-500" />
        <Star size={16} weight="fill" className="text-yellow-500" />
        <Star size={16} weight="fill" className="text-yellow-500" />
        <Star size={16} weight="fill" className="text-yellow-500" />
        <Star size={16} weight="fill" className="text-yellow-500" />
      </div>

      <div className="flex items-center justify-between mt-2">
        <div>
          <p className="text-xs font-bold line-through text-neutral-500">
            {formattedPromotionPrice}
          </p>

          <p className="text-base font-bold text-neutral-900">
            {formattedPrice}
          </p>
        </div>

        <Link href={`/products/${sneaker.slug}`}>
          <Button variant="black">Ver produto</Button>
        </Link>
      </div>
    </div>
  );
}
