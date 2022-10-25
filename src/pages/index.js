import React, { useState, useEffect } from 'react'
import Nav from '../components/nav'
import Projects from '../components/projects'
import Description from '../components/description'
import Github from '../images/github.svg'
import Linkedin from '../images/linkedin.svg'
import '../styles/index.sass'
import descriptionData from '../description.json'

const IndexPage = () => {
  const [activeID, setActiveID] = useState(0)

  const handleID = (id) => {
    setActiveID(id)
  }
  return (
    <main>
      <Nav></Nav>
      <div className="container">
        <Description 
          header={descriptionData[activeID].header} 
          stack={descriptionData[activeID].stack} 
          content={descriptionData[activeID].content}>
        </Description>
        <Projects 
          activeID={activeID} 
          handleID={handleID} 
          descriptionData={descriptionData}>
        </Projects>
      </div>
      <footer className="footer-container">
        <a href="/" id="github-icon">
          <img className="footer-icon" src={Github} alt="github link"/>
        </a>
        <a href="/" id="linkedin-icon">
          <img className="footer-icon" src={Linkedin}  alt="linkedin link"/>
        </a>
      </footer>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
