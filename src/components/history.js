import PropTypes from "prop-types"
import React from "react"
import Video from "./video"

const History = ({ title, url, children }) => (
  <div>
    <h3>{title}</h3>
    {children}
    <Video title={title} url={url} />
  </div>
)

History.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  children: PropTypes.array,
}

export default History
