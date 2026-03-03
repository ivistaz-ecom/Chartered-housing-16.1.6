'use client'
import React from 'react'
import Image from 'next/image'

const amenitiesData = [
  {
    icon: '/Charted-gulmohar/amenities-icons-1.svg', // your local icon path
    title: '',
    description: `Indoor recreation space`,
  },
  {
    icon: '/Charted-gulmohar/amenities-icons-2.svg',
    title: "",
    description: `Landscaped parks`,
  },
  {
    icon: '/Charted-gulmohar/amenities-icons-3.svg',
    title: '',
    description: `Clubhouse with swimming pool`,
  },
  {
    icon: '/Charted-gulmohar/amenities-icons-4.svg',
    title: '',
    description: `Open play space`,
  },
  {
    icon: '/Charted-gulmohar/amenities-icons-5.svg',
    title: '',
    description: `Community gathering area`,
  },
]

const Amenities = () => {
  return (
    <section className="relative py-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/chartered-1956/amenities-bg.webp"
          alt="Amenities Background"
          fill
          className="z-0 lg:block hidden object-cover"
          priority
        />
        <Image
          src="/chartered-1956/amenities-details.webp"
          alt="Amenities Background Mobile"
          fill
          className="z-0 lg:hidden block object-cover"
          priority
        />
        <div className="absolute inset-0 lg:hidden block bg-black/35 z-0"></div>
      </div>

      <div className="relative z-10 container mx-auto text-center text-white px-5 md:px-0">
        <h2 className="lg:text-[36px] text-[24px] font-light mb-12 roboto-serif-regular">Amenities</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 text-start">
          {amenitiesData.map((item, index) => (
            <div
              key={index}
              className="bg-white text-[#646464]  p-8 shadow-lg transition-transform transform hover:-translate-y-2"
            >
              <div className="mb-4 flex justify-start min-h-14">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
              <h5 className="font-bold mb-3 text-[18px]">{item.title}</h5>
              <h5 className="text-[18px] leading-relaxed whitespace-pre-line">
                {item.description}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Amenities
