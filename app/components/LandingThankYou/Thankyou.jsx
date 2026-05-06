import React from "react"
import Link from "next/link"
import Button from "../Shared/Button"

const Thankyou = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-[#F8F5F0] px-4 py-20">
      <div className="w-full max-w-2xl rounded-3xl border border-[#E7DFD8] bg-white px-6 py-14 text-center shadow-xl md:px-12">
        <h1 className="roboto-serif-regular text-4xl text-[#4E372A] md:text-6xl">
          Thank You
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-[#646464] md:text-2xl">
          We've received your details. <br /> Our team will get in touch with
          you shortly.
        </p>
        <p className="mt-6 text-lg leading-relaxed text-[#646464] md:text-2xl">
          For more details, please visit our website:
        </p>

        <div className="mt-10 flex justify-center">
          <Link href="/">
            <Button href="/">Visit Our Website</Button>
          </Link>
        </div>
        <div className="mt-10 flex justify-center">kindly incorporate</div>
      </div>
    </section>
  )
}

export default Thankyou
