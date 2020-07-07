import React from 'react'
import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Project = ({
  Tech, Github, Demo, Image, Sumario, Titulo,
}) => (
  <Card className="project-card">
    <div>
      <Card.Img src={Image} className="project-img" />
      <div className="text-light p-3">
        <h1>{Titulo}</h1>
        <p>{Sumario}</p>
        <div className="card-link-div p-3">
          <a href={Github} className="mr-3">
            <FontAwesomeIcon icon={['fab', 'github']} className="icons-img" />
            Github
          </a>
          <a href={Demo}>
            <FontAwesomeIcon icon={['fas', 'external-link-alt']} className="icons-img" />Demonstração
          </a>
        </div>
        <Card.Text className="font-weight-light">
          <span className="text-secondary">Tecnologias: </span>{Tech}
        </Card.Text>
      </div>
    </div>


  </Card>
)

export default Project
