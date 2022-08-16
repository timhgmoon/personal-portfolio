import * as React from 'react';
import * as aboutStyles from './about.module.css';
import Container from 'react-bootstrap/Container';

const About = () => {
  const containerClass = `d-flex flex-column justify-content-center px-5 ${aboutStyles.background}`
  return(
    <Container className={containerClass} id="about-me" fluid>
          <p>
          HI THERE, I'M
          </p>
          <p className={aboutStyles.name}>
            Tim Moon
          </p>
          <p className={aboutStyles.jobTitle}>
            Software Engineer
          </p>
          <p className={aboutStyles.description}>
            I am a Full-stack Engineer creating modern and responsive Web applications.  My passion for learning allows me to stay in tune with the latest tools and technology.
          </p>
    </Container>
  )
}

export default About