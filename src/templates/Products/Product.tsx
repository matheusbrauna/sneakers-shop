import Head from 'next/head'
import { useRouter } from 'next/router'
import { ArrowLeft } from 'phosphor-react'
import { Spinner } from '../../components/Spinner/index'

import { useGetSneakersBySlug } from '../hooks/useGetSneakerBySlug'
import { FullSneaker } from './components/FullSneaker'

interface ProductProps {
  slug: string
}

export function Product({ slug }: ProductProps) {
  const router = useRouter()

  const { sneaker } = useGetSneakersBySlug({
    slug,
  })

  return (
    <>
      <Head>
        <title> produto | Sneakers Shop</title>
      </Head>
      <main className="relative paddingToHeader">
        <div className="container flex flex-col items-center justify-center gap-8 py-16 sm:flex-row">
          {!sneaker && <Spinner />}

          {sneaker && (
            <>
              <button
                className="self-start"
                type="button"
                onClick={() => router.back()}
              >
                <ArrowLeft size={32} />
              </button>
              <FullSneaker sneaker={sneaker} />
            </>
          )}
        </div>
      </main>
    </>
  )
}
