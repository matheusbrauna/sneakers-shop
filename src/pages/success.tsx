import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Stripe from 'stripe'
import { Button } from '../components/Button'
import { stripe } from '../services/stripe'

interface SuccessProps {
  customerName: string
  productsImages: string[]
}

const Success: NextPage<SuccessProps> = ({ customerName, productsImages }) => {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>

      <div className="container flex flex-col items-center justify-center gap-4 text-center paddingToHeader">
        <div className="flex gap-4 py-4 overflow-x-auto">
          {productsImages.map((image, index) => (
            <Image key={index} src={image} alt="" width={130} height={110} />
          ))}
        </div>

        <h1 className="text-3xl font-bold sm:text-4xl">Compra efetuada</h1>

        <p className="text-sm sm:text-base">
          Uhuul <strong>{customerName}</strong>, sua compra de{' '}
          <strong>{productsImages.length}</strong>{' '}
          {productsImages.length > 1 ? 'sneakers' : 'sneaker'} já está a caminho
          da sua casa.
        </p>

        <Link href="/products">
          <Button variant="black">Voltar ao catálogo</Button>
        </Link>
      </div>
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

export default Success
