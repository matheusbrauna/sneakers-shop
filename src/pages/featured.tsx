import { NextPage } from 'next'

import { Featured } from '../templates/Featured'

type FeaturedProps = NextPage

export default function FeaturedPage({}: FeaturedProps) {
  return <Featured />
}
