import React from "react"

import Landing from "../sections/landing"
import Services from "../sections/services"
import About from "../sections/about"
import Projects from "../sections/projects"
import Contact from "../sections/contact"
import Footer from "../sections/Footer"
import Resume from "../sections/Resume"

import "./index.scss"

const IndexPage = () => (
  <div>
    <Landing />
    <About />
    <Services />
    <Resume />
    <Projects />
    <Contact />
    <Footer />
  </div>
)

export default IndexPage
