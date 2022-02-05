import React from "react"
import aboutImage from "../images/about.webp"
import customQuadsImage from "../images/customQuads.webp"
import mantisFpvImage from "../images/mantisFpv.webp"

const AboutSection = () => (
  <>
    <h2 className="major">About</h2>
    <span className="image main">
      <img src={aboutImage} alt="" />
    </span>
    <p>
      Adelaide FPV Racing is South Australia's first and only dedicated drone racing club.
    </p>
    <p>
      We provide regular racing events using industry standard equipment under the guidance
      of experienced operators. We are insured and have the necessary approvals to fly.
    </p>
    <p>
      Beginners and visitors are welcome, our experienced club members are happy to provide
      guidance and help those new to the sport.
    </p>
    <h3>Sponsors</h3>
    <p>
      Adelaide FPV Racing is grateful to have <a href="https://customquads.com.au/">Custom Quads</a>&nbsp;
      and <a href="https://www.mantisfpv.com.au/">Mantis FPV</a> as club sponsors.
    </p>
    <div className="sponsors">
      <div>
        <a href="https://customquads.com.au/">
          <img src={customQuadsImage} alt="Custom Quads" />
        </a>
      </div>
      <div>
        <a href="https://www.mantisfpv.com.au/">
          <img src={mantisFpvImage} alt="Mantis FPV" />
        </a>
      </div>
    </div>
  </>
)

export default AboutSection
