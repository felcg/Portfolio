/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Container, Form } from 'react-bootstrap'

const ContactForm = () => {
  const [state, setState] = useState('')

  const submitForm = (ev) => {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        setState('SUCCESS')
      } else {
        setState('ERROR')
      }
    }
    xhr.send(data)
  }

  return (
    <Container fluid className="bg-dark sections-container contact-container">
      <Container className="contact-form">
        <h1>Contato</h1>
        <Form action="https://formspree.io/meqrgnnw" method="POST" onSubmit={submitForm}>
          <Form.Group controlId="formEmail">
            <Form.Control type="text" placeholder="Seu email" name="_replyto" className="contact-input" />
          </Form.Group>

          <Form.Group controlId="formName">
            <Form.Control type="text" placeholder="Seu nome" name="name" className="contact-input" />
          </Form.Group>

          <Form.Group controlId="formMessage">
            <Form.Control type="text" placeholder="Sua mensagem" name="message" className="contact-input" />
          </Form.Group>
          <button type="submit" className="contact-button">
            Enviar
          </button>
        </Form>
      </Container>
    </Container>
  )
}

export default ContactForm
