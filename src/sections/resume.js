import React from "react"

import myResume from "../images/CarloVillaceran_resume.pdf"

const resume = () => {
  return (
    <section className="section" id="resume">
      <div className="section-heading">
        <h3 className="title is-2">Resume</h3>
        <h4 className="subtitle is-5">More about me</h4>
        <a
          href={myResume}
          download
          className="button is-rounded is-primary is-medium is-outlined"
        >
          <span className="icon">
            <i className="fas fa-file-alt" />
          </span>
          <span>Download My Resume</span>
        </a>
      </div>
    </section>
  )
}

export default resume
