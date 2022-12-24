import { NextApiRequest, NextApiResponse } from 'next'
import { Sneaker } from '../../graphql/generated'
import { stripe } from '../../services/stripe'

export default async function Checkout(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { products } = req.body as { products: Sneaker[] }

    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' })
    }

    if (!products) {
      return res.status(400).json({ error: 'Products not found.' })
    }

    const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
    const cancelUrl = `${process.env.NEXT_URL}`

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: products.map((product) => ({
        adjustable_quantity: {
          enabled: true,
          minimum: 1,
        },
        quantity: 1,
        price_data: {
          currency: 'brl',
          unit_amount: product.price * 100,
          product_data: {
            description: product.description,
            name: product.name,
            images: [product.image.url],
          },
        },
      })),
      success_url: successUrl,
      cancel_url: cancelUrl,
    })

    res.status(201).json({ checkoutUrl: session.url })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      message: 'There was a problem creating the Stripe Checkout session',
    })
  }
}
