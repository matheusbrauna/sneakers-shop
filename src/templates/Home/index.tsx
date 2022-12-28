import Head from 'next/head'
import { Hero, Banners, Footer, Trending } from './containers'

export function Home() {
  return (
    <>
      <Head>
        <title>Home | Sneakers Shop</title>
      </Head>
      <main>
        <Hero />
        <Trending />
        <Banners />
        <Footer />
      </main>
    </>
  )
}
