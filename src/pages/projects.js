import * as React from 'react';
import Project1 from '../images/project1.jpg'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Projects = () => {
  return(
    <Container>
      <Row className="h-50">
        <Col xs={6}>
          <h1>Project Name</h1>
          <p>Project description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus ex eget nisl vestibulum dictum. Quisque felis libero, interdum pellentesque nunc malesuada, pellentesque elementum lacus. Nullam hendrerit magna quam, ultrices maximus augue commodo in. Proin efficitur augue orci. Maecenas eget diam mauris. Sed sagittis ultrices enim quis fringilla.</p>
        </Col>
        <Col xs={6}>
          <img src={Project1} alt="project 1" fluid></img>
        </Col>
      </Row>
    </Container>
  )
}

export default Projects