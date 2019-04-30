import React from "react"
import classNames from "classnames"
import scrollIntoView from "scroll-into-view"

import styles from "./footer.module.scss"

const footer = () => {
  const scrollToHome = () => {
    const el = document.getElementById("home")

    scrollIntoView(el)
  }
  return (
    <footer
      style={{ position: "relative" }}
      className="section is-primary is-small has-text-centered"
    >
      <div className={styles.chevron} onClick={scrollToHome}>
        <i className="fas fa-angle-up" />
      </div>
      <div className="columns">
        <div className="column is-one-third is-offset-4">
          <div className={styles.socialButtons}>
            <a
              className={classNames(styles.icon)}
              href="https://github.com/villacerc"
            >
              <i className="fab fa-github" />
            </a>
            <a
              className={classNames(styles.icon)}
              href="https://www.linkedin.com/in/carlovillaceran/"
            >
              <i className="fab fa-linkedin-in" />
            </a>
            <a
              className={classNames(styles.icon)}
              href="https://angel.co/carlo-villaceran"
            >
              <i className="fab fa-angellist" />
            </a>
          </div>
        </div>
      </div>
      <div style={{ opacity: 0.5 }} className="copyright">
        Carlo Villaceran © {new Date().getFullYear()}
      </div>
    </footer>
  )
}

export default footer
