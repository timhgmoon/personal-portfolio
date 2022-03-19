// Step 1: Import React
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.module.css'
import Container from 'react-bootstrap/Container';
import Navigation from './navigation';
import About from './about';

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <title>Tim's Portfolio</title>
      <Container fluid="md">
        <Navigation/>
        <About/>
      </Container>
    </main>
  )
}
// Step 3: Export your component
export default IndexPage