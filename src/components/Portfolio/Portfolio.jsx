import React, { useContext } from "react"

// Components
import Project from "../Project/Project"

// Contexts
import { ProjectContext } from "../../contexts/ProjectContext"

export default function Portfolio(props) {
  const projects = useContext(ProjectContext)
  console.log(projects)
  return (
    <div className="Portfolio">
      {projects.map(project => {
        return <Project project={project} />
      })}
    </div>
  )
}
