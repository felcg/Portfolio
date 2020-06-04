import React from 'react'
import { Route, Switch } from 'react-router-dom'

import FrontPage from './FrontPage'

export default () => (
  <Switch>
    <Route exact path="/" component={FrontPage} />
  </Switch>

)
