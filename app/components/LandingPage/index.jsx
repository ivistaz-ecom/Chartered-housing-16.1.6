import React from "react"
import HeroBanner from "./HeroBanner"
import Growth from "./Growth"
import LifeStyle from "./LifeStyle"
import Location from "./Location"
import Plots from "./Plots"
import Booking from "./Booking"
import TestimonialsCarousel from "../Home/TestimonialsCarousel"
import EnquiryNowButton from "../Shared/EnquiryNowButton"

const LandingPage = () => {
  return (
    <>
      <HeroBanner />
      <EnquiryNowButton/>
      <Growth />
      <Location />
      <Plots />
      <LifeStyle />
      <div className="px-4 md:px-0">
        <TestimonialsCarousel />
      </div>
      <Booking />
    </>
  )
}

export default LandingPage
