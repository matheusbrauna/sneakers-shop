import { Sneaker } from '../contexts/CartContext'
import { useGetSneakersQuery } from '../graphql/generated'

interface IResponse {
  sneakers?: Sneaker[]
}

export function useGetSneakers(): IResponse {
  const [{ data }] = useGetSneakersQuery()

  const sneakers = data?.sneakers.map((sneaker) => ({
    id: sneaker.id,
    name: sneaker.name,
    description: sneaker.description,
    price: sneaker.price,
    slug: sneaker.slug,
    image: {
      url: sneaker.image.url,
    },
    brand: {
      name: sneaker.brand?.name ?? '',
    },
  }))

  return {
    sneakers,
  }
}
