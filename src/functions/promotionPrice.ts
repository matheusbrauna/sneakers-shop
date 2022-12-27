import { formatPrice } from './formatPrice'

interface PromotionPriceProps {
  price: number
  discount: number
}

export function promotionPrice({ price, discount }: PromotionPriceProps) {
  const priceInPercent = price / 100

  const subtractionValue = priceInPercent * discount

  const priceFormatted = price - subtractionValue

  return formatPrice({ price: priceFormatted })
}
