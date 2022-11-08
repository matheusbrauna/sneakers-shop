import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Stripe from 'stripe'
import { Button } from '../components/Button'
import { stripe } from '../services/stripe'

type SuccessProps = NextPage & {
  customerName: string
  productsImages: string[]
}

export default function Success({
  customerName,
  productsImages,
}: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Sneakers Shop</title>
        <meta name="robots" content="noindex" />
      </Head>

      <main>
        <div className="container flex flex-col items-center justify-center main-height">
          <div className="flex items-center gap-2 mb-16">
            {productsImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded h-36 w-36"
              >
                <Image
                  src={image}
                  alt=""
                  fill
                  className="object-cover object-center"
                  placeholder="blur"
                  blurDataURL={image}
                />
              </div>
            ))}
          </div>
          <h1 className="mb-8 text-4xl font-bold">Compra efetuada</h1>

          <p className="mb-12 text-xl">
            Uhuul <strong>{customerName}</strong>, sua compra de{' '}
            <strong>{productsImages.length}</strong>{' '}
            {productsImages.length > 1 ? 'sneakers' : 'sneaker'} foi concluída
            com sucesso!
          </p>

          <Button asChild>
            <Link href="/products">Quero comprar mais!</Link>
          </Button>
        </div>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = session.customer_details?.name
  const productsImages = session.line_items?.data.map((item) => {
    const product = item.price?.product as Stripe.Product

    return product.images[0]
  })

  return {
    props: {
      customerName,
      productsImages,
    },
  }
}
