import { GetServerSideProps, NextPage } from 'next'

import { Product } from '../../templates/Products/Product'

type ProductProps = NextPage & {
  slug: string
}

export default function ProductPage({ slug }: ProductProps) {
  return <Product slug={slug} />
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const slug = params?.slug

  return {
    props: {
      slug,
    },
  }
}
