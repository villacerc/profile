import React from "react"
import classNames from "classnames"
import inView from "in-view"

import styles from "./nav.module.scss"

class Nav extends React.Component {
  state = {
    container: styles.container,
    toggleNav: false,
  }
  sticky = null
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
    this.sticky = this.nav.offsetTop
    this.items.forEach(this.handleView)
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
  handleView = item => {
    item = item.toLowerCase()
    const linkEl = document.querySelector(`#link-${item}`)

    const offsetHeight = 0.95 * window.innerHeight

    inView.offset({
      top: 35,
      bottom: offsetHeight,
    })

    inView(`#${item}`)
      .on("enter", () => linkEl.classList.add("is-active"))
      .on("exit", el => linkEl.classList.remove("is-active"))
  }
  items = ["About", "Services", "Resume", "Portfolio", "Contact"]
  render() {
    const navStyle = this.state.toggleNav ? "is-active" : ""
    return (
      <nav
        ref={el => (this.nav = el)}
        className={classNames("navbar is-link", this.state.container)}
      >
        <div className="navbar-brand">
          <div
            onClick={() => this.setState({ toggleNav: !this.state.toggleNav })}
            className={classNames("navbar-burger burger", navStyle)}
            data-target="navbarExampleTransparentExample"
          >
            <span />
            <span />
            <span />
          </div>
        </div>

        <div
          id="navbarExampleTransparentExample"
          className={classNames("navbar-menu", navStyle)}
        >
          <div className="navbar-end">
            {this.items.map((item, i) => {
              const locased = item.toLowerCase()
              return (
                <a
                  key={i}
                  className="navbar-item"
                  onClick={() => this.setState({ toggleNav: false })}
                  href={`#${locased}`}
                  id={`link-${locased}`}
                >
                  {item}
                </a>
              )
            })}
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav
