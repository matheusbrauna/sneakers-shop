import Image, { ImageProps } from 'next/image'
import Link from 'next/link'

interface CategoryCardProps extends ImageProps {
  children: string
  href: string
}

export function CategoryCard({ href, src, alt, children }: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="relative overflow-hidden transition-all group hover:opacity-80"
    >
      <Image
        src={src}
        alt={alt}
        quality={100}
        width={590}
        height={650}
        className="object-cover object-center"
      />

      <h3 className="absolute text-2xl text-white uppercase transition-all group-hover:font-bold whitespace-nowrap top-2/4 left-2/4 -translate-x-2/4">
        {children}
      </h3>
    </Link>
  )
}
