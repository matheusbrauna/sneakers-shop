import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { IProduct } from '../../contexts/CartContext'

import imageUrl from '../../assets/sneaker1.png'

type ProductProps = NextPage & {
  product: IProduct
}

export default function Product({}: ProductProps) {
  return (
    <>
      <Head>
        <title> produto | Sneakers Shop</title>
      </Head>
      <main className="main-height">
        <div className="container flex flex-col items-center gap-16 lg:flex-row lg:h-full pb-14">
          <div className="relative rounded-lg overflow-hidden object-center w-[26rem] min-h-[25rem] object-cover">
            <Image src={imageUrl} alt="" fill quality={100} />
          </div>

          <div className="flex-1">
            <h1 className="my-5 text-3xl font-bold text-gray-900 md:text-4xl">
              Nike Blazer Young 2022
            </h1>

            <p className="mt-6 mb-6 text-base leading-relaxed text-gray-900 md:text-xl">
              Esses tênis de perfil baixo são o seu companheiro de roupa casual
              perfeito. Apresentando uma sola exterior de borracha durável. Eles
              irão suportar tudo o que o tempo pode oferecer.
            </p>

            <p className="text-xl font-bold text-gray-900 md:text-2xl">
              R$ 199,90
            </p>

            <p className="mt-2 text-base font-bold text-gray-900 line-through opacity-50">
              R$ 250,00
            </p>

            <div className="flex gap-6 mt-6">
              <button className="h-12 px-4 py-2 text-sm font-bold leading-5 text-white uppercase bg-black justify-self-center w-max">
                Comprar agora
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
