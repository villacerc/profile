import React from "react"

import Home from "../sections/home"
import Services from "../sections/services"
import About from "../sections/about"
import Projects from "../sections/projects"
import Contact from "../sections/contact"
import Footer from "../sections/Footer"
import Resume from "../sections/Resume"

import "./index.scss"

class Index extends React.Component {
  state = {
    showMessage: false,
  }
  componentDidMount() {
    this.setState({
      showMessage: window.location.href.includes("thank-you"),
    })
  }
  message = () => {
    return (
      <article className="message is-success is-toast-top">
        <div className="message-header">
          Thank you for your time. I will get back to you as soon as I can.
          <button
            onClick={() => this.setState({ showMessage: false })}
            className="delete"
            aria-label="delete"
          />
        </div>
      </article>
    )
  }
  render() {
    return (
      <div>
        {this.state.showMessage && this.message()}
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
}

export default Index
