interface FormatPriceProps {
  locale?: string
  style?: string
  currency?: string
  price: number
}

export function formatPrice({
  locale = 'pt-br',
  currency = 'BRL',
  style = 'currency',
  price,
}: FormatPriceProps) {
  const formattedPrice = new Intl.NumberFormat(locale, {
    style: style,
    currency: currency.toUpperCase(),
  }).format(price)

  return formattedPrice
}
