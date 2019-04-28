import React from "react"
import classNames from "classnames"

import styles from "./footer.module.scss"

const footer = () => {
  return (
    <footer className="section is-primary is-small has-text-centered">
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
      <div className="copyright">Carlo Villaceran ©2019</div>
    </footer>
  )
}

export default footer
