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
            Full-stack engineer creating responsive design for both Mobile and Web Apps with extensive knowledge in building websites from ground up and working with API's. Specialize in Python and Django. Profession skills include coaching peers on coding best practices, written and verbal communication, and task prioritization. My Future career goals include leveraging my leadership skills, building web apps utilizing python as back-end, and learning from mentors.
          </p>
    </Container>
  )
}

export default About