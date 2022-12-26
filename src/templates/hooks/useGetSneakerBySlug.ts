import { Sneaker } from '../../contexts/CartContext'
import { useGetSneakerBySlugQuery } from '../../graphql/generated'

interface IRequest {
  slug: string
}

interface IResponse {
  sneaker?: Sneaker
}

export function useGetSneakersBySlug({ slug }: IRequest): IResponse {
  const [{ data }] = useGetSneakerBySlugQuery({
    variables: {
      slug,
    },
  })

  const sneaker = {
    id: data?.sneaker?.id ?? '',
    name: data?.sneaker?.name ?? '',
    description: data?.sneaker?.description ?? '',
    price: data?.sneaker?.price ?? 0,
    slug: data?.sneaker?.slug ?? '',
    image: {
      url: data?.sneaker?.image.url ?? '',
    },
    brand: {
      name: data?.sneaker?.brand?.name ?? 'Generic',
    },
  }

  return {
    sneaker,
  }
}
