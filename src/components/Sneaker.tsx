import sneakerImg from '../assets/sneaker1.png'
import Image from 'next/image'
import { Star } from 'phosphor-react'
import Link from 'next/link'

type SneakerProps = {
  sneaker?: {
    id: string
    title: string
    description: string
    price: number
    isNew: boolean
    type: 'normal' | 'trending' | 'featured'
    imgUrl: string
  }
}

export function Sneaker({}: SneakerProps) {
  return (
    <div className="grid gap-2 justify-self-center place-content-center">
      <Image src={sneakerImg} alt="" width={373} height={373} />

      <h2 className="text-base font-bold text-neutral-900">
        Nike Blazer Young 2022
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
            R$ 1.000,00
          </p>

          <p className="text-base font-bold text-neutral-900">R$ 1.000,00</p>
        </div>

        <Link
          href="/products/1"
          className="h-10 px-5 text-sm font-bold leading-10 bg-neutral-900 text-neutral-50"
        >
          Ver produto
        </Link>
      </div>
    </div>
  )
}
