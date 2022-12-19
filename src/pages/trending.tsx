import { NextPage } from 'next'

import { Trending } from '../templates/Trending'

type TrendingProps = NextPage

export default function TrendingPage({}: TrendingProps) {
  return <Trending />
}
