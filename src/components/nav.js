import * as React from 'react'
import '../styles/nav.sass'
const Nav = () => {
  return (
    <nav>
      <div id="logo">TMoon</div>
      <div className="socials-container">
        <div className="socials">LinkedIn</div>
        <div className="socials">Github</div>
        <div id="resume-button">Resume</div>
      </div>
    </nav>
  )
}

export default Nav;

