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
      <Description header={descriptionData[activeID].header} content={descriptionData[activeID].content}></Description>
      <Projects activeID={activeID} handleID={handleID} descriptionData={descriptionData}></Projects>
      <footer className="footer-container">
        <a href="/" id="github-icon">
          <img src={Github} width="35px" height="35px" alt="github link"/>
        </a>
        <a href="/" id="linkedin-icon">
          <img src={Linkedin} width="35px" height="35px" alt="linkedin link"/>
        </a>
      </footer>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
