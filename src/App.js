import React from "react"
import "./App.scss"
import { Route } from "react-router-dom"

import Navbar from "./components/Navbar/Navbar"
import Portfolio from "./components/Portfolio/Portfolio"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"

// Contexts
import { ProjectProvider } from "./contexts/ProjectContext"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/about" component={About} />
      <Route
        exact
        path="/projects"
        render={props => {
          return (
            <ProjectProvider>
              <Portfolio {...props} />
            </ProjectProvider>
          )
        }}
      />
      <Route exact path="/contact" component={Contact} />
    </div>
  )
}

export default App
