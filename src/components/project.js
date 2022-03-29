import * as React from 'react';
import * as projectStyles from '../pages/projects.module.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

const Project = ({title, description, img, alt}) => {
  const descriptionClass = `pt-2 ${projectStyles.projectDescription}`
  const buttonClass = `btn-secondary ${projectStyles.button}`
  return (
    <>
      <Col xs={{order: 1}} md={{order: 2}}>
        <img src={img} alt={alt} width="100%" height="100%"></img>
      </Col>
      <Col className={projectStyles.col} xs={{order: 2}} md={{order: 1}}>
        <h3 className={projectStyles.projectTitle}>{title}</h3>
        <p className={descriptionClass}>{description}</p>
        <Button 
          className={buttonClass}
          href="https://github.com/timhgmoon/Daily-Driver-Backend"
          target="_blank"
          rel="noreferrer">
            See on Github
        </Button>
      </Col>
      <Col xs={{order: 3}} md={{order: 3}}><hr/></Col>
    </>
  )
}

export default Project