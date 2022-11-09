import { NextApiRequest, NextApiResponse } from 'next'
import { IProduct } from '../../contexts/CartContext'
import { stripe } from '../../services/stripe'

export default async function checkout(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { products } = req.body as { products: IProduct[] }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  if (!products) {
    return res.status(400).json({ error: 'Products not found' })
  }

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const cancelUrl = `${process.env.NEXT_URL!}`
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const successUrl = `${process.env
    .NEXT_URL!}/success?session_id={CHECKOUT_SESSION_ID}`

  const checkoutSession = await stripe.checkout.sessions.create({
    cancel_url: cancelUrl,
    success_url: successUrl,
    mode: 'payment',
    line_items: products.map((product) => ({
      price: product.defaultPriceId,
      quantity: 1,
    })),
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  })
}