import React from "react"
import mixitup from "mixitup"
import classNames from "classnames"

import styles from "./about.module.scss"

class About extends React.Component {
  componentDidMount() {
    mixitup(this.skills, {
      animation: {
        duration: 500,
        nudge: true,
        reverseOut: true,
        effects: "fade scale(0.01)",
      },
    })
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

  //   setTimeout(
  //     () =>
  //       this.setState({
  //         gallery: "",
  //       }),
  //     4000
  //   )
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
              Web developer with more than <strong>4 years</strong> of
              well-rounded experience with a degree in the field of
              <strong>Computer Science</strong>, extensive knowledge of modern
              Web techniques and love for <strong>Coffee</strong>. Looking for
              an opportunity to work and upgrade, as well as being involved in
              an organization that believes in gaining a competitive edge and
              giving back to the community.
            </p>
          </div>
        </div>

        <div className="columns has-same-height is-gapless">
          <div className="column">
            <div className="card">
              <div className={classNames("card-content", styles.cardContent)}>
                <h3 className="title is-4">Things I Value</h3>

                <div className="content">
                  <h6>User Experience</h6>
                  <h6>Fast Apps</h6>
                  <h6>Modern Technologies</h6>
                  <h6>knowledge</h6>
                </div>
              </div>
            </div>
          </div>
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
                    ref={el => (this.skills = el)}
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
        </div>
      </section>
    )
  }
}

export default About
