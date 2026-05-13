import React from "react"
import HeroBanner from "./HeroBanner"
import Growth from "./Growth"
import LifeStyle from "./LifeStyle"
import Location from "./Location"
import Plots from "./Plots"
import Booking from "./Booking"
import Gulmohar from "./Gulmohar"
import TestimonialsCarousel from "../Home/TestimonialsCarousel"
import InterestedInCharted from "./InterestedInCharted"

const LandingPage = () => {
  return (
    <>
      <HeroBanner />
      <Growth />
      <Location />
      <Plots />
      <LifeStyle />
      <div className="px-4 md:px-0">
        <TestimonialsCarousel />
      </div>
      <InterestedInCharted />
      {/* <Gulmohar /> */}
      <Booking />
    </>
  )
}

export default LandingPage
