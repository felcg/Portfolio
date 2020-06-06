import React from 'react'
import { Container } from 'react-bootstrap'

import PostContainer from './PostContainer'
import Query from '../Query/index'
import POSTS_QUERY from '../../queries/posts'

const Posts = () => (
  <Container fluid className="bg-dark sections-container">
    <h1 className="text-primary">Blog</h1>
    <Query query={POSTS_QUERY} id={null}>
      {({ data: { posts } }) => (
        <div>
          {posts.map((post) => (
            <PostContainer
              Title={post.Title}
              PublishedAt={post.Published_at}
              Id={post.id}
              key={post.id}
            />
          ))}
        </div>
      )}
    </Query>
  </Container>
)

export default Posts
