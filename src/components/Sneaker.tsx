import Image from 'next/image'
import Link from 'next/link'
import { Star } from 'phosphor-react'
import { Sneaker } from '../contexts/CartContext'
import { formatPrice } from '../utils/formatPrice'
import { promotionPrice } from '../utils/promotionPrice'
import { Button } from './Button'

type SneakerProps = {
  sneaker: Sneaker
}

export function Sneaker({ sneaker }: SneakerProps) {
  const formattedPrice = formatPrice({ price: sneaker.price })

  const formattedPromotionPrice = promotionPrice({
    price: sneaker.price,
    discount: 30,
    format: true,
  })

  return (
    <div className="grid gap-2 justify-self-center place-content-center">
      <Image
        src={sneaker.image.url}
        alt={sneaker.name}
        width={373}
        height={373}
        quality={100}
        placeholder="empty"
      />

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
  )
}
