import React from 'react'
import { Container } from 'react-bootstrap'
import Project from './Project'

const Projects = () => (
  <Container className="projects-container pt-4">
    <h1 className="text-primary">Projetos</h1>
    <Project Text="React, Sass, Bootstrap, React-Bootstrap" Github="https://github.com/felcg/BootstrapLandingPage" Demo="https://felcg.github.io/BootstrapLandingPage/" Image="https://res.cloudinary.com/dj641se4s/image/upload/w_600/q_100/v1591298728/project1.png" />
    <Project Text="React, Sass, Bootstrap, React-Bootstrap" Github="https://github.com/felcg/BootstrapLandingPage2" Demo="https://felcg.github.io/BootstrapLandingPage2/" Image="https://res.cloudinary.com/dj641se4s/image/upload/w_600/q_auto/v1591298343/project2.png" />
  </Container>
)

export default Projects
