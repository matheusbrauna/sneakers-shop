import Head from 'next/head'
import { useState } from 'react'
import { Sneaker } from '../components/Sneaker'
import { Spinner } from '../components/Spinner'
import { useGetSneakersByIsTrending } from './hooks'
import {
  TabRoot,
  TabList,
  TabTrigger,
  TabContent,
} from './Products/components/CategoryTabs'

export function Trending() {
  const [tab, setTab] = useState('Men')

  const { sneakers } = useGetSneakersByIsTrending({
    tab,
  })

  return (
    <>
      <Head>
        <title>Em alta | Sneakers Shop</title>
      </Head>
      <main className="paddingToHeader">
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
