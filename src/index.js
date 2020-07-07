import React from 'react'
import { render } from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'


import './assets/custom.scss'
import './fontawesome'
import App from './components/App'
import ErrorBoundary from './components/ErrorBoundary'
import client from './utils/apolloClient'


const refresh = () => render(
  <HashRouter basename="/">
    <ApolloProvider client={client}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </ApolloProvider>
  </HashRouter>,
  document.getElementById('root'),
)

refresh()
