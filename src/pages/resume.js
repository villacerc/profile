import React, { Component } from "react"
import styles from "./resume.module.scss"
import classNames from "classnames"

import myResume from "../images/CarloVillaceran_resume.pdf"

class Resume extends Component {
  resume = null
  shouldResize = false

  componentDidMount() {
    this.resume = document.getElementById("resume")
    this.download = document.getElementById("download")

    this.scaleResume()
    window.addEventListener("resize", this.scaleResume)
  }

  scaleResume = () => {
    if (window.innerWidth <= 1100) {
      this.shouldResize = true

      const scale = window.innerWidth / 1100
      this.resume.style.transform = `scale(${scale})`
    } else if (window.innerWidth > 1100 && this.shouldResize) {
      this.shouldResize = false
      this.resume.style.transform = `scale(1)`
    }
  }

  render() {
    return (
      <div className={styles.document_preview}>
        <div className={styles.preview_container}>
          <div id="resume" className={styles.visible_preview}>
            <div className={styles.resume_container}>
              <div className={styles.resume_content}>
                <section className={styles.header}>
                  <div className={styles.name}>
                    <p>
                      <span>Carlo</span>Villaceran
                    </p>
                    <p>Front End Developer</p>
                  </div>
                  <div className={styles.contact}>
                    <p>
                      <span>Email:</span> cvillaceran@gmail.com
                    </p>
                    <p>
                      <span>Portfolio:</span>{" "}
                      <a href="https://cvilla.space">cvilla.space</a>
                    </p>
                    <p>
                      <span>Location:</span> Richmond BC, Canada
                    </p>
                    <p>
                      <span>Phone:</span> (604) 362-8465
                    </p>
                  </div>
                </section>
                <section>
                  <div
                    className={classNames(styles.section_grid, styles.profile)}
                  >
                    <div>
                      <span className={styles.label}>PROFILE</span>
                    </div>
                    <div className={styles.profile_text}>
                      Excellent troubleshooting skills with the ability to
                      analyze code to produce the most cost-effective solutions.
                      Self-starter and problem solver with a strong knowledge of
                      modular and object-oriented design.
                    </div>
                  </div>
                </section>
                <section>
                  <div className={styles.label_row}>
                    <span className={classNames(styles.label)}>EXPERIENCE</span>
                  </div>
                  <div
                    className={classNames(
                      styles.section_grid,
                      styles.experience
                    )}
                  >
                    <div>
                      <div className={styles.section_date}>
                        <p>Richmond, BC</p>
                        <i>September 2017 - Present</i>
                      </div>
                    </div>
                    <div
                      className={classNames(
                        styles.section_right,
                        styles.section_text
                      )}
                    >
                      <p>Front End Web and iOS Developer</p>
                      <i>Roomia Realty Inc.</i>
                      <ul>
                        <li>
                          Design and develop cross-compatible, front end web
                          components with <b>React</b>, <b>Redux</b>,{" "}
                          <b>Webpack</b> and <b>Material UI</b>.
                        </li>
                        <li>
                          Work closely with project manager, designer and back
                          end developer on the <b>full development cycle</b> of
                          Roomia.
                        </li>
                        <li>
                          Exercise <b>test-driven development</b> to deliver
                          high-quality projects in a high-demand setting using
                          Capybara and RSpec.
                        </li>
                        <li>
                          Re-design and maintain companion app for the iOS via{" "}
                          <b>Swift</b> and <b>Realm</b>
                        </li>
                        <li>
                          Involved in <b>data model planning</b> and{" "}
                          <b>API design</b> to provide input on code reuse.
                        </li>
                        <li>
                          <b>Provide mentorship</b> to junior developers on best
                          practices and good coding standards.
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
                <section className={styles.education}>
                  <div className={styles.label_row}>
                    <span className={classNames(styles.label)}>EDUCATION</span>
                  </div>
                  <div className={styles.section_grid}>
                    <div>
                      <div className={styles.section_date}>
                        <p>Vancouver, BC</p>
                        <i>2017</i>
                      </div>
                    </div>
                    <div className={styles.section_right}>
                      <div className={styles.section_text}>
                        <p>Full Stack Web Development</p>
                        <p>
                          <i>CodeCore Developer Bootcamp.</i>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.section_grid}>
                    <div>
                      <div className={styles.section_date}>
                        <p>Vancouver, BC</p>
                        <i>2014 - 2016</i>
                      </div>
                    </div>
                    <div className={styles.section_right}>
                      <div className={styles.section_text}>
                        <p>Associates - Applied Software Development</p>
                        <p>
                          <i>British Columbia Institute of Technology</i>
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                <section>
                  <div className={styles.misc_grid}>
                    <div>
                      <span className={styles.label}>TECHNICAL SKILLS</span>
                      <div className={styles.misc_text}>
                        <div className={styles.skills_grid}>
                          <div>
                            <p>Javascript Frameworks</p>
                            <p>Gatsby, React, React Native, JQuery</p>
                          </div>
                          <div>
                            <p>CSS Frameworks</p>
                            <p>Material UI, Bootstrap, Bulma, Semantic UI</p>
                          </div>
                          <div>
                            <p>Unit Testing</p>
                            <p>Capybara, RSpec, Jest, Mocha, Puppeteer</p>
                          </div>
                          <div>
                            <p>Back End Technologies</p>
                            <p>Ruby on Rails, NodeJS, PostgreSQL, MongoDB</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <span className={styles.label}>SHOWCASE PROJECTS</span>
                      <div className={styles.misc_text}>
                        <div className={styles.project}>
                          <div>
                            <b>Pick and Roll</b> - Basketball pick up game
                            finder
                          </div>
                          <a target="_blank" href="https://pickandroll.life">
                            pickandroll.life
                          </a>{" "}
                          |{" "}
                          <a
                            target="_blank"
                            href="https://github.com/villacerc/heatcheck"
                          >
                            GitHub
                          </a>
                        </div>
                      </div>
                      <div className={styles.project}>
                        <div>
                          <b>Delta Kids</b> - Kids program listings in Delta
                        </div>
                        <a target="_blank" href="https://www.deltakids.ca/">
                          deltakids.ca
                        </a>{" "}
                        |{" "}
                        <a
                          target="_blank"
                          href="https://github.com/delta-kids/delta_kids_project"
                        >
                          GitHub
                        </a>
                      </div>
                      <div className={styles.project}>
                        <div>
                          <b>Foodsight</b> - Food chemical dictionary
                        </div>
                        <a
                          target="_blank"
                          href="https://foodsight.herokuapp.com/"
                        >
                          foodsight.herokuapp.com
                        </a>{" "}
                        |{" "}
                        <a
                          target="_blank"
                          href="https://github.com/villacerc/foodsight"
                        >
                          GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className={styles.download}>
              <a role="button" href={myResume} download>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Resume
