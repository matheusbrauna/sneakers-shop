import { type Metadata } from 'next'

import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header'
import { Shell } from '@/components/shells/shell'
import { ISneaker, ProductCard } from '@/components/cards/product-card'
import { buttonVariants } from '@/components/ui/button'
import { cn, fetchHygraphQuery } from '@/lib/utils'
import Balancer from 'react-wrap-balancer'
import Link from 'next/link'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import Image from 'next/image'
import { ICategory } from '@/components/cards/category-card'

export const metadata: Metadata = {
  title: 'Produtos',
  description: 'Buy products from our stores',
}

const getSneakersByCategory = async (category: string) => {
  const query = `#graphql
    query GetSneakersByCategory() {
      sneakers(where: {category: {name: "${category}"}}) {
        id
        name
        price
        quantity
        slug
        brand {
          name
        }
        category {
          name
        }
        coverImg {
          url
        }
        images {
          url
        }
        ratings {
          stars
        }
      }
    }
  `

  return fetchHygraphQuery<{ sneakers: ISneaker[] }>(query)
}

const getCategories = async () => {
  const query = `#graphql
    query GetCategories {
      categories {
        id
        name
        title
        description
        coverImg {
          url
        }
      }
    }
  `

  return fetchHygraphQuery<{ categories: ICategory[] }>(query)
}

interface GenrePageParams {
  params: { category: string }
}

export default async function GenrePage({
  params: { category },
}: GenrePageParams) {
  const { sneakers } = await getSneakersByCategory(
    category.charAt(0).toUpperCase() + category.slice(1),
  )
  const { categories } = await getCategories()
  const genre = categories.find(
    (item) => item.name.toLocaleUpperCase() === category.toLocaleUpperCase(),
  )

  return (
    <Shell className="gap-12">
      <section
        id="hero"
        aria-labelledby="hero-heading"
        className="relative mx-auto flex aspect-video w-full flex-col items-center justify-center gap-4 pb-8 pt-6 text-center md:pb-12 md:pt-10 lg:py-28"
      >
        <div className="absolute inset-0 -z-10">
          <AspectRatio ratio={16 / 9}>
            <Image
              src={genre?.coverImg.url ?? '/product-placeholder.webp'}
              alt="Imagem ilustrativa da categoria da página"
              fill
              className="absolute inset-0 object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={100}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground to-foreground/60 dark:from-background dark:to-background/60 md:to-foreground/40 dark:md:to-background/40" />
          </AspectRatio>
        </div>
        <h1 className="text-xl font-bold leading-tight tracking-tighter text-accent dark:text-accent-foreground md:text-5xl lg:text-6xl lg:leading-[1.1]">
          {genre?.title}
        </h1>
        <Balancer className="max-w-[46rem] text-sm text-muted dark:text-muted-foreground sm:text-xl">
          {genre?.description}
        </Balancer>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/produtos/mulher" className={cn(buttonVariants())}>
            Comprar agora
            <span className="sr-only">Comprar agora</span>
          </Link>
        </div>
      </section>
      <PageHeader
        id="products-page-header"
        aria-labelledby="products-page-header-heading"
      >
        <PageHeaderHeading size="sm" className="capitalize">
          {category}
        </PageHeaderHeading>
        <PageHeaderDescription size="sm">
          Veja todos os nossos produtos disponíveis na categoria{' '}
          <strong>{category}</strong>
        </PageHeaderDescription>
      </PageHeader>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sneakers?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Shell>
  )
}
