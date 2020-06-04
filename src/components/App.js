import React from 'react'
import Router from './Router'
import Navbar from './Navbar'
import '../assets/custom.scss'

export default () => (
  <div className="page">
    <Navbar />
    <Router />
  </div>
)
