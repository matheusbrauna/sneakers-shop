import Head from 'next/head'
import Image from 'next/image'

import { BlackButton } from '../../components/Buttons/BlackButton'
import { useGetSneakerQuery } from '../../graphql/generated'

interface ProductProps {
  slug: string
}

export function Product({ slug }: ProductProps) {
  const [{ data }] = useGetSneakerQuery({
    variables: {
      slug,
    },
  })

  return (
    <>
      <Head>
        <title> produto | Sneakers Shop</title>
      </Head>
      <main className="grid h-screen place-content-center">
        <div className="container flex items-center justify-center gap-16">
          <Image
            src={data?.sneaker?.image.url ?? ''}
            alt=""
            quality={100}
            width={443}
            height={426}
          />

          <div className="flex-1">
            <h1 className="my-5 text-3xl font-bold text-gray-900 uppercase md:text-4xl">
              {data?.sneaker?.name}
            </h1>

            <p className="mt-6 mb-6 text-base leading-relaxed text-gray-900 md:text-xl">
              {data?.sneaker?.description}
            </p>

            <p className="text-xl font-bold text-gray-900 md:text-2xl">
              {new Intl.NumberFormat('pt-br', {
                style: 'currency',
                currency: 'BRL',
              }).format(data?.sneaker?.price ?? 0)}
            </p>

            <p className="mt-2 text-base font-bold text-gray-900 line-through opacity-50">
              {new Intl.NumberFormat('pt-br', {
                style: 'currency',
                currency: 'BRL',
              }).format(data?.sneaker?.price ?? 0)}
            </p>

            <div className="flex gap-6 mt-6">
              <BlackButton href="/">Comprar agora</BlackButton>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
