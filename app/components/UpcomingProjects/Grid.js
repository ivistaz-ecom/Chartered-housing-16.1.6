import Image from "next/image";
import React from "react";
import Button from "../Shared/Button";

const Grid = () => {
  const upcomingProjects = [
    {
      id: 1,
      // image: "/upcoming-project/row-villas.png",
      alt: "Premium Row Villas",
      title: "Premium Row Villas",
      location: "Bannerghatta Road",
      description:
        "Located just off Bannerghatta Road, just 15 minutes away from NICE road. Proposed Row Villa projects with all modern amenities.",
      buttonLink: "/projects/upcoming/premium-row-villas",
    },
    // {
    //   id: 2,
    //   // image: "/upcoming-project/plotted.png",
    //   alt: "Premium Plotted Development",
    //   title: "Premium Plotted Development",
    //   location: "Nelamangala Road",
    //   description:
    //     "Located just off the Nelamangala-Doddaballapur Highway. Close to our recently completed project, Chartered Veda. Proposed premium plotted development projects spread across 10 acres with various plot sizes.",
    //   buttonLink: "/projects/upcoming/premium-plotted-development",
    // },
    {
      id: 3,
      // image: "/upcoming-project/boutique.png",
      alt: "Boutique Apartments",
      title: (
        <>
          <span className="text-[#ED1C25] roboto-serif-light">Boutique Apartments </span> <br />
        </>
      ),
      location: (
        <span className="text-[#646464] roboto-serif-light">Gandhi Bazaar, Basavanagudi</span>
      ),
      description:
        "Located in the heart of South Bangalore, at Gandhi Bazaar, Basavanagudi. Proposed to develop 2 & 3 bed apartments.",
      buttonLink: "/projects/upcoming/boutique-apartments",
    },
  ];

  return (
    <>
      <div className="container mx-auto pb-20 flex lg:flex-row flex-col gap-5 lg:px-0 px-5">
        {upcomingProjects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col shadow-md lg:p-4 p-4 lg:w-1/3 border border-[#e8e4e4]"
          >
            {/* <Image
              src={project.image || "/upcoming-project/row-villas.png"}
              alt={project.alt || "Premium Row Villas"}
              width={1200}
              height={1000}
              className=""
            /> */}
            <div className="flex flex-col justify-between flex-1 py-5">
              {/* Top Section */}
              <div className="flex flex-col gap-2">
                <span className="text-[#ED1C25] text-2xl roboto-serif-light">
                  {project.title}{" "}
                </span>
                <span className="text-[#646464] text-2xl roboto-serif-light">
                  {project.location}
                </span>
                <p className="pt-5">{project.description}</p>
              </div>

              {/* Button aligned bottom */}
              <div className="pt-5">
                <Button href="/contact-us">Know More</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Grid;
