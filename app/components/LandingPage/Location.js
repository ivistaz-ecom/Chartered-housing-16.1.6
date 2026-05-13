import React from "react"
import Image from "next/image"

const areaImageSrc = "/landing-page/plot.webp"
const pathImageSrc = "/landing-page/path.svg"
const arrowImageSrc = "/landing-page/arrrow.png"

const points = [
  "Easy access to Nelamangala Railway Station",
  "20 minutes from NH48/Nelamangala Junction",
  <>
    30 minutes from Doddaballapur/
    <br />
    Satellite Town Ring Road (STRR)
  </>,
  "10 minutes from Chikka Madhure Temple",
]

const Location = () => {
  return (
    <section className="relative w-full overflow-hidden pb-8 md:pb-14">
      <div className="relative mx-auto grid min-h-[600px] grid-cols-1 overflow-hidden md:w-full md:grid-cols-[35%_65%]">
        
        <div className="relative min-h-[300px] md:min-h-[600px]">
          <Image
            src={areaImageSrc}
            alt="Chartered Gulmohar area view"
            fill
            sizes="(max-width: 768px) 100vw, 35vw"
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="bg-[#FFE6B3] px-4 py-7 md:px-8 md:py-10">
          <div className="mx-auto flex h-full max-w-[960px] flex-col">
            
            <h2 className="roboto-serif-regular text-center text-[32px] leading-tight text-[#4E372A] md:text-[48px]">
              Location Advantages
            </h2>

            <div className="mt-5 grid flex-1 grid-cols-1 gap-5 md:mt-8 md:grid-cols-[44%_56%] md:gap-10">
              
              <div className="order-2 relative min-h-[250px] md:order-1 md:min-h-[430px]">
                <Image
                  src={pathImageSrc}
                  alt="Location path map"
                  fill
                  sizes="(max-width: 768px) 100vw, 28vw"
                  className="object-contain object-top"
                />
              </div>

              <div className="order-1 md:order-2 md:pr-20">
                <p className="text-[16px] leading-relaxed md:text-[18px] text-black!">
                  A decade ago, Chartered Veda plots were priced at <b>₹1,800/sq.ft</b>.
                  Today they trade at <b>₹5,500/sq.ft</b>. Chartered Gulmohar Bengaluru
                  is in the same corridor at the early stage of that same curve.
                </p>

                <div className="mt-3">
                  {points.map((point, index) => (
                    <div
                      key={index}
                      className={`flex items-start gap-3 py-3 md:gap-4 md:py-4 ${
                        index !== points.length - 1
                          ? "border-b border-[#b78f71]/60"
                          : ""
                      }`}
                    >
                      <Image
                        src={arrowImageSrc}
                        alt=""
                        width={22}
                        height={22}
                        className="mt-0.5 h-[15px] w-[15px] shrink-0"
                      />

                      <p className="m-0 text-[16px] leading-snug md:text-[18px] text-black!">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location