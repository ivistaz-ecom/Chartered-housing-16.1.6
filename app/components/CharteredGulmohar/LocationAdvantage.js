"use client";
import Image from "next/image";
import React from "react";

const locationMap = "/Charted-gulmohar/location-map.svg";

const LocationAdvantage = () => {
  return (
    <section className="bg-[#F5F5F5] py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Map */}
        <div className="relative w-full h-full aspect-video">
          <Image
            src={locationMap}
            alt="Location Map"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain"
          />
        </div>

        {/* Right Content */}
        <div className="bg-[#EDEDED] p-12 text-center">
          <h2 className="text-[#ED1C25] text-3xl font-semibold mb-6 roboto-serif-regular border-b border-dotted border-[#ED1C25] pb-4">
            Location Advantage
          </h2>

          <div className="space-y-6 text-gray-700 text-[15px] leading-7">
            <p className="border-b border-gray-400 pb-4">
              Located at just about 40 mins drive from Yeshwantpur
            </p>
            <p className="border-b border-gray-400 pb-4">
              20 minutes drive from NH48/Nelamangala Junction
            </p>
            <p className="border-b border-gray-400 pb-4">
              Easy access to Nelamangala Railway Station
            </p>
            <p className="border-b border-gray-400 pb-4">
              30 minutes away from Doddaballapur/Satellite Town Ring Road
            </p>
            <p>
              10 mins away from the famous Chikka Madhure Temple
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationAdvantage;