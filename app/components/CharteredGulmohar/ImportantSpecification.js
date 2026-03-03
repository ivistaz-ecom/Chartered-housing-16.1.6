'use client'
import React from 'react'

const leftSpecs = [
    'Expansive 2500 sq. ft. aesthetic living, dining, and family spaces with handpicked Italian/imported marble flooring exquisitely laid with high gloss finish',
    '4 bedrooms, 4 bathrooms & a powder room',
    'A room for domestic help with attached bathroom',
    `A grand deck of 8' x 20' for Living`,
    'Plush bathrooms with fittings from Hans Grohe and sanitaryware from Toto',
    `8' high doors for main entrance, bedrooms, bathrooms & kitchen and 8' Schuco sliding doors for Living, Dining & bedrooms`,
]

const rightSpecs = [
    'Windows with mosquito mesh',
    'To avoid defacing of the building elevation, there are designated spaces in each home to hide hanging clothes & AC compressors from public view',
    'Access Control Card & Biometric locking system for the main door',
    'Provision for piped gas, to keep the cylinders away from the homes',
    'Heat pumps to replace bulky geysers for water heating',
    'Adequate 8KW power connection with 100% DG backup',
    '3 parking spaces per flat in the basement and one EV charging point per home',
]

const ImportantSpecification = () => {
    return (
        <section className="md:py-16 py-0">
            <div className="max-w-6xl mx-auto bg-[#DBDBDB] md:p-10 shadow-sm py-20">
                <h2 className="lg:text-[36px] text-[24px] text-center text-[#ED1C25] mb-6 roboto-serif-regular">
                    Important Specifications
                </h2>
                <div className="border-t border-[#ED1C25] w-3/4 mx-auto mb-10"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-10 gap-5 px-5 md:px-0">
                    {/* Left Column */}
                    <ul className="space-y-5">
                        {leftSpecs.map((item, index) => (
                            <li key={index} className="flex items-start">
                                <span className="text-[#ED1C25] text-xl mr-3 leading-tight">•</span>
                                <h6 className="text-[#646464] leading-relaxed text-[18px]">{item}</h6>
                            </li>
                        ))}
                    </ul>

                    {/* Right Column */}
                    <ul className="space-y-5 md:border-l border-dotted border-[#ED1C25] md:pl-6  md:pt-0">
                        {rightSpecs.map((item, index) => (
                            <li key={index} className="flex items-start">
                                <span className="text-[#ED1C25] text-xl mr-3 leading-tight">•</span>
                                <h6 className="text-[#646464] leading-relaxed text-[18px]">{item}</h6>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default ImportantSpecification
