import { Sneaker } from '../contexts/CartContext'
import { useGetSneakersByIsTrendingQuery } from '../graphql/generated'

interface IRequest {
  tab: string
}

interface IResponse {
  sneakers?: Sneaker[]
}

export function useGetSneakersByIsTrending({
  tab = 'Men',
}: IRequest): IResponse {
  const [{ data }] = useGetSneakersByIsTrendingQuery({
    variables: {
      tab,
      isTrending: true,
    },
  })

  const sneakers = data?.category?.sneakers.map((sneaker) => ({
    id: sneaker.id,
    name: sneaker.name,
    description: sneaker.description,
    price: sneaker.price,
    slug: sneaker.slug,
    image: {
      url: sneaker.image.url,
    },
    brand: {
      name: sneaker.brand?.name ?? 'Generic',
    },
  }))

  return {
    sneakers,
  }
}
