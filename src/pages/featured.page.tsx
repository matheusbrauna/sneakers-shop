import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { Spinner } from 'phosphor-react'
import { useState } from 'react'
import { Sneaker } from '../components/Sneaker'
import { GetSneakersByIsFeaturedDocument } from '../graphql/generated'
import { useGetSneakersByIsFeatured } from '../hooks'
import { client, ssrCache } from '../services/urql'
import {
  TabRoot,
  TabList,
  TabTrigger,
  TabContent,
} from './products/components/CategoryTabs'

type FeaturedProps = NextPage

export default function FeaturedPage({}: FeaturedProps) {
  const [tab, setTab] = useState('Men')

  const { sneakers } = useGetSneakersByIsFeatured({
    tab,
  })

  return (
    <>
      <Head>
        <title>Lançamentos | Sneakers Shop</title>
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

export const getStaticProps: GetStaticProps = async () => {
  await client
    .query(GetSneakersByIsFeaturedDocument, { tab: 'Men' })
    .toPromise()

  return {
    props: { urqlState: ssrCache.extractData() },
    revalidate: 60 * 60 * 24 * 7, // days
  }
}
