import * as React from 'react';
import * as aboutStyles from './about.module.css';
import Container from 'react-bootstrap/Container';

const About = () => {
  const containerClass = `d-flex flex-column justify-content-center px-5 ${aboutStyles.background}`
  return(
    <Container className={containerClass} id="about-me" fluid>
          <div className={aboutStyles.outerscreen}>
            
            <p>
            HI THERE, I'M
            </p>
            <p className={aboutStyles.name}>
              Tim Moon
            </p>
            <p className={aboutStyles.description}>
              I am a Software Engineer with experience in creating modern and responsive Web applications.
            </p>
          </div>
          
    </Container>
  )
}

export default About