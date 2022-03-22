// Step 1: Import React
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './about';
import Navigation from './navigation';
import Projects from './projects';

// Step 2: Define your component
const IndexPage = () => {
  return (
      <>
        <title>Tim's Portfolio</title>
        <Navigation/>
        <About/>
        <Projects/>
      </>
  )
}
// Step 3: Export your component
export default IndexPage