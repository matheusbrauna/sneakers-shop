import Head from 'next/head'
import { useState } from 'react'
import { Sneaker } from '../../components/Sneaker'
import { Spinner } from '../../components/Spinner'
import { useGetSneakersByCategory } from '../hooks'
import {
  TabRoot,
  TabList,
  TabTrigger,
  TabContent,
} from './components/CategoryTabs'

export function Products() {
  const [tab, setTab] = useState('Men')

  const { sneakers } = useGetSneakersByCategory({
    tab,
  })

  return (
    <>
      <Head>
        <title>Produtos | Sneakers Shop</title>
      </Head>
      <main className="relative grid pb-8 headerPadding place-items-center">
        <TabRoot value={tab} onValueChange={(value) => setTab(value)}>
          <TabList>
            <TabTrigger value="Men">Homens</TabTrigger>
            <TabTrigger value="Women">Mulheres</TabTrigger>
            <TabTrigger value="Children">Crianças</TabTrigger>
          </TabList>

          {!sneakers && <Spinner />}

          {sneakers && (
            <TabContent value={tab}>
              {sneakers.map((sneaker) => (
                <Sneaker key={sneaker.id} sneaker={sneaker} />
              ))}
            </TabContent>
          )}
        </TabRoot>
      </main>
    </>
  )
}
