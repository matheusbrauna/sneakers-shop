import Head from 'next/head'
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
    </>
  )
}
