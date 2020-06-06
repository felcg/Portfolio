import gql from 'graphql-tag'

const POST_QUERY = gql`
  query Posts($id: ID!) {
    post(id: $id) {
      id
      Title
      Content
      Published_at
    }
  }
`

export default POST_QUERY
