import React, { useState, useEffect } from 'react';
import { navigate } from 'gatsby';
import axios from 'axios';
import * as contactStyles from './contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePen } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Contact = () => {
  // css
  const containerClass = `px-5 py-4 ${contactStyles.background}`
  const formContainer = `p-2 my-4 ${contactStyles.secondary}`
  const formContent = `d-flex flex-column justify-content-center ${contactStyles.contactInfo}`
  const headerClass = `pt-3 ${contactStyles.contactHeader}`

  //Hooks
  const [toSuccess, setToSuccess] = React.useState(false)

  useEffect (() => {
    if(toSuccess === true) {
      navigate('/form-submitted/');
    }
  }, [toSuccess])

  const [emailInfo, setEmailInfo] = useState({
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setEmailInfo({
      ...emailInfo,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://sheet.best/api/sheets/18e74236-45e6-436d-bdd3-d2f0bd45cda8', emailInfo)
      .then(response => {
        console.log(response)
      })
    setToSuccess(true)
  }

  return(
    <Container className={containerClass} fluid>
      <h2 className={headerClass}><span id="contact">Contact</span></h2>
      <Row className={formContainer}>
        <Col sm={8}>
          <Form  onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address:</Form.Label>
              <Form.Control type="email" placeholder="example@domain.com" name="email" value={emailInfo.email} onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message:</Form.Label>
              <Form.Control as="textarea" rows={6} name="message" value={emailInfo.message} onChange={handleChange}/>
            </Form.Group>
            <Button className="btn-secondary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col sm={4} className={formContent}>
          <p>Tim Moon</p>
          <p>timhgmoon@gmail.com</p>
          <Row>
            <Col xs={6}><p className={contactStyles.iconHeader}>Social Media</p></Col>
            <Col xs={6}><p className={contactStyles.iconHeader}>Resume</p></Col>
            <Col xs={6}>
              <ul>
                <li>
                  <a href="https://github.com/timhgmoon" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="xl"/>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/timhgmoon/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size="xl" color="#2867B2"/>
                  </a>
                </li>
              </ul>
            </Col>
            <Col xs={6}>
              <a href="https://drive.google.com/file/d/1bXxRFz1PO2wATwAXNYOqc8JeNDL0Mqz8/view?usp=sharing" target="_blank" rel="noreferrer" id={contactStyles.resumeIcon}>
                <FontAwesomeIcon icon={faSquarePen} size="xl"/>
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
      
    </Container>
  )
}

export default Contact