import PropTypes from "prop-types"
import React from "react"
import IFrame from "./iframe"

const Embed = ({ title, url, scale, children }) => (
  <div>
    <h4>{title}</h4>
    {children}
    <IFrame title={title} url={url} scale={scale} />
  </div>
)

Embed.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  scale: PropTypes.string,
  children: PropTypes.array,
}

export default Embed
