import { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import { ArrowRight, Star } from 'phosphor-react'
import { stripe } from '../services/stripe'

type HomeProps = NextPage & {
  sneaker: {
    title: string
    description: string
    imageUrl: string
  }
}

export default function Home({ sneaker }: HomeProps) {
  return (
    <main>
      <div className="container flex gap-24 pt-16 main-height">
        <div className="relative rounded-lg overflow-hidden object-center w-[416px] h-[400px] object-cover">
          <Image src={sneaker.imageUrl} alt="" fill quality={100} />
        </div>

        <div className="flex-1">
          <h1 className="my-5 text-5xl font-bold text-gray-900">
            {sneaker.title}
          </h1>

          <p className="mt-6 mb-6 text-2xl leading-relaxed text-gray-900">
            {sneaker.description}
          </p>

          <div className="flex items-center gap-2">
            <Star size={32} weight="fill" className="text-yellow-500" />
            <Star size={32} weight="fill" className="text-yellow-500" />
            <Star size={32} weight="fill" className="text-yellow-500" />
            <Star size={32} weight="fill" className="text-yellow-500" />
            <Star size={32} weight="fill" className="text-yellow-500" />

            <span className="text-xs font-bold">(1 avaliação)</span>
          </div>

          <div className="flex gap-6 mt-16">
            <button className="flex items-center h-16 gap-4 px-6 font-bold text-blue-500 border-2 border-blue-300 rounded-lg bg-blue-50">
              Ver mais <ArrowRight size={24} />
            </button>
            <button className="flex items-center h-16 gap-4 px-6 font-bold text-gray-100 bg-blue-500 border-2 border-blue-500 rounded-lg">
              Comprar agora
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.retrieve('prod_MjxadwOBSlUJa4')

  const sneaker = {
    title: response.name,
    description: response.description,
    imageUrl: response.images[0],
  }

  console.log(response)

  return {
    props: {
      sneaker,
    },

    revalidate: 60 * 60 * 24 * 15, // 15 days
  }
}
