"use client"

const EnquiryNowButton = () => {
  const handleScroll = () => {
    const section = document.getElementById("booking-form")

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <button
      onClick={handleScroll}
      className="
        fixed
        right-[-55px]
        md:top-1/2
        top-2/3
        z-100
        -translate-y-1/2
        rotate-[-90deg]
       hover:bg-white
        px-6
        py-3
        text-sm
        font-semibold
        tracking-wide
        hover:text-[#ED1C24]
        transition-all
        duration-300
       helvetica-normal
       bg-[#ED1C24]
       text-white
       border
       cursor-pointer
       md:text-[18px]
       text-[16px]
       rounded-t-md
      "
    >
      Enquire Now
    </button>
  )
}

export default EnquiryNowButton
