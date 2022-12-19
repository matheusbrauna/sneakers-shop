import Image, { ImageProps } from 'next/image'
import Link from 'next/link'

interface HomeSneakerCardProps extends ImageProps {
  title: string
  category: string
  price: string
}

export function HomeSneakerCard({
  category,
  title,
  price,
  src,
  alt,
}: HomeSneakerCardProps) {
  return (
    <Link href="/products/1" className="grid gap-5 place-content-center">
      <Image
        src={src}
        alt={alt}
        width={373}
        height={373}
        className="object-cover object-center"
      />

      <div className="flex justify-between">
        <div className="grid gap-2">
          <h2 className="text-base font-bold leading-5 text-neutral-900">
            {title}
          </h2>

          <span className="text-xs leading-4 text-neutral-600">{category}</span>
        </div>

        <p className="text-sm font-bold leading-5 text-neutral-900">{price}</p>
      </div>
    </Link>
  )
}
