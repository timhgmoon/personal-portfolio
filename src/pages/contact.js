import * as React from 'react';
import * as contactStyles from './contact.module.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Contact = () => {
  const containerClass = `px-5 ${contactStyles.background}`
  const formContainer = `${contactStyles.secondary}`
  return(
    <Container className={containerClass} fluid>
      {/* <h2>Contact</h2>
      <Row className={formContainer}>
        <Col sm={8}>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button className="btn-secondary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col sm={4}>
          <p>Tim Moon</p>
          <p>timhgmoon@gmail.com</p>
          <p>Social Media</p>
          <ul>
            <li>github(add links here)</li>
            <li>linkedIn(add links here)</li>
          </ul>
        </Col>
      </Row>
       */}
    </Container>
  )
}

export default Contact