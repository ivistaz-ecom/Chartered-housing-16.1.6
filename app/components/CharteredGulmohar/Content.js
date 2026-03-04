"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
} from "@/app/components/ui/dialog";
import CharteredGulmoharForm from "./CharteredGulmoharForm";

const BROCHURE_PDF_URL = "/Brochure/Chartered-Gulmohar-Brochure.pdf";

const buttonClass =
  "relative cursor-pointer bg-[#ED1C25] z-0 flex items-center gap-2 overflow-hidden border-2 border-[#FAD4D680] px-6 py-3 font-semibold text-white transition-all duration-500 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-[#fff] before:transition-transform before:duration-1000 before:content-[''] hover:scale-105 hover:text-[#ED1C25] hover:before:translate-x-[0%] hover:before:translate-y-[0%] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";

const Content = () => {
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);

  const handleBrochureFormSuccess = () => {
    setIsBrochureModalOpen(false);
    window.open(BROCHURE_PDF_URL, "_blank");
  };

  const scrollToForm = () => {
    document.getElementById("site-visit-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="lg:px-0 px-5">
        <div className="container mx-auto lg:py-10 py-5">
          <div className="flex flex-col justify-center gap-7">
            <h3 className="roboto-serif-light text-center  text-[#ED1C24] lg:text-4xl text-2xl">
              Where Life Slows Down and Balance Begins
            </h3>
            <h6 className="text-center text-lg text-[#646464] lg:text-left">
              Chartered Gulmohar is a plotted development in Nelamangala by Chartered Housing, created for buyers evaluating land in a growing residential corridor connected to Bengaluru.

            </h6>
            <h6 className="text-center text-lg text-[#646464] lg:text-left">
              Open surroundings and planned infrastructure support peaceful living with long-term investment potential.
            </h6>

            <div className="flex gap-4 justify-center items-center">
              <button
                type="button"
                onClick={scrollToForm}
                className={buttonClass}
              >
                Schedule a Site Visit
              </button>
              <button
                type="button"
                onClick={() => setIsBrochureModalOpen(true)}
                className={buttonClass}
              >
                Download Brochure
              </button>
            </div>
          </div>
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
    </>
  );
};

export default Content
