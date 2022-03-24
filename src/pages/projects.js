import * as React from 'react';
import DailyDriverImage from '../images/daily-drive.png';
import DjangoImage from '../images/django-backend.png';
import * as projectStyles from './projects.module.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Projects = () => {
  const containerClass = `px-5 ${projectStyles.background}`
  return(
    <Container className={containerClass} fluid>
      <h1>Projects</h1>
      <Row>
        <Col xs={6}>
          <img src={DailyDriverImage} alt="project 1" width="100%" height="250px"></img>
        </Col>
        <Col xs={6}>
          <h2 className={projectStyles.projectTitle}>Daily Driver</h2>
          <p>Daily Driver's main goal was to allow developers like us to have one space where we can collaborate and create project tasks for team members. In this project we decided to use the MERN stack and my main role was creating the backend.</p>
        </Col>
        <Col xs={6}>
          <h2 className={projectStyles.projectTitle}>Social Media Backend</h2>
          <p>Backend application that imitates most social media platform.  I used this project to get a better understanding on Django. The project allowed me to dive deeper into Django's REST framework documentation and learned more about CORS during the process. </p>
        </Col>
        <Col xs={6} className={projectStyles.projectImg}>
          <img src={DjangoImage} alt="project 1" width="100%" height="250px"></img>
        </Col>
      </Row>
    </Container>
  )
}

export default Projects