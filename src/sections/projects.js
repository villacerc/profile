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
      subtitle: "Property Management",
    },
    {
      thumb: picknrollLanding,
      title: "Pick and Roll",
      subtitle: "Pick-up Game Finder",
    },
    {
      thumb: foodsightLanding,
      title: "Foodsight",
      subtitle: "Food Chemicals Dictionary",
    },
    {
      thumb: deltaKids,
      title: "Delta Kids",
      subtitle: "Kids Pograms Listings",
    },
    {
      thumb: jptSplash,
      title: "Japanese Practice Tool",
      subtitle: "iOS App",
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
            {this.projects.map(({ thumb, title, subtitle, contain }, i) => {
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
                      <p>{subtitle}</p>
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
