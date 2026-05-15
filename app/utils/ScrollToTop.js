"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const LANDING_PATH = "/chartered-gulmohar-villa-plots-in-nelamangala";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();
  const isLandingPage =
    pathname?.replace(/\/+$/, "") === LANDING_PATH;

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`fixed z-50 bg-[#ED1C25] hover:bg-[#c91119] text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 lg:bottom-8 lg:right-8 ${
            isLandingPage
              ? "bottom-5 right-3"
              : "bottom-8 right-4"
          }`}
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
