"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../Shared/Button";
import Link from "next/link";


const ProjectsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev
  const intervalRef = useRef(null);

  const carouselProjects = [
    {
      id: 1,
      image: "/home/gulmohar-home.webp",
      alt: "Chartered Housing | Chartered Gulmohar | Premium Plotted Development in Nelamangala, Bengaluru",
      // logo: "/ongoing-project/bird-song.svg",
      logoAlt: "Chartered Gulmohar",
      ProjectTitle: "Chartered Gulmohar",
      title: <>A quieter addressdesigned for <br /> long-term value</>,
      description:
        "A premium plotted development across 10 acres in Nelamangala, Chartered Gulmohar offers well-planned villa plots with underground infrastructure and landscaped green spaces. Designed for both future home construction and long-term investment, it brings together peaceful surroundings and everyday connectivity.",
      buttonLink: "/projects/ongoing/chartered-gulmohar",
      desktopLogoWidth: 400,
      desktopLogoHeight: 100,
      mobileLogoWidth: 320,
      mobileLogoHeight: 60,

    },
    {
      id: 2,
      image: "/home/ongoing.webp",
      alt: "Chartered Housing | Chartered Birdsong | Premium Residential Plots at Sadenahalli on Yelahanka–Doddaballapur Highway, Bengaluru",
      // logo: "/ongoing-project/bird-song.svg",
      logoAlt: "Birdsong Logo",
      ProjectTitle: "Chartered Birdsong",
      title: "Where nature meets design",
      description:
        "A premium plotted development spread across 18 acres and 38 guntas at Sadenahalli, just 15 minutes from Yelahanka. With 265 well-laid plots, underground infrastructure, landscaped paths, and a modern clubhouse, Birdsong is designed for those who want to build their forever home in a thoughtfully planned community.",
      buttonLink: "/projects/ongoing/chartered-birdsong",
      desktopLogoWidth: 400,
      desktopLogoHeight: 100,
      mobileLogoWidth: 320,
      mobileLogoHeight: 60,

    },
    {
      id: 3,
      image: "/home/legacy.webp",
      alt: "Chartered Housing | Chartered 1956 | Premium 4bhk boutique residences on Palace Road, Bengaluru",
      // logo: "/ongoing-project/chartered-1956.svg",
      logoAlt: "Chartered 1956 Logo",
      ProjectTitle: "Chartered 1956",
      title: "An exclusive luxury residence",
      description:
        "Set in the heart of Palace Road, Chartered 1956 is a rare 9-floor development with just 7 boutique residences - one per floor. Rooted in royal lineage and inspired by timeless design, each 5584 sq. ft. apartment offers 4 spacious bedrooms, private lift access, a personal lobby, and a separate service zone for staff and deliveries.",
      buttonLink: "/projects/ongoing/chartered-1956",
      desktopLogoWidth: 200,
      desktopLogoHeight: 100,
      mobileLogoWidth: 150,
      mobileLogoHeight: 70,
    },
  ];

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % carouselProjects.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide(
      (prev) => (prev - 1 + carouselProjects.length) % carouselProjects.length
    );
  };

  // start auto slide
  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const startAutoSlide = () => {
    stopAutoSlide(); // prevent multiple intervals
    intervalRef.current = setInterval(nextSlide, 5000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const currentProject = carouselProjects[currentSlide];

  return (
    <section
      className=" bg-cover bg-center bg-no-repeat overflow-hidden bg-[url(/home/ongoing-projects-bg.webp)] bg-fixed"
      style={{ transform: "translateZ(0)", backfaceVisibility: "hidden" }}
    >
      <div
        className="container mx-auto px-5 lg:px-0 py-16 flex flex-col-reverse lg:flex-row items-center justify-between lg:gap-32 gap-10"
        onMouseEnter={stopAutoSlide}
        onMouseLeave={startAutoSlide}
      >
        {/* Left Content Box */}
        <div className="relative w-full lg:w-[600px] h-[880px] overflow-visible" style={{ willChange: "auto" }}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentProject.id}
              custom={direction}
              initial={{ x: direction > 0 ? 100 : -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? -100 : 100, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="relative bg-white p-5"
            >
              {/* Image with overlay logo */}
              <div className="relative">
                <Image
                  src={currentProject.image}
                  alt={currentProject.alt}
                  width={600}
                  height={400}
                  className="w-[600px]"
                />
                {/* Desktop Logo */}
                {/* <div className="absolute top-5 -right-20 bg-white px-4 py-2 hidden lg:block">
                  <Image
                    src={currentProject.logo}
                    alt={currentProject.logoAlt}
                    width={currentProject.desktopLogoWidth}
                    height={currentProject.desktopLogoHeight}
                  />
                </div>
                {/* Mobile Logo */}
                {/* <div className="absolute -bottom-10 left-5 bg-white px-4 py-2 block lg:hidden">
                  <Image
                    src={currentProject.logo}
                    alt={currentProject.logoAlt}
                    width={currentProject.mobileLogoWidth}
                    height={currentProject.mobileLogoHeight}
                  />
                </div>  */}
              </div>

              {/* Text Content */}
              <div className="lg:mt-5 mt-20">
                <h2 className="roboto-serif-medium lg:text-4xl text-[24px] text-[#646464]">
                  {currentProject.ProjectTitle}
                </h2>
                <h2 className="roboto-serif-light lg:text-[24px] text-[20px] text-[#ED1C25]">
                  {currentProject.title}
                </h2>
                <h3 className="text-[#646464] mt-3 text-[18px] leading-relaxed">
                  {currentProject.description}
                </h3>
                <div className="py-5">
                  <Link href={currentProject.buttonLink}>
                    <Button>Know More</Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div
            className="absolute lg:top-1/2 top-[38%] lg:-left-12 transform -translate-y-1/2 cursor-pointer"
            onClick={prevSlide}
          >
            <Image
              src="/home/white-left.svg"
              alt="arrow-left"
              width={25}
              height={25}
              className="cursor-pointer lg:bg-transparent bg-black/50 p-2 rounded-full lg:w-auto lg:h-auto w-10 h-10"
            />
          </div>
          <div
            className="absolute lg:top-1/2 top-[38%] lg:-right-12 right-0 transform -translate-y-1/2 cursor-pointer"
            onClick={nextSlide}
          >
            <Image
              src="/home/white-right.svg"
              alt="arrow-right"
              width={25}
              height={25}
              className="cursor-pointer lg:bg-transparent bg-black/50 p-2 rounded-full lg:w-auto lg:h-auto w-10 h-10"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="text-left w-full lg:w-1/2 text-white">
          <h4 className="roboto-serif-light lg:text-4xl text-2xl text-[#ED1C25]">
            ONGOING
          </h4>
          <h2 className="roboto-serif-light lg:text-[60px] text-4xl mt-2">PROJECTS</h2>
          <div className="lg:w-44 w-32 border-b-2 border-white mt-3 mb-6 mx-1"></div>
          <h3 className="lg:text-[24px] text-2xl leading-relaxed">
            Explore our ongoing projects to see how we bring ideas to
            life.
          </h3>
          <div className="py-5">
            <Button href="/projects/ongoing">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
