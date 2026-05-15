"use client"

import React, { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

import Header from "./Header"
import LandingHeader from "./LandingHeader"

const HeaderSelector = () => {
  const pathname = usePathname()

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkScreen()

    window.addEventListener("resize", checkScreen)

    return () => window.removeEventListener("resize", checkScreen)
  }, [])

  const normalizedPath = pathname?.replace(/\/+$/, "") || "/"

  const landingPages = [
    "/chartered-gulmohar-villa-plots-in-nelamangala",
    "/thank-you",
  ]

  const isLandingPage = landingPages.includes(normalizedPath)

  // Hide header on mobile landing pages
  if (isLandingPage && isMobile) {
    return null
  }

  return isLandingPage ? <LandingHeader /> : <Header />
}

export default HeaderSelector
