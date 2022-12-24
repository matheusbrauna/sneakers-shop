import Stripe from 'stripe'

const api_key = process.env.STRIPE_SECRET_KEY ?? ''

export const stripe = new Stripe(api_key, {
  apiVersion: '2022-11-15',
  appInfo: {
    name: 'Sneakers Shop',
    version: '1.0.0',
  },
})
