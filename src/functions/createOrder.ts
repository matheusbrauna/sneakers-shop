import { Sneaker, useCreateOrderMutation } from '../graphql/generated'

interface CreateOrderRequest {
  product: Sneaker
  stripeId: string
}

export async function createOrder({ product, stripeId }: CreateOrderRequest) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [{}, createOrder] = useCreateOrderMutation()

  await createOrder({
    product,
    stripeId,
  })
}
