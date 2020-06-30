import React from 'react'
import { Container } from 'react-bootstrap'
import Project from './Project'

const Projects = () => (
  <Container className="projects-container">
    <h1>Projetos</h1>
    <Project Text="Express, Redis, Redux, React, Sass, Bootstrap, PostgreSQL" Github="https://github.com/felcg/Gamelogged" Demo="https://felcg.github.io/Gamelogged/" Image="https://res.cloudinary.com/dj641se4s/image/upload/c_scale,q_auto,w_600/v1593504612/gamelogged.png" />
    <Project Text="React, Sass, Bootstrap, React-Bootstrap" Github="https://github.com/felcg/BootstrapLandingPage" Demo="https://felcg.github.io/BootstrapLandingPage/" Image="https://res.cloudinary.com/dj641se4s/image/upload/w_600/q_100/v1591298728/project1.png" />
    <Project Text="React, Sass, Bootstrap, React-Bootstrap, GraphQL, Strapi" Github="https://github.com/felcg/Portfolio" Demo="https://felcg.github.io/Portfolio/" Image="https://res.cloudinary.com/dj641se4s/image/upload/c_scale,w_600/v1591473455/Portfolio.png" />
  </Container>
)

export default Projects
