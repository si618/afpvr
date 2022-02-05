import React from "react"
import Embed from "../components/embed"
import historyImage from "../images/history.webp"

const HistorySection = () => (
  <>
    <h2 className="major">History</h2>
    <span className="image main">
      <img src={historyImage} alt="" />
    </span>
    <Embed
      title="2019 Edinburgh Air Show"
      url="https://www.youtube.com/embed/BjFRIacrx6s?start=23369&amp;feature=oembed"
    >
      <p>
        Adelaide FPV Racing was invited to compete against the Australian Air
        Force, Army and Navy drone racing teams at the Edinburgh Air Show.
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
        Australian Drone Racing State Champion for the third year in a row.
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
        Held in conjunction with <a href="https://www.maaa.asn.au/">MAAA</a>,
        Adelaide FPV Racing's first major event attracted a lot of{" "}
        <a href="https://indaily.com.au/news/2016/08/10/drone-racing-on-show-to-live-adelaide-audience/">
          local
        </a>{" "}
        and interstate attention.
      </p>
    </Embed>
  </>
)

export default HistorySection
