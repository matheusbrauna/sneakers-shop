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

const getSneakersByBrand = async (brand: string) => {
  const query = `#graphql
    query GetSneakersByBrand() {
      sneakers(where: {brand: {name: "${brand}"}}) {
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

export default async function BrandsPage({
  params: { brand },
}: {
  params: { brand: string }
}) {
  const { sneakers } = await getSneakersByBrand(
    brand.charAt(0).toUpperCase() + brand.slice(1),
  )

  return (
    <Shell>
      <PageHeader
        id="products-page-header"
        aria-labelledby="products-page-header-heading"
      >
        <PageHeaderHeading size="sm" className="capitalize">
          {brand}
        </PageHeaderHeading>
        <PageHeaderDescription size="sm">
          Compre os produtos da marca{' '}
          <strong className="capitalize">{brand}</strong> em nossa loja
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
