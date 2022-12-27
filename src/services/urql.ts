import {
  cacheExchange,
  createClient,
  dedupExchange,
  fetchExchange,
  ssrExchange,
} from 'urql'

const isServerSide = typeof window === 'undefined'
const ssrCache = ssrExchange({ isClient: !isServerSide })

const client = createClient({
  url: process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT ?? '',
  exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
  fetchOptions: {
    headers: {
      Authorization: `bearer ${process.env.NEXT_PUBLIC_GRAPHCMS_TOKEN}`,
    },
  },
})

export { client, ssrCache }
