import { NextPage } from 'next'

import { Product } from '../../templates/Products/Product'

type ProductProps = NextPage

export default function ProductPage({}: ProductProps) {
  return <Product />
}
