import React from "react";
import Image from "next/image";
import Button from "../Shared/Button";

const Grid = () => {

  const projects = [
    {
      id: 1,
      title: "Nelamangala",
      alt: "Chartered Housing | Chartered Gulmohar | Premium Plotted Development in Nelamangala, Bengaluru",
      reraNumber: "PRM/KA/RERA/1250/307/PR/110226/008465",
      desktopImage: "/ongoing-project/charted-gulmohar-post.webp",
      mobileImage: "/ongoing-project/charted-gulmohar-post.webp",
      logo: "/ongoing-project/charted-gulmohar-logo.svg",
      logoWidth: 200,
      logoHeight: 200,
      description: [
        "Set in the calm surroundings of Nelamangala, Chartered Gulmohar is a planned plotted development designed for quieter residential living while remaining connected to Bengaluru.",
        "Spread across 10 acres, the layout features premium villa plots, underground infrastructure, and a green landscaped park - reflecting Chartered Housing’s planning-led approach.",
      ],
      highlightText:
        "Easy access to Yeshwantpur, NH48 & the Satellite Town Ring Road.",
      buttonLink: "/projects/ongoing/chartered-gulmohar",
      isReversed: false,
    },
    {
      id: 2,
      title: "Palace Road",
      alt: "Chartered Housing | Chartered 1956 | Premium 4bhk boutique residences on Palace Road, Bengaluru",
      reraNumber: "PRM/KA/RERA/1251/446/PR/060924/007005",
      desktopImage: "/ongoing-project/palace.webp",
      mobileImage: "/ongoing-project/palace.webp",
      logo: "/ongoing-project/chartered-1956.svg",
      logoWidth: 200,
      logoHeight: 200,
      description: [
        "Set in the heart of Palace Road, Chartered 1956 is a rare 9-floor development with just 7 boutique residences, one per floor. Rooted in royal lineage and inspired by timeless design, each 5584 sq. ft. apartment offers 4 spacious bedrooms, private lift access, a personal lobby, and a separate service zone for staff and deliveries.",
        "Built on a parcel of land allotted in 1956 by the King of Mysore to the parents of the current owners, this project is more than exclusive, it's historic.",
      ],
      highlightText:
        "An exclusive luxury residence on Palace Road built on royal history.",
      buttonLink: "/projects/ongoing/chartered-1956",
      isReversed: false,
    },
    {
      id: 3,
      title: "Yelahanka–Doddaballapur Road",
      alt: "Chartered Housing | Chartered Birdsong | Premium Residential Plots at Sadenahalli on Yelahanka–Doddaballapur Highway, Bengaluru",
      reraNumber: "PRM/KA/RERA/1251/472/PR/210325/007605",
      desktopImage: "/ongoing-project/yelahanka.webp",
      mobileImage: "/ongoing-project/yelahanka.webp",
      logo: "/ongoing-project/bird-song.svg",
      logoWidth: 300,
      logoHeight: 300,
      description: [
        "A plotted development that balances tranquillity with connectivity, Chartered Birdsong spans 18 acres and 38 guntas at Sadenahalli with 265 well-laid plots. Located just 15 minutes from Yelahanka and the Airport Road, it features underground infrastructure, landscaped green zones, and around 7000 sq. ft. clubhouse with a swimming pool, including changing rooms, a party hall, two furnished guest rooms, indoor games area, gym, and children's play spaces.",
      ],
      highlightText:
        "Premium plots just 15 mins off Yelahanka–Doddaballapur Road.",
      buttonLink: "/projects/ongoing/chartered-birdsong",
      isReversed: true,
    },
  ];

  return (
    <>
      <div className="lg:px-0 px-5">
        <div className="container mx-auto lg:pb-20 pb-10 flex flex-col lg:gap-20 gap-10">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
                } gap-10`}
            >
              <div className="lg:w-1/2 flex flex-col-reverse lg:flex-col gap-5">
                <Image
                  src={project.desktopImage}
                  alt={project.alt}
                  width={1200}
                  height={1000}
                  className="w-full h-full object-cover object-center hidden lg:block"
                />
                <h5 className="text-[#646464] hidden lg:block">{project.reraNumber}</h5>

              </div>

              <div className="lg:w-1/2 w-full flex flex-col h-full">
                <div>
                  <Image
                    src={project.logo}
                    alt={project.title}
                    width={project.logoWidth}
                    height={project.logoHeight}
                    className=""
                  />
                </div>
                <h4 className="lg:text-[24px] text-3xl text-[#646464] font-semibold py-5">
                  {project.title}
                </h4>
                <div className="flex flex-col gap-4 flex-grow">
                  {project.description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
                <Image
                  src={project.mobileImage}
                  alt={project.alt}
                  width={1200}
                  height={1000}
                  className="w-full h-full object-cover object-center block lg:hidden pt-5"
                />
                <h5 className="text-[#646464] lg:hidden block pt-2">{project.reraNumber}</h5>
                <h5 className="lg:text-4xl text-2xl text-[#ED1C24] font-semibold py-5 nunito-semibold">
                  {project.highlightText}
                </h5>
                <div className="lg:py-5 py-0 flex items-end">
                  <Button arial-label="Know More" rel="noopener noreferrer" href={project.buttonLink}>Know More</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Grid;
