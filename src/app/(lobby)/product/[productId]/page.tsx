import Link from 'next/link'

import { fetchHygraphQuery, formatPrice, toTitleCase } from '@/lib/utils'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Separator } from '@/components/ui/separator'
import { ISneaker, ProductCard } from '@/components/cards/product-card'

import { Shell } from '@/components/shells/shell'
import { Breadcrumbs } from '@/components/pagers/breadcumbs'
import { ProductImageCarousel } from '@/components/product-image-carousel'
import { AddToCartForm } from '@/components/forms/add-to-cart-form'
import { RatingsStars } from '@/components/rating-stars'
import { StoredFile } from '@/types'

const getSneaker = async (productId: string) => {
  const query = `#graphql
    query GetSneaker() {
      sneaker(where: {slug: "${productId}"}) {
        id
        name
        description
        price
        quantity
        slug
        brand {
          id
          name
        }
        category {
          slug
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

  return fetchHygraphQuery<{ sneaker: ISneaker }>(query)
}

const getOtherSneakers = async (brandId: string) => {
  const query = `#graphql
    query GetOtherSneakers() {
      sneakers(where: {brand: {id: "${brandId}"}}) {
        id
        name
        description
        price
        quantity
        slug
        brand {
          id
          name
        }
        category {
          slug
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

interface ProductPageProps {
  params: {
    productId: string
  }
}

export default async function ProductPage({
  params: { productId },
}: ProductPageProps) {
  const { sneaker } = await getSneaker(productId)
  const { sneakers: othersSneakers } = await getOtherSneakers(
    sneaker?.brand?.id,
  )

  const coverImgFallback: StoredFile[] = [
    {
      url: sneaker?.coverImg?.url,
    },
  ]

  return (
    <Shell>
      <Breadcrumbs
        segments={[
          {
            title: 'Products',
            href: '/products',
          },
          {
            title: toTitleCase(sneaker.category.name),
            href: `/products?category=${sneaker.category.slug}`,
          },
          {
            title: sneaker.name,
            href: `/product/${sneaker.id}`,
          },
        ]}
      />
      <div className="flex flex-col gap-8 md:flex-row md:gap-16">
        <ProductImageCarousel
          className="w-full md:w-1/2"
          images={
            sneaker?.images?.length > 0 ? sneaker.images : coverImgFallback
          }
          options={{
            loop: true,
          }}
        />
        <Separator className="mt-4 md:hidden" />
        <div className="flex w-full flex-col gap-4 md:w-1/2">
          <div className="space-y-2">
            <h2 className="line-clamp-1 text-2xl font-bold">{sneaker.name}</h2>
            <p className="text-base text-muted-foreground">
              {formatPrice(sneaker.price)}
            </p>
            <Link
              href={`/products?store_ids=`}
              className="line-clamp-1 inline-block text-base text-muted-foreground hover:underline"
            >
              {sneaker.brand.name}
            </Link>
            <div className="flex gap-1">
              <RatingsStars product={sneaker} />
            </div>
          </div>
          <Separator className="my-1.5" />
          <AddToCartForm productId={productId} />
          <Separator className="mt-5" />
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="description">
              <AccordionTrigger>Descrição</AccordionTrigger>
              <AccordionContent>
                {sneaker.description ??
                  'No description is available for this sneaker.'}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      {othersSneakers?.length > 0 ? (
        <div className="overflow-hidden md:pt-6">
          <h2 className="line-clamp-1 flex-1 text-2xl font-bold">
            Veja mais produtos da marca {sneaker.brand.name}
          </h2>
          <div className="overflow-x-auto pb-2 pt-6">
            <div className="flex w-fit gap-4">
              {othersSneakers?.map((product) => (
                <ProductCard
                  key={sneaker.id}
                  product={product}
                  className="min-w-[260px] flex-1"
                />
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </Shell>
  )
}

export async function generateStaticParams() {
  const query = `
    query GetSlugSneakers() {
      sneakers(first: 100) {
        id
        name
        description
        price
        quantity
        slug
        brand {
          id
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
  const { sneakers } = await fetchHygraphQuery<{ sneakers: ISneaker[] }>(query)

  return sneakers
}
