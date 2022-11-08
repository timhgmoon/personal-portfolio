import * as React from 'react'
import '../styles/description.sass'
const Description = ({ activeID, header, stack, content, github, live }) => {
  return (
    <div className="description-container">
      <h1 className="description-header">{header}</h1>
      <p className="description-stack">{stack}</p>
      <p className="description-content">{content}</p>
      {activeID !== 0 ? (
        <div className="button-container">
          <a target="_blank" href={github}>
            <button className="black-button">Github</button>
          </a>
          <a target="_blank" href={live}>
            <button className="grey-button">Live</button>
          </a>
        </div>
      ): (<div></div>)

      }
      
      
    </div>
  )
}

export default Description;