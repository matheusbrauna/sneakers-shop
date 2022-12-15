import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'phosphor-react'
import { Button } from '../../components/Button'

export function Home() {
  return (
    <>
      <Head>
        <title>Home | Sneakers Shop</title>
      </Head>
      <main className="main-height">
        <div className="container flex flex-col gap-24 lg:h-full pb-14 lg:flex-row">
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

          <div className="relative flex-1 object-cover object-center h-auto min-h-[330px] overflow-hidden rounded-lg">
            <Image src="/hero.jpg" alt="" fill quality={100} />
          </div>
        </div>
      </main>
    </>
  )
}
