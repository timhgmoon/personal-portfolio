import React, { useState } from 'react'
import '../styles/projects.sass'

const Projects = ({activeID, handleID, descriptionData}) => {
  // const projects = [
  //   {
  //     id: 1,
  //     name: "The Opportunity Project 2022",
  //   },
  //   {
  //     id: 2,
  //     name: "Daily Driver",
  //   },
  //   {
  //     id: 3,
  //     name: "Social Media Project",
  //   }
  // ]
  
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
        {/* <li className="project-item">The Opportunity Project 2022</li>
        <li className="project-item">Daily Driver</li>
        <li className="project-item">Social Media Project</li> */}
      </ul>
    </div>
  )
}

export default Projects;

