"use client"

import React, { useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

import Button from "../Shared/Button"
import { useFormHandler } from "@/hooks/useFormHandler"
import { PhoneInputField, TextInputField } from "../Form/FormField"

const HeroBanner = () => {
  const router = useRouter()

  const {
    formData,
    setFormData,
    handleChange,
    handleSelectChange,
    handleSubmit,
    isSubmitting,
    submitStatus,
    fieldErrors,
    formId,
  } = useFormHandler(5877)

  // Auto consent
  useEffect(() => {
    setFormData((prev) => ({ ...prev, consent: true }))
  }, [setFormData])

  // Redirect after successful form submit
  useEffect(() => {
    if (submitStatus === "success") {
      router.push("/thank-you")
    }
  }, [submitStatus, router])

  return (
    <>
      <section className="relative w-full pt-32">
        <div className="relative w-full md:min-h-[700px]">
          {/* Desktop Banner */}
          <Image
            src="/landing-page/desk-banner.png"
            alt="Chartered Gulmohar premium villa plots banner"
            fill
            priority
            className="hidden object-cover object-top md:block"
          />

          {/* Mobile Banner */}
          <Image
            src="/landing-page/mobile-banner.png"
            alt="Chartered Gulmohar mobile top banner"
            width={900}
            height={460}
            priority
            className="block h-[250px] w-full object-cover object-top md:hidden"
          />

          {/* Desktop Heading */}
          <div className="absolute inset-x-0 top-[17%] z-10 hidden w-[400px] text-center md:left-[4%] md:top-[25%] md:block md:w-[550px]">
            <h1 className="roboto-serif-regular text-[32px] leading-tight text-[#EAC57B] md:text-[48px]">
              Premium Villa Plots
              <br />
              <span className="px-8 roboto-serif-regular text-[32px] leading-tight text-[#EAC57B] md:text-[48px]">
                in Nelamangala
              </span>
            </h1>

            <p className="mt-3 text-center text-3xl text-white! md:text-[34px]">
              Invest in Bangalore&apos;s Fast-Growing Corridor
            </p>
          </div>

          {/* Desktop Content */}
          <div className="absolute inset-x-0 top-[42%] z-10 hidden px-6 text-left md:left-[4%] md:top-[50%] md:block md:px-0">
            <div className="mx-0 w-full max-w-[550px] md:mx-38">
              <Image
                src="/landing-page/gulmohar.svg"
                alt="Chartered Gulmohar"
                width={300}
                height={90}
                className="h-auto w-full max-w-[320px] md:max-w-[200px]"
              />
            </div>

            <p className="nunito-regular mt-7 text-[32px] leading-snug text-white! md:w-[600px]">
              10 Acres <span className="text-[#EAC57B]">|</span> Plotted
              Development <span className="text-[#EAC57B]">|</span> Peaceful
              Living &amp; Long-term Value
            </p>
          </div>

          {/* Desktop Floating Form */}
          <div className="fixed inset-x-0 bottom-2 z-50 hidden px-4 md:block md:px-8">
            <form
              id={formId}
              onSubmit={handleSubmit}
              className="mx-auto flex w-full max-w-6xl  flex-col justify-center gap-3  border-2 border-[#ED1C25] bg-white px-4 py-4 shadow-2xl backdrop-blur-md md:flex-row md:items-center md:gap-3 md:px-5 md:py-5"
            >
              {/* Name */}
              <div className="md:w-[24%]">
                <TextInputField
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />

                {fieldErrors.name && (
                  <span className="mt-1 block text-xs text-red-500">
                    {fieldErrors.name}
                  </span>
                )}
              </div>

              {/* Phone */}
              <div className="md:w-[27%]">
                <PhoneInputField
                  placeholder="Your Mobile Number"
                  value={formData.mobile}
                  onChange={(val) => handleSelectChange("mobile", val)}
                />

                {fieldErrors.mobile && (
                  <span className="mt-1 block text-xs text-red-500">
                    {fieldErrors.mobile}
                  </span>
                )}
              </div>

              {/* Email */}
              <div className="md:w-[25%]">
                <TextInputField
                  type="email"
                  placeholder="Your Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />

                {fieldErrors.email && (
                  <span className="mt-1 block text-xs text-red-500">
                    {fieldErrors.email}
                  </span>
                )}
              </div>

              {/* Button */}
              <div className="mt-2 md:mt-0 md:w-[16%]">
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Book a Site Visit"}
                </Button>
              </div>
            </form>
          </div>

          {/* Mobile Section */}
          <div className="bg-[#486C43] px-5 py-8 text-center md:hidden">
            <h1 className="roboto-serif-regular text-[32px] leading-tight text-[#EAC57B]">
              Premium Villa Plots
              <br />
              in Nelamangala
            </h1>

            <p className="mt-3 text-[34px] leading-snug text-white!">
              Invest in Bangalore&apos;s Fast-Growing Corridor
            </p>

            <div className="mx-auto mt-8 flex w-full justify-center">
              <Image
                src="/landing-page/gulmohar.svg"
                alt="Chartered Gulmohar"
                width={337}
                height={96}
                className="h-auto max-w-[200px]"
              />
            </div>

            <p className="nunito-regular mt-7 text-[36px] leading-snug text-white!">
              10 Acres <span className="text-[#EAC57B]">|</span> Plotted
              Development <span className="text-[#EAC57B]">|</span> Peaceful
              Living &amp; Long-term Value
            </p>

            {/* Mobile Form */}
            <form
              id={`${formId}-mobile`}
              onSubmit={handleSubmit}
              className="mx-auto mt-8 flex w-full flex-col gap-4  bg-white/90 px-4 py-5 shadow-xl backdrop-blur-md"
            >
              {/* Name */}
              <div>
                <TextInputField
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />

                {fieldErrors.name && (
                  <span className="mt-1 block text-left text-xs text-red-500">
                    {fieldErrors.name}
                  </span>
                )}
              </div>

              {/* Phone */}
              <div>
                <PhoneInputField
                  placeholder="Your Mobile Number"
                  value={formData.mobile}
                  onChange={(val) => handleSelectChange("mobile", val)}
                />

                {fieldErrors.mobile && (
                  <span className="mt-1 block text-left text-xs text-red-500">
                    {fieldErrors.mobile}
                  </span>
                )}
              </div>

              {/* Email */}
              <div>
                <TextInputField
                  type="email"
                  placeholder="Your Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />

                {fieldErrors.email && (
                  <span className="mt-1 block text-left text-xs text-red-500">
                    {fieldErrors.email}
                  </span>
                )}
              </div>

              {/* Button */}
              <div className="mt-2 flex justify-center">
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Book a Site Visit"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Bottom Strip */}
      <div className="bg-[#22391F] px-2 py-4 text-center">
        <p className="mx-auto w-full text-base leading-relaxed md:whitespace-nowrap text-white!">
          RERA Registered · PRM/KA/RERA/1250/307/PR/110226/008465{" "}
          <span className="text-[#EAC57B]">|</span> NPA Approved Layout{" "}
          <span className="text-[#EAC57B]">|</span> 36+ Years of Chartered
          Legacy <span className="text-[#EAC57B]">|</span> CREDAI Award Winning
          Developer
        </p>
      </div>
    </>
  )
}

export default HeroBanner
