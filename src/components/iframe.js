import React from "react"
import PropTypes from "prop-types"

const IFrame = ({ title, url, scale }) => (
  <div className={scale ?? "embed"}>
    <iframe
      className="iframe"
      src={url}
      title={title}
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
)

IFrame.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  scale: PropTypes.string,
}

export default IFrame
