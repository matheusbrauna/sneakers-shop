import Head from 'next/head'
import { useState } from 'react'
import { Sneaker } from '../../components/Sneaker'
import { useGetSneakersByCategoryQuery } from '../../graphql/generated'
import {
  TabRoot,
  TabList,
  TabTrigger,
  TabContent,
} from './components/CategoryTabs'

export function Products() {
  const [tab, setTab] = useState('Men')

  const [{ data }] = useGetSneakersByCategoryQuery({
    variables: {
      category: tab,
    },
  })

  return (
    <>
      <Head>
        <title>Produtos | Sneakers Shop</title>
      </Head>
      <main className="relative pb-8 headerPadding">
        <TabRoot value={tab} onValueChange={(value) => setTab(value)}>
          <TabList>
            <TabTrigger value="Men">Homens</TabTrigger>
            <TabTrigger value="Women">Mulheres</TabTrigger>
            <TabTrigger value="Children">Crianças</TabTrigger>
          </TabList>

          <TabContent value={tab}>
            {data?.category?.sneakers?.map((sneaker) => (
              <Sneaker key={sneaker.id} sneaker={sneaker} />
            ))}
          </TabContent>
        </TabRoot>
      </main>
    </>
  )
}
