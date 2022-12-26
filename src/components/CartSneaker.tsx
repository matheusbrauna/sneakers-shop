import Image from 'next/image'
import { Minus } from 'phosphor-react'
import { Sneaker, useCart } from '../contexts/CartContext'

interface CartSneakerProps {
  sneaker: Sneaker
}

export function CartSneaker({ sneaker }: CartSneakerProps) {
  const { removeItemFromCart } = useCart()

  return (
    <div key={sneaker.id} className="flex gap-2">
      <div className="relative w-20 h-16 overflow-hidden rounded">
        <Image
          src={sneaker.image.url}
          alt={sneaker.name}
          fill
          quality={100}
          className="object-cover object-center"
          placeholder="blur"
          blurDataURL={sneaker.image.url}
        />
      </div>

      <div className="relative">
        <h2 className="text-base font-medium text-blue-500">{sneaker.name}</h2>

        <p className="text-lg font-bold">{sneaker.price}</p>

        <button className="absolute top-0 -right-10">
          <Minus
            size={24}
            weight="bold"
            onClick={() => removeItemFromCart(sneaker.id)}
          />
        </button>
      </div>
    </div>
  )
}
