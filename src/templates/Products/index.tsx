import Head from 'next/head'
import { useState } from 'react'
import { Sneaker } from '../../components/Sneaker'
import { Spinner } from '../../components/Spinner/index.'
import { useGetSneakersByCategoryQuery } from '../../graphql/generated'
import {
  TabRoot,
  TabList,
  TabTrigger,
  TabContent,
} from './components/CategoryTabs'

export function Products() {
  const [tab, setTab] = useState('Men')

  const [{ data, fetching }] = useGetSneakersByCategoryQuery({
    variables: {
      category: tab,
    },
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

          {fetching && <Spinner />}

          {!fetching && (
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
