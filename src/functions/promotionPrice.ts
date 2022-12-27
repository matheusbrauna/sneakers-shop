import { formatPrice } from './formatPrice'

interface PromotionPriceProps {
  price: number
  discount: number
  format?: boolean
}

export function promotionPrice({
  price,
  discount,
  format = false,
}: PromotionPriceProps) {
  const priceInPercent = price / 100

  const subtractionValue = priceInPercent * discount

  const priceFormatted = price - subtractionValue

  if (format === true) return formatPrice({ price: priceFormatted })

  return priceFormatted
}
