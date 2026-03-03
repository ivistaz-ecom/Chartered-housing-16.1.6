"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import Image from "next/image";
const images = [
    "/Charted-gulmohar/growth-1.webp",
    "/Charted-gulmohar/growth-2.webp",
    "/Charted-gulmohar/growth-3.webp",
];



const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    // Get 3 thumbnails (next 3 images after current)
    const getThumbnails = () => {
        const thumbnails = [];
        for (let i = 1; i <= 3; i++) {
            const index = (currentIndex + i) % images.length;
            thumbnails.push({ src: images[index], index });
        }
        return thumbnails;
    };

    return (
        <div className="w-full flex flex-col items-center md:pt-20 md:pb-26 lg:pt-16 lg:pb-28 pt-10 pb-10 px-4 md:px-0">
            <div className="relative w-full max-w-7xl flex flex-col items-center">
                {/* Outer container for arrows + image */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 w-full px-2 md:px-0">
                    {/* Desktop Left Arrow - Hidden on mobile */}
                    <button
                        onClick={prevSlide}
                        className="hidden md:flex bg-white/80 border border-[#646464] hover:bg-white rounded-full p-2"
                    >
                        <BsChevronLeft size={28} className="text-[#646464] font-bold" />
                    </button>

                    {/* Main Image */}
                    <div className="relative w-full shadow-lg overflow-hidden">
                        <motion.img
                            key={currentIndex}
                            src={images[currentIndex]}
                            alt={`Chartered Housing | Chartered 1956 | Premium 4bhk boutique residences on Palace Road, Bengaluru | ${currentIndex}`}
                            className="w-full h-[300px]  md:h-[500px] object-cover"
                            initial={{ opacity: 0.5, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                        />
                    </div>

                    {/* Desktop Right Arrow - Hidden on mobile */}
                    <button
                        onClick={nextSlide}
                        className="hidden md:flex bg-white/80 border border-[#646464] hover:bg-white rounded-full p-2"
                    >
                        <BsChevronRight size={28} className="text-[#646464] font-bold" />
                    </button>

                    {/* Mobile Arrows - Below image, visible only on mobile */}
                    <div className="flex md:hidden items-center justify-center gap-4 mt-4">
                        <button
                            onClick={prevSlide}
                            className="bg-white/80 border border-[#646464] hover:bg-white rounded-full p-2"
                        >
                            <BsChevronLeft size={24} className="pe-1 text-[#646464] font-bold" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="bg-white/80 border border-[#646464] hover:bg-white rounded-full p-2"
                        >
                            <BsChevronRight size={24} className="pl-1 text-[#646464] font-bold" />
                        </button>
                    </div>
                </div>

                {/* Thumbnails - Show only 3 */}
                <div className="absolute left-1/2 md:bottom-[-70px] bottom-[-40px] -translate-x-1/2 lg:flex hidden gap-3 md:gap-5 p-2 md:p-4 z-10">
                    {getThumbnails().map((thumbnail) => (
                        <div
                            key={thumbnail.index}
                            onClick={() => setCurrentIndex(thumbnail.index)}
                            className="w-24 sm:w-32 md:w-60 h-16 sm:h-24 md:h-40 flex-shrink-0 cursor-pointer border-2 border-transparent hover:border-blue-400 transition"
                        >
                            <Image
                                src={thumbnail.src}
                                alt={`Chartered Housing | Chartered 1956 | Premium 4bhk boutique residences on Palace Road, Bengaluru | ${thumbnail.index}`}
                                className="w-full h-full object-cover"
                                width={1000}
                                height={1000}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
