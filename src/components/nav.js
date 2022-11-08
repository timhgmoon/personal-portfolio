import * as React from 'react'
import { Link } from 'gatsby'
import '../styles/nav.sass'
const Nav = () => {
  return (
    <nav>
      <div id="logo"><Link to="/">TMoon</Link></div>
      <div className="socials-container">
        <div className="socials">LinkedIn</div>
        <div className="socials">Github</div>
        <div id="resume-button">
          Resume
          <div id="resume-box">{'\u279E'}</div>
        </div>
      </div>
    </nav>
  )
}

export default Nav;

