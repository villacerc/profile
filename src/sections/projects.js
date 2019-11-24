import React from "react"
import classNames from "classnames"

import roomiaLanding from "../images/roomia-landing.png"
import picknrollLanding from "../images/picknroll-landing.png"
import foodsightLanding from "../images/foodsight-landing.png"
import deltaKids from "../images/deltakids-landing.png"
import jptSplash from "../images/jpt-splash.png"

import Lightbox from "../components/lightbox"

import styles from "./projects.module.scss"

class Projects extends React.Component {
  state = {
    openLb: false,
    title: "",
    category: "all",
  }

  componentDidMount() {
    const mixitup = require("mixitup")

    const mixerEl = document.getElementById("mixer")
    const mixer = mixitup(mixerEl, {
      animation: {
        duration: 500,
        nudge: true,
        reverseOut: true,
        effects: "fade scale(0.01)",
      },
    })
  }

  projects = [
    {
      thumb: roomiaLanding,
      title: "Roomia",
      subtitle: "Property Management",
      category: "business",
    },
    {
      thumb: picknrollLanding,
      title: "Pick and Roll",
      subtitle: "Pick-up Game Finder",
      category: "personal",
    },
    {
      thumb: foodsightLanding,
      title: "Foodsight",
      subtitle: "Food Chemicals Dictionary",
      category: "personal",
    },
    {
      thumb: deltaKids,
      title: "Delta Kids",
      subtitle: "Kids Pograms Listings",
      category: "business",
    },
    {
      thumb: jptSplash,
      title: "Japanese Practice Tool",
      subtitle: "iOS App",
      category: "personal",
      contain: true,
    },
  ]
  render() {
    return (
      <section className="section" id="portfolio">
        <div className="section-heading">
          <h3 className="title is-2">PORTFOLIO</h3>
          <h4 className="subtitle is-5">See my latest works</h4>
        </div>
        <div className="tabs is-centered">
          <ul>
            <li
              className={this.state.category == "all" ? "is-active" : ""}
              onClick={() => {
                this.setState({ category: "all" })
              }}
            >
              <a data-filter="all">All</a>
            </li>
            <li
              className={this.state.category == "business" ? "is-active" : ""}
              onClick={() => {
                this.setState({ category: "business" })
              }}
            >
              <a data-filter=".business">Business</a>
            </li>
            <li
              className={this.state.category == "personal" ? "is-active" : ""}
              onClick={() => {
                this.setState({ category: "personal" })
              }}
            >
              <a data-filter=".personal">Personal</a>
            </li>
          </ul>
        </div>
        <div className="container">
          <div id="mixer" className="columns is-multiline is-mobile">
            {this.projects.map(
              ({ thumb, title, subtitle, contain, category }, i) => {
                return (
                  <div
                    key={i}
                    onClick={() => this.setState({ openLb: true, title })}
                    className={classNames(
                      "column is-12-mobile is-three-quarters-mobile is-half-tablet is-one-third-desktop mix",
                      category
                    )}
                  >
                    <figure
                      className={classNames(styles.photo, "image is-5by3")}
                    >
                      <img
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: contain ? "contain" : "fill",
                        }}
                        src={thumb}
                      />
                      <figcaption className={styles.hoverContent}>
                        <h1 className="title is-5">{title}</h1>
                        <p>{subtitle}</p>
                      </figcaption>
                    </figure>
                  </div>
                )
              }
            )}
          </div>
        </div>
        {this.state.openLb && (
          <Lightbox
            title={this.state.title}
            close={() => this.setState({ openLb: false })}
          />
        )}
      </section>
    )
  }
}

export default Projects
