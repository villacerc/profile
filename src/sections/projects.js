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
  }

  projects = [
    {
      thumb: roomiaLanding,
      title: "Roomia",
      stack: "React, Ruby on Rails, PostgreSQL, AWS S3",
    },
    {
      thumb: picknrollLanding,
      title: "Pick and Roll",
      stack: "React, Express, MongoDB",
    },
    {
      thumb: foodsightLanding,
      title: "Foodsight",
      stack: "JQuery, Ruby on Rails, PostgreSQL",
    },
    {
      thumb: deltaKids,
      title: "Delta Kids",
      stack: "JQuery, Ruby on Rails, PostgreSQL",
    },
    {
      thumb: jptSplash,
      title: "Japanese Practice Tool",
      stack: "Swift",
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
        <div className="container">
          <div className="columns is-multiline is-mobile">
            {this.projects.map(({ thumb, title, stack, contain }, i) => {
              return (
                <div
                  key={i}
                  onClick={() => this.setState({ openLb: true, title })}
                  className="column is-12-mobile is-three-quarters-mobile is-half-tablet is-one-third-desktop"
                >
                  <figure className={classNames(styles.photo, "image is-5by3")}>
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
                      <p>{stack}</p>
                    </figcaption>
                  </figure>
                </div>
              )
            })}
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
