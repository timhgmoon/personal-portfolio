import * as React from 'react';
import DailyDriverImage from '../images/daily-drive.png';
import DjangoImage from '../images/django-backend.png';
import * as projectStyles from './projects.module.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Project from '../components/project';

const Projects = () => {
  const containerClass = `px-5 py-4 ${projectStyles.background}`
  const project1Title = "Daily Driver"
  const project1Description = "Daily Driver's main goal was to allow developers like us to have one space where we can collaborate and create project tasks for team members. In this project we decided to use the MERN stack and my main role was creating the backend."

  const project2Title = "Social Media Backend"
  const project2Description = "Backend application that imitates most social media platform.  I used this project to get a better understanding on Django. The project allowed me to dive deeper into Django's REST framework documentation and learned more about CORS during the process."
  return(
    <Container className={containerClass} fluid>
      <h2 className={projectStyles.projectHeader}><span id="project">Projects</span></h2>
      <Row xs={1} md={2} className="pt-3">
        <Project 
          title={project1Title} 
          description={project1Description} 
          img={DailyDriverImage} 
          alt="daily driver">
        </Project>
      </Row>
      <Row xs={1} md={2}>
        {/* <Project
          title={project2Title}
          description={project2Description}
          img={DjangoImage}
          alt="django project"> */}
        <Col xs={{order: 1}} md={{order: 2}}>
          <img src={DjangoImage} alt="django project" width="100%" height="100%"></img>
        </Col>
        <Col xs={{order: 2}} md={{order: 1}}>
          <h3 className={projectStyles.projectTitle}>{project2Title}</h3>
          <p>{project2Description}</p>
        </Col>
        {/* </Project> */}
      </Row>
    </Container>
  )
}

export default Projects