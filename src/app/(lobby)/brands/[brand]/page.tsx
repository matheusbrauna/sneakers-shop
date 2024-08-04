import { type Metadata } from 'next'

import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header'
import { Shell } from '@/components/shells/shell'
import { QueryClient } from '@tanstack/react-query'
import {
  useGetSneakersByBrandQuery,
  type GetSneakersByBrandQuery,
} from '@/__generated__'
import { graphqlClient } from '@/lib/gql-client'
import { ProductCard } from '@/components/cards/product-card'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Produtos',
  description: 'Buy products from our stores',
}

export default async function BrandsPage({
  params,
}: {
  params: { brand: string }
}) {
  const queryClient = new QueryClient()
  const { sneakers } = await queryClient.fetchQuery<GetSneakersByBrandQuery>({
    queryKey: useGetSneakersByBrandQuery.getKey(),
    queryFn: useGetSneakersByBrandQuery.fetcher(graphqlClient, {
      brand: params.brand,
    }),
  })

  if (!sneakers) {
    notFound()
  }

  return (
    <Shell>
      <PageHeader
        id="products-page-header"
        aria-labelledby="products-page-header-heading"
      >
        <PageHeaderHeading size="sm" className="capitalize">
          {params.brand}
        </PageHeaderHeading>
        <PageHeaderDescription size="sm">
          Compre os produtos da marca{' '}
          <strong className="capitalize">{params.brand}</strong> em nossa loja
        </PageHeaderDescription>
      </PageHeader>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sneakers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Shell>
  )
}
