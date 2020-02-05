import React from "react"
import classNames from "classnames"
import { inViewport } from "../util"

import styles from "./contact.module.scss"

class Contact extends React.Component {
  componentDidMount() {
    this.window = window
    this.setAnimations()
    window.addEventListener("scroll", this.setAnimations)
  }
  setAnimations = () => {
    if (inViewport("title5", 50))
      document.getElementById("title5").classList.add("fadeInLeft")
    if (inViewport("subtitle5", 50))
      document.getElementById("subtitle5").classList.add("fadeInRight")
    if (inViewport("subtitle5", 100))
      document.getElementById("form").classList.add("scaleIn")
  }
  render() {
    return (
      <section className="section" id="contact">
        <div className="container">
          <div className="section-heading">
            <h3 id="title5" className="title is-2 animated">
              Contact
            </h3>
            <h4 id="subtitle5" className="subtitle is-5 animated">
              Get in touch
            </h4>
          </div>

          <div id="form" className="columns animated">
            <div className={classNames("column is-6 is-offset-3", styles.form)}>
              <div className="box">
                <form
                  action="https://getsimpleform.com/messages?form_api_token=571f2ee41481eae45b625d5548725d22"
                  method="post"
                >
                  <input
                    type="hidden"
                    name="redirect_to"
                    value={
                      this.window && `${window.location.origin}/#thank-you`
                    }
                  />
                  <input
                    name="name"
                    className="input"
                    required
                    type="text"
                    placeholder="Your Name *"
                  />
                  <input
                    name="email"
                    className="input"
                    required
                    type="email"
                    placeholder="Your Email *"
                  />
                  <textarea
                    name="message"
                    className="textarea"
                    required
                    placeholder="Your Message *"
                  />
                  <button
                    type="submit"
                    className="button is-rounded is-primary is-outlined is-medium"
                  >
                    <i
                      style={{ marginRight: "10px" }}
                      className="fas fa-envelope"
                    />
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Contact
