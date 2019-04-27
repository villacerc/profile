import React from "react"
import mixitup from "mixitup"
import classNames from "classnames"

import styles from "./about.module.scss"

class About extends React.Component {
  componentDidMount() {
    // mixitup(this.skillsRef, {
    //   animation: {
    //     duration: 500,
    //     nudge: true,
    //     reverseOut: true,
    //     effects: "fade scale(0.01)",
    //   },
    // })
  }

  skills = [
    { filter: "frontend", iconStr: "devicon-react-original-wordmark colored" },
    { filter: "backend", iconStr: "devicon-redis-plain-wordmark colored" },
    {
      filter: "frontend",
      iconStr: "devicon-webpack-plain colored",
      title: "webpack",
    },
    { filter: "backend", iconStr: "devicon-postgresql-plain colored" },
    { filter: "frontend", iconStr: "devicon-bootstrap-plain-wordmark colored" },
    { filter: "backend", iconStr: "devicon-mongodb-plain-wordmark colored" },
    { filter: "frontend", iconStr: "devicon-html5-plain-wordmark colored" },
    { filter: "other", iconStr: "devicon-swift-plain-wordmark colored" },
    { filter: "frontend", iconStr: "devicon-javascript-plain colored" },
    { filter: "backend", iconStr: "devicon-nodejs-plain-wordmark colored" },
    { filter: "frontend", iconStr: "devicon-sass-original colored" },
    { filter: "frontend", iconStr: "devicon-css3-plain-wordmark colored" },
    { filter: "other", iconStr: "devicon-cplusplus-plain-wordmark colored" },
    { filter: "backend", iconStr: "devicon-ruby-plain-wordmark colored" },
    { filter: "backend", iconStr: "devicon-rails-plain-wordmark colored" },
    { filter: "other", iconStr: "devicon-csharp-plain-wordmark colored" },
    { filter: "frontend", iconStr: "devicon-jquery-plain-wordmark colored" },
    { filter: "backend", iconStr: "devicon-express-original colored" },
    { filter: "other", iconStr: "devicon-java-plain-wordmark colored" },
  ]

  values = [
    {
      title: "User Experience",
      text:
        "My goal is to build products that are not just useful but also attractive, intuitive and fun.",
    },
    {
      title: "Fast Apps",
      text:
        "I like to achieve high performance in my apps by applying caching, lazy loading and bundle splitting techniques.",
    },
    {
      title: "Modern Technologies",
      text:
        "I keep an eye on latest trends and implement modern solutions to ensure my apps are up to date.",
    },
    {
      title: "Knowledge",
      text:
        "I am naturally curious and like to learn new practices to improve my skills as a developer.",
    },
  ]

  render() {
    return (
      <section className="section" id="about">
        <div className="section-heading">
          <h3 className="title is-2">About Me</h3>
          <h4 className="subtitle is-5">
            Jack of all trades, master of "some"
          </h4>
          <div className="container">
            <p style={{ fontSize: "15px" }}>
              Web developer with 2 years experience specializing in Node.js,
              Ruby, React and PostgreSQL. Strong knowledge of e-commerce
              platforms focusing on property management, bookkeeping and
              reporting. Loves making awesome ideas come to life.
            </p>
          </div>
        </div>
        <h4 style={{ textAlign: "center" }} className="title is-5">
          Things I value
        </h4>
        <div className="columns is-multiline is-mobile">
          {this.values.map(({ title, text }, i) => {
            return (
              <div
                key={i}
                className="column is-12-mobile is-half-tablet is-half-desktop"
              >
                <div className="box">
                  <div className="content">
                    <h4 className="title is-5">{title}</h4>
                    {text}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* <div className="columns has-same-height is-gapless">
          <div className="column is-half">
            <div className={classNames("card", styles.skills)}>
              <div className={classNames("card-content", styles.cardContent)}>
                <h3 className="title is-4">Skills</h3>
                <div className={styles.filters}>
                  <button
                    className="button is-primary is-outlined is-rounded"
                    type="button"
                    data-filter="all"
                  >
                    All
                  </button>
                  <button
                    className="button is-primary is-outlined is-rounded"
                    type="button"
                    data-filter=".frontend"
                  >
                    Frontend
                  </button>
                  <button
                    className="button is-primary is-outlined is-rounded"
                    type="button"
                    data-filter=".backend"
                  >
                    Backend
                  </button>
                  <button
                    className="button is-primary is-outlined is-rounded"
                    type="button"
                    data-filter=".other"
                  >
                    Other
                  </button>
                </div>
                <div className="content">
                  <div
                    ref={el => (this.skillsRef = el)}
                    className={styles.skillsList}
                  >
                    {this.skills.map(({ filter, iconStr, title }, i) => (
                      <div
                        key={i}
                        style={{ display: "inline-block" }}
                        className={classNames("mix", filter)}
                      >
                        <i title={title} className={iconStr} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    )
  }
}

export default About
