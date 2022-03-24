import * as React from 'react';
import * as aboutStyles from './about.module.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProfileImage from '../images/profile-image.png';

const About = () => {
  const containerClass = `d-flex flex-column justify-content-center px-5 ${aboutStyles.background}`
  return(
    <Container className={containerClass} fluid>
          <p>
          HI THERE, I'M
          </p>
          <p className={aboutStyles.name}>
            Tim Moon
          </p>
          <p className={aboutStyles.jobTitle}>
            Software Developer
          </p>
          <p className={aboutStyles.description}>
            Recent graduate at General Assembly (SEI program) specializing in Python and Django. Professional skills include coaching, adaptability, and problem solving. I am looking for an opportunity that will allow me to express my ideas and make my code come to life!
          </p>
    </Container>
  )
}

export default About