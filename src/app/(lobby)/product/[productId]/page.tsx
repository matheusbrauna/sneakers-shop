import Link from 'next/link'

import { formatPrice, toTitleCase } from '@/lib/utils'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Separator } from '@/components/ui/separator'
import { ProductCard } from '@/components/cards/product-card'

import { Shell } from '@/components/shells/shell'
import { Breadcrumbs } from '@/components/pagers/breadcumbs'
import { ProductImageCarousel } from '@/components/product-image-carousel'
import { AddToCartForm } from '@/components/forms/add-to-cart-form'
import { StoredFile } from '@/types'
import { QueryClient } from '@tanstack/react-query'
import {
  useGetSneakerQuery,
  useGetSneakersQuery,
  type GetSneakerQuery,
  type GetSneakersQuery,
} from '@/__generated__'
import { graphqlClient } from '@/lib/gql-client'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

type Props = {
  params: {
    productId: string
  }
}

export default async function ProductPage({ params }: Props) {
  const queryClient = new QueryClient()
  const { sneaker } = await queryClient.fetchQuery<GetSneakerQuery>({
    queryKey: useGetSneakerQuery.getKey(),
    queryFn: useGetSneakerQuery.fetcher(graphqlClient, {
      productId: params.productId,
    }),
  })

  const { sneakers } = await queryClient.fetchQuery<GetSneakersQuery>({
    queryKey: useGetSneakersQuery.getKey(),
    queryFn: useGetSneakersQuery.fetcher(graphqlClient),
  })

  if (!sneaker) {
    notFound()
  }

  const coverImgFallback: StoredFile[] = [
    {
      url: sneaker.coverImg.url,
    },
  ]

  const relatedSneakers = sneakers.filter(
    (item) => item.brand?.id === sneaker.brand?.id,
  )

  return (
    <Shell>
      <Breadcrumbs
        segments={[
          {
            title: 'Products',
            href: '/products',
          },
          {
            title: toTitleCase(sneaker.category?.name ?? ''),
            href: `/products?category=${sneaker.category?.slug}`,
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
              {sneaker.brand?.name}
            </Link>
          </div>
          <Separator className="my-1.5" />
          <AddToCartForm productId={params.productId} />
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
      {relatedSneakers.length > 0 ? (
        <div className="overflow-hidden md:pt-6">
          <h2 className="line-clamp-1 flex-1 text-2xl font-bold">
            Veja mais produtos da marca {sneaker.brand?.name}
          </h2>
          <div className="overflow-x-auto pb-2 pt-6">
            <div className="flex w-fit gap-4">
              {relatedSneakers.map((product) => (
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
  const queryClient = new QueryClient()
  const { sneakers } = await queryClient.fetchQuery({
    queryKey: useGetSneakersQuery.getKey(),
    queryFn: useGetSneakersQuery.fetcher(graphqlClient),
  })

  return sneakers
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const queryClient = new QueryClient()
  const { sneaker } = await queryClient.fetchQuery({
    queryKey: useGetSneakerQuery.getKey(),
    queryFn: useGetSneakerQuery.fetcher(graphqlClient, {
      productId: params.productId,
    }),
  })

  if (!sneaker) {
    notFound()
  }

  return {
    title: sneaker.name,
    description: sneaker.description,
    openGraph: {
      images: [
        {
          url: sneaker.coverImg.url,
          width: 1200,
          height: 630,
        },
      ],
    },
  }
}
