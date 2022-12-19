import { NextPage } from 'next'
import Head from 'next/head'
import { useQuery } from 'react-query'
import { useSneakers } from '../../templates/Home/hooks/useSneakers'

import { Sneaker } from '../../components/Sneaker'

type ProductsProps = NextPage

export default function Products({}: ProductsProps) {
  const {} = useQuery('get-products', useSneakers)

  return (
    <>
      <Head>
        <title>Produtos | Sneakers Shop</title>
      </Head>
      <main className="pt-[206px]">
        <div className="flex items-stretch gap-16 pb-8">
          <div className="fixed flex flex-col justify-start gap-8">
            <button className="h-12 px-5 text-xl font-bold leading-8 text-white bg-black">
              Homens
            </button>

            <button className="h-12 px-5 text-xl font-bold leading-8 text-black">
              Mulheres
            </button>

            <button className="h-12 px-5 text-xl font-bold leading-8 text-black">
              Crianças
            </button>
          </div>

          <div className="ml-[208px] grid flex-1 grid-cols-4 gap-5">
            <Sneaker />
            <Sneaker />
            <Sneaker />
            <Sneaker />
            <Sneaker />
            <Sneaker />
            <Sneaker />
            <Sneaker />
          </div>
        </div>
      </main>
    </>
  )
}
