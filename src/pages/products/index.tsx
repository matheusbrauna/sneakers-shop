import { GetStaticProps, NextPage } from 'next'
import { Sneaker } from '../../components/Sneaker'
import { stripe } from '../../services/stripe'
import Stripe from 'stripe'

type ProductsProps = NextPage & {
  sneakers: {
    id: string
    title: string
    description: string
    imageUrl: string
    defaultPrice: string
    promotionPrice: string
  }[]
}

export default function Products({ sneakers }: ProductsProps) {
  return (
    <main>
      <div className="container items-center main-height">
        <h1 className="text-5xl font-bold text-center text-gray-900">
          Confira nossos modelos disponíveis
        </h1>

        <section className="grid grid-cols-4 pb-16 mt-16 gap-14">
          {sneakers.map((sneaker) => (
            <Sneaker key={sneaker.id} sneakerData={sneaker} />
          ))}
        </section>
      </div>
    </main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const sneakers = response.data.map((sneaker) => {
    const price = sneaker.default_price as Stripe.Price

    return {
      id: sneaker.id,
      title: sneaker.name,
      imageUrl: sneaker.images[0],
      description: sneaker.description?.split('', 100),
      defaultPrice: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      }).format((price.unit_amount! * 1.5) / 100),
      promotionPrice: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      }).format(price.unit_amount! / 100),
    }
  })

  return {
    props: {
      sneakers,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}
