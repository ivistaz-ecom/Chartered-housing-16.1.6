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
        <div className="relative w-full md:min-h-[700px] min-h-[700px]">
          {/* Desktop Banner */}
          <Image
            src="/landing-page/ban_desktop.webp"
            alt="Chartered Gulmohar premium villa plots banner"
            fill
            priority
            className="hidden object-cover object-top md:block"
          />

          {/* Mobile Banner */}
          <Image
            src="/landing-page/Mobile_Ban.webp"
            alt="Chartered Gulmohar mobile top banner"
            width={900}
            height={660}
            priority
            className="block h-[900px] w-full object-cover object-top md:hidden"
          />

          {/* Desktop Heading */}
          {/* <div className="absolute inset-x-0 top-[17%] z-10 hidden w-[400px] text-center md:left-[4%] md:top-[25%] md:block md:w-[550px]">
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
          </div> */}

          {/* Desktop Content */}
          <div className="absolute inset-x-0 top-[42%] z-10 hidden px-6 text-left md:left-[4%] md:top-[50%] md:block md:px-0">
            <div className="mx-0 w-full max-w-[550px] md:mx-38">
              {/* <Image
                src="/landing-page/gulmohar.svg"
                alt="Chartered Gulmohar"
                width={300}
                height={90}
                className="h-auto w-full max-w-[320px] md:max-w-[200px]"
              /> */}
            </div>

            {/* <p className="nunito-regular mt-7 text-[32px] leading-snug text-white! md:w-[600px]">
              10 Acres <span className="text-[#EAC57B]">|</span> Plotted
              Development <span className="text-[#EAC57B]">|</span> Peaceful
              Living &amp; Long-term Value
            </p> */}
          </div>

          {/* Desktop Floating Form */}
          {/* Right Side Form + Logos */}
          <div className="absolute bottom-[40px] right-[55px] z-30 hidden md:block">
            {/* Logos */}
            <div className="absolute -left-[400px] bottom-[10%] flex items-end gap-5">
              {/* NPA */}
              <Image
                src="/landing-page/NPA_Seal.webp"
                alt="NPA Approved"
                width={110}
                height={110}
                className="object-cover"
              />

              {/* RERA */}
              <Image
                src="/landing-page/rera.webp"
                alt="RERA Registered"
                width={110}
                height={110}
                className="object-cover"
              />
            </div>

            {/* Form Card */}
            <div className="mt-[65px] w-[250px] md:ml-20 rounded-[6px] bg-[#ffffff] px-3 py-3 shadow-2xl">
              <form
                id={formId}
                onSubmit={handleSubmit}
                className="flex flex-col gap-2"
              >
                {/* Name */}
                {/* Name */}
                <div>
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
                <div>
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
                <div>
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

                {/* Submit Button */}
                <div className="mt-1">
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Book a Site Visit"}
                  </Button>
                </div>
              </form>
            </div>
          </div>

          {/* Mobile Section */}
          <div className="bg-[#486C43] px-5 py-6 text-center md:hidden">
            {/* <h1 className="roboto-serif-regular text-[32px] leading-tight text-[#EAC57B]">
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
            </p> */}

            {/* Mobile Form */}
            <form
              id={`${formId}-mobile`}
              onSubmit={handleSubmit}
              className="mx-auto mt-0 flex w-full flex-col gap-4  bg-white/90 px-4 py-5 shadow-xl backdrop-blur-md"
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
      <div className="bg-[#000000] px-2 py-4 text-center ">
        <p className="mx-auto w-full !text-[16px] leading-relaxed md:whitespace-nowrap text-white!">
          RERA Registered · PRM/KA/RERA/1250/307/PR/110226/008465{" "}
          <span className="text-[#EAC57B]">|</span> 36+ Years of Chartered
          Legacy <span className="text-[#EAC57B]">|</span> CREDAI Award Winning
          Developer
        </p>
      </div>
    </>
  )
}

export default HeroBanner
