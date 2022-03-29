import * as React from 'react';
import { Link } from 'gatsby';
import Container from 'react-bootstrap/Container';

const FormSubmit = () => {
  return(
    <Container fluid>
      <p>Message sent!</p>
      <Link to="/">Return to portfolio</Link>
    </Container>
  )
}

export default FormSubmit