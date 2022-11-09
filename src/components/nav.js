import * as React from 'react'
import { Link } from 'gatsby'
import '../styles/nav.sass'
const Nav = () => {
  return (
    <nav>
      <div id="logo">TMoon</div>
      <div className="socials-container">

        <a target="_blank" href="https://www.linkedin.com/in/timhgmoon/">
          <div className="socials">LinkedIn</div>
        </a>

        <a target="_blank" href="https://github.com/timhgmoon">
          <div className="socials">Github</div>
        </a>
        <a target="_blank" href="https://drive.google.com/file/d/1gOXQ4rZxv3r_MJ5U6Dm93yvUTghnSi2L/view?usp=sharing">
          <div id="resume-button">
            Resume
            <div id="resume-box">{'\u279E'}</div>
          </div>
        </a>
      </div>
    </nav>
  )
}

export default Nav;

