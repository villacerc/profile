import React from "react"
import { inViewport } from "../util"

import myResume from "../images/CarloVillaceran_resume.pdf"

class Resume extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", this.setAnimations)
  }

  setAnimations = () => {
    if (inViewport("title3", 50))
      document.getElementById("title3").classList.add("fadeInLeft")
    if (inViewport("subtitle3", 50))
      document.getElementById("subtitle3").classList.add("fadeInRight")
    if (inViewport("dl_resume", 80))
      document.getElementById("dl_resume").classList.add("fadeIn")
  }
  render() {
    return (
      <section className="section" id="resume">
        <div className="section-heading">
          <h3 id="title3" className="title is-2 animated">
            Resume
          </h3>
          <h4 id="subtitle3" className="subtitle is-5 animated">
            More about me
          </h4>
        </div>
        <div
          id="dl_resume"
          style={{ display: "flex", justifyContent: "center" }}
          className="animated"
        >
          <a
            href={myResume}
            // download
            className="button is-rounded is-primary is-medium is-outlined"
          >
            <span className="icon">
              <i className="fas fa-file-alt" />
            </span>
            <span>View My Resume</span>
          </a>
        </div>
      </section>
    )
  }
}

export default Resume
