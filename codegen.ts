import dotenv from 'dotenv'
import type { IGraphQLConfig } from 'graphql-config'

dotenv.config({
  debug: true,
  path: '.env.local',
})

const config: IGraphQLConfig = {
  schema: [process.env.NEXT_PUBLIC_HYGRAPH_URL],
  documents: ['src/graphql/**/*.gql'],
  extensions: {
    codegen: {
      debug: true,
      verbose: true,
      ignoreNoDocuments: true,
      overwrite: true,
      generates: {
        'src/__generated__/index.ts': {
          plugins: [
            'typescript',
            'typescript-operations',
            'typescript-react-query',
            {
              add: {
                content: '/* eslint-disable */\n// @ts-nocheck\n',
              },
            },
          ],
          config: {
            preResolveType: true,
            skipTypename: true,
            dedupeFragments: true,
            pureMagicComment: true,
            disableDescriptions: true,
            fetcher: 'graphql-request',
            legacyMode: false,
            exposeFetcher: true,
            exposeDocument: true,
            exposeQueryKeys: true,
            exposeMutationKeys: true,
            addInfiniteQuery: true,
          },
        },
      },
    },
  },
}

export default config
