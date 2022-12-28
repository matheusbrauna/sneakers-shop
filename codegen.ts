import type { CodegenConfig } from '@graphql-codegen/cli'

import { loadEnvConfig } from '@next/env'
loadEnvConfig(process.cwd())

export const config: CodegenConfig = {
  overwrite: true,

  schema: process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT ?? '',

  documents: ['./src/graphql/**/*.graphql'],

  generates: {
    './src/graphql/generated.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-urql'],
    },
  },

  config: {
    withHooks: true,
  },

  hooks: {
    afterAllFileWrite: 'eslint --fix',
  },
}

export default config
