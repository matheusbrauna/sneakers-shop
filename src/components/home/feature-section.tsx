import { useGetSneakersQuery, type GetSneakersQuery } from '@/__generated__'
import { ProductCard } from '@/components/cards/product-card'
import { graphqlClient } from '@/lib/gql-client'
import { QueryClient } from '@tanstack/react-query'

export async function FeatureSection() {
  const queryClient = new QueryClient()
  const { sneakers } = await queryClient.fetchQuery<GetSneakersQuery>({
    queryKey: useGetSneakersQuery.getKey(),
    queryFn: useGetSneakersQuery.fetcher(graphqlClient),
  })

  return (
    <section
      id="feature"
      aria-labelledby="feature-heading"
      className="py-24 lg:py-32"
    >
      <div className="container">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center text-center">
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
            Novos Lançamentos
          </h2>
          <p className="max-w-[46rem] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Encontre os melhores equipamentos de skate de lojas de todo o mundo.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {sneakers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
