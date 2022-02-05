import React from "react"
import Embed from "../components/embed"
import IFrame from "../components/iframe"
import eventsImage from "../images/events.webp"

const EventSection = () => (
  <>
    <h2 className="major">Events</h2>
    <span className="image main">
      <img src={eventsImage} alt="" />
    </span>
    <h3>When we fly</h3>
    <div className="form">
      <div className="field half first">
        <p>
          We typically meet twice a month. A full listing of events is available
          on our{" "}
          <a href="https://www.facebook.com/pg/AFPVR/events/">facebook page</a>.
        </p>
        <p>
          Always check our facebook event page close to the event to see if
          there are any last minute changes due to weather or other
          circumstances.
        </p>
        <p>
          AFPVR is always searching for new and interesting locations where the
          owner has provided permission for club members to fly, so if you know of
          any locations please get in contact.
        </p>
      </div>
      <div className="field half">
        <IFrame
          title=""
          url="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FAFPVR%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1629489317405180"
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
    </p>
    <h3>Cost</h3>
    <p>
      Spectating is free. AFPVR members pay $10 per event. Visiting pilots pay $20 per event.
    </p>
    <p>
      Junior pilots under 18 pay ½ price - $5 if a member or $10 if visiting.
    </p>
    <p>
      Visiting pilots are permitted to attend three events before requiring membership.
    </p>
    <h3>Weather policy</h3>
    <p>
      The night before an event, the committee will advise by email and social
      media by 6pm if the event will be cancelled due to weather concerns.
    </p>
    <p>
      This decision will be made by consensus of three or more members of the
      committee based on forecast rainfall, wind speed, temperature and UV
      rating.
    </p>
    <p>
      Any cancellations will be expressly for the purpose of safety and
      avoiding equipment damage and as such are not negotiable.
    </p>
  </>
)

export default EventSection
