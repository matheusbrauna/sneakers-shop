import { NextPage } from 'next'
import Head from 'next/head'
import { useQuery } from 'react-query'
import { Sneaker } from '../../components/Sneaker'
import { getSneakers } from '../../templates/Home/http/getSneakers'

type ProductsProps = NextPage

export default function Products({}: ProductsProps) {
  const { data } = useQuery('get-products', getSneakers)

  console.log(data)

  return (
    <>
      <Head>
        <title>Produtos | Sneakers Shop</title>
      </Head>
      <main>
        <div className="container items-center main-height">
          <h1 className="text-3xl font-bold text-center text-gray-900 lg:text-5xl">
            Confira nossos modelos disponíveis
          </h1>

          <section className="grid grid-cols-1 pb-16 mt-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14 place-items-center">
            {data?.map((sneaker) => (
              <Sneaker key={sneaker.id} sneaker={sneaker} />
            ))}
          </section>
        </div>
      </main>
    </>
  )
}
