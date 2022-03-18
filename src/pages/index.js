// Step 1: Import React
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './navigation';
import About from './about';

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main className="bg-dark">
      <Navigation/>
      <title>Home Page</title>
      <About/>
    </main>
  )
}
// Step 3: Export your component
export default IndexPage