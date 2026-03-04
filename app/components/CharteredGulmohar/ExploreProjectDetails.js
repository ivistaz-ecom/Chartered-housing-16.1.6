"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/app/components/ui/dialog";
import CharteredGulmoharForm from "./CharteredGulmoharForm";

const bgImage = "/Charted-gulmohar/explore-img.webp";
const BROCHURE_PDF_URL = "/Brochure/Chartered-Gulmohar-Brochure.pdf";

const buttonClass =
  "relative cursor-pointer bg-[#ED1C25] z-0 flex items-center gap-2 overflow-hidden border-2 border-[#FAD4D680] px-6 py-3 font-semibold text-white transition-all duration-500 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-[#fff] before:transition-transform before:duration-1000 before:content-[''] hover:scale-105 hover:text-[#ED1C25] hover:before:translate-x-[0%] hover:before:translate-y-[0%] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";

const ExploreProjectDetails = () => {
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);

  const handleBrochureFormSuccess = () => {
    setIsBrochureModalOpen(false);
    window.open(BROCHURE_PDF_URL, "_blank");
  };

  return (
    <section className="relative w-full h-[600px] flex items-center justify-center text-center">

      {/* Background Image */}
      <Image
        src={bgImage}
        alt="Project Details Background"
        fill
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6">
        <h2 className="text-[#ED1C25] text-3xl md:text-4xl font-semibold mb-6 roboto-serif-regular">
          Explore the Complete Project Details
        </h2>

        <p className="!text-[#ffff] text-lg md:!text-xl leading-8 mb-12">
          Download the Chartered Gulmohar brochure to view layout plans,
          specifications, and detailed project information.
        </p>

        {/* Your Exact Button */}
        <div className="flex gap-4 justify-center items-center">
          <button
            type="button"
            onClick={() => setIsBrochureModalOpen(true)}
            className={buttonClass}
          >
            Download Brochure
          </button>
        </div>
      </div>

      <Dialog
        open={isBrochureModalOpen}
        onOpenChange={setIsBrochureModalOpen}
      >
        <DialogContent>
          <CharteredGulmoharForm
            variant="modal"
            onSuccess={handleBrochureFormSuccess}
          />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ExploreProjectDetails;