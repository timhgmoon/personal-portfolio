import * as React from 'react';
import * as aboutStyles from './about.module.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProfileImage from '../images/profile-image.png';

const About = () => {
  return(
    <Container className="bg-light px-5">
      <Row className="d-flex align-items-center">
        <Col>
          <p>
          HI THERE, I'M
          </p>
          <p className={aboutStyles.name}>
            Tim Moon
          </p>
          <p className={aboutStyles.jobTitle}>
            Software Developer
          </p>
          <p>
            Recent graduate at General Assembly (SEI program) specializing in Python and Django. Professional skills include coaching, adaptability, and problem solving. I am looking for an opportunity that will allow me to express my ideas and make my code come to life!
          </p>
        </Col>  
        <Col className="d-flex justify-content-end">
          <img src={ProfileImage} alt="profile image" width="300px" height="300px"></img>        
        </Col>
      </Row>
    </Container>
  )
}

export default About