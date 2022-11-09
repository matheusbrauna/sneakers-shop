import { GetStaticProps, NextPage } from 'next'
import { Sneaker } from '../../components/Sneaker'
import { stripe } from '../../services/stripe'
import Stripe from 'stripe'
import { IProduct } from '../../contexts/CartContext'
import Head from 'next/head'

type ProductsProps = NextPage & {
  sneakers: IProduct[]
}

export default function Products({ sneakers }: ProductsProps) {
  return (
    <>
      <Head>
        <title>Produtos | Sneakers Shop</title>
      </Head>
      <main>
        <div className="container items-center main-height">
          <h1 className="text-3xl font-bold text-center text-gray-900 lg:text-5xl">
            Confira nossos modelos disponíveis
          </h1>

          <section className="grid grid-cols-1 pb-16 mt-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14 place-items-center">
            {sneakers.map((sneaker) => (
              <Sneaker key={sneaker.id} sneaker={sneaker} />
            ))}
          </section>
        </div>
      </main>
    </>
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
      name: sneaker.name,
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
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      numberPrice: price.unit_amount! / 100,
      defaultPriceId: price.id,
    }
  })

  return {
    props: {
      sneakers,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}
