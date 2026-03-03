import { chGulmoharProjectDetails } from "@/app/utils/projectDetails"
import Image from "next/image"

const ExploreProjectDetails = () => {
  return (
    <div className="relative hidden lg:block">
      <Image
        src="/chartered-1956/project-overview.webp"
        alt="Project Overview Background"
        fill
        className="object-cover object-center -z-10 lg:block hidden"
      />
      <Image
        src="/chartered-1956/mobile-details.webp"
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
      </div>
    </div>
  )
}

export default ExploreProjectDetails
