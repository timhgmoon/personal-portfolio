import * as React from 'react';
import * as projectStyles from '../pages/projects.module.css';
import Col from 'react-bootstrap/Col';

const Project = ({title, description, img, alt}) => {
  return (
    <>
      <Col xs={{order: 1}} md={{order: 2}}>
        <img src={img} alt={alt} width="100%" height="100%"></img>
      </Col>
      <Col xs={{order: 2}} md={{order: 1}}>
        <h3 className={projectStyles.projectTitle}>{title}</h3>
        <p>{description}</p>
      </Col>
      <Col xs={{order: 3}} md={{order: 3}}><hr/></Col>
    </>
  )
}

export default Project