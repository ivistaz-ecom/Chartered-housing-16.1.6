import React from "react"
import Image from "next/image"
import Button from "../Shared/Button"

const InterestedInCharted = () => {
  return (
    <section className="relative h-[420px] w-full overflow-hidden md:h-[500px]">
      
      {/* Desktop Background */}
      <Image
        src="/landing-page/Connect-with-us.webp"
        alt="Chartered Gulmohar CTA Background"
        fill
        priority
        className="hidden object-cover md:block"
      />

      {/* Mobile Background */}
      <Image
        src="/landing-page/Connect-with-us-mob.webp"
        alt="Chartered Gulmohar CTA Mobile Background"
        fill
        priority
        className="object-cover md:hidden"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center">
        
        {/* Heading */}
        <h2 className="font-[Helvetica-Black] text-[24px] font-bold leading-tight text-white md:text-[48px]">
          Interested in Chartered Gulmohar?
        </h2>

        {/* Subheading */}
        <p className="mt-4 max-w-[1200px] font-[Nunito] text-[16px] leading-relaxed !text-white md:mt-8 md:text-[30px]">
          Connect with us to learn more about plot availability,
          pricing, and site visits.
        </p>

        {/* Enquire Now Button */}
        <div className="mt-8 md:mt-6">
          <Button
            alt="Enquire Now"
            href="/contact-us"
            className="!h-[42px] !min-w-[150px] border-[2px] border-[#F26A6A] !bg-[#FF1D25] px-6 !text-[16px] font-bold !text-white transition-all duration-300 hover:!bg-white hover:!text-[#FF1D25] md:!h-[72px] md:!min-w-[240px] md:!px-10 md:!text-[22px]"
          >
            Enquire Now
          </Button>
        </div>
      </div>
    </section>
  )
}

export default InterestedInCharted