import Image from 'next/image'
import { BlackButton } from '../../../components/Buttons/BlackButton'
import { Sneaker, useCart } from '../../../contexts/CartContext'
import { formatPrice } from '../../../functions/formatPrice'

interface FullSneakerProps {
  sneaker: Sneaker
}

export function FullSneaker({ sneaker }: FullSneakerProps) {
  const { addItemToCart, checkIfItemAlreadyExists } = useCart()

  const itemAlreadyInCart = checkIfItemAlreadyExists(sneaker.id)

  const formattedPrice = formatPrice({ price: sneaker.price })

  return (
    <div className="flex flex-col items-center justify-center gap-16 lg:flex-row">
      <Image
        src={sneaker.image.url}
        alt={sneaker.name}
        quality={100}
        width={443}
        height={426}
        placeholder="empty"
      />

      <div className="flex-1">
        <span className="block mb-2 text-sm font-bold uppercase text-neutral-500">
          {sneaker.brand?.name}
        </span>

        <h1 className="mb-5 text-3xl font-bold uppercase text-neutral-900 md:text-4xl">
          {sneaker.name}
        </h1>

        <p className="mt-6 mb-6 text-base leading-relaxed text-neutral-900 md:text-xl">
          {sneaker.description}
        </p>

        <p className="text-xl font-bold text-neutral-900 md:text-2xl">
          {formattedPrice}
        </p>

        <p className="mt-2 text-base font-bold line-through opacity-50 text-neutral-900">
          {formattedPrice}
        </p>

        <div className="flex gap-6 mt-6">
          <BlackButton
            disabled={itemAlreadyInCart}
            onClick={() => addItemToCart(sneaker)}
          >
            {itemAlreadyInCart
              ? 'Produto já está no carrinho'
              : 'Adicionar ao carrinho'}
          </BlackButton>
        </div>
      </div>
    </div>
  )
}
