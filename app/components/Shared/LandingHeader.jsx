"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    // Run on mount
    handleScroll()

    // Listen for scroll
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    <>
      {/* Logo - Global on all pages */}
      <div
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out ${
          isScrolled ? "top-2" : "top-4"
        }`}
      >
        <Link href="/">
          <img
            src="/logo.svg"
            alt="CHARTERED"
            fetchPriority="high"
            className={`cursor-pointer transition-all duration-500 ease-in-out ${
              isScrolled
                ? "lg:w-14 lg:h-auto w-12 h-auto"
                : "lg:w-20 lg:h-auto w-16 h-auto"
            }`}
          />
        </Link>
      </div>

      {/* White Header Bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 bg-white transition-all duration-500 ease-in-out ${
          isScrolled ? "shadow-md" : ""
        }`}
      >
        <div
          className={`container mx-auto px-6 lg:px-0 transition-all duration-500 ease-in-out ${
            isScrolled ? "h-20" : "h-24"
          }`}
        />
      </header>
    </>
  )
}

export default Header
