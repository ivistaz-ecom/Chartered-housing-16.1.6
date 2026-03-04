'use client'
import React from 'react'
import CharteredGulmohar from '../../../components/CharteredGulmohar'
import SeoClient from '@/app/components/Shared/SeoClient'
const page = () => {
  const seoField = {
    title: "Chartered Gulmohar | Premium Residential Plots in Nelamangala | Chartered Housing",
    description: "Explore Chartered Gulmohar, a planned development in Nelamangala offering premium residential villa plots with underground infrastructure, green spaces, and strong connectivity.",
    path: "/projects/ongoing/chartered-gulmohar",
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
