import React from "react"
import classNames from "classnames"
import { inViewport } from "../util"

import styles from "./services.module.scss"

class Services extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", this.setAnimations)
  }

  setAnimations = () => {
    if (inViewport("title2", 50))
      document.getElementById("title2").classList.add("fadeInLeft")
    if (inViewport("subtitle2", 50))
      document.getElementById("subtitle2").classList.add("fadeInRight")
    if (inViewport("expertise1", 20)) {
      this.list.forEach((item, i) => {
        setTimeout(() => {
          document.getElementById(`expertise${i}`).classList.add("flipXTop")
        }, i * 300)
      })
    }
  }

  list = [
    {
      title: "Front End Development",
      text:
        "Develop responsive and cross-browser compatible front end code that will work on any device.",
      icon: "fas fa-laptop",
    },
    {
      title: "Back End Development",
      text:
        "Create REST APIs and use cloud services to manage deployment and scalability.",
      icon: "fas fa-server",
    },
    {
      title: "Mobile Apps",
      text: "Build custom mobile applications for iOS and Android.",
      icon: "fas fa-mobile-alt",
    },
    {
      title: "Quality Assurance",
      text:
        "Create automated unit tests to detect logic errors and ensure app quality.",
      icon: "fas fa-check",
    },
  ]

  render() {
    return (
      <section className="section" id="services">
        <div className="section-heading">
          <h3 id="title2" className="title is-2 animated">
            EXPERTISE
          </h3>
          <h4 id="subtitle2" className="subtitle is-5 animated">
            What can I do?
          </h4>
        </div>
        <div id="expertise" className={classNames("container", styles.center)}>
          <div className="columns is-multiline is-mobile">
            {this.list.map(({ title, text, icon }, i) => {
              return (
                <div
                  id={`expertise${i}`}
                  key={i}
                  className="column is-12-mobile is-half-tablet is-one-quarter-desktop animated"
                >
                  <div className={styles.service}>
                    <i className={classNames("fa-4x", icon)} />

                    <h4 className="title is-5">{title}</h4>
                    <p>{text}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }
}

export default Services
