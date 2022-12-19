import Head from 'next/head'

import { Banners } from './containers/Banners'
import { Categories } from './containers/Categories'
import { Hero } from './containers/Hero'
import { Social } from './containers/Social'
import { Trending } from './containers/Trending'

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
        <Social />
      </main>
    </>
  )
}
