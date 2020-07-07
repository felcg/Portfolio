import React from 'react'
import { Container } from 'react-bootstrap'
import Project from './Project'

const Projects = () => (
  <Container className="projects-container">
    <h1>Projetos</h1>
    <Project Titulo="Gamelogged" Sumario="Site para fazer buscas em banco de dados de jogos eletrônicos. É possível procurar jogos usando filtros ou usando a barra de busca. Nesse projeto usei a API do IGDB.com, site que possui um banco de dados com milhares de jogos." Tech="Express, Redis, Redux, React, Sass, Bootstrap, Heroku" Github="https://github.com/felcg/Gamelogged" Demo="https://felcg.github.io/Gamelogged/" Image="https://res.cloudinary.com/dj641se4s/image/upload/c_scale,q_auto,w_600/v1593504612/gamelogged.png" />

    <Project Titulo="Show do Milhão" Sumario="Jogo inspirado no programa de TV Show do Milhão, exibido pelo SBT em 1997. Possui 300 perguntas, 3 dificuldades, opções para customizar o jogo e ranking local. " Tech="React, Redux, Sass, Bootstrap" Github="https://github.com/felcg/show_do_milhao" Demo="https://felcg.github.io/show_do_milhao/#/" Image="https://res.cloudinary.com/dj641se4s/image/upload/c_scale,q_auto,w_600/v1594082510/show_do_milhao.png" />

    <Project Titulo="Landing Page Personalizada" Sumario="Um template para servir como ponto de partida para criação de uma Landing Page. É fácil de customizar e transformar a página para suprir as necessidades específicas de cada projeto." Tech="React, Sass, Bootstrap" Github="https://github.com/felcg/BootstrapLandingPage" Demo="https://felcg.github.io/BootstrapLandingPage/" Image="https://res.cloudinary.com/dj641se4s/image/upload/w_600/q_100/v1591298728/project1.png" />

    <Project Titulo="Portfolio" Sumario="Esse site que você está! A área de Blogs foi feita usando GraphQL e Strapi." Tech="React, Sass, Bootstrap, GraphQL, Strapi, Heroku" Github="https://github.com/felcg/Portfolio" Demo="https://felcg.github.io/Portfolio/" Image="https://res.cloudinary.com/dj641se4s/image/upload/c_scale,w_600/v1591473455/Portfolio.png" />
  </Container>
)

export default Projects
