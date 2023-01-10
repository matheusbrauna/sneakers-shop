import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Spinner, ArrowLeft } from 'phosphor-react'
import { useGetSneakersBySlug } from '../../hooks/useGetSneakerBySlug'
import { FullSneaker } from './components/FullSneaker'

type ProductProps = NextPage & {
  slug: string
}

export default function ProductPage({ slug }: ProductProps) {
  const router = useRouter()
  const { sneaker } = useGetSneakersBySlug({
    slug,
  })

  return (
    <>
      <Head>
        <title>{sneaker?.name} | Sneakers Shop</title>
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

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug

  return {
    props: {
      slug,
    },
    revalidate: 60 * 60 * 24 * 7, // days
  }
}
