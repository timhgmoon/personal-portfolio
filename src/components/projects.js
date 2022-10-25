import React from 'react'
import '../styles/projects.sass'

const Projects = ({activeID, handleID, descriptionData}) => {
  return (
    <div className="project-container">
      <h1 className="project-header">Projects.</h1>
      <ul className="project-content">
        {descriptionData
          .filter(project => project.id !== 0)
          .map((project) => {
            const className = activeID === project.id ? "project-item active" : "project-item"
            return(
              <li
              key={project.id}
                onClick={() => handleID(project.id)}
                className={className}
              >
                {project.header}
              </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Projects;

