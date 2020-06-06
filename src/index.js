import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'


import './assets/custom.scss'
import './fontawesome'
import App from './components/App'
import ErrorBoundary from './components/ErrorBoundary'
import client from './utils/apolloClient'


const refresh = () => render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <ApolloProvider client={client}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root'),
)

refresh()
