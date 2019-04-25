import React from "react"
import classNames from "classnames"

import styles from "./nav.module.scss"

class Nav extends React.Component {
  state = {
    container: styles.container,
  }
  sticky = null
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
    this.sticky = this.nav.offsetTop
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll = () => {
    if (window.pageYOffset > this.sticky) {
      this.setState({ container: styles.sticky })
    } else {
      this.setState({ container: "" })
    }
  }
  render() {
    return (
      <nav
        ref={el => (this.nav = el)}
        className={classNames("navbar is-link", this.state.container)}
      >
        <div className="navbar-brand">
          <div
            className="navbar-burger burger"
            data-target="navbarExampleTransparentExample"
          >
            <span />
            <span />
            <span />
          </div>
        </div>

        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item" href="#about">
              About
            </a>
            <a className="navbar-item" href="#services">
              Services
            </a>
            <a className="navbar-item" href="#resume">
              Resume
            </a>
            <a className="navbar-item" href="#portfolio">
              Portfolio
            </a>
            <a className="navbar-item" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav
