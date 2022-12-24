import Image from 'next/image'
import { Star } from 'phosphor-react'
import { BlackButton } from './Buttons/BlackButton'

type SneakerProps = {
  sneaker?: {
    id: string
    name: string
    description: string
    price: number
    slug: string
    image: {
      url: string
    }
    brand?: {
      name: string
    } | null
  }
}

export function Sneaker({ sneaker }: SneakerProps) {
  return (
    <div className="grid gap-2 justify-self-center place-content-center">
      <Image
        src={sneaker?.image.url ?? ''}
        alt={sneaker?.name ?? ''}
        width={373}
        height={373}
        quality={100}
      />

      <span className="mt-2 text-xs font-bold text-neutral-600">
        {sneaker?.brand?.name}
      </span>

      <h2 className="text-base font-bold uppercase text-neutral-900">
        {sneaker?.name}
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
            {new Intl.NumberFormat('pt-br', {
              style: 'currency',
              currency: 'BRL',
            }).format(sneaker?.price ?? 0)}
          </p>

          <p className="text-base font-bold text-neutral-900">
            {new Intl.NumberFormat('pt-br', {
              style: 'currency',
              currency: 'BRL',
            }).format(sneaker?.price ?? 0)}
          </p>
        </div>

        <BlackButton href={`/products/${sneaker?.slug}`}>
          Ver produto
        </BlackButton>
      </div>
    </div>
  )
}
