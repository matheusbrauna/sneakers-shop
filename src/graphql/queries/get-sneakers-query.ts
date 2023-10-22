import { gql } from 'graphql-request'

export const getSneakersQuery = gql`
  query {
    sneakers {
      id
      name
      price
      quantity
      slug
      brand {
        name
      }
      category {
        name
      }
      coverImg {
        url
      }
      images {
        url
      }
      ratings {
        stars
      }
    }
  }
`
