import * as React from 'react';
import * as contactStyles from './contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Contact = () => {
  const containerClass = `px-5 py-4 ${contactStyles.background}`
  const formContainer = `p-2 my-4 ${contactStyles.secondary}`
  const formContent = `d-flex flex-column justify-content-center ${contactStyles.contactInfo}`
  return(
    <Container className={containerClass} fluid>
      <h2 className={contactStyles.contactHeader}><span id="contact">Contact</span></h2>
      <Row className={formContainer}>
        <Col sm={8}>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address:</Form.Label>
              <Form.Control type="email" placeholder="example@domain.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message:</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button className="btn-secondary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col sm={4} className={formContent}>
          <p>Tim Moon</p>
          <p>timhgmoon@gmail.com</p>
          <p>Social Media:</p>
          <ul>
            <li>
              <a href="https://github.com/timhgmoon" target="_blank">
                <FontAwesomeIcon icon={faGithub} size="xl"/>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/timhgmoon/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} size="xl" color="#2867B2"/>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
      
    </Container>
  )
}

export default Contact