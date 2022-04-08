import * as React from 'react';
import * as projectStyles from '../pages/projects.module.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const Project = ({title, description, img, alt, skills, link, button}) => {
  const cardClass = `h-100 ${projectStyles.background}`

  return (
    <Col className="pb-2">
      <Card className={cardClass}>
        <Card.Header className={projectStyles.projectTitle}>{title}</Card.Header>
        <Card.Img variant="top" src={img} alt={alt}/>
        <Card.Body>
          <Card.Text>
            {description}
          </Card.Text>
          <Button className="btn btn-secondary btn-sm"
            href={link}
            target="_blank"
            rel="noreferrer">
            Link to Github
          </Button>
          {button}
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{skills}</small>
        </Card.Footer>
      </Card>
    </Col>
  )
}

export default Project