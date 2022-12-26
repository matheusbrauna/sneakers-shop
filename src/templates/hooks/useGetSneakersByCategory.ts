import { Sneaker } from '../../contexts/CartContext'
import { useGetSneakersByCategoryQuery } from '../../graphql/generated'

interface IRequest {
  tab: string
}

interface IResponse {
  sneakers?: Sneaker[]
}

export function useGetSneakersByCategory({ tab }: IRequest): IResponse {
  const [{ data }] = useGetSneakersByCategoryQuery({
    variables: {
      tab,
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
      name: sneaker.brand?.name ?? '',
    },
  }))

  return {
    sneakers,
  }
}
