"use client"

import Script from "next/script"
import { useRef, useState, useEffect } from "react"
import { useRouter } from "next/navigation"

import { useFormHandler } from "@/hooks/useFormHandler"
import { PhoneInputField, TextInputField } from "../Form/FormField"
import Button from "../Shared/Button"

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""
const RECAPTCHA_SCRIPT = "https://www.google.com/recaptcha/api.js"

const Booking = () => {
  const router = useRouter()

  const {
    formData,
    handleChange,
    handleSelectChange,
    handleSubmit: submitForm,
    isSubmitting,
    submitStatus,
    fieldErrors,
    formId,
  } = useFormHandler(5877)

  const recaptchaContainerRef = useRef(null)
  const widgetIdRef = useRef(null)

  const [mounted, setMounted] = useState(false)
  const [recaptchaReady, setRecaptchaReady] = useState(false)
  const [recaptchaError, setRecaptchaError] = useState("")

  useEffect(() => setMounted(true), [])

  // Redirect after successful form submission
  useEffect(() => {
    if (submitStatus === "success") {
      router.push("/thank-you")
    }
  }, [submitStatus, router])

  useEffect(() => {
    if (!RECAPTCHA_SITE_KEY || widgetIdRef.current !== null) return

    const renderWidget = () => {
      const container = recaptchaContainerRef.current

      if (typeof window.grecaptcha === "undefined" || !container) return

      try {
        widgetIdRef.current = window.grecaptcha.render(container, {
          sitekey: RECAPTCHA_SITE_KEY,
          theme: "light",
          size: "normal",
        })
      } catch (err) {
        console.error("reCAPTCHA render error:", err)
      }
    }

    const init = () => {
      if (typeof window.grecaptcha === "undefined") return

      if (window.grecaptcha.ready) {
        window.grecaptcha.ready(renderWidget)
      } else {
        renderWidget()
      }
    }

    const t = setTimeout(init, 150)

    return () => clearTimeout(t)
  }, [recaptchaReady])

  const handleSubmit = async (e) => {
    e.preventDefault()

    setRecaptchaError("")

    if (!RECAPTCHA_SITE_KEY) {
      submitForm(e)
      return
    }

    const doSubmit = () => {
      if (widgetIdRef.current === null) {
        setRecaptchaError(
          "reCAPTCHA did not load. Please refresh the page and try again.",
        )

        return
      }

      const token = window.grecaptcha.getResponse(widgetIdRef.current)

      if (!token) {
        setRecaptchaError("Please complete the reCAPTCHA verification.")
        return
      }

      submitForm(e, { recaptchaToken: token })

      window.grecaptcha.reset(widgetIdRef.current)
    }

    if (typeof window.grecaptcha === "undefined") {
      setRecaptchaError(
        "reCAPTCHA is still loading. Please wait a moment and try again.",
      )

      return
    }

    if (window.grecaptcha.ready) {
      window.grecaptcha.ready(doSubmit)
    } else {
      doSubmit()
    }
  }

  return (
    <div className="px-4 py-8 md:px-0 md:py-10">
      <div className="mx-auto max-w-7xl">
        <h2 className="roboto-serif-regular text-center text-3xl leading-tight text-[#4E372A] md:text-5xl">
          Secure Your Plot in a Growing Corridor
        </h2>

        <p className="mt-4 text-center text-[#646464]">
          Plots are limited within a 10-acre community. Speak with our team to
          understand pricing, availability, and site visit scheduling.
        </p>

        {mounted && RECAPTCHA_SITE_KEY && (
          <Script
            src={RECAPTCHA_SCRIPT}
            strategy="afterInteractive"
            onLoad={() => setRecaptchaReady(true)}
          />
        )}

        <form onSubmit={handleSubmit} id={formId}>
          <div className="mx-auto flex w-full max-w-5xl flex-col items-center">
            <div className="mt-10 w-full border border-[#E7DFD8] px-4 py-6 md:px-10 md:py-8">
              <h3 className="roboto-serif-regular text-center text-xl text-[#646464] md:text-4xl">
                Please Fill Up the Form to Book a Site Visit
              </h3>

              {/* Name */}
              <div className="mt-8">
                <TextInputField
                  placeholder="Your Name *"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />

                {fieldErrors.name && (
                  <span className="mt-1 block text-start text-xs text-red-500">
                    {fieldErrors.name}
                  </span>
                )}
              </div>

              {/* Phone */}
              <div className="mt-5">
                <PhoneInputField
                  value={formData.mobile}
                  onChange={(val) => handleSelectChange("mobile", val)}
                  placeholder="Your Mobile Number"
                />

                {fieldErrors.mobile && (
                  <span className="mt-1 block text-start text-xs text-red-500">
                    {fieldErrors.mobile}
                  </span>
                )}
              </div>

              {/* Email */}
              <div className="mt-5">
                <TextInputField
                  type="email"
                  placeholder="Your Email Address *"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />

                {fieldErrors.email && (
                  <span className="mt-1 block text-start text-xs text-red-500">
                    {fieldErrors.email}
                  </span>
                )}
              </div>

              {/* Consent */}
              <div className="mt-6 flex items-start gap-2 text-sm text-[#646464]">
                <input
                  id="booking-consent"
                  name="consent"
                  type="checkbox"
                  required
                  checked={!!formData.consent}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 accent-[#ED1C25]"
                />

                <label htmlFor="booking-consent">
                  I authorize company representatives to Call, SMS, Email or
                  WhatsApp me about its properties and offers.
                </label>
              </div>

              {/* reCAPTCHA */}
              {mounted && RECAPTCHA_SITE_KEY && (
                <div className="mt-5 flex flex-col gap-2">
                  <div ref={recaptchaContainerRef} />

                  {recaptchaError && (
                    <span className="text-xs text-red-500">
                      {recaptchaError}
                    </span>
                  )}
                </div>
              )}

              {/* Error Message */}
              {submitStatus === "error" && (
                <div className="rounded bg-red-50 p-3 text-center text-sm text-red-500">
                  Oops! Something went wrong. Please try again.
                </div>
              )}

              {/* Submit Button */}
              <div className="mt-6 flex justify-center">
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </div>

              {/* Footer Text */}
              <p className="mt-5 text-center text-sm text-[#646464]">
                By continuing, you agree to our{" "}
                <a href="/disclaimer" className="underline">
                  T&amp;C
                </a>{" "}
                and{" "}
                <a href="/privacy-policy" className="underline">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Booking
