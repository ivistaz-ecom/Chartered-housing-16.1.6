"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const BuiltByCharteredHousing = () => {
  return (
    <section className="overflow-x-hidden">

      {/* ================= TOP SECTION ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:py-20 py-10">
        <h2 className="text-[#ED1C24] text-xl sm:text-2xl md:text-3xl font-medium mb-4 md:mb-6 roboto-serif-regular text-center">
          Built by Chartered Housing
        </h2>

        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          Chartered Housing has developed multiple residential communities
          across Bengaluru, focusing on planning, transparency, and long-term value.
        </p>

        <p className="text-gray-600 text-sm sm:text-base mt-3 md:mt-4 leading-relaxed">
          From the developer of Chartered Veda - Winner of the CREDAI Award
          for Best Plotted Development (2019).
        </p>
      </div>

      {/* ================= IMAGE + STATS CARD SECTION ================= */}
      <div className="relative px-4 md:px-0 pb-6 md:pb-0">
        {/* Image - full width with explicit aspect ratio so it always shows */}
        <div className="relative w-full aspect-video min-h-[180px] md:min-h-[280px] overflow-hidden">
          <Image
            src="/Charted-gulmohar/built-by-chartered-housing.webp"
            alt="Chartered Housing"
            fill
            sizes="(max-width: 768px) 100vw, 1280px"
            className="object-cover object-center grayscale"
            priority
          />
        </div>

        {/* Stats Card - below image on mobile, overlapping on desktop */}
        <div className="relative md:absolute md:left-1/2 md:-translate-x-1/2 w-full md:w-[75%] -mt-6 md:mt-0 md:-bottom-24 bg-white shadow-xl">
<div className="relative grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 divide-[#D0D0D0]">
  {/* INSIDE Vertical Line - desktop only */}
  <div className="hidden md:block absolute top-8 bottom-8 left-1/2 w-px bg-[#D0D0D0]"></div>

  {/* INSIDE Horizontal Line - desktop only */}
  <div className="hidden md:block absolute left-8 right-8 top-1/2 h-px bg-[#D0D0D0]"></div>

  {/* Item 1 */}
  <div className="p-5 sm:p-6 md:p-10 flex items-center gap-4 md:gap-6">
    <Image
      src="/Charted-gulmohar/icon-01.svg"
      alt="Excellence"
      width={55}
      height={55}
      className="w-10 h-10 sm:w-12 sm:h-12 md:w-[55px] md:h-[55px] shrink-0"
    />
    <p className="text-gray-700 text-base sm:text-lg md:text-xl">
      <span className="font-bold">36+ </span>
      <span className="text-gray-500">Years of Excellence</span>
    </p>
  </div>

  {/* Item 2 */}
  <div className="p-5 sm:p-6 md:p-10 flex items-center gap-4 md:gap-6">
    <Image
      src="/Charted-gulmohar/icon-02.svg"
      alt="Award"
      width={55}
      height={55}
      className="w-10 h-10 sm:w-12 sm:h-12 md:w-[55px] md:h-[55px] shrink-0"
    />
    <div>
      <p className="font-semibold text-gray-700 text-base sm:text-lg md:text-xl">
        <span className="font-bold">Award badge</span>
      </p>
      <p className="text-gray-500 text-sm sm:text-base md:text-lg">
        (CREDAI 2019)
      </p>
    </div>
  </div>

  {/* Item 3 */}
  <div className="p-5 sm:p-6 md:p-10 flex items-center gap-4 md:gap-6">
    <Image
      src="/Charted-gulmohar/icon-03.svg"
      alt="Projects"
      width={55}
      height={55}
      className="w-10 h-10 sm:w-12 sm:h-12 md:w-[55px] md:h-[55px] shrink-0"
    />
    <p className="text-gray-700 text-base sm:text-lg md:text-xl">
      <span className="font-bold">30+ </span>
      <span className="text-gray-500">Projects Delivered</span>
    </p>
  </div>

  {/* Item 4 */}
  <div className="p-5 sm:p-6 md:p-10 flex items-center gap-4 md:gap-6">
    <Image
      src="/Charted-gulmohar/icon-04.svg"
      alt="Compliance"
      width={55}
      height={55}
      className="w-10 h-10 sm:w-12 sm:h-12 md:w-[55px] md:h-[55px] shrink-0"
    />
    <div className="min-w-0">
      <p className="font-semibold text-gray-700 text-sm sm:text-base md:text-xl">
        <span className="font-bold">Compliance</span> - RERA Registered & NPA Approved Projects with the RERA number displayed clearly
      </p>
    </div>
  </div>

</div>
</div>
      </div>

      {/* Spacer for stats card overlap on desktop only */}
      <div className="hidden md:block h-32" />

      {/* ================= PRICE GROWTH SECTION ================= */}
      <div className="text-center px-4 sm:px-6">
        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 pt-10 justify-center items-center">
          <Link href="/why-chartered">
          <button
            className="relative cursor-pointer bg-[#ED1C25] z-0 flex items-center justify-center gap-2 overflow-hidden border-2 border-[#FAD4D680] px-6 py-3 sm:px-4 sm:py-2 w-full sm:w-auto max-w-md font-semibold text-sm sm:text-base text-white transition-all duration-500 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-white before:transition-transform before:duration-1000 before:content-[''] hover:scale-105 hover:text-[#ED1C25] hover:before:translate-x-[0%] hover:before:translate-y-[0%] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Learn more about our legacy
          </button>
          </Link>
        </div>

        <h3 className="text-[#ED1C24] text-xl sm:text-2xl md:text-3xl font-medium mb-8 md:mb-16 roboto-serif-regular pt-8 md:pt-10">
          Price Growth Observed in Nelamangala
        </h3>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 sm:gap-12 md:gap-24">
          {[
            { year: "2016", price: "Rs. 1800/sq. ft." },
            { year: "2026", price: "Rs. 5500/sq. ft." },
          ].map((item, index) => (
            <div key={index} className="relative w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[340px] md:h-[340px] flex items-center justify-center shrink-0">
              {/* Grey filled circle */}
              <div className="absolute w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[260px] md:h-[260px] bg-[#f4f4f4] rounded-full" />

              {/* Red arc strokes */}
              <svg
                className="absolute w-full h-full"
                viewBox="0 0 340 340"
                preserveAspectRatio="xMidYMid meet"
              >
                <circle
                  cx="170"
                  cy="170"
                  r="155"
                  fill="none"
                  stroke="#ED1C24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="
                    180 90
                    35 70
                    35 90
                    190 90
                    35 70
                    35 90
                  "
                  strokeDashoffset="-20"
                />
              </svg>

              {/* Text */}
              <div className="relative text-center px-2">
                <p className="text-gray-600 text-base sm:text-xl md:text-2xl">Chartered Veda</p>
                <p className="text-gray-600 text-xl sm:text-2xl md:text-3xl mt-1 md:mt-2">{item.year}</p>
                <p style={{ color: "#ED1C24" }} className="!text-xl md:!text-2xl mt-2 md:mt-4 font-medium">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 md:mt-10">
          <p className="text-gray-600 text-base sm:text-lg md:!text-2xl font-medium px-2">
            Indicative of value growth observed in the region over time.
          </p>
        </div>
      </div>
    </section>
  );
};
export default BuiltByCharteredHousing;