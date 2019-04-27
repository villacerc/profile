import React from "react"
import classNames from "classnames"

import styles from "./lightBox.module.scss"

class LightBox extends React.Component {
  photos = [
    "http://placekitten.com/g/610/410",
    "http://placekitten.com/g/600/400",
  ]
  state = {
    backdrop: "",
    box: "",
    selectedIndex: 0,
  }
  switch = where => {
    let { selectedIndex } = this.state

    if (where === "left") {
      selectedIndex = selectedIndex ? selectedIndex - 1 : this.photos.length - 1
    }
    if (where === "right") {
      selectedIndex =
        selectedIndex + 1 > this.photos.length - 1 ? 0 : selectedIndex + 1
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
    return (
      <div className="modal is-active">
        <div className="modal-background" />
        <div className="modal-content">
          <div className={classNames(styles.box, this.state.box)}>
            <div className={classNames(styles.gallery)}>
              <div className={classNames(styles.photo, "image is-5by3")}>
                {this.photos.map((photo, i) => {
                  const selected =
                    this.state.selectedIndex === i ? { opacity: 0 } : {}
                  return <img style={selected} src={photo} />
                })}
              </div>
            </div>
            <div className={styles.pos}>
              <div onClick={() => this.switch("left")}>
                <i className="fas fa-chevron-left" />
              </div>
              <div>
                {selectedIndex + 1} of {this.photos.length}
              </div>
              <div onClick={() => this.switch("right")}>
                <i className="fas fa-chevron-right" />
              </div>
            </div>
            <div className={styles.caption}>
              <div className={styles.title}>
                <h2>Roomia</h2>
                <a target="_blank" href="www.google.ca">
                  Visit Site
                </a>
              </div>
              <div className={styles.about}>Property Management</div>
              <div className={styles.info}>
                Roomia makes it easy for property managers to manage leases,
                track rent payments, handle reporting and bookkeeping. Single
                Page App with React and Ruby On Rails.
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
