import PropTypes from "prop-types"
import React from "react"

const Committee = ({ position, name, email }) => (
  <div>
    <h4>{position}</h4>
    <div style={{ paddingLeft: 1 + "rem" }}>
      <p>
        {name}
        <br />
        <a href={email}>{email}</a>
      </p>
    </div>
  </div>
)

Committee.propTypes = {
  position: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
}

export default Committee
