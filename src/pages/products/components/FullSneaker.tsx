import Image from 'next/image'
import { Button } from '../../../components/Button'
import { Sneaker, useCart } from '../../../contexts/CartContext'
import { formatPrice } from '../../../functions/formatPrice'
import { promotionPrice } from '../../../functions/promotionPrice'

interface FullSneakerProps {
  sneaker: Sneaker
}

export function FullSneaker({ sneaker }: FullSneakerProps) {
  const { addItemToCart, checkIfItemAlreadyExists } = useCart()

  const itemAlreadyInCart = checkIfItemAlreadyExists(sneaker.id)

  const formattedPrice = formatPrice({ price: sneaker.price })
  const formattedPromotionPrice = promotionPrice({
    price: sneaker.price,
    discount: 30,
    format: true,
  })

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
        <span className="block mb-2 text-xs font-bold uppercase sm:text-sm text-neutral-500">
          {sneaker.brand?.name}
        </span>

        <h1 className="mb-5 text-xl font-bold uppercase sm:text-2xl text-neutral-900 md:text-4xl">
          {sneaker.name}
        </h1>

        <p className="mt-6 mb-6 text-sm leading-relaxed sm:text-base text-neutral-900 md:text-xl">
          {sneaker.description}
        </p>

        <p className="text-xl font-bold text-neutral-900 md:text-2xl">
          {formattedPrice}
        </p>

        <p className="mt-2 text-base font-bold line-through opacity-50 text-neutral-900">
          {formattedPromotionPrice}
        </p>

        <div className="flex gap-6 mt-6">
          <Button
            variant="black"
            disabled={itemAlreadyInCart}
            onClick={() => addItemToCart(sneaker)}
          >
            {itemAlreadyInCart
              ? 'Produto já está no carrinho'
              : 'Adicionar ao carrinho'}
          </Button>
        </div>
      </div>
    </div>
  )
}
