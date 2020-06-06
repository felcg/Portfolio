import React from 'react'
import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import 'moment/locale/pt-br'

const PostContainer = ({
  Title, PublishedAt, Id,
}) => (
  <Card className="project-card">
    <div className="card-link-div p-3">
      <Link to={`/posts/${Id}`} className="blog-title-list">
        <FontAwesomeIcon icon={['fas', 'feather-alt']} className="icons-img" />
        {Title}
      </Link>
    </div>
    <Card.Text className="text-secondary font-weight-light">
      <Moment locale="pt-br" format="DD MMMM YYYY">{PublishedAt}</Moment>
    </Card.Text>
  </Card>
)

export default PostContainer
