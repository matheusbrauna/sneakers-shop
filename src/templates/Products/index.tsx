import Head from 'next/head'
import { Sneaker } from '../../components/Sneaker'

export function Products() {
  return (
    <>
      <Head>
        <title>Produtos | Sneakers Shop</title>
      </Head>
      <main className="headerPadding">
        <div className="fixed left-0 flex flex-col ">
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

        <div className="grid grid-cols-1 gap-8 pr-4 ml-40 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <Sneaker />
          <Sneaker />
          <Sneaker />
          <Sneaker />
          <Sneaker />
          <Sneaker />
          <Sneaker />
          <Sneaker />
        </div>
      </main>
    </>
  )
}
