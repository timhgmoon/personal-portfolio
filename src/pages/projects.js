import * as React from 'react';
import DailyDriverImage from '../images/daily-drive.png';
import DjangoImage from '../images/django-backend.png';
import SpotifyProjImage from '../images/spotify-project.png'
import * as projectStyles from './projects.module.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Project from '../components/project';
const Projects = () => {
  //projects
  const project1 = {
    title: "Daily Driver",
    description: "Daily Driver's main goal was to allow developers like us to have one space where we can collaborate and create project tasks for team members. In this project we decided to use the MERN stack and my main role was creating the backend.",
    img: DailyDriverImage,
    alt: "daily driver",
    skills: "Html | Css | React | mongoDB",
    link: "https://github.com/timhgmoon/Daily-Driver-Backend",
    button: <Button className="btn btn-secondary btn-sm mx-2"
              href="https://pages.git.generalassemb.ly/Undefined/Daily-Driver-Client/"
              target="_blank"
              rel="noreferrer">
              Live Link
            </Button>
  }
  const project2 = {
    title: "Social Media Backend",
    description: "Backend application that imitates most social media platform.  I used this project to get a better understanding of Django. The project allowed me to dive deeper into Django's REST framework documentation and learned more about CORS during the process.",
    img: DjangoImage,
    alt: "social media back end",
    skills: "Html | Css | React | Python | Django",
    link: "https://github.com/timhgmoon/django-social-media"
  }
  const project3 = {
    title: "Top 100 KR",
    description: "Project utilizes both Spotify and Melon Chart API(Korea's music billboard). The app grabs the current top 100 songs in Korea and displays on home screen while allowing users to listen on Spotify. *Melon API discontinued*",
    img: SpotifyProjImage,
    alt: "top 100 kr",
    skills: "Html | Css | React | Bootstrap",
    link: "https://github.com/timhgmoon/top-100"
  }
  
  

  //css mods
  const containerClass = `px-5 py-4 ${projectStyles.background}`
  const headerClass = `pt-4 ${projectStyles.projectHeader}`

  return(
    <Container className={containerClass} fluid>
      <h2 className={headerClass}><span id="project">Projects</span></h2>
      <Row xs={1} md={2} lg={3} className="pt-4">
        <Project
          title={project1.title}
          description={project1.description}
          img={project1.img}
          alt={project1.alt}
          skills={project1.skills}
          link={project1.link}
          button={project1.button}/>
        <Project
          title={project2.title}
          description={project2.description}
          img={project2.img}
          alt={project2.alt}
          skills={project2.skills}
          link={project2.link}/>
        <Project
          title={project3.title}
          description={project3.description}
          img={project3.img}
          alt={project3.alt}
          skills={project3.skills}
          link={project3.link}/>
      </Row>
      
    </Container>
    
  )
}

export default Projects