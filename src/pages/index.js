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
          activeID = {activeID}
          header={descriptionData[activeID].header} 
          stack={descriptionData[activeID].stack} 
          content={descriptionData[activeID].content}
          github={descriptionData[activeID].github}
          live={descriptionData[activeID].live}>
        </Description>
        <Projects 
          activeID={activeID} 
          handleID={handleID} 
          descriptionData={descriptionData}>
        </Projects>
      </div>
      <footer className="footer-container">
        <a target="_blank" href="https://github.com/timhgmoon" id="github-icon">
          <img className="footer-icon" src={Github} alt="github link"/>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/timhgmoon/" id="linkedin-icon">
          <img className="footer-icon" src={Linkedin}  alt="linkedin link"/>
        </a>
      </footer>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
