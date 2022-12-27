import Image from 'next/image'
import { Minus } from 'phosphor-react'
import { Sneaker, useCart } from '../contexts/CartContext'
import { promotionPrice } from '../functions/promotionPrice'

interface CartSneakerProps {
  sneaker: Sneaker
}

export function CartSneaker({ sneaker }: CartSneakerProps) {
  const { removeItemFromCart } = useCart()

  const formattedPrice = promotionPrice({
    price: sneaker.price,
    discount: 30,
    format: true,
  })

  return (
    <div key={sneaker.id} className="flex gap-2">
      <Image
        width={80}
        height={80}
        src={sneaker.image.url}
        alt={sneaker.name}
        quality={100}
        placeholder="empty"
      />

      <div className="relative">
        <h2 className="text-base font-medium text-blue-500">{sneaker.name}</h2>

        <p className="text-lg font-bold">{formattedPrice}</p>

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
