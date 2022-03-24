import * as React from 'react';
import * as projectStyles from '../pages/projects.module.css';
import Col from 'react-bootstrap/Col';

const Project = ({title, description, img, alt}) => {
  return (
    <>
      <Col sm={6}>
        <h2 className={projectStyles.projectTitle}>{title}</h2>
        <p>{description}</p>
      </Col>
      <Col sm={6}>
        <img src={img} alt={alt} width="100%" height="100%"></img>
      </Col>
    </>
  )
}

export default Project