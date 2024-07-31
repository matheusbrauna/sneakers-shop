import { type Metadata } from 'next'

import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header'
import { Shell } from '@/components/shells/shell'
import { ProductCard } from '@/components/cards/product-card'

import { useGetSneakersQuery, type GetSneakersQuery } from '@/__generated__'
import { graphqlClient } from '@/lib/gql-client'
import { QueryClient } from '@tanstack/react-query'

export const metadata: Metadata = {
  title: 'Produtos',
  description: 'Buy products from our stores',
}

export default async function ProductsPage() {
  const queryClient = new QueryClient()
  const { sneakers } = await queryClient.fetchQuery<GetSneakersQuery>({
    queryKey: useGetSneakersQuery.getKey(),
    queryFn: useGetSneakersQuery.fetcher(graphqlClient),
  })

  return (
    <Shell>
      <PageHeader
        id="products-page-header"
        aria-labelledby="products-page-header-heading"
      >
        <PageHeaderHeading size="sm">Produtos</PageHeaderHeading>
        <PageHeaderDescription size="sm">
          Compre os produtos da nossa loja
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
