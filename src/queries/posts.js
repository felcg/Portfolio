/* eslint-disable import/no-extraneous-dependencies */
import gql from 'graphql-tag'

const POSTS_QUERY = gql`
  query allPosts {
    posts {
      id
      Title
      Content
      Published_at
    }
  }
`

export default POSTS_QUERY
