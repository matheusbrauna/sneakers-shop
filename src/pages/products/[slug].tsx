import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { ShoppingCart, Star } from 'phosphor-react'
import { MouseEvent } from 'react'
import Stripe from 'stripe'
import { Button } from '../../components/Button'
import { IProduct, useCart } from '../../contexts/CartContext'
import { stripe } from '../../services/stripe'

type ProductProps = NextPage & {
  product: IProduct
}

export default function Product({ product }: ProductProps) {
  const { addItemToCart, checkIfItemAlreadyExists } = useCart()
  const { isFallback } = useRouter()

  function handleAddToCart(
    e: MouseEvent<HTMLButtonElement>,
    product: IProduct
  ) {
    e.preventDefault()
    addItemToCart(product)
  }

  if (isFallback) return <p>carregando</p>

  const productAlreadyInCart = checkIfItemAlreadyExists(product.id)

  return (
    <>
      <Head>
        <title>{product.name} | Sneakers Shop</title>
      </Head>
      <main className="main-height">
        <div className="container flex flex-col items-center gap-16 lg:flex-row lg:h-full pb-14">
          <div className="relative rounded-lg overflow-hidden object-center w-[26rem] min-h-[25rem] object-cover">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              quality={100}
              placeholder="blur"
              blurDataURL={product.imageUrl}
            />
          </div>

          <div className="flex-1">
            <h1 className="my-5 text-3xl font-bold text-gray-900 md:text-5xl">
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

            <p className="mt-6 mb-6 text-xl leading-relaxed text-gray-900 md:text-2xl">
              {product.description}
            </p>

            <p className="text-2xl font-bold text-gray-900 md:text-4xl">
              {product.promotionPrice}
            </p>

            <p className="mt-2 text-lg font-bold text-gray-700 line-through">
              {product.defaultPrice}
            </p>

            <div className="flex gap-6 mt-6">
              <Button
                type="button"
                disabled={checkIfItemAlreadyExists(product.id)}
                onClick={(e) => handleAddToCart(e, product)}
              >
                {productAlreadyInCart ? (
                  'Produto já está no carrinho'
                ) : (
                  <>
                    Adicionar ao carrinho <ShoppingCart size={24} />
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
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
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        numberPrice: price.unit_amount! / 100,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}
