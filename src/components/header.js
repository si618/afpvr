import PropTypes from "prop-types"
import React from "react"

const Header = (props) => (
  <header id="header" style={props.timeout ? { display: "none" } : {}}>
    <div className="logo" />
    <div className="content">
      <div className="inner">
        <h1>Adelaide FPV Racing</h1>
        <h3>&nbsp;The home of drone racing in South Australia&nbsp;</h3>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle("about")
            }}
          >
            About AFPVR
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle("events")
            }}
          >
            Events
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle("history")
            }}
          >
            History
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle("faq")
            }}
          >
            Get Involved
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle("contact")
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
