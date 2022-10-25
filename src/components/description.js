import * as React from 'react'
import '../styles/description.sass'
const Description = ({ header, stack, content, github, live }) => {
  return (
    <div className="description-container">
      <h1 className="description-header">{header}</h1>
      <p className="description-stack">{stack}</p>
      <p className="description-content">{content}</p>
      <div className="button-container">
        <button className="black-button">Github</button>
        <button className="grey-button">Live</button>
      </div>
    </div>
  )
}

export default Description;