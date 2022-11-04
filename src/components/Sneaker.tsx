import Image from 'next/image'
import { ArrowRight, Star } from 'phosphor-react'

interface SneakerProps {
  sneakerData: {
    id: string
    title: string
    description: string
    imageUrl: string
    defaultPrice: string
    promotionPrice: string
  }
}

export function Sneaker({ sneakerData }: SneakerProps) {
  return (
    <div className="max-w-[280px]">
      <div className="relative object-cover w-full overflow-hidden rounded-lg h-[280px]">
        <Image src={sneakerData.imageUrl} alt="" fill />
      </div>

      <h2 className="mt-3 text-2xl font-bold text-gray-900">
        {sneakerData.title}
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
        {sneakerData.defaultPrice}
      </span>

      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-gray-900">
          {sneakerData.promotionPrice}
        </span>
      </div>

      <p className="mt-2 mb-4 overflow-hidden text-base font-bold text-gray-700 whitespace-nowrap text-ellipsis">
        {sneakerData.description}
      </p>

      <button className="flex items-center justify-between w-full h-16 gap-4 px-6 font-bold text-gray-100 bg-blue-500 border-2 border-blue-500 rounded-lg">
        Comprar agora <ArrowRight size={24} />
      </button>
    </div>
  )
}
