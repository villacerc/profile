import React, { useState } from "react"

import Home from "../sections/home"
import Services from "../sections/services"
import About from "../sections/about"
import Projects from "../sections/projects"
import Contact from "../sections/contact"
import Footer from "../sections/Footer"
import Resume from "../sections/Resume"

import "./index.scss"

export default function() {
  const [showMessage, setShowMessage] = useState(
    window.location.href.includes("thank-you")
  )

  const message = () => {
    return (
      <article class="message is-success is-toast-top">
        <div class="message-header">
          Thank you for your time. I will get back to you as soon as I can.
          <button
            onClick={() => setShowMessage(false)}
            class="delete"
            aria-label="delete"
          />
        </div>
      </article>
    )
  }
  return (
    <div>
      {showMessage && message()}
      <Home />
      <About />
      <Services />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
