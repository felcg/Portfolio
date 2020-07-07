import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'

import FrontPage from './FrontPage'
import Post from './Posts/Post'
import Posts from './Posts/Posts'
import Contato from './Contato/Contato'

export default () => (
  <Switch>
    <Route exact path="/" component={withRouter(FrontPage)} />
    <Route exact path="/contato" component={withRouter(Contato)} />
    <Route exact path="/posts/" component={withRouter(Posts)} />
    <Route exact path="/posts/:id" component={withRouter(Post)} />
  </Switch>

)
