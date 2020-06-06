import React from 'react'
import { Container } from 'react-bootstrap'

import PostContainer from './PostContainer'
import Query from '../Query/index'
import POSTS_QUERY from '../../queries/posts'

const Posts = () => (
  <Container fluid className="bg-dark sections-container posts-container">

    <Query query={POSTS_QUERY} id={null}>
      {({ data: { posts } }) => (
        <Container>
          <h1>Posts</h1>
          {posts.map((post) => (
            <PostContainer
              Title={post.Title}
              PublishedAt={post.Published_at}
              Id={post.id}
              key={post.id}
            />
          ))}
        </Container>
      )}
    </Query>
  </Container>
)

export default Posts
