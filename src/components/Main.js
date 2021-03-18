import PropTypes from "prop-types"
import React from "react"
import Committee from "./committee"
import aboutImage from "../images/about.jpg"
import eventsImage from "../images/events.jpg"
import HistoryVideo from "./historyVideo"
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
          <p>TODO:</p>
          <h3 className="major">Where we fly</h3>
          <p>TODO:</p>
          <h3 className="major">Cost</h3>
          <p>TODO:</p>
          <h3 className="major">Weather policy</h3>
          <p>TODO:</p>
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
          <HistoryVideo
            title="2019 Edinburgh Air Show"
            url="https://www.youtube.com/embed/BjFRIacrx6s?start=23369&amp;feature=oembed"
          >
            <p>
              Adelaide FPV Racing was invited to compete against the Air Force,
              Army and Navy drone racing teams at the Edinburgh Air Show.
            </p>
          </HistoryVideo>
          <HistoryVideo
            title="2018 Hybrid world"
            url="https://www.youtube.com/embed/i22ovztHzx8?feature=oembed"
          >
            <p>Tight indoor racing held at the Adelaide convention centre.</p>
          </HistoryVideo>
          <HistoryVideo
            title="2018 Royal Adelaide Show"
            url="https://www.youtube.com/embed/QOndr7R_dIA?start=83&amp;feature=oembed"
          >
            <p>
              Club member Peter &quot;Railgun&quot; Kuskoff was crowned South
              Australian Drone Racing State Champion for the third year in a
              row.
            </p>
          </HistoryVideo>
          <HistoryVideo
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
          </HistoryVideo>
          <HistoryVideo
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
          </HistoryVideo>
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
          <p>TODO:</p>
          <h3 className="major">Rules for flying</h3>
          <p>TODO:</p>
          <h3 className="major">Membership</h3>
          <p>TODO:</p>
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
          <h3>Social Media</h3>
          <p>
            You can find us on{" "}
            <a href="https://www.facebook.com/groups/adelaidefpvracing/">
              facebook
            </a>{" "}
            and <a href="https://discord.gg/GfpNVwH">discord</a>.
          </p>
          <h3>Club Committee</h3>
          <p>
            Primary point of contact is the{" "}
            <a href="mailto:secretary@adelaidefpvracing.com.au">
              club secretary
            </a>
            .
          </p>
          <div>
            {/* <Committee position="President" name="" email="" /> */}
            <Committee
              position="Secretary"
              name="Justin Grubb"
              email="secretary@adelaidefpvracing.com.au"
            />
            <Committee
              position="Treasurer"
              name="Simon McKenna"
              email="treasurer@adelaidefpvracing.com.au"
            />
            <Committee
              position="Events Manager"
              name="Peter Kuskoff"
              email="events@adelaidefpvracing.com.au"
            />
            <Committee position="Safety Officer" name="Marc Bevan" email="" />
          </div>
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
