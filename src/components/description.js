import * as React from 'react'
import '../styles/description.sass'
const Description = ({ header, content }) => {
  return (
    <div className="description-container">
      <h1 className="description-header">{header}</h1>
      <p className="description-content">{content}</p>
    </div>
  )
}

export default Description;