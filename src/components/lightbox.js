import React from "react"
import classNames from "classnames"

import roomia1 from "../images/roomia1.png"
import roomia2 from "../images/roomia2.png"
import roomia3 from "../images/roomia3.png"
import roomia4 from "../images/roomia4.png"

import fs1 from "../images/foodsight-landing.png"
import fs2 from "../images/fs2.png"
import fs3 from "../images/fs3.png"
import fs4 from "../images/fs4.png"

import dk1 from "../images/dk1.png"
import dk2 from "../images/dk2.png"
import dk3 from "../images/dk3.png"
import dk4 from "../images/dk4.png"

import jpt1 from "../images/jpt1.png"
import jpt2 from "../images/jpt2.png"
import jpt3 from "../images/jpt3.png"

import pickAndRoll from "../images/picknroll-landing.png"

import styles from "./lightBox.module.scss"

class LightBox extends React.Component {
  state = {
    backdrop: "",
    box: "",
    selectedIndex: 0,
  }
  content = {
    Roomia: {
      photos: [roomia3, roomia1, roomia2, roomia4],
      subtitle: "Property Management",
      url: "https://www.roomia.com",
      info:
        "Roomia makes it easy for property managers to manage leases, track rent payments, handle reporting and bookkeeping. Single Page App with React and Ruby on Rails.",
    },
    "Pick and Roll": {
      photos: [pickAndRoll],
      subtitle: "Basketball Pickup Game Finder",
      statusText: "Coming Soon",
      info:
        "Finding a pickup game in your local centres is quick and easy or create your own and invite others. Single Page App with React and Express.js.",
    },
    Foodsight: {
      photos: [fs1, fs2, fs3, fs4],
      subtitle: "Food Dictionary",
      url: "https://foodsight.herokuapp.com",
      info:
        "Learn more about those hard to pronounce food chemicals in a format that's easy to read. Also includes a discussion board, social media sharing and OAuth. Built with JQuery and Ruby on Rails.",
    },
    "Delta Kids": {
      photos: [dk1, dk2, dk3, dk4],
      subtitle: "Kids Activities Listings",
      url: "https://www.deltakids.ca/",
      info:
        "Discover family events, programs and resources available in the Delta community . Built with JQuery, Bootstrap and Ruby on Rails.",
    },
    "Japanese Practice Tool": {
      photos: [jpt1, jpt2, jpt3],
      subtitle: "Practice Japanese!",
      objectFit: "contain",
      info:
        "Practice hiragana through a matching game, stroke tutorials, and a reading exercise. Built with Swift for the iOS.",
    },
  }

  switch = (where, length) => {
    let { selectedIndex } = this.state

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
  render() {
    const { selectedIndex } = this.state
    const { photos, subtitle, info, url, statusText, objectFit } = this.content[
      this.props.title
    ]
    return (
      <div className="modal is-active">
        <div className="modal-background" />
        <div className="modal-content">
          <div className={classNames(styles.box, this.state.box)}>
            <div className={classNames(styles.gallery)}>
              <div className={classNames(styles.photo, "image is-5by3")}>
                {photos.map((photo, i) => {
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
                      src={photo}
                    />
                  )
                })}
              </div>
            </div>
            <div className={styles.pos}>
              {photos.length > 1 && (
                <div onClick={() => this.switch("left", photos.length)}>
                  <i className="fas fa-chevron-left" />
                </div>
              )}
              <div style={{ flex: 1 }}>
                {selectedIndex + 1} of {photos.length}
              </div>
              {photos.length > 1 && (
                <div onClick={() => this.switch("right", photos.length)}>
                  <i className="fas fa-chevron-right" />
                </div>
              )}
            </div>
            <div className={styles.caption}>
              <div className={styles.title}>
                <h2>{this.props.title}</h2>
                <div className={styles.link}>
                  {url ? (
                    <a target="_blank" href={url}>
                      Visit Site
                    </a>
                  ) : (
                    statusText
                  )}
                </div>
              </div>
              <div className={styles.about}>{subtitle}</div>
              <div className={styles.info}>{info}</div>
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
