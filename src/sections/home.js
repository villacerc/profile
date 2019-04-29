import React from "react"
import classNames from "classnames"

import Particles from "../components/particles"
import Nav from "../components/nav"

import styles from "./home.module.scss"

const home = () => (
  <section
    id="home"
    style={{ position: "relative" }}
    className="hero is-link is-fullheight is-fullheight-with-navbar"
  >
    <Particles />
    <div className="hero-body">
      <div className={classNames("container", styles.center)}>
        Nice to meet you! I am
        <h1 className={classNames("title is-1", styles.title)}>
          Carlo Villaceran
        </h1>
        <div className={styles.divider} />
        <h2 className={classNames(styles.subtitle)}>
          Full Stack Web Developer
        </h2>
        <div className={styles.divider} />
      </div>
    </div>
    <Nav />
  </section>
)

export default home
