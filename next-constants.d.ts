declare namespace NodeJS {
  export interface ProcessEnv {
    NEXT_PUBLIC_APP_URL: string
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: string
    CLERK_SECRET_KEY: string
    NEXT_PUBLIC_HYGRAPH_URL: string
    NEXT_PUBLIC_HYGRAPH_TOKEN: string
  }
}
