import Image from 'next/image'
import Link from 'next/link'

import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Button } from '@/components/ui/button'
import { StoredFile } from '@/types'

export interface ICategory {
  id: string
  name: string
  slug: string
  description: string
  title: string
  coverImg: StoredFile
}

interface CategoryCardProps {
  category: ICategory
}

export async function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href="#" className="group relative overflow-hidden rounded-md border">
      <AspectRatio ratio={16 / 9}>
        <div className="absolute inset-0 z-10 bg-zinc-950/70 transition-colors group-hover:bg-zinc-950/75" />
        <Image
          src={category.coverImg.url}
          alt={`category`}
          className="object-cover transition-transform group-hover:scale-105"
          sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
          fill
          priority={true}
        />
      </AspectRatio>
      <div className="absolute inset-4 z-20 flex flex-col">
        <p className="mt-auto w-full text-sm leading-7 text-zinc-200 sm:text-base [&:not(:first-child)]:mt-6">
          {category.title}
        </p>
        <Button variant="secondary" className="mt-2 self-start rounded-full">
          Saiba mais
        </Button>
      </div>
      <span className="sr-only">{category.title}</span>
    </Link>
  )
}
