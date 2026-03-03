"use client";

import React, { useState, useEffect, useRef } from "react";
import Script from "next/script";
import { motion } from "framer-motion";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { X } from "lucide-react";
import Button from "../Shared/Button";
import { useFormHandler } from "@/hooks/useFormHandler";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";
const RECAPTCHA_SCRIPT = "https://www.google.com/recaptcha/api.js";
import {
  CheckboxField,
  PhoneInputField,
  TextInputField,
} from "../Form/FormField";
import Image from "next/image";
const images = [
  "/chartered-birdsong/img3.webp",
  "/chartered-birdsong/img1.webp",
  "/chartered-birdsong/img2.webp",
  "/chartered-birdsong/img4.webp",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [downloadAllowed, setDownloadAllowed] = useState(false);

  const {
    formData,
    handleChange,
    handleSelectChange,
    handleSubmit: submitForm,
    isSubmitting,
    submitStatus,
    fieldErrors,
  } = useFormHandler(5862);

  const recaptchaContainerRef = useRef(null);
  const widgetIdRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [recaptchaReady, setRecaptchaReady] = useState(false);
  const [recaptchaError, setRecaptchaError] = useState("");

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!showModal) {
      widgetIdRef.current = null;
      return;
    }
    if (!RECAPTCHA_SITE_KEY || widgetIdRef.current !== null) return;
    const renderWidget = () => {
      const container = recaptchaContainerRef.current;
      if (typeof window.grecaptcha === "undefined" || !container) return;
      try {
        widgetIdRef.current = window.grecaptcha.render(container, {
          sitekey: RECAPTCHA_SITE_KEY,
          theme: "light",
          size: "normal",
        });
      } catch (err) {
        console.error("reCAPTCHA render error:", err);
      }
    };
    const init = () => {
      if (typeof window.grecaptcha === "undefined") return;
      if (window.grecaptcha.ready) {
        window.grecaptcha.ready(renderWidget);
      } else {
        renderWidget();
      }
    };
    const t = setTimeout(init, 150);
    return () => clearTimeout(t);
  }, [recaptchaReady, showModal]);

  const handleDownloadClick = (e) => {
    e.preventDefault();
    if (downloadAllowed) {
      // If already allowed, download directly
      window.open(
        "/chartered-birdsong/Chartered_Birdsong_Project_Brochure.pdf",
        "_blank"
      );
    } else {
      // Show modal to collect information
      setShowModal(true);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setRecaptchaError("");
    if (!RECAPTCHA_SITE_KEY) {
      await submitForm(e);
      return;
    }
    const doSubmit = async () => {
      if (widgetIdRef.current === null) {
        setRecaptchaError("reCAPTCHA did not load. Please close and try again.");
        return;
      }
      const token = window.grecaptcha?.getResponse?.(widgetIdRef.current);
      if (!token) {
        setRecaptchaError("Please complete the reCAPTCHA verification.");
        return;
      }
      await submitForm(e, { recaptchaToken: token });
      if (window.grecaptcha?.reset) {
        window.grecaptcha.reset(widgetIdRef.current);
      }
    };
    if (typeof window.grecaptcha === "undefined") {
      setRecaptchaError("reCAPTCHA is still loading. Please wait a moment and try again.");
      return;
    }
    if (window.grecaptcha.ready) {
      window.grecaptcha.ready(doSubmit);
    } else {
      await doSubmit();
    }
  };

  // Handle download after successful submission
  useEffect(() => {
    if (submitStatus === "success" && showModal) {
      setDownloadAllowed(true);
      setShowModal(false);
      // Trigger download
      setTimeout(() => {
        window.open(
          "/chartered-birdsong/Chartered_Birdsong_Project_Brochure.pdf",
          "_blank"
        );
      }, 500);
    }
  }, [submitStatus, showModal]);

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
    <div className="w-full flex flex-col items-center md:pt-20 md:pb-16 lg:pt-16 lg pt-10 pb-10 px-4 md:px-0">
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
              alt={`Chartered Birdsong | Premium Residential Plots at Sadenahalli on Yelahanka–Doddaballapur Highway, Bengaluru | ${currentIndex}`}
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
              <BsChevronLeft
                size={24}
                className="pe-1 text-[#646464] font-bold"
              />
            </button>
            <button
              onClick={nextSlide}
              className="bg-white/80 border border-[#646464] hover:bg-white rounded-full p-2"
            >
              <BsChevronRight
                size={24}
                className="pl-1 text-[#646464] font-bold"
              />
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
                alt={`Chartered Birdsong | Premium Residential Plots at Sadenahalli on Yelahanka–Doddaballapur Highway, Bengaluru | ${thumbnail.index}`}
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="lg:pt-28 pt-5">
        <Button onClick={handleDownloadClick}>Download Brochure</Button>
      </div>

      {/* Download Gate Modal */}
      {mounted && RECAPTCHA_SITE_KEY && (
        <Script
          src={RECAPTCHA_SCRIPT}
          strategy="afterInteractive"
          onLoad={() => setRecaptchaReady(true)}
        />
      )}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <h3 className="text-2xl font-semibold text-[#646464]">
                Download Brochure
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleFormSubmit} className="px-6 py-6">
              <div className="space-y-6">
                {/* Name */}
                {/* <div>
                  <TextInputField
                    placeholder="Your Name *"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {fieldErrors.name && (
                    <span className="text-red-500 text-xs text-start mt-1 block">
                      {fieldErrors.name}
                    </span>
                  )}
                </div> */}

                {/* Mobile */}
                <div>
                  <PhoneInputField
                    value={formData.mobile}
                    onChange={(val) => handleSelectChange("mobile", val)}
                  />
                  {fieldErrors.mobile && (
                    <span className="text-red-500 text-xs text-start mt-1 block">
                      {fieldErrors.mobile}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div>
                  <TextInputField
                    type="email"
                    placeholder="Email Address *"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {fieldErrors.email && (
                    <span className="text-red-500 text-xs text-start mt-1 block">
                      {fieldErrors.email}
                    </span>
                  )}
                </div>

                {/* Consent Checkbox */}
                {/* <div>
                  <CheckboxField
                    id="download-consent"
                    checked={formData.consent}
                    onChange={handleSelectChange}
                  />
                  {fieldErrors.consent && (
                    <span className="text-red-500 text-xs text-start mt-1 block">
                      {fieldErrors.consent}
                    </span>
                  )}
                </div> */}

                {mounted && RECAPTCHA_SITE_KEY && (
                  <div className="flex flex-col gap-2">
                    <div ref={recaptchaContainerRef} />
                    {recaptchaError && (
                      <span className="text-red-500 text-xs">{recaptchaError}</span>
                    )}
                  </div>
                )}

                {/* Submit Status Messages */}
                {submitStatus === "success" && (
                  <div className="text-green-600 text-sm">
                    Thank you! Your download will start shortly.
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="text-red-600 text-sm">
                    Something went wrong. Please try again.
                  </div>
                )}

                {/* Submit Button */}
                <div className="flex gap-4 pt-4 justify-center items-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="relative cursor-pointer bg-[#ED1C25] z-0 flex items-center gap-2 overflow-hidden border-2 border-[#FAD4D680] px-4 py-2 font-semibold text-white transition-all duration-500 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-[#fff] before:transition-transform before:duration-1000 before:content-[''] hover:scale-105 hover:text-[#ED1C25] hover:before:translate-x-[0%] hover:before:translate-y-[0%] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting..." : "Download Now"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
