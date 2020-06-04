import React from 'react'
import { Card } from 'react-bootstrap'

const Project = ({
  Title, Text, Github, Demo,
}) => (
  <Card className="bg-secondary project-card">
    <Card.Body>
      <Card.Title>{Title}</Card.Title>
      <Card.Text>
        {Text}
        <a href={Github}>Github</a>
        <a href={Demo}>Demonstração</a>
      </Card.Text>
    </Card.Body>
  </Card>
)

export default Project
