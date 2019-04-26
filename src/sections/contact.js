import React from "react"
import classNames from "classnames"

import styles from "./contact.module.scss"

const contact = () => {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-heading">
          <h3 className="title is-2">Contact</h3>
          <h4 className="subtitle is-5">Get in touch</h4>
        </div>

        <div className="columns">
          <div className={classNames("column is-6 is-offset-3", styles.form)}>
            <input className="input" type="text" placeholder="Your Name *" />
            <input className="input" type="email" placeholder="Your Email *" />
            <textarea className="textarea" placeholder="Your Message *" />
            <button className="button is-primary is-outlined is-medium">
              <i style={{ marginRight: "10px" }} className="fas fa-envelope" />
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default contact
