import React from "react"
import classNames from "classnames"

import styles from "./services.module.scss"

const Services = () => {
  const list = [
    {
      title: "Front End Development",
      text:
        "Develop responsive and cross-browser compatible front end web code that will work on any device.",
      icon: "fas fa-laptop",
    },
    {
      title: "Back End Development",
      text:
        "Create rest APIs and database solutions. Use web services to manage environments and scalability.",
      icon: "fas fa-server",
    },
    {
      title: "Web Security",
      text:
        "Use best standards and practices for securing client to server data interchange. SSL, JWT, OAuth, password hashing/salting.",
      icon: "fas fa-shield-alt",
    },
    {
      title: "Test Automation",
      text:
        "Write and analyze test cases for automation to increase efficiency and app quality. Jest, Mocha, Puppeteer, RSpec.",
      icon: "fas fa-hat-wizard",
    },
  ]
  return (
    <section className="section" id="services">
      <div className="section-heading">
        <h3 className="title is-2">SERVICES</h3>
        <h4 className="subtitle is-5">What can I do for you?</h4>
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
