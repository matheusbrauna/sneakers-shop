import { GraphQLClient } from 'graphql-request'

export const graphqlClient = new GraphQLClient(
  process.env.NEXT_PUBLIC_HYGRAPH_URL,
  {
    headers: {
      Authorization: process.env.NEXT_PUBLIC_HYGRAPH_TOKEN,
    },
    next: {
      revalidate: 3600,
    },
  },
)
