import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_API,
  headers: {
    Authorization: `bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
  },
})
