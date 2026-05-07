"use client"

import React from "react"
import Image from "next/image"
import CountUp from "react-countup"
import Button from "../Shared/Button"

const Plots = () => {
  return (
    <section className="px-4 pb-8 md:px-0 md:pb-14">
      <div className="mx-auto max-w-7xl text-center">
        <h3 className="roboto-serif-regular text-[32px] text-[#4E372A] md:text-[48px]">
          Premium villa plots available in multiple sizes
        </h3>

        {/* Desktop */}

        <div className="mt-8 hidden md:block  mx-auto max-w-6xl shadow-md">
          <div className="relative  w-full overflow-hidden">
            <Image
              src="/landing-page/plot-desk.png"
              alt="Plot sizes desktop"
              width={1600}
              height={600}
              className="h-auto w-full object-cover"
              priority={false}
            />

            {/* black overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* top label */}
            <div className="absolute left-0 top-0 bg-[rgba(70,126,48,0.3)] px-2 py-1.5 text-sm text-white">
              RERA Registered | NPA Approved
            </div>

            {/* numbers row */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-white">
              <div className="flex w-full items-end justify-center gap-10">
                {/* 1200 */}
                <div className="text-center">
                  <div className="roboto-serif-bold text-[72px] leading-none">
                    <CountUp
                      end={1200}
                      duration={3}
                      separator=","
                      enableScrollSpy
                      scrollSpyOnce
                    />
                  </div>

                  <div className="mt-1 text-sm tracking-wide roboto-serif-semibold">
                    sq.ft · Villa Plot
                  </div>
                </div>

                <div className="h-20 w-[4px] bg-white/70" />

                {/* 1500 */}
                <div className="text-center">
                  <div className="roboto-serif-bold text-[72px] leading-none">
                    <CountUp
                      end={1500}
                      duration={3}
                      separator=","
                      enableScrollSpy
                      scrollSpyOnce
                    />
                  </div>

                  <div className="mt-1 text-sm tracking-wide roboto-serif-semibold">
                    sq.ft · Villa Plot
                  </div>
                </div>

                <div className="h-20 w-[4px] bg-white/70" />

                {/* 1500+ */}
                <div className="text-center">
                  <div className="roboto-serif-bold text-[72px] leading-none">
                    <CountUp
                      end={1500}
                      duration={3}
                      separator=","
                      enableScrollSpy
                      scrollSpyOnce
                    />
                    +
                  </div>

                  <div className="mt-1 text-sm tracking-wide roboto-serif-semibold">
                    sq.ft · Villa Plot
                  </div>
                </div>
              </div>

              <div className="mt-6 roboto-serif-regular text-3xl text-[#FFE6B3]">
                Limited plots available.
              </div>
            </div>
          </div>
          <p className="nunito-normal py-6 text-xl text-[#486C43]! md:text-[28px]!">
            Pricing varies based on size and location within the layout.
          </p>
        </div>

        {/* Mobile */}
        <div className="mt-8 md:hidden">
          <div className="relative mx-auto w-full max-w-[420px] overflow-hidden">
            <Image
              src="/landing-page/plot-mob.png"
              alt="Plot sizes mobile"
              width={900}
              height={1800}
              className="h-auto w-full object-cover"
              priority={false}
            />

            {/* black overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* top label */}
            <div className="absolute left-0 top-0 bg-[rgba(70,126,48,0.3)] px-2 py-1.5 text-xs text-white">
              RERA Registered | NPA Approved
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-white">
              {/* 1200 */}
              <div className="text-center">
                <div className="roboto-serif-bold text-[48px] leading-none">
                  <CountUp
                    end={1200}
                    duration={3}
                    separator=","
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </div>

                <div className="mt-2 text-sm roboto-serif-semibold">
                  sq.ft · Villa Plot
                </div>
              </div>

              <div className="my-10 h-[2px] w-[72%] bg-white" />

              {/* 1500 */}
              <div className="text-center">
                <div className="roboto-serif-bold text-[48px] leading-none">
                  <CountUp
                    end={1500}
                    duration={3}
                    separator=","
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </div>

                <div className="mt-2 text-sm  roboto-serif-semibold">
                  sq.ft · Villa Plot
                </div>
              </div>

              <div className="my-10 h-[2px] w-[72%] bg-white" />

              {/* 1500+ */}
              <div className="text-center">
                <div className="roboto-serif-bold text-[48px] leading-none">
                  <CountUp
                    end={1500}
                    duration={3}
                    separator=","
                    enableScrollSpy
                    scrollSpyOnce
                  />
                  +
                </div>

                <div className="mt-2 text-sm roboto-serif-bold">
                  sq.ft · Villa Plot
                </div>
              </div>

              <div className="mt-8 roboto-serif-regular text-2xl text-[#FFE6B3]">
                Limited plots available.
              </div>
            </div>
          </div>
        </div>

        {/* <p className="nunito-normal mt-8 text-xl text-[#486C43]! md:text-[28px]!">
          Pricing varies based on size and location within the layout.
        </p> */}
      </div>
    </section>
  )
}

export default Plots
