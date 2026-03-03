'use client'
import React from 'react'
import CharteredGulmohar from '../../../components/CharteredGulmohar'
import SeoClient from '@/app/components/Shared/SeoClient'
const page = () => {
  const seoField = {
    title: "Chartered 1956 | 4 BHK Luxury Apartments in Palace Road",
    description: "Experience ultra-luxury living at Chartered 1956, Palace Road. Spacious 4 BHK apartments with premium amenities, crafted for comfort, style, and elegance in Bangalore.",
    path: "/projects/ongoing/chartered-1956",
  }
  return (
    <div>
      <SeoClient {...seoField} />
      {/* <Chartered1956 />  */}
      <CharteredGulmohar />
    </div>
  )
}

export default page
