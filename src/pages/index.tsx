import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'phosphor-react'

type HomeProps = NextPage

export default function Home({}: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | Sneakers Shop</title>
      </Head>
      <main>
        <div className="container flex gap-24 main-height">
          <div className="self-center flex-1">
            <h1 className="text-5xl font-bold text-blue-500">Sneakers Shop</h1>

            <p className="my-6 text-2xl leading-relaxed text-gray-900">
              Todo mundo precisa de um par de sneakers, afinal eles nunca são
              demais. Quer estar elegante e confortável onde quer que esteja e
              pagando um preço justo por isso? Então, não deixe de conferir
              nossos modelos.
            </p>

            <div className="flex gap-6">
              <Link
                href="/products"
                className="flex items-center justify-between h-16 gap-4 px-6 font-bold text-blue-500 transition border-2 border-blue-300 rounded-lg just w-60 bg-blue-50 hover:bg-blue-100 active:border-blue-500"
              >
                Ver modelos <ArrowRight size={24} />
              </Link>
            </div>
          </div>

          <div className="relative flex-1 object-cover object-center h-auto overflow-hidden rounded-lg">
            <Image src="/hero.jpg" alt="" fill quality={100} />
          </div>
        </div>
      </main>
    </>
  )
}
