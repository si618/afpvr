import PropTypes from "prop-types"
import React from "react"
import Committee from "./committee"
import Embed from "./embed"
import aboutImage from "../images/about.jpg"
import eventsImage from "../images/events.jpg"
import historyImage from "../images/history.jpg"
import faqImage from "../images/faq.jpg"
import IFrame from "./iframe"

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
          <h3>When we fly</h3>
          <div className="form">
            <div className="field half first">
              <p>
                We typically meet twice a month. A full listing of events is
                available on our{" "}
                <a href="https://www.facebook.com/pg/AFPVR/events/">
                  facebook page
                </a>
                .
              </p>
              <p>
                Always check our facebook event page close to the event to see
                if there are any last minute changes due to weather or other
                circumstances.
              </p>
            </div>
            <div className="field half">
              <IFrame
                title=""
                url="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FAFPVR%2F&tabs=events%2Ctimeline&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=729400980909425"
                scale="facebookEvents"
              />
            </div>
          </div>
          <h3>Where we fly</h3>
          <p>
            <Embed
              title="Veale Park, Park 21 off Sir Lewis Cohen Ave"
              url="https://maps.google.com/maps?q=Walyu+Yarta+%28Park+21%29&amp;iwloc=near&amp;output=embed"
            ></Embed>
            <p>
              AFPVR is always searching for new and interesting locations where
              the owner has provided permission for club members to fly, so if
              you know of any locations please get in contact.
            </p>
          </p>
          <h3>Cost</h3>
          <p>
            AFPVR members pay $10 per event. Visitor pilots pay $20 per event.
            <br />
            Juniors under 18 pay ½ price - $5 if a member or $10 if visiting.
            <br />
            Visitors are permitted to attend three events before requiring
            membership.
            <br />
            Spectating is free.
          </p>
          <h3>Weather policy</h3>
          <p>
            The night before an event, the committee will advise by email and
            social media by 6pm if the event will be cancelled due to weather
            concerns. This decision will be made by consensus of three or more
            members of the committee based on forecast rainfall, wind speed,
            temperature and UV rating. Any cancellations will be expressly for
            the purpose of safety and avoiding equipment damage and as such are
            not negotiable.
          </p>
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
          <p>
            AFPVR is affialiated with{" "}
            <a href="https://www.masa.org.au/">MASA</a> at the state level, and{" "}
            <a href="https://www.maaa.asn.au/">MAAA</a> at the federal level.
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
          <Embed
            title="2019 Edinburgh Air Show"
            url="https://www.youtube.com/embed/BjFRIacrx6s?start=23369&amp;feature=oembed"
          >
            <p>
              Adelaide FPV Racing was invited to compete against the Air Force,
              Army and Navy drone racing teams at the Edinburgh Air Show.
            </p>
          </Embed>
          <Embed
            title="2018 Hybrid world"
            url="https://www.youtube.com/embed/i22ovztHzx8?feature=oembed"
          >
            <p>Tight indoor racing held at the Adelaide convention centre.</p>
          </Embed>
          <Embed
            title="2018 Royal Adelaide Show"
            url="https://www.youtube.com/embed/QOndr7R_dIA?start=83&amp;feature=oembed"
          >
            <p>
              Club member Peter &quot;Railgun&quot; Kuskoff was crowned South
              Australian Drone Racing State Champion for the third year in a
              row.
            </p>
          </Embed>
          <Embed
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
          </Embed>
          <Embed
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
          </Embed>
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
            You can find us on <a href="https://discord.gg/GfpNVwH">discord</a>{" "}
            and{" "}
            <a href="https://www.facebook.com/groups/adelaidefpvracing/">
              facebook
            </a>
            .
          </p>
          <h3>Club Committee</h3>
          <p>
            Primary point of contact is the{" "}
            <a href="mailto:secretary@adelaidefpvracing.com.au">
              club secretary
            </a>
            .
          </p>
          <div className="form">
            {/* <Committee position="President" name="" email="" /> */}
            <div className="field first half">
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
            </div>
            <div className="field half">
              <Committee
                position="Events Manager"
                name="Peter Kuskoff"
                email="events@adelaidefpvracing.com.au"
              />
              <Committee position="Safety Officer" name="Marc Bevan" email="" />
            </div>
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
