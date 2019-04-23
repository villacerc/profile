import React from "react"
import classNames from "classnames"

import styles from "./services.module.scss"

const Services = () => (
  <section className="section" id="services">
    <div className="section-heading">
      <h3 className="title is-2">SERVICES</h3>
      <h4 className="subtitle is-5">What can I do for you?</h4>
    </div>
    <div className={classNames("container", styles.center)}>
      <div className="columns">
        {new Array(4).fill().map((e, i) => {
          return (
            <div key={i} className="column">
              <div className={styles.service}>
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-primary" />
                  <i className="fas fa-laptop fa-stack-1x fa-inverse" />
                </span>
                <h4 className="title is-5">Front End Development</h4>
                <p>
                  Develop Front End using latest standards with HTML5/CSS3 with
                  added funtionality using JavaScript and Vue.js.
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  </section>
)

export default Services
