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
            Recent graduate at General Assembly(SEI) with extensive knowledge in building websites from ground up and working with API’s. Specialize in Python and Django. Professional skills include coaching, prioritization, written and verbal communication. One of my future career goals includes stepping into a role that will help leverage my leadership skills.
          </p>
    </Container>
  )
}

export default About