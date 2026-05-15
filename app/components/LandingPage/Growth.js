import React from "react"
import Image from "next/image"

const Growth = () => {
  return (
    <section className="relative overflow-hidden py-8 md:py-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
      />

      <div className="relative mx-auto w-full max-w-6xl px-4">
        <h1 className="helvetica-black text-center text-[32px]  md:text-[38px]">
          A Corridor with Proven Growth
        </h1>
        <div className="mt-7 flex justify-center">
          <Image
            src="/landing-page/3x_Growth.webp"
            alt="Price growth from Rs. 1,800/sq. ft. in 2016 to Rs. 5,500/sq. ft. in 2026"
            width={1200}
            height={409}
            className="h-auto w-[80%]"
          />
        </div>
        <p className="my-4 text-center text-[16px]!  md:text-xl!  text-black! helvetica-normal">
          Chartered Veda (Winner of CREDAI Award for the Best Plotted
          Development in 2019)
        </p>
        {/* <div className="mt-8 w-full overflow-hidden bg-black"> */}
        {/* Desktop video */}
        {/* <video
            className="hidden h-[60vh] w-full object-cover md:block"
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            preload="metadata"
          >
            <source src="/videos/video-banner.mp4" type="video/mp4" />
          </video> */}

        {/* Mobile video */}
        {/* <video
            className="block h-[80vh] w-full object-cover md:hidden"
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            preload="metadata"
          >
            <source
              src="/videos/Chattered-Mobile-Banner.webm"
              type="video/mp4"
            />
          </video> */}
        {/* </div> */}
      </div>
    </section>
  )
}

export default Growth
