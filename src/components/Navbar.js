import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavBar = () => {
  const location = useLocation()
  const route = location.pathname

  return (

    <Navbar fixed="top" expand="lg" className="bg-dark sidenav">
      <div className="text-welcome">
        <h1 className="font-weight-bold text-primary">Felipe CG</h1>
        <p className="text-light">Olá, sou um desenvolvedor web com foco em Javascript.
          Tenho prática com React, Node.js e GraphQL. Além disso também tenho experiência com
          bancos de dados MongoDB e PostgreSQL.
        </p>
      </div>
      <div className="icons-div">
        <a href="https://github.com/felcg" className="icons-link">
          <FontAwesomeIcon icon={['fab', 'github']} size="2x" className="icons-img" />

          GitHub
        </a>
        <a href="https://www.linkedin.com/in/xfelipecg/" className="icons-link">
          <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" className="icons-img" />
          Linkedin
        </a>
      </div>

      <div className="buttons-container">
        <Link to="/">
          {route === '/' ? <div className="dot-full" /> : <div className="dot-empty" />}
          <p>Projetos</p>
        </Link>
        <div className="line2" />
        <Link to="/posts">
          {route.includes('/posts') ? <div className="dot-full" /> : <div className="dot-empty" />}
          <p>Blog</p>
        </Link>
        <div className="line2" />
        <Link to="/contato">
          {route === '/contato' ? <div className="dot-full" /> : <div className="dot-empty" />}
          <p>Contato</p>
        </Link>

      </div>

    </Navbar>
  )
}

export default NavBar
