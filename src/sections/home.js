import React from "react"
import classNames from "classnames"

import Particles from "../components/particles"
import Nav from "../components/nav"

import styles from "./home.module.scss"

class Home extends React.Component {
  state = {
    translateY: 0,
  }
  titleRect = null
  componentDidMount() {
    this.parallax()
    window.addEventListener("scroll", this.parallax)
  }
  parallax = () => {
    const el = document.getElementById("hero_title")
    // move title at 20% of scroll rate
    const offset = window.pageYOffset
    el.style.top = offset * 0.3 + "px"
    el.style.opacity = 1 - offset / 800
  }
  render() {
    return (
      <section
        id="home"
        style={{ position: "relative" }}
        className="hero is-link is-fullheight is-fullheight-with-navbar"
      >
        <Particles />
        <div className="hero-body">
          <div
            style={{ transform: `translateY(-${this.state.translateY}px)` }}
            id="hero_title"
            className={classNames("container animated", styles.center)}
          >
            <h1 className={classNames("title is-1", styles.title)}>
              Carlo Villaceran
            </h1>
            <div className={styles.divider} />
            <h2 className={classNames(styles.subtitle)}>
              Front End Web Developer
            </h2>
            <div className={styles.divider} />
          </div>
        </div>
        <Nav />
      </section>
    )
  }
}

export default Home
