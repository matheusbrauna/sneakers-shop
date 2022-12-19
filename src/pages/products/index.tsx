import { NextPage } from 'next'

import { Products } from '../../templates/Products'

type ProductsProps = NextPage

export default function ProductsPage({}: ProductsProps) {
  return <Products />
}
