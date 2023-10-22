import { type Metadata } from 'next'

import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header'
import { Shell } from '@/components/shells/shell'
import { ISneaker, ProductCard } from '@/components/cards/product-card'

import { fetchHygraphQuery } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Produtos',
  description: 'Buy products from our stores',
}

const getSneakers = async (): Promise<{ sneakers: ISneaker[] }> => {
  const query = `#graphql
    query MyQuery {
      sneakers {
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

export default async function ProductsPage() {
  const { sneakers } = await getSneakers()

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
