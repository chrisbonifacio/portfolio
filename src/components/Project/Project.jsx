import React from "react"

export default function Project(props) {
  const { title, description, link, code } = props.project
  return (
    <div className="Project">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="project-links">
        <a target="_blank" rel="noopener noreferrer" href={link}>
          Deployed Project
        </a>
        <a target="_blank" rel="noopener noreferrer" href={code}>
          Code on Github
        </a>
      </div>
    </div>
  )
}
