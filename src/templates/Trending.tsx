import Head from 'next/head'
import { useState } from 'react'
import { Sneaker } from '../components/Sneaker'
import { Spinner } from '../components/Spinner/index.'
import { useGetSneakersByIsTrendingQuery } from '../graphql/generated'
import {
  TabRoot,
  TabList,
  TabTrigger,
  TabContent,
} from './Products/components/CategoryTabs'

export function Trending() {
  const [tab, setTab] = useState('Men')

  const [{ data }] = useGetSneakersByIsTrendingQuery({
    variables: {
      category: tab,
      isTrending: true,
    },
  })

  return (
    <>
      <Head>
        <title>Trending | Sneakers Shop</title>
      </Head>
      <main className="relative grid pb-8 headerPadding place-items-center">
        <TabRoot value={tab} onValueChange={(value) => setTab(value)}>
          <TabList>
            <TabTrigger value="Men">Homens</TabTrigger>
            <TabTrigger value="Women">Mulheres</TabTrigger>
            <TabTrigger value="Children">Crianças</TabTrigger>
          </TabList>

          {!data?.category?.sneakers && <Spinner />}

          {data?.category?.sneakers && (
            <TabContent value={tab}>
              {data?.category?.sneakers?.map((sneaker) => (
                <Sneaker key={sneaker.id} sneaker={sneaker} />
              ))}
            </TabContent>
          )}
        </TabRoot>
      </main>
    </>
  )
}
