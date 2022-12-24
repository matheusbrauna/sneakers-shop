import { useGetSneakerByIdQuery } from '../graphql/generated'

export function getSneakerById(id: string) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [{ data }] = useGetSneakerByIdQuery({
    variables: {
      id,
    },
  })

  return data?.sneaker
}
