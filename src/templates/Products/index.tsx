import Head from 'next/head'
import { useState } from 'react'
import { Sneaker } from '../../components/Sneaker'
import {
  TabRoot,
  TabList,
  TabTrigger,
  TabContent,
} from './components/CategoryTabs'

export function Products() {
  const [tab, setTab] = useState('men')

  console.log(tab)

  return (
    <>
      <Head>
        <title>Produtos | Sneakers Shop</title>
      </Head>
      <main className="relative pb-8 headerPadding">
        <TabRoot value={tab} onValueChange={(value) => setTab(value)}>
          <TabList>
            <TabTrigger value="men">Homens</TabTrigger>
            <TabTrigger value="women">Mulheres</TabTrigger>
            <TabTrigger value="children">Crianças</TabTrigger>
          </TabList>

          <TabContent value={tab}>
            <Sneaker />
            <Sneaker />
            <Sneaker />
            <Sneaker />
            <Sneaker />
            <Sneaker />
            <Sneaker />
            <Sneaker />
            <Sneaker />
          </TabContent>
        </TabRoot>
      </main>
    </>
  )
}
