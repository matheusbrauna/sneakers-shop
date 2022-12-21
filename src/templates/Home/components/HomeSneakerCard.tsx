import Image from 'next/image'
import Link from 'next/link'

interface HomeSneakerCardProps {
  sneaker: {
    id: string
    name: string
    price: number
    slug: string
    image: {
      url: string
    }
    category?: {
      name: string
    } | null
  }
}

export function HomeSneakerCard({ sneaker }: HomeSneakerCardProps) {
  return (
    <Link
      href={`/products/${sneaker.slug}`}
      className="grid gap-5 keen-slider__slide place-content-center"
    >
      <Image
        src={sneaker.image.url}
        alt={sneaker.name}
        width={373}
        height={373}
        quality={100}
      />

      <div className="flex justify-between">
        <div className="grid gap-2">
          <h2 className="text-base font-bold leading-5 text-neutral-900">
            {sneaker.name}
          </h2>

          <span className="text-xs leading-4 text-neutral-600">
            {sneaker.category?.name}
          </span>
        </div>

        <p className="text-sm font-bold leading-5 text-neutral-900">
          {new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL',
          }).format(sneaker.price)}
        </p>
      </div>
    </Link>
  )
}
