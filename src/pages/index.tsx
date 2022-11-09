import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'phosphor-react'
import { Button } from '../components/Button'

type HomeProps = NextPage

export default function Home({}: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | Sneakers Shop</title>
      </Head>
      <main>
        <div className="container flex flex-col gap-24 lg:flex-row main-height">
          <div className="self-center flex-1">
            <h1 className="text-3xl font-bold text-blue-500 md:text-5xl">
              Sneakers Shop
            </h1>

            <p className="my-6 text-lg leading-relaxed text-gray-900 md:text-2xl">
              Todo mundo precisa de um par de sneakers, afinal eles nunca são
              demais. Quer estar elegante e confortável onde quer que esteja e
              pagando um preço justo por isso? Então, não deixe de conferir
              nossos modelos.
            </p>

            <div className="flex gap-6">
              <Button asChild variant="outlined">
                <Link href="/products">
                  Ver modelos <ArrowRight size={24} />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative flex-1 object-cover object-center h-auto min-h-[300px] overflow-hidden rounded-lg">
            <Image src="/hero.jpg" alt="" fill quality={100} />
          </div>
        </div>
      </main>
    </>
  )
}
