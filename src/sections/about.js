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
      name: "Ruby",
      value: 75,
    },
    {
      name: "Javascript",
      value: 80,
    },
    {
      name: "Node.js",
      value: 75,
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
    {
      name: "Swift",
      value: 45,
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
          <h4 className="subtitle is-5">Hello World!</h4>
          <div className="container">
            <p style={{ fontSize: "16px" }}>
              I am a web developer with 2 years experience specializing in
              Node.js, Ruby, React and PostgreSQL. I have a strong knowledge of
              e-commerce platforms focusing on property management, bookkeeping
              and reporting. I love making awesome ideas come to life.
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
                    <div>{name}</div> {value}%
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
