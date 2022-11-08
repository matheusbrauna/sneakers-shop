import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Star } from 'phosphor-react'
import { IProduct } from '../contexts/CartContext'
import { Button } from './Button'

type SneakerProps = {
  sneaker: IProduct
}

export function Sneaker({ sneaker }: SneakerProps) {
  return (
    <div className="max-w-[280px]">
      <div className="relative object-cover w-full overflow-hidden rounded-lg h-[280px]">
        <Image
          src={sneaker.imageUrl}
          alt={sneaker.name}
          fill
          placeholder="blur"
          blurDataURL={sneaker.imageUrl}
        />
      </div>

      <h2 className="mt-3 text-2xl font-bold text-gray-900">{sneaker.name}</h2>

      <div className="flex items-center gap-2 mt-2">
        <div className="flex">
          <Star size={8} weight="fill" className="text-yellow-500" />
          <Star size={8} weight="fill" className="text-yellow-500" />
          <Star size={8} weight="fill" className="text-yellow-500" />
          <Star size={8} weight="fill" className="text-yellow-500" />
          <Star size={8} weight="fill" className="text-yellow-500" />
        </div>

        <span className="text-xs font-bold">(1 avaliação)</span>
      </div>

      <span className="mt-2 text-xs font-bold text-gray-700 line-through">
        {sneaker.defaultPrice}
      </span>

      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-gray-900">
          {sneaker.promotionPrice}
        </span>
      </div>

      <p className="mt-2 mb-4 overflow-hidden text-base font-bold text-gray-700 whitespace-nowrap text-ellipsis">
        {sneaker.description}
      </p>

      <Button asChild>
        <Link href={`/products/${sneaker.id}`}>
          Comprar agora <ArrowRight size={24} />
        </Link>
      </Button>
    </div>
  )
}
