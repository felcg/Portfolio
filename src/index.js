import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import './assets/custom.scss'
import App from './components/App'
import ErrorBoundary from './components/ErrorBoundary'
import './fontawesome'


const refresh = () => render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById('root'),
)

refresh()
