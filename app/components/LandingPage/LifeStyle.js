"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"

const amenities = [
  {
    icon: "/landing-page/IRokMf.tif.svg",
    title: "Clubhouse with swimming pool",
  },
  {
    icon: "/landing-page/F5z3Ql.svg",
    title: "Community gathering spaces",
  },
  {
    icon: "/landing-page/ODcTBU.svg",
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
    title: (
      <>
        Avenue
        <br />
        plantations
      </>
    ),
  },
]

// Only 3 dots/groups
const mobileSlides = [
  amenities.slice(0, 2),
  amenities.slice(2, 4),
  amenities.slice(4, 6),
]

const LifeStyle = () => {
  const [activeCard, setActiveCard] = useState(0)
  const [activeGroup, setActiveGroup] = useState(0)

  // Auto scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => {
        const next = (prev + 1) % amenities.length

        // Update active dot every 2 cards
        setActiveGroup(Math.floor(next / 2))

        return next
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="px-4 md:px-0">
      <div className="mx-auto max-w-7xl">
        <h2 className="helvetica-black text-center text-[32px]  md:text-[38px]">
          Lifestyle & Amenities
        </h2>

        {/* Desktop */}
        <div className="mt-8 hidden grid-cols-6 gap-4 md:grid">
          {amenities.map((item) => (
            <div
              key={item.title}
              className="flex min-h-[210px] flex-col items-center justify-center rounded-md border border-[#ED1C25] px-4 text-center"
            >
              <Image src={item.icon} alt={item.title} width={78} height={78} />

              <p className="mt-5 text-[30px] leading-snug text-[#646464]">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="mt-8 overflow-hidden md:hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${activeCard * 100}%)`,
            }}
          >
            {amenities.map((item, index) => (
              <div key={index} className="w-full shrink-0 px-2">
                <div className="mx-auto w-[86%] rounded-md border border-[#ED1C25] bg-white px-6 py-10 text-center">
                  <div className="flex justify-center">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={86}
                      height={86}
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
                  setActiveGroup(index)
                  setActiveCard(index * 2)
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
