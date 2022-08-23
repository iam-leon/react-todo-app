import React from "react"
import { NavLink } from "react-router-dom"

const About = (props) => {
  return (
    <div>
      <h1>hello from about page</h1>
      <ul>
        <li><NavLink to="/about/about-app">About the app</NavLink></li>
        <li><NavLink to="/about/about-author">About the author</NavLink></li>
      </ul>
    </div>
  )
}
export default About