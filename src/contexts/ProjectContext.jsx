import React, { useState, createContext } from "react"

export const ProjectContext = createContext()

export function ProjectProvider(props) {
  const [projects, setProjects] = useState([
    {
      index: "future-hope",
      title: "Future Hope - School in the Sky",
      link: "http://futurehopeschool.com",
      code: "https://github.com/chrisbonifacio/future-hope-fe",
      description:
        "Collaborated remotely with a team of 5 Web Developers to build a fully functional web application within 8 weeks.\nI played the role of a floater, where I helped with styling and writing asynchronous calls on the Front End to communicate with the Back End, which I also helped to create by building additional documents and collections in Google Firebase."
    }
  ])
  return (
    <ProjectContext.Provider value={projects}>
      {props.children}
    </ProjectContext.Provider>
  )
}
