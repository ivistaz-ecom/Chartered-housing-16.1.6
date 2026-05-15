"use client"

import React, { useCallback, useEffect, useRef, useState } from "react"
import Image from "next/image"

const AUTO_SCROLL_MS = 3000
const SWIPE_THRESHOLD = 40

const amenities = [
  {
    icon: "/landing-page/IRokMf.tif.svg",
    alt: "Clubhouse with swimming pool",
    title: "Clubhouse with swimming pool",
  },
  {
    icon: "/landing-page/F5z3Ql.svg",
    alt: "Community gathering spaces",
    title: "Community gathering spaces",
  },
  {
    icon: "/landing-page/ODcTBU.svg",
    alt: "Open play areas",
    title: (
      <>
        Open play
        <br />
        areas
      </>
    ),
  },
  {
    icon: "/landing-page/Group.svg",
    alt: "Landscaped parks",
    title: (
      <>
        Landscaped
        <br />
        parks
      </>
    ),
  },
  {
    icon: "/landing-page/brCPy5.svg",
    alt: "Indoor recreation space",
    title: (
      <>
        Indoor recreation
        <br />
        space
      </>
    ),
  },
  {
    icon: "/landing-page/vsRwQ1.tif.svg",
    alt: "Avenue plantations",
    title: (
      <>
        Avenue
        <br />
        plantations
      </>
    ),
  },
]

const mobileSlides = [
  amenities.slice(0, 2),
  amenities.slice(2, 4),
  amenities.slice(4, 6),
]

const LifeStyle = () => {
  const [activeCard, setActiveCard] = useState(0)
  const [activeGroup, setActiveGroup] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  const touchStartX = useRef(0)
  const isDraggingRef = useRef(false)
  const autoScrollRef = useRef(null)

  const goToSlide = useCallback((index) => {
    const next =
      ((index % amenities.length) + amenities.length) % amenities.length
    setActiveCard(next)
    setActiveGroup(Math.floor(next / 2))
  }, [])

  const goToNext = useCallback(() => {
    setActiveCard((prev) => {
      const next = (prev + 1) % amenities.length
      setActiveGroup(Math.floor(next / 2))
      return next
    })
  }, [])

  const goToPrev = useCallback(() => {
    setActiveCard((prev) => {
      const next = (prev - 1 + amenities.length) % amenities.length
      setActiveGroup(Math.floor(next / 2))
      return next
    })
  }, [])

  const stopAutoScroll = useCallback(() => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current)
      autoScrollRef.current = null
    }
  }, [])

  const startAutoScroll = useCallback(() => {
    stopAutoScroll()
    autoScrollRef.current = setInterval(() => {
      setActiveCard((prev) => {
        const next = (prev + 1) % amenities.length
        setActiveGroup(Math.floor(next / 2))
        return next
      })
    }, AUTO_SCROLL_MS)
  }, [stopAutoScroll])

  useEffect(() => {
    startAutoScroll()
    return stopAutoScroll
  }, [startAutoScroll, stopAutoScroll])

  const handleTouchStart = (e) => {
    stopAutoScroll()
    touchStartX.current = e.touches[0].clientX
    isDraggingRef.current = true
    setIsDragging(true)
    setDragOffset(0)
  }

  const handleTouchMove = (e) => {
    if (!isDraggingRef.current) return
    setDragOffset(e.touches[0].clientX - touchStartX.current)
  }

  const handleTouchEnd = (e) => {
    const delta = e.changedTouches[0].clientX - touchStartX.current

    isDraggingRef.current = false
    setIsDragging(false)
    setDragOffset(0)

    if (delta < -SWIPE_THRESHOLD) {
      goToNext()
    } else if (delta > SWIPE_THRESHOLD) {
      goToPrev()
    }

    startAutoScroll()
  }

  const handleTouchCancel = () => {
    isDraggingRef.current = false
    setIsDragging(false)
    setDragOffset(0)
    startAutoScroll()
  }

  return (
    <section className="px-4 md:px-0">
      <div className="mx-auto max-w-7xl">
        <h2 className="helvetica-black text-center text-[32px]  md:text-[38px]">
          Lifestyle & Amenities
        </h2>

        {/* Desktop */}
        <div className="mt-8 hidden grid-cols-6 gap-4 md:grid">
          {amenities.map((item, index) => (
            <div
              key={index}
              className="flex min-h-[210px] flex-col items-center justify-center rounded-md border border-[#ED1C25] px-4 text-center"
            >
              <Image src={item.icon} alt={item.alt} width={78} height={78} />

              <p className="mt-5 text-[30px] leading-snug text-[#646464]">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div
          className="mt-8 overflow-hidden md:hidden"
          style={{ touchAction: "pan-y pinch-zoom" }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchCancel}
        >
          <div
            className={`flex ${isDragging ? "" : "transition-transform duration-500 ease-in-out"}`}
            style={{
              transform: `translateX(calc(-${activeCard * 100}% + ${dragOffset}px))`,
            }}
          >
            {amenities.map((item, index) => (
              <div key={index} className="w-full shrink-0 px-2">
                <div className="mx-auto w-[86%] rounded-md border border-[#ED1C25] bg-white px-6 py-10 text-center">
                  <div className="flex justify-center">
                    <Image
                      src={item.icon}
                      alt={item.alt}
                      width={86}
                      height={86}
                      draggable={false}
                    />
                  </div>

                  <p className="mt-6 text-lg leading-snug text-[#646464]">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Only 3 dots */}
          <div className="mt-5 flex items-center justify-center gap-2">
            {mobileSlides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => {
                  stopAutoScroll()
                  goToSlide(index * 2)
                  startAutoScroll()
                }}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeGroup === index
                    ? "w-6 bg-[#b7a9a9]"
                    : "w-2.5 bg-[#e3dada]"
                }`}
              />
            ))}
          </div>
        </div>

        <h3 className="helvetica-black mt-10 text-center text-[32px]  md:mt-10 md:text-[38px]">
          Trust Built Across Projects
        </h3>
      </div>
    </section>
  )
}

export default LifeStyle
