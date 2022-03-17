// Step 1: Import React
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './navigation';

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main className="bg-dark">
      <Navigation/>
      <title>Home Page</title>
    </main>
  )
}
// Step 3: Export your component
export default IndexPage