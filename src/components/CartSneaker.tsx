import Image from 'next/image'
import { Minus } from 'phosphor-react'
import { Sneaker, useCart } from '../contexts/CartContext'
import { formatPrice } from '../functions/formatPrice'

interface CartSneakerProps {
  sneaker: Sneaker
}

export function CartSneaker({ sneaker }: CartSneakerProps) {
  const { removeItemFromCart } = useCart()

  const formattedPrice = formatPrice({
    price: sneaker.price,
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

      <div className="flex items-start gap-5">
        <div className="flex flex-col">
          <h2 className="text-base font-medium text-neutral-500">
            {sneaker.name}
          </h2>

          <p className="text-lg font-bold">{formattedPrice}</p>
        </div>

        <button>
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
