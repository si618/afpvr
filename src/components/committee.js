import PropTypes from "prop-types"
import React from "react"

const Committee = ({ position, name, email }) => (
  <div>
    <h4>{position}</h4>
    <p>
      {name}
      <br />
      <a className="email" href={email}>
        {email}
      </a>
    </p>
  </div>
)

Committee.propTypes = {
  position: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
}

export default Committee
