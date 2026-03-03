"use client";
import React from "react";
import Image from "next/image";
import { FileText, BadgeCheck, Lightbulb, Home, Clock } from "lucide-react";

const ProjectOverview = () => {
  return (
    <section className="relative w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/chartered-1956/project-overview.webp" // replace with your bg image path
          alt="Business Ethics Background"
          layout="fill"
          objectFit="cover"
          priority
          className="z-0 lg:block hidden"
        />
        <Image
          src="/chartered-1956/project-overview-mobile.webp" // replace with your bg image path
          alt="Business Ethics Background"
          layout="fill"
          objectFit="cover"
          priority
          className="z-0 lg:hidden block"
        />
        <div className="absolute inset-0 bg-black/50 z-0"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto px-4 lg:py-16 py-10 text-center text-white">
        <h2 className="text-3xl md:text-5xl font-bold uppercase roboto-serif-regular lg:leading-16">
          Project Overview
        </h2>

        {/* White Box */}
        <div className="mt-12 bg-white shadow-lg p-6 md:p-10 mx-auto lg:w-3/4">
          <div className="flex lg:flex-row flex-col gap-5">
           

            {/* Right Column - 2x2 grid */}
            <div className="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x-0.5 divide-[#ED1C25]">
              {/* Passion for Quality */}
              <div className="p-6 text-left">
                <Image
                  src="/why-chartered/icons/icon-2.svg"
                  alt="Unwavering Transparency"
                  width={50}
                  height={50}
                  className="mb-3"
                />
                <h3 className="text-2xl font-bold text-[#ED1C25] mb-3 uppercase pt-2">
                  Passion for Quality
                </h3>
                <h6 className="text-lg text-[#646464]">
                  Quality is ensured with strict quality control in choosing
                  materials, unwavering systems followed in construction
                  processes and minute attention to finishing detail, are among
                  many other quality practices.
                </h6>
              </div>

              {/* Thoughtful Design */}
              <div className="p-6 text-left border-t md:border-t-0 md:border-r-0 md:border-l border-[#ED1C25]">
                <Image
                  src="/why-chartered/icons/icon-3.svg"
                  alt="Unwavering Transparency"
                  width={50}
                  height={50}
                  className="mb-3"
                />
                <h3 className="text-2xl font-bold text-[#ED1C25] mb-3 uppercase pt-3">
                  Thoughtful Design
                </h3>
                <h6 className="text-lg text-[#646464]">
                  Thoughtful design helps purchasers to enjoy higher usable area
                  out of the Super Built Area purchased which more importantly
                  helps buyers save a substantial cost.
                </h6>
              </div>

              {/* Attention to Light */}
              <div className="p-6 text-left border-t border-[#ED1C25]">
                <Image
                  src="/why-chartered/icons/icon-4.svg"
                  alt="Unwavering Transparency"
                  width={70}
                  height={70}
                  className="mb-3"
                />
                <h3 className="text-2xl font-bold text-[#ED1C25] mb-3 uppercase pt-4.5">
                  Attention to Light & Ventilation
                </h3>
                <h6 className="text-lg text-[#646464]">
                  Uncompromising attention to good light & ventilation, vaastu,
                  efficiency of living spaces etc assume highest priority while
                  planning.
                </h6>
              </div>

              {/* Timely Completion */}
              <div className="p-6 text-left border-t md:border-l border-[#ED1C25]">
                <Image
                  src="/why-chartered/icons/icon-5.svg"
                  alt="Unwavering Transparency"
                  width={50}
                  height={50}
                  className="mb-3"
                />
                <h3 className="text-2xl font-bold text-[#ED1C25] mb-3 uppercase pt-3">
                  Timely <br /> Completion
                </h3>
                <h6 className="text-lg text-[#646464]">
                  We have a unique track record of completing all our projects
                  on time right from our first project. Even when the Real
                  Estate business went through periodic recessionary cycles, we
                  have been frighteningly punctual always – irrespective of the
                  times – good or bad.
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;
