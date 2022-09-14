import React, { useState } from 'react'
import '../styles/projects.sass'

const Projects = () => {
  const [activeID, setActiveID] = useState(0)

  const projects = [
    {
      id: 1,
      name: "The Opportunity Project 2022",
    },
    {
      id: 2,
      name: "Daily Driver",
    },
    {
      id: 3,
      name: "Social Media Project",
    }
  ]
  const handleClick = (id) => {
    setActiveID(id)
  }
  return (
    <div className="project-container">
      <h1 className="project-header">Projects</h1>
      <ul className="project-content">
        {projects.map((project) => {
          const className = activeID === project.id ? "project-item active" : "project-item"
          return(
            <li
            key={project.id}
              onClick={() => handleClick(project.id)}
              className={className}
            >
              {project.name}
            </li>
          )
        })}
        {/* <li className="project-item">The Opportunity Project 2022</li>
        <li className="project-item">Daily Driver</li>
        <li className="project-item">Social Media Project</li> */}
      </ul>
    </div>
  )
}

export default Projects;

