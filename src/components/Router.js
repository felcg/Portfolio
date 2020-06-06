import React from 'react'
import { Route, Switch } from 'react-router-dom'

import FrontPage from './FrontPage'
import Post from './Posts/Post'
import Posts from './Posts/Posts'

export default () => (
  <Switch>
    <Route exact path="/" component={FrontPage} />
    <Route exact path="/posts/" component={Posts} />
    <Route exact path="/posts/:id" component={Post} />
  </Switch>

)
