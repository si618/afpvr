import PropTypes from "prop-types"
import React from "react"
import aboutImage from "../images/about.jpg"
import eventsImage from "../images/events.jpg"
import History from "../components/history"
import historyImage from "../images/history.jpg"
import faqImage from "../images/faq.jpg"

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
          className={`${this.props.article === "about" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={aboutImage} alt="" />
          </span>
          <p>TODO:</p>
          {close}
        </article>

        <article
          id="events"
          className={`${this.props.article === "events" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">Events</h2>
          <span className="image main">
            <img src={eventsImage} alt="" />
          </span>
          <h3 className="major">When we fly</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h3 className="major">Where we fly</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          {close}
        </article>

        <article
          id="history"
          className={`${this.props.article === "history" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">History</h2>
          <span className="image main">
            <img src={historyImage} alt="" />
          </span>
          <History
            title="2019 Edinburgh Air Show"
            url="https://www.youtube.com/embed/BjFRIacrx6s?start=23369&amp;feature=oembed"
          >
            <p>
              Adelaide FPV Racing was invited to compete against the Air Force,
              Army and Navy teams at the Edinburgh Air Show.
            </p>
          </History>
          <History
            title="2018 Hybrid world"
            url="https://www.youtube.com/embed/i22ovztHzx8?feature=oembed"
          >
            <p>Tight indoor racing held at the Adelaide convention centre.</p>
          </History>
          <History
            title="2018 Royal Adelaide Show"
            url="https://www.youtube.com/embed/QOndr7R_dIA?start=83&amp;feature=oembed"
          >
            <p>
              Club member Peter &quot;Railgun&quot; Kuskoff was crowned South
              Australian Drone Racing State Champion for the third year in a
              row.
            </p>
          </History>
          <History
            title="2017 Royal Adelaide Show"
            url="https://www.youtube.com/embed/adWuL_P40Og?feature=oembed"
          >
            <p>
              The 2017 Royal Adelaide Show hosted a{" "}
              <a href="https://www.fai.org/event/2017-royal-adelaide-show-fpv-world-cup">
                FAI world cup round
              </a>{" "}
              of drone racing, attracting interstate and international pilots.
            </p>
          </History>
          <History
            title="2016 Royal Adelaide Show"
            url="https://www.youtube.com/embed/v-WnwRTqv_A?feature=oembed"
          >
            <p>
              Held in conjunction with{" "}
              <a href="https://www.maaa.asn.au/">MAAA</a>, Adelaide FPV Racing's
              first major event attracted a lot of{" "}
              <a href="https://indaily.com.au/news/2016/08/10/drone-racing-on-show-to-live-adelaide-audience/">
                local
              </a>{" "}
              and interstate attention.
            </p>
          </History>
          {close}
        </article>

        <article
          id="faq"
          className={`${this.props.article === "faq" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">Get Involved</h2>
          <span className="image main">
            <img src={faqImage} alt="" />
          </span>
          <h3 className="major">Getting started</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h3 className="major">Rules for flying</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === "contact" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
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
