import React from "react"
import Layout from "../components/layout"
import crashedDroneImage from "../images/crashedDrone.webp"

const NotFoundPage = () => (
  <Layout>
    <h1>NOT FOUND <img src={crashedDroneImage} alt="Not found" /></h1>
    <p>These are not the drones you&apos;re looking for... move along.</p>
  </Layout>
)

export default NotFoundPage
