import Head from 'next/head'
import Image from 'next/image'

import imageUrl from '../../assets/sneaker1.png'
import { BlackButton } from '../../components/Buttons/BlackButton'

export function Product() {
  return (
    <>
      <Head>
        <title> produto | Sneakers Shop</title>
      </Head>
      <main className="main-height">
        <div className="container flex flex-col items-center gap-16 lg:flex-row lg:h-full pb-14">
          <Image src={imageUrl} alt="" quality={100} width={443} height={426} />

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
              <BlackButton href="/">Comprar agora</BlackButton>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}