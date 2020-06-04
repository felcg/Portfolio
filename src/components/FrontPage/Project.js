import React from 'react'
import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Project = ({
  Text, Github, Demo, Image,
}) => (
  <Card className="project-card">
    <Card.Img src={Image} />
    <div className="card-link-div p-3">
      <a href={Github}>
        <FontAwesomeIcon icon={['fab', 'github']} className="icons-img" />
        Github
      </a>
      <a href={Demo}>
        <FontAwesomeIcon icon={['fas', 'external-link-alt']} className="icons-img" />Demonstração
      </a>
    </div>
    <Card.Text className="text-white font-weight-light">
      <span className="text-secondary">Tecnologias: </span>{Text}
    </Card.Text>
  </Card>
)

export default Project
