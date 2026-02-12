"use client";
import Script from "next/script";
import { useRef, useState, useEffect } from "react";
import { useFormHandler } from "@/hooks/useFormHandler";
import {
  CheckboxField,
  PhoneInputField,
  ResumeUploadField,
  SelectField,
  TextInputField,
} from "@/app/components/Form/FormField";
import Button from "../Shared/Button";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";
const RECAPTCHA_SCRIPT = "https://www.google.com/recaptcha/api.js";

const ApplyForm = () => {
  const {
    formData,
    handleChange,
    handleSelectChange,
    handleFileChange, // ✅ include file handler
    handleSubmit: submitForm,
    isSubmitting,
    submitStatus,
    fieldErrors,
  } = useFormHandler(5856);

  const recaptchaContainerRef = useRef(null);
  const widgetIdRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [recaptchaReady, setRecaptchaReady] = useState(false);
  const [recaptchaError, setRecaptchaError] = useState("");

  useEffect(() => setMounted(true), []);

  useEffect(() => {
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
  }, [recaptchaReady]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setRecaptchaError("");

    if (!RECAPTCHA_SITE_KEY) {
      submitForm(e);
      return;
    }

    const doSubmit = () => {
      if (widgetIdRef.current === null) {
        setRecaptchaError("reCAPTCHA did not load. Please refresh the page and try again.");
        return;
      }
      const token = window.grecaptcha.getResponse(widgetIdRef.current);
      if (!token) {
        setRecaptchaError("Please complete the reCAPTCHA verification.");
        return;
      }
      submitForm(e, { recaptchaToken: token });
      window.grecaptcha.reset(widgetIdRef.current);
    };

    if (typeof window.grecaptcha === "undefined") {
      setRecaptchaError("reCAPTCHA is still loading. Please wait a moment and try again.");
      return;
    }

    if (window.grecaptcha.ready) {
      window.grecaptcha.ready(doSubmit);
    } else {
      doSubmit();
    }
  };

  // console.log("ApplyForm fieldErrors:", fieldErrors);
  // console.log("ApplyForm formData:", formData);

  return (
    <form onSubmit={handleSubmit} className="lg:mt-0 pt-10 pb-20 lg:px-0 px-5">
      {mounted && RECAPTCHA_SITE_KEY && (
        <Script
          src={RECAPTCHA_SCRIPT}
          strategy="afterInteractive"
          onLoad={() => setRecaptchaReady(true)}
        />
      )}

      <div className="max-w-4xl mx-auto w-full border border-[#ED1C25] px-5 lg:px-10 py-5 flex flex-col gap-8">
        <h3 className="text-2xl text-[#646464] text-center">
          Apply Now  
        </h3>

        {/* Name */}
        <div>
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
        </div>

        {/* Mobile */}
        <div>
          <PhoneInputField
            value={formData.mobile}
            // ✅ Pass both name and value so hook can clear errors correctly
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
            placeholder="Your Email Address *"
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

        {/* Department */}
        {/* <div>
          <SelectField
            value={formData.purpose}
            // ✅ This is correct — SelectField should call `onChange(name, value)` internally
            onChange={handleSelectChange}
            fontSize="text-lg"
            formType="careers"
            placeholder="Select a Department"
            className="w-full border-b border-[#64646480] outline-0 bg-transparent shadow-none p-0 text-lg text-[#646464]"
          />
          {fieldErrors.purpose && (
            <span className="text-red-500 text-xs text-start mt-1 block">
              {fieldErrors.purpose}
            </span>
          )}
        </div> */}

        {/* Resume Upload */}
        <div>
          <ResumeUploadField
            name="resume"
            // ✅ ResumeUpload passes file directly, not event object
            onChange={(file) => {
              if (file) {
                // Mimic an event structure for handleFileChange
                handleFileChange({ target: { files: [file] } });
              } else {
                // Handle file removal
                handleSelectChange("resume", null);
              }
            }}
            className="w-full border-b border-[#64646480] outline-0 bg-transparent shadow-none p-0 text-lg text-[#646464] border-0"
          />
          {fieldErrors.resume && (
            <span className="text-red-500 text-xs text-start mt-1 block">
              {fieldErrors.resume}
            </span>
          )}
        </div>

        {mounted && RECAPTCHA_SITE_KEY && (
          <div className="flex flex-col gap-2">
            <div ref={recaptchaContainerRef} />
            {recaptchaError && (
              <span className="text-red-500 text-xs">{recaptchaError}</span>
            )}
          </div>
        )}

        {/* Submission messages */}
        {submitStatus === "success" && (
          <div className="text-green-500 text-sm text-center p-3 bg-green-50 rounded">
            Thank you for your message! We&apos;ll get back to you soon.
          </div>
        )}
        {submitStatus === "error" && (
          <div className="text-red-500 text-sm text-center p-3 bg-red-50 rounded">
            Oops! Something went wrong. Please try again.
          </div>
        )}

        {/* Submit button */}
        <div className="flex justify-center">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ApplyForm;
