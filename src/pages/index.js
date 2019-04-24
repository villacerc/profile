import React from "react"

import Landing from "../sections/landing"
import Services from "../sections/services"
import About from "../sections/about"

import "./index.scss"

const IndexPage = () => (
  <div>
    <Landing />
    <About />
    <Services />
  </div>
)

export default IndexPage
