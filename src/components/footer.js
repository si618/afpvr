import React from "react"
import PropTypes from "prop-types"

const Footer = (props) => (
  <footer id="footer" style={props.timeout ? { display: "none" } : {}}>
    <p className="copyright">
      &copy;2021 AFPVR &nbsp; Site: si
      <span role="img" aria-label="Alien">
        👽
      </span>
      fi &nbsp; Design:&nbsp;
      <a href="https://html5up.net">HTML5 UP</a>
    </p>
  </footer>
)

Footer.propTypes = {
  timeout: PropTypes.bool,
}

export default Footer
