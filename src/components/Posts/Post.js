import React from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router'
import ReactMarkdown from 'react-markdown'
import Moment from 'react-moment'
import Query from '../Query'
import 'moment/locale/pt-br'

import POST_QUERY from '../../queries/post'

const Post = () => {
  const { id } = useParams()
  return (
    <Container fluid className="bg-dark sections-container">
      <Query query={POST_QUERY} id={id}>
        {({ data: { post } }) => (
          <div className="post-container">
            <div className="post-title">
              <h1>{post.Title}</h1>
            </div>
            <ReactMarkdown source={post.Content} className="text-light" />
            <p>
              <Moment locale="pt-br" format="DD MMMM YYYY">{post.Published_at}</Moment>
            </p>
          </div>
        )}
      </Query>
    </Container>
  )
}

export default Post
