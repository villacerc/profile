import React from "react"
import EasyPieChart from "easy-pie-chart"
import classNames from "classnames"

import styles from "./about.module.scss"

class About extends React.Component {
  componentDidMount() {
    this.skills.forEach(({ el, value }, i) => {
      const chart = new EasyPieChart(el, {
        scaleColor: false,
        lineWidth: 10,
        barColor: "#4717f6",
        lineCap: "butt",
      })
      chart.update(value)
    })
  }

  skills = [
    {
      name: "HTML/CSS",
      value: 80,
    },
    {
      name: "Javascript",
      value: 80,
    },
    {
      name: "Node.js",
      value: 80,
    },
    {
      name: "Ruby",
      value: 75,
    },
    {
      name: "Swift",
      value: 60,
    },
    {
      name: "Java",
      value: 40,
    },
    {
      name: "C++",
      value: 40,
    },
    {
      name: "C#",
      value: 40,
    },
  ]
  values = [
    {
      title: "User Experience",
      text:
        "My goal is to build products that are not just useful but also attractive, intuitive and fun.",
    },
    {
      title: "Fast Apps",
      text: "I build optimized apps that run smoothly across all platforms.",
    },
    {
      title: "Modern Technologies",
      text:
        "I keep an eye on latest trends and implement modern solutions to ensure my apps are up to date.",
    },
    {
      title: "Quick Delivery",
      text:
        "I like to maintain a balance between fast development and good code quality.",
    },
  ]

  render() {
    return (
      <section className="section" id="about">
        <div className="section-heading">
          <h3 className="title is-2">About Me</h3>
          <h4 className="subtitle is-5">Hello World!</h4>
          <div className="container">
            <p style={{ fontSize: "16px" }}>
              I specialize in Node.js, Ruby, React and PostgreSQL with
              experience developing an e-commerce platform focusing on property
              management, bookkeeping and reporting. More importantly, I love
              making awesome ideas come to life.
            </p>
          </div>
        </div>
        <h4 style={{ textAlign: "center" }} className="title is-5">
          Things I value
        </h4>
        <div className="container">
          <div className="columns is-multiline is-mobile">
            {this.values.map(({ title, text }, i) => {
              return (
                <div
                  key={i}
                  className="column is-12-mobile is-half-tablet is-half-desktop"
                >
                  <div style={{ minHeight: "126px" }} className="box">
                    <div className="content">
                      <h4 className="title is-5" style={{ color: "#4717f6" }}>
                        {title}
                      </h4>
                      {text}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <h4
            style={{ textAlign: "center", margin: "40px 0" }}
            className="title is-5"
          >
            My Skills
          </h4>
          <div className="columns is-multiline is-mobile">
            {this.skills.map(({ name, value }, i) => {
              return (
                <div
                  key={i}
                  className={classNames(styles.skill, "column ")}
                  ref={el => (this.skills[i] = { el, name, value })}
                >
                  <div className={styles.caption}>
                    <div style={{ color: "#4717f6" }}>
                      <b>{name}</b>
                    </div>
                    {value}%
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }
}

export default About
