"use client"

import React from "react"
import { usePathname } from "next/navigation"
import Header from "./Header"
import LandingHeader from "./LandingHeader"

const HeaderSelector = () => {
  const pathname = usePathname()

  const normalizedPath = pathname?.replace(/\/+$/, "") || "/"

  const landingPages = ["/landing-page", "/thank-you"]

  const isLandingPage = landingPages.includes(normalizedPath)

  return isLandingPage ? <LandingHeader /> : <Header />
}

export default HeaderSelector
