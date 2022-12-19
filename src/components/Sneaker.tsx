import sneakerImg from '../assets/sneaker1.png'
import Image from 'next/image'
import { Star } from 'phosphor-react'

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
    <div className="p-2 max-w-max">
      <Image src={sneakerImg} alt="" width={373} height={373} />

      <h2 className="mt-3 text-lg font-bold text-gray-900 lg:text-xl">
        Nike Blazer Young 2022
      </h2>

      <div className="flex items-center gap-2 mt-2">
        <div className="flex">
          <Star size={16} weight="fill" className="text-yellow-500" />
          <Star size={16} weight="fill" className="text-yellow-500" />
          <Star size={16} weight="fill" className="text-yellow-500" />
          <Star size={16} weight="fill" className="text-yellow-500" />
          <Star size={16} weight="fill" className="text-yellow-500" />
        </div>
      </div>

      <div className="mt-2">
        <p className="text-xs font-bold text-gray-900 line-through opacity-50">
          R$ 1.000,00
        </p>

        <p className="text-base font-bold text-gray-900">R$ 1.000,00</p>
      </div>
    </div>
  )
}
