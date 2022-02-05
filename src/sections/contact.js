import React from "react"
import Committee from "../components/committee"

const ContactSection = () => (
  <>
    <h2 className="major">Contact</h2>
    <h3>Social Media</h3>
    <p>
      You can find us on <a href="https://discord.gg/GfpNVwH">discord</a> and{" "}
      <a href="https://www.facebook.com/groups/adelaidefpvracing/">facebook</a>.
    </p>
    <h3>Club Committee</h3>
    <p>
      Primary point of contact is the{" "}
      <a href="mailto:secretary@adelaidefpvracing.com.au">club secretary</a>.
    </p>
    <div className="form">
      {/* <Committee position="President" name="" email="" /> */}
      <div className="field first half">
        <Committee
          position="Secretary"
          name="Justin 'Astromek' Grubb"
          email="secretary@adelaidefpvracing.com.au"
        />
        <Committee
          position="Treasurer"
          name="David 'CrazyTrain' Hoyle"
          email="treasurer@adelaidefpvracing.com.au"
        />
      </div>
      <div className="field half">
        <Committee
          position="Events Manager"
          name="Pat 'Anox' Purcell"
          email="events@adelaidefpvracing.com.au"
        />
        <Committee
          position="Safety Officer"
          name="Stuart 'Squid' Francis"
          email=""
        />
      </div>
    </div>
  </>
)

export default ContactSection
