"use client"

import React, { useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import Button from "../Shared/Button"
import { useFormHandler } from "@/hooks/useFormHandler"
import { useUtmCapture } from "@/hooks/useUtmCapture"
import PhoneInput from "react-phone-number-input"

const HeroBanner = () => {
  const router = useRouter()
  useUtmCapture()

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
    lastSubmission,
  } = useFormHandler(5877)

  const onFormSubmit = (e) => handleSubmit(e, { formSource: "hero-banner" })

  // Auto consent
  useEffect(() => {
    setFormData((prev) => ({ ...prev, consent: true }))
  }, [setFormData])

  const sendFacebookLeadEvent = async (formData) => {
    try {
      const payload = {
        data: [
          {
            event_name: "Website Form Fill Up",

            event_time: Math.floor(Date.now() / 1000),

            action_source: "website",

            user_data: {
              nm: [formData.name],
              em: [formData.email],
              ph: [formData.mobile],
            },

            attribution_data: {
              attribution_share: "0.3",
            },

            original_event_data: {
              event_name: "Website Form Fill Up",

              event_time: Math.floor(Date.now() / 1000),
            },
          },
        ],
      }

      const response = await fetch(
        "https://graph.facebook.com/v25.0/4261920677414703/events?access_token=EAAXDSwqmnxoBRdVF6zhqinnDQwihnHbefskZC8C9M5SqCwPJKuwF1YvbOHk73X84zE8Y8XyurAaRBLPyU2Jq94TaZC6dIGJgiQSnq3Ok8la00s7IItBE7ZC0Cz3ZA5abjZC6mxpRaYVk9CFnZCtOOsdaeZBFWVfOi84Fm9GkLRLtYB9CsXoaNmd0l0zBDzYbVB1owZDZD",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(payload),
        },
      )

      const data = await response.json()

      console.log("Facebook Lead Event Success:", data)
    } catch (error) {
      console.error("Facebook Lead Event Error:", error)
    }
  }

  // Redirect after successful form submit
  useEffect(() => {
    const handleSuccess = async () => {
      if (submitStatus === "success" && lastSubmission) {
        await sendFacebookLeadEvent(lastSubmission)
        router.push("/thank-you")
      }
    }

    handleSuccess()
  }, [submitStatus, lastSubmission, router])

  return (
    <>
      <section className="relative w-full md:pt-32 pt-0">
        <div className="relative w-full md:min-h-[700px] min-h-[520px] bg-[#486C43]">
          {/* Desktop Banner */}
          <Image
            src="/landing-page/desk-banner-02.webp"
            alt="Chartered Gulmohar premium villa plots banner"
            fill
            priority
            className="hidden object-cover object-top md:block"
          />

          {/* Mobile Banner */}
          <Image
            src="/landing-page/mob-banner-final.webp"
            alt="Chartered Gulmohar mobile top banner"
            width={900}
            height={660}
            priority
            className="block h-[520px] w-full object-cover object-top md:hidden"
          />

          {/* Desktop Heading */}
          <div className="absolute inset-x-0 top-[17%] z-10 hidden w-[400px] md:top-[20%] md:block md:w-[618px]">
            <div className="flex flex-col justify-center items-center">
              <div className="mx-0 w-full my-4 flex justify-center">
                <Image
                  src="/landing-page/Launching.png"
                  alt="Chartered Gulmohar"
                  width={300}
                  height={90}
                  className="h-auto w-full max-w-[320px] md:max-w-[200px]"
                  preload
                />
              </div>
              <h1 className="helvetica-black text-[32px] leading-tight text-white md:text-[48px]">
                Premium Villa Plots
                <br />
                <span className="px-8 helvetica-black text-[32px] leading-tight text-white md:text-[48px]">
                  in Nelamangala
                </span>
              </h1>

              <p className="mt-3 helvetica-normal text-center text-3xl text-[#F2E9CA]! md:text-[34px]">
                Invest in Bangalore&apos;s Fast-Growing Corridor
              </p>

              <div className="mx-0 w-full mt-8 mb-4 flex justify-center">
                <Image
                  src="/landing-page/gulmohar.svg"
                  alt="Chartered Gulmohar"
                  width={300}
                  height={90}
                  className="h-auto w-full max-w-[320px] md:max-w-[200px]"
                  preload
                />
              </div>
              <p className="text-white!">by Chartered Housing</p>
              <div className="mx-0 w-full my-4 flex justify-center">
                <Image
                  src="/landing-page/acers.webp"
                  alt="Chartered Gulmohar"
                  width={300}
                  height={100}
                  className="h-auto w-[70%]"
                  preload
                />
              </div>
              <div className="mx-0 w-full mb-4 flex justify-center">
                <Image
                  src="/landing-page/start.webp"
                  alt="Chartered Gulmohar"
                  width={300}
                  height={90}
                  className="h-auto w-[70%]"
                  preload
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between absolute inset-x-0  bottom-[10px] mt-2">
            <p className="text-white! mx-10 nunito-regular md:block hidden">
              *T&C Apply
            </p>
            <p className="text-white! mx-10 nunito-regular md:block hidden">
              Actual photo from our project Chartered Woodpecker
            </p>
          </div>

          {/* Desktop Form */}
          <div className="absolute bottom-[40px] right-[55px] z-30 hidden md:block">
            {/* Logos */}
            <div className="absolute -left-[90%] bottom-[10%] flex items-end gap-5">
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
            <div className="mt-[65px] w-[260px] md:ml-20 rounded-[6px] bg-[#ffffff] px-3 py-3 shadow-2xl mb-6 ">
              <form
                id={formId}
                onSubmit={onFormSubmit}
                className="flex flex-col gap-2"
              >
                {/* Name */}
                <div>
                  <input
                    placeholder="Your Name"
                    className="border py-2 w-full px-4 mt-2"
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
                  <PhoneInput
                    placeholder="Enter phone number"
                    international
                    defaultCountry="IN"
                    countryCallingCodeEditable={false}
                    className="w-full border px-4 py-2"
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
                  <input
                    placeholder="Email Address"
                    type="email"
                    className="border py-2 w-full px-4"
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
                <div className="mt-1 w-full [&_button]:w-full [&_button]:py-2 [&_button]:justify-center">
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Book a Site Visit"}
                  </Button>
                </div>
              </form>
            </div>
          </div>

          {/* Mobile Section */}
          <div className="absolute top-[15%] px-5 py-6 text-center md:hidden">
            <div className="flex flex-col justify-center items-center">
              <div className="mx-0 my-4 flex justify-center w-[45%]">
                <Image
                  src="/landing-page/Launching.png"
                  alt="Chartered Gulmohar"
                  width={80}
                  height={80}
                  className="h-auto w-full"
                  preload
                />
              </div>
              <h1 className="helvetica-black text-[26px] leading-tight text-white text-center ">
                Premium Villa Plots
                <br />
                <span className="px-8 helvetica-black text-[26px] leading-tight text-white text-center">
                  in Nelamangala
                </span>
              </h1>

              <p className="mt-3 helvetica-normal text-center text-2xl text-[#F2E9CA]!">
                Invest in Bangalore&apos;s Fast-Growing Corridor
              </p>

              <div className="relative top-[20%] flex items-end gap-5">
                {/* RERA */}
                <Image
                  src="/landing-page/rera.webp"
                  alt="RERA Registered"
                  width={70}
                  height={70}
                  className="object-cover"
                />
                {/* NPA */}
                <Image
                  src="/landing-page/NPA_Seal.webp"
                  alt="NPA Approved"
                  width={70}
                  height={70}
                  className="object-cover"
                />
              </div>

              {/* <div className="mx-0 w-full mt-8 mb-4 flex justify-center">
                <Image
                  src="/landing-page/gulmohar.svg"
                  alt="Chartered Gulmohar"
                  width={300}
                  height={90}
                  className="h-auto w-full max-w-[320px] md:max-w-[200px]"
                  preload
                />
              </div> */}
              {/* <p className="text-white!">by Chartered Housing</p> */}
              <div className="mx-0 w-full my-4 flex justify-center">
                <Image
                  src="/landing-page/acers.webp"
                  alt="Chartered Gulmohar"
                  width={300}
                  height={100}
                  className="h-auto w-[80%] object-contain"
                  preload
                />
              </div>
              <div className="mx-0 w-full mb-4 flex justify-center">
                <Image
                  src="/landing-page/start.webp"
                  alt="Chartered Gulmohar"
                  width={300}
                  height={90}
                  className="h-auto w-[80%] object-contain"
                  preload
                />
              </div>
            </div>

            {/* Mobile Form */}
          </div>
        </div>
      </section>

      {/* Bottom Strip */}
      <div className="p-4 bg-[#486C43] md:hidden block">
        <form
          id={`${formId}-mobile`}
          onSubmit={onFormSubmit}
          className="mx-auto mt-2 flex w-full flex-col gap-4  bg-white px-4 py-5 shadow-xl backdrop-blur-md"
        >
          {/* Name */}
          <div>
            <input
              placeholder="Your Name"
              className="border py-2 w-full px-4 mt-2"
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
            <PhoneInput
              placeholder="Enter phone number"
              international
              defaultCountry="IN"
              countryCallingCodeEditable={false}
              className="w-full border px-4 py-2"
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
            <input
              placeholder="Email Address"
              type="email"
              className="border py-2 w-full px-4"
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
          <div className="mt-1 w-full [&_button]:w-full [&_button]:py-2 [&_button]:justify-center">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Book a Site Visit"}
            </Button>
          </div>
        </form>
      </div>

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
