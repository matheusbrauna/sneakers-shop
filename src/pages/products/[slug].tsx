import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import { ShoppingCart, Star } from 'phosphor-react'
import Stripe from 'stripe'
import { stripe } from '../../services/stripe'

type ProductProps = NextPage & {
  product: {
    id: string
    imageUrl: string
    name: string
    description: string
    defaultPrice: string
    promotionPrice: string
  }
}

export default function Product({ product }: ProductProps) {
  return (
    <main>
      <div className="container flex items-center gap-16 main-height">
        <div className="relative rounded-lg overflow-hidden object-center w-[26rem] h-[25rem] object-cover">
          <Image
            src={product.imageUrl}
            alt=""
            fill
            quality={100}
            placeholder="blur"
            blurDataURL={product.imageUrl}
          />
        </div>

        <div className="flex-1">
          <h1 className="my-5 text-5xl font-bold text-gray-900">
            {product.name}
          </h1>

          <div className="flex items-center gap-2">
            <Star size={24} weight="fill" className="text-yellow-500" />
            <Star size={24} weight="fill" className="text-yellow-500" />
            <Star size={24} weight="fill" className="text-yellow-500" />
            <Star size={24} weight="fill" className="text-yellow-500" />
            <Star size={24} weight="fill" className="text-yellow-500" />

            <span className="text-xs font-bold">(1 avaliação)</span>
          </div>

          <p className="mt-6 mb-6 text-2xl leading-relaxed text-gray-900">
            {product.description}
          </p>

          <p className="text-4xl font-bold text-gray-900">
            {product.promotionPrice}
          </p>

          <p className="mt-2 text-lg font-bold text-gray-700 line-through">
            {product.defaultPrice}
          </p>

          <div className="flex gap-6 mt-6">
            <button className="flex items-center h-16 gap-4 px-6 font-bold text-gray-100 transition-colors bg-blue-500 border-2 border-blue-500 rounded-lg hover:bg-blue-700 active:bg-blue-900">
              Adicionar ao carrinho <ShoppingCart size={24} />
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getStaticProps: GetStaticProps<any, { slug: string }> = async ({
  params,
}) => {
  const productSlug = params?.slug

  const product = await stripe.products.retrieve(productSlug ?? '', {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        description: product.description,
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
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}
