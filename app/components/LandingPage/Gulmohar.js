"use client"

import React from "react"
import Image from "next/image"
import Button from "../Shared/Button"

const Gulmohar = () => {
  return (
    <section className="relative w-full py-8 md:py-14">
      <div className="relative h-[360px] w-full md:h-[420px]">
        <Image
          src="/landing-page/site.png"
          alt="Interested in Chartered Gulmohar"
          fill
          className="hidden object-cover md:block"
        />
        <Image
          src="/landing-page/site-mobile.png"
          alt="Interested in Chartered Gulmohar mobile"
          fill
          className="object-cover md:hidden"
        />

        <div className="absolute inset-0 bg-black/80" />

        <div className="relative z-10 flex h-full items-center justify-center px-4 text-center">
          <div className="max-w-4xl">
            <h2 className="roboto-serif-light text-[36px] leading-tight text-[#FFE6B3] md:text-[50px]">
              Interested in Chartered Gulmohar?
            </h2>
            <p className="mt-4 text-2xl leading-relaxed text-white! md:text-[24px]!">
              Connect with us to learn more about plot availability, pricing,
              and site visits.
            </p>
            <div className="mt-6 flex justify-center">
              <Button
                onClick={() => {
                  const section = document.getElementById("booking-form")

                  if (section) {
                    section.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    })
                  }
                }}
              >
                Enquire Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gulmohar
