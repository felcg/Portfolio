import React from 'react'
import { Navbar } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavBar = () => (

  <Navbar fixed="top" expand="lg" className="bg-dark sidenav">
    <div className="text-welcome">
      <h1 className="font-weight-bold text-primary">Felipe CG</h1>
      <p className="text-secondary">Olá, sou um desenvolvedor web com foco em Javascript.
        Tenho prática com React, Node.js e Express. Além disso também tenho experiência com
        bancos de dados relacionais e não relacionais. Outras tecnologias que também uso são HTML5,
        CSS e Git.
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
  </Navbar>
)

export default NavBar
