"use client";

import { chGulmoharProjectDetails } from "@/app/utils/projectDetails"
import Image from "next/image"


const buttonClass =
  "relative cursor-pointer mt-10 bg-[#ED1C25] z-0 flex items-center gap-2 overflow-hidden border-2 border-[#FAD4D680] px-6 py-3 font-semibold text-white transition-all duration-500 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-[#fff] before:transition-transform before:duration-1000 before:content-[''] hover:scale-105 hover:text-[#ED1C25] hover:before:translate-x-[0%] hover:before:translate-y-[0%] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";

const ProjectDetails = () => {
  const scrollToForm = () => {
    document.getElementById("site-visit-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative hidden lg:block bg-black/50">
      <Image
        src="/Charted-gulmohar/chartered-gulmohar-project-overview.webp"
        alt="Project Overview Background"
        fill
        className="object-cover object-center -z-10 lg:block hidden "
      />
      <Image
        src="/Charted-gulmohar/chartered-gulmohar-project-overview-mob.webp"
        alt="Project Overview Background"
        fill
        className="object-cover object-center -z-10 lg:hidden"
      />
      <div className="relative max-w-7xl mx-auto py-40">
        <h3 className="lg:text-4xl text-2xl text-[#ffff] roboto-serif-regular text-center">
          Project Overview
        </h3>
        <div className="mt-10 border border-[#ED1C25] p-10 bg-white">
          <div className="grid grid-cols-5">
            {chGulmoharProjectDetails.map((item, i) => (
              <div
                key={i}
                className={`flex flex-col gap-3 p-5
              ${i % 5 !== 4 ? "border-r border-[#ED1C25]" : ""} 
              ${
                i <
                chGulmoharProjectDetails.length -
                  (chGulmoharProjectDetails.length % 5 || 5)
                  ? "border-b border-[#ED1C25]"
                  : ""
              }`}
              >
                <div className="h-14 flex">
                  <Image
                    src={item.icon}
                    width={50}
                    height={30}
                    alt={`icon ${i + 1}`}
                  />
                </div>
                <p
                  dangerouslySetInnerHTML={{ __html: item.title }}
                  className="text-[#646464]"
                ></p>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="mt-14">
        <h6 className="text-white text-2xl">*Subject to regulatory guidelines on public road access</h6>
        </div> */}
 <div className="flex gap-4 justify-center items-center">
              <button
                type="button"
                onClick={scrollToForm}
                className={buttonClass}
              >
               Request Pricing & Availability
              </button>
            </div>
        
      </div>
    </div>
  )
}

export default ProjectDetails
