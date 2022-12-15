/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { ArrowRight, Star } from 'phosphor-react'
import { Button } from './Button'

type SneakerProps = {
  sneaker: {
    id: string
    title: string
    description: string
    price: number
    isNew: boolean
    type: 'normal' | 'trending' | 'featured'
    imgUrl: string
  }
}

export function Sneaker({ sneaker }: SneakerProps) {
  return (
    <div className="max-w-[280px]">
      <div className="relative object-cover w-full overflow-hidden rounded-lg h-[280px]">
        <img
          src={`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${sneaker.imgUrl}`}
          alt={sneaker.title}
        />
      </div>

      <h2 className="mt-3 text-xl font-bold text-gray-900 lg:text-2xl">
        {sneaker.title}
      </h2>

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
        {sneaker.price}
      </span>

      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-gray-900">{sneaker.price}</span>
      </div>

      <p className="mt-2 mb-4 overflow-hidden text-sm font-bold text-gray-700 lg:text-base whitespace-nowrap text-ellipsis">
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
