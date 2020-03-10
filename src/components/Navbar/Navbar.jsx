import React from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div className="Navbar">
      <nav>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="contact">Contact</Link>
      </nav>
    </div>
  )
}
