import { GraphQLClient, gql } from 'graphql-request'

export const getPrograms = async () => {
  const endpoint =
    'https://api-us-east-1.graphcms.com/v2/ckw2angnz5tq301wdarlqcllx/master'

  const graphQLClient = new GraphQLClient(endpoint)

  const query = gql`
    {
      programs {
        id
        title
        slug
        subHeading
        description
        heroDescription
        coverage
        highlights
        image {
          url
          height
          width
        }
      }
    }
  `

  return await graphQLClient.request(query)
}

export const getProgramsSlugs = async () => {
  const endpoint =
    'https://api-us-east-1.graphcms.com/v2/ckw2angnz5tq301wdarlqcllx/master'

  const graphQLClient = new GraphQLClient(endpoint)

  const query = gql`
    {
      programs {
        slug
      }
    }
  `

  return await graphQLClient.request(query)
}

export const getProgram = async (slug) => {
  const endpoint =
    'https://api-us-east-1.graphcms.com/v2/ckw2angnz5tq301wdarlqcllx/master'

  const graphQLClient = new GraphQLClient(endpoint)

  const query = gql`
    query getProgram($slug: String!) {
      programs(where: { slug: $slug }) {
        title
        slug
        subHeading
        description
        heroDescription
        coverage
        highlights
        image {
          url
          height
          width
        }
        image2 {
          url
          height
          width
        }
      }
    }
  `

  const variables = { slug }

  return await graphQLClient.request(query, variables)
}
