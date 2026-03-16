"use client";
import React, { useState } from "react";
import TestimonialsSection from "./TestimonialsCarousel";

const SuccessStories = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeVideoId, setActiveVideoId] = useState(null);
  const videoId = "A7aS5pIxSFM";
  const secondVideoId = "SA3oJPPafws";

  const openVideoModal = (videoId) => {
    setActiveVideoId(videoId);
    setIsModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsModalOpen(false);
    setActiveVideoId(null);
  };

  return (
    <>
      <div className="py-20 lg:px-0 px-5">
        <div className="container mx-auto uppercase">
          <h3 className="text-[#ED1C24] roboto-serif-medium tracking-wide lg:text-4xl text-[24px]">
            Client
          </h3>
          <h2 className="text-4xl pt-1 md:text-6xl font-bold text-[#646464] roboto-serif-regular">
            Success Stories
          </h2>
          <div className="lg:w-44 w-32 border-b-2 border-[#ED1C24] mt-3 mb-6 mx-1"></div>
          <div className="w-full lg:pt-10 pt-5">
            <div className="grid lg:grid-cols-2 gap-6 items-stretch">
              {/* Left video thumbnail */}
              <button
                type="button"
                onClick={() => openVideoModal(videoId)}
                className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg bg-black group focus:outline-none focus:ring-2 focus:ring-[#ED1C24] focus:ring-offset-2 focus:ring-offset-white"
                aria-label="Play success story video 1"
              >
                {/* Use higher-res thumbnail with graceful fallback */}
                <div className="absolute inset-0">
                  <picture>
                    <source
                      srcSet={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                    />
                    <img
                      src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                      alt="Client success story video 1 thumbnail"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 group-focus:scale-105"
                      loading="lazy"
                    />
                  </picture>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center shadow-lg group-hover:bg-white group-focus:bg-white transition-colors">
                    <span className="ml-1 border-l-[14px] border-l-[#ED1C24] border-y-[10px] border-y-transparent" />
                  </div>
                </div>
              </button>

              {/* Right video thumbnail */}
              <button
                type="button"
                onClick={() => openVideoModal(secondVideoId)}
                className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg bg-black group focus:outline-none focus:ring-2 focus:ring-[#ED1C24] focus:ring-offset-2 focus:ring-offset-white"
                aria-label="Play success story video 2"
              >
                <div className="absolute inset-0">
                  <picture>
                    <source
                      srcSet={`https://img.youtube.com/vi/${secondVideoId}/maxresdefault.jpg`}
                    />
                    <img
                      src={`https://img.youtube.com/vi/${secondVideoId}/hqdefault.jpg`}
                      alt="Client success story video 2 thumbnail"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 group-focus:scale-105"
                      loading="lazy"
                    />
                  </picture>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center shadow-lg group-hover:bg-white group-focus:bg-white transition-colors">
                    <span className="ml-1 border-l-[14px] border-l-[#ED1C24] border-y-[10px] border-y-transparent" />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div>
          <TestimonialsSection />
        </div>
      </div>

      {/* Fullscreen video modal */}
      {isModalOpen && activeVideoId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <button
            type="button"
            className="absolute top-4 right-4 text-white text-3xl md:text-4xl leading-none px-3 py-1 rounded-full bg-black/60 hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-white"
            onClick={closeVideoModal}
            aria-label="Close video"
          >
            ×
          </button>
          <div className="w-full max-w-5xl px-4">
            <div className="relative w-full pb-[56.25%] h-0">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${activeVideoId}?autoplay=1&controls=1&modestbranding=1&rel=0&iv_load_policy=3&cc_load_policy=0`}
                title="Client success story video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SuccessStories;
