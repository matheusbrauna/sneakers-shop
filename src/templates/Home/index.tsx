import Head from 'next/head'
import { FacebookLogo, InstagramLogo, TwitterLogo } from 'phosphor-react'
import { Banners } from './components/Banners'

import { Categories } from './components/Categories'
import { Hero } from './components/Hero'
import { SubCategories } from './components/SubCategories'
import { Trending } from './components/Trending'

export function Home() {
  return (
    <>
      <Head>
        <title>Home | Sneakers Shop</title>
      </Head>
      <main>
        <Hero />
        <Categories />
        <Trending />
        <Banners />
        <SubCategories />
      </main>
      <footer className="h-[325px] bg-[url('../assets/socialbg.png')] bg-no-repeat bg-cover bg-center mt-16 grid  gap-3 place-content-center">
        <h2 className="text-2xl font-bold leading-8 text-center text-white">
          Social media
        </h2>

        <p className="text-sm leading-5 text-center text-gray-600">
          Siga-nos nas redes sociais, não perca as oportunidades
        </p>

        <div className="flex gap-5 justify-self-center">
          <TwitterLogo weight="fill" size={24} className="text-white" />
          <FacebookLogo weight="fill" size={24} className="text-white" />
          <InstagramLogo weight="regular" size={24} className="text-white" />
        </div>
      </footer>
    </>
  )
}
