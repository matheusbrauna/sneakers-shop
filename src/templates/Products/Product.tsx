import Head from 'next/head'
import { useRouter } from 'next/router'
import { ArrowLeft } from 'phosphor-react'
import { Spinner } from '../../components/Spinner/index.'

import { useGetSneakerBySlugQuery } from '../../graphql/generated'
import { FullSneaker } from './components/FullSneaker'

interface ProductProps {
  slug: string
}

export function Product({ slug }: ProductProps) {
  const router = useRouter()

  const [{ data }] = useGetSneakerBySlugQuery({
    variables: {
      slug,
    },
  })

  return (
    <>
      <Head>
        <title> produto | Sneakers Shop</title>
      </Head>
      <main>
        <div className="container flex items-center justify-center gap-8 pb-16 headerPadding lg:mainHeight">
          {!data?.sneaker && <Spinner />}

          {data?.sneaker && (
            <>
              <button
                className="self-start"
                type="button"
                onClick={() => router.back()}
              >
                <ArrowLeft size={32} />
              </button>
              <FullSneaker sneaker={data?.sneaker} />
            </>
          )}
        </div>
      </main>
    </>
  )
}
