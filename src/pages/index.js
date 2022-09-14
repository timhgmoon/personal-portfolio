import * as React from 'react'
import Nav from '../components/nav'
import Projects from '../components/projects'
import Description from '../components/description'
import Github from '../images/github.svg'
import Linkedin from '../images/linkedin.svg'
import '../styles/index.sass'

const IndexPage = () => {
  const header = "Hello."
  const content = "My name is Tim, I am a full-stack developer creating modern and responsive web applications. I’m currently working on a project with General Assembly x U.S. Census Bureau to solve lead pipe issues around the U.S.  During my free time I like to listen to music, go to the gym or play games."
  return (
    <main>
      <Nav></Nav>
      <Description header={header} content={content}></Description>
      <Projects></Projects>
      <footer className="footer-container">
        <a href="/" id="github-icon"><img src={Github} width="35px" height="35px"/></a>
        <a href="/" id="linkedin-icon"><img src={Linkedin} width="35px" height="35px"/></a>
      </footer>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
