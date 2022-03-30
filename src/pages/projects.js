import * as React from 'react';
import DailyDriverImage from '../images/daily-drive.png';
import DjangoImage from '../images/django-backend.png';
import * as projectStyles from './projects.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Project from '../components/project';
const Projects = () => {
  //content variables
  const project1 = {
    title: "Daily Driver",
    description: "Daily Driver's main goal was to allow developers like us to have one space where we can collaborate and create project tasks for team members. In this project we decided to use the MERN stack and my main role was creating the backend.",
    img: DailyDriverImage,
    alt: "daily driver",
    skills: "Html | Css | React | mongoDB",
    link: "https://github.com/timhgmoon/Daily-Driver-Backend"
  }
  const project2 = {
    title: "Social Media Backend",
    description: "Backend application that imitates most social media platform.  I used this project to get a better understanding on Django. The project allowed me to dive deeper into Django's REST framework documentation and learned more about CORS during the process.",
    img: DjangoImage,
    alt: "social media back end",
    skills: "Html | Css | React | Python | Django",
    link: "https://github.com/timhgmoon/django-social-media"
  }

  //css mods
  const containerClass = `px-5 py-4 ${projectStyles.background}`
  const headerClass = `pt-4 ${projectStyles.projectHeader}`

  return(
    <Container className={containerClass} fluid>
      <h2 className={headerClass}><span id="project">Projects</span></h2>
      <Row xs={1} md={2} className="pt-4">
        <Project
          title={project1.title}
          description={project1.description}
          img={project1.img}
          alt={project1.alt}
          skills={project1.skills}
          link={project1.link}/>
        <Project
          title={project2.title}
          description={project2.description}
          img={project2.img}
          alt={project2.alt}
          skills={project2.skills}
          link={project2.link}/>
      </Row>
      
    </Container>
    
  )
}

export default Projects