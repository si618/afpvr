import PropTypes from "prop-types"
import React from "react"
import Video from "./video"

const HistoryVideo = ({ title, url, children }) => (
  <div>
    <h3>{title}</h3>
    {children}
    <Video title={title} url={url} />
  </div>
)

HistoryVideo.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  children: PropTypes.array,
}

export default HistoryVideo
