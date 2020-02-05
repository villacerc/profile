import React from "react"
import classNames from "classnames"

import roomiaVideo from "../images/roomia.mp4"
import appVideo from "../images/companion_app.mp4"

import jpt1 from "../images/reading_stroke.mp4"
import jpt2 from "../images/matching.mp4"

import fs1 from "../images/foodsight-landing.png"
import fs2 from "../images/fs2.png"
import fs3 from "../images/fs3.png"
import fs4 from "../images/fs4.png"

import dk1 from "../images/dk1.png"
import dk2 from "../images/dk2.png"
import dk3 from "../images/dk3.png"
import dk4 from "../images/dk4.png"

// import jpt1 from "../images/jpt1.png"
// import jpt2 from "../images/jpt2.png"
// import jpt3 from "../images/jpt3.png"

import pnr1 from "../images/pnr1.png"
import pnr2 from "../images/pnr2.png"
import pnr3 from "../images/pnr3.png"

import styles from "./lightBox.module.scss"

class LightBox extends React.Component {
  state = {
    backdrop: "",
    box: "",
    selectedIndex: 0,
  }
  content = {
    Roomia: {
      medias: [roomiaVideo, appVideo],
      subtitle: "Property Management",
      url: "https://www.roomia.com",
      urlText: "roomia.com",
      info:
        "Roomia makes it easy for property managers to manage leases, track rent payments, handle reporting and bookkeeping.",
      tags: ["SPA", "React", "Ruby on Rails", "Postgres", "AWS S3"],
    },
    "Pick and Roll": {
      medias: [pnr1, pnr2, pnr3],
      subtitle: "Basketball Pick-up Game Finder",
      url: "http://www.pickandroll.life",
      urlText: "pickandroll.life",
      info:
        "With this app, finding a pick-up game is quick, easy and interactive. You can also create your own and invite others.",
      tags: ["SPA", "React", "Node.js", "Postgres", "Sequelize"],
    },
    Foodsight: {
      medias: [fs1, fs2, fs3, fs4],
      subtitle: "Food Dictionary",
      url: "https://foodsight.herokuapp.com",
      urlText: "foodsight.com",
      info:
        "Website dedicated to educate consumers on common food chemicals. Also includes a discussion board, social medias sharing and OAuth.",
      tags: ["JQuery", "Ruby on Rails", "Postgres"],
    },
    "Delta Kids": {
      medias: [dk1, dk2, dk3, dk4],
      subtitle: "Kids Activities Listings",
      url: "https://www.deltakids.ca/",
      urlText: "deltakids.ca",
      info:
        "Discover family events, programs and resources available in the Delta community.",
      tags: ["JQuery", "Ruby on Rails", "Postgres"],
    },
    "Japanese Practice Tool": {
      medias: [jpt1, jpt2],
      subtitle: "Practice Japanese!",
      objectFit: "contain",
      info:
        "Practice hiragana through a matching game, stroke tutorials, and a reading exercise.",
      tags: ["Swift"],
    },
  }

  switch = (where, length) => {
    let { selectedIndex } = this.state

    var vid = document.getElementById(`video${selectedIndex}`)

    if (vid) vid.pause()

    if (where === "left") {
      selectedIndex = selectedIndex ? selectedIndex - 1 : length - 1
    }
    if (where === "right") {
      selectedIndex = selectedIndex + 1 > length - 1 ? 0 : selectedIndex + 1
    }

    this.setState({
      selectedIndex,
    })
  }
  close = () => {
    this.setState({
      box: styles.zoomOut,
    })

    setTimeout(this.props.close, 500)
  }

  renderMediaCount = medias => {
    const { selectedIndex } = this.state
    return (
      <div className={styles.pos}>
        {medias.length > 1 && (
          <div onClick={() => this.switch("left", medias.length)}>
            <i className="fas fa-chevron-left" />
          </div>
        )}
        {medias.length > 1 && (
          <div style={{ flex: 1 }}>
            {selectedIndex + 1} of {medias.length}
          </div>
        )}
        {medias.length > 1 && (
          <div onClick={() => this.switch("right", medias.length)}>
            <i className="fas fa-chevron-right" />
          </div>
        )}
      </div>
    )
  }

  render() {
    const {
      medias,
      subtitle,
      info,
      url,
      urlText,
      statusText,
      objectFit,
      tags,
    } = this.content[this.props.title]

    return (
      <div className="modal is-active">
        <div onClick={this.close} className="modal-background" />
        <div className="modal-content">
          <div className={classNames(styles.box, this.state.box)}>
            <div className={classNames(styles.gallery)}>
              {this.props.title === "Roomia" ||
              this.props.title === "Japanese Practice Tool" ? (
                <div className={styles.videos}>
                  {medias.map((media, i) => {
                    const selected =
                      this.state.selectedIndex === i
                        ? { opacity: 1, position: "relative", zIndex: 1 }
                        : { opacity: 0 }

                    return (
                      <video key={i} id={`video${i}`} style={selected} controls>
                        <source src={media} type="video/mp4" />
                        Your browser does not support HTML5 video.
                      </video>
                    )
                  })}
                </div>
              ) : (
                <div className={classNames(styles.photo, "image is-5by3")}>
                  {medias.map((media, i) => {
                    const selected =
                      this.state.selectedIndex === i
                        ? { opacity: 1 }
                        : { opacity: 0 }

                    return (
                      <img
                        key={i}
                        style={Object.assign(selected, {
                          objectFit: objectFit || "unset",
                        })}
                        src={media}
                      />
                    )
                  })}
                </div>
              )}
            </div>
            {this.renderMediaCount(medias)}
            <div className={styles.caption}>
              <div className={styles.title}>
                <h2>{this.props.title}</h2>
                <div className={styles.link}>
                  {url ? (
                    <a target="_blank" href={url}>
                      {urlText}
                    </a>
                  ) : (
                    statusText
                  )}
                </div>
              </div>
              <div className={styles.about}>{subtitle}</div>
              <div className={styles.info}>{info}</div>
              <div className="tags">
                {tags.map((tag, i) => (
                  <span key={i} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={this.close}
          className="modal-close is-large"
          aria-label="close"
        />
      </div>
    )
  }
}
export default LightBox
