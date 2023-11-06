import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'
import { Balancer } from 'react-wrap-balancer'
import { cn, fetchHygraphQuery } from '@/lib/utils'
import { Icons } from '@/components/icons'
import { Shell } from '@/components/shells/shell'
import { ISneaker, ProductCard } from '@/components/cards/product-card'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import Image from 'next/image'
import { CategoryCard, ICategory } from '@/components/cards/category-card'

const getSneakers = async (): Promise<{ sneakers: ISneaker[] }> => {
  const query = `#graphql
    query GetSneakers {
      sneakers(where: {isFeature: true}) {
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

  return fetchHygraphQuery(query)
}

const getCategories = async (): Promise<{ categories: ICategory[] }> => {
  const query = `#graphql
    query GetCategories {
      categories {
        id
        name
        title
        coverImg {
          url
        }
      }
    }
  `

  return fetchHygraphQuery(query)
}

export default async function IndexPage() {
  const { sneakers } = await getSneakers()
  const { categories } = await getCategories()

  return (
    <Shell className="gap-12">
      <section
        id="hero"
        aria-labelledby="hero-heading"
        className="mx-auto flex w-full max-w-[64rem] flex-col items-center justify-center gap-4 pb-8 pt-6 text-center md:pb-12 md:pt-10 lg:py-28"
      >
        <Icons.logo className="h-16 w-16" />
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
          Bem-vindo à Sneakers Shop
        </h1>
        <Balancer className="max-w-[46rem] text-lg text-muted-foreground sm:text-xl">
          Encontre os melhores tênis de skate de marcas independentes e lojas de
          todo o mundo.
        </Balancer>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/produtos" className={cn(buttonVariants())}>
            Comprar agora
            <span className="sr-only">Comprar agora</span>
          </Link>
        </div>
      </section>

      <section
        id="feature"
        aria-labelledby="feature-heading"
        className="space-y-6 py-6 md:pt-10 lg:pt-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
            Novos Lançamentos
          </h2>
          <p className="max-w-[46rem] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Encontre os melhores equipamentos de skate de lojas de todo o mundo.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {sneakers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section
        id="trending"
        aria-labelledby="trending-heading"
        className="space-y-6 py-6 md:pt-10 lg:pt-24"
      >
        <div className="flex items-center">
          <h2 className="flex-1 text-2xl font-medium sm:text-3xl">
            Em destaque
          </h2>
        </div>
        <div className="grid min-h-screen grid-cols-1 gap-2 sm:grid-cols-2">
          <AspectRatio ratio={16 / 9}>
            <Image
              src="/images/trending-img.jpg"
              alt="A skateboarder doing a high drop"
              fill
              className="absolute inset-0 object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </AspectRatio>
          <AspectRatio ratio={16 / 9}>
            <Image
              src="/images/trending-img-2.avif"
              alt="A skateboarder doing a high drop"
              fill
              className="absolute inset-0 object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </AspectRatio>
        </div>
        <div className="mx-auto flex w-full max-w-[64rem] flex-col items-center justify-center gap-4 pb-8 pt-6 text-center md:pb-12">
          <p className="text-lg font-medium">Nike InfinityRN 4</p>
          <h3 className="text-3xl font-bold uppercase leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
            Dê um abraço nos seus pés
          </h3>
          <Balancer className="max-w-[46rem] text-lg text-muted-foreground sm:text-xl">
            Encontre os melhores tênis de skate de marcas independentes e lojas
            de todo o mundo.
          </Balancer>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/produtos"
              className={cn(buttonVariants(), 'rounded-full')}
            >
              Comprar agora
              <span className="sr-only">Ver InfinityRN 4</span>
            </Link>
          </div>
        </div>
      </section>
      <section
        id="more"
        aria-labelledby="more"
        className="space-y-6 py-6 md:pt-10 lg:pt-24"
      >
        <div className="flex items-center">
          <h2 className="flex-1 text-2xl font-medium sm:text-3xl">
            Veja também
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.title} category={category} />
          ))}
        </div>
      </section>
    </Shell>
  )
}
