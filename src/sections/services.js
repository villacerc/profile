import React from "react"
import classNames from "classnames"

import styles from "./services.module.scss"

const Services = () => {
  const list = [
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
  return (
    <section className="section" id="services">
      <div className="section-heading">
        <h3 className="title is-2">EXPERTISE</h3>
        <h4 className="subtitle is-5">What can I do?</h4>
      </div>
      <div className={classNames("container", styles.center)}>
        <div className="columns is-multiline is-mobile">
          {list.map(({ title, text, icon }, i) => {
            return (
              <div
                key={i}
                className="column is-12-mobile is-half-tablet is-one-quarter-desktop"
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

export default Services
