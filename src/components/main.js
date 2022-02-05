import PropTypes from "prop-types"
import React from "react"
import AboutSection from "../sections/about"
import FaqSection from "../sections/faq"
import EventsSection from "../sections/events"
import HistorySection from "../sections/history"
import ContactSection from "../sections/contact"

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        role="presentation"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: "flex" } : { display: "none" }}
      >
        <article
          id="about"
          className={`${this.props.article === "about" ? "active" : ""} ${this.props.articleTimeout ? "timeout" : ""
            }`}
          style={{ display: "none" }}
        >
          <AboutSection />
          {close}
        </article>

        <article
          id="events"
          className={`${this.props.article === "events" ? "active" : ""} ${this.props.articleTimeout ? "timeout" : ""
            }`}
          style={{ display: "none" }}
        >
          <EventsSection />
          {close}
        </article>

        <article
          id="faq"
          className={`${this.props.article === "faq" ? "active" : ""} ${this.props.articleTimeout ? "timeout" : ""
            }`}
          style={{ display: "none" }}
        >
          <FaqSection />
          {close}
        </article>

        <article
          id="history"
          className={`${this.props.article === "history" ? "active" : ""} ${this.props.articleTimeout ? "timeout" : ""
            }`}
          style={{ display: "none" }}
        >
          <HistorySection />
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === "contact" ? "active" : ""} ${this.props.articleTimeout ? "timeout" : ""
            }`}
          style={{ display: "none" }}
        >
          <ContactSection />
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  route: PropTypes.object,
  setWrapperRef: PropTypes.func.isRequired,
  timeout: PropTypes.bool,
}

export default Main
