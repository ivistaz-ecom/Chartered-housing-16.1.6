import React from "react";
import Banner from "../Shared/Banner";
import BreadCrumbs from "../Shared/BreadCrumbs";
import Content from "./Content";
import ProjectOverview from "./ProjectOverview.js";
import ProjectDetails from "./ProjectDetails";
import ProjectDetailsMobile from "./ProjectDetailsMobile";
import Carousel from "./Carousel";
import Amenities from "./Amenities";
import ImportantSpecification from "./ImportantSpecification";
import Form1956 from "./CharteredGulmoharForm";
import BuiltByCharteredHousing from "./BuiltByCharteredHousing";
import LocationAdvantage from "./LocationAdvantage";
import ExploreProjectDetails from "./ExploreProjectDetails";


const Chartered1956 = () => {
  return (
    <div>
      <Banner
        backgroundImage="/Charted-gulmohar/gulmohar-banner.webp"
        mobileBackgroundImage="/Charted-gulmohar/charted-gulmohar-mobile.webp"
        sectionTitle="CHARTERED GULMOHAR"
        title="Planned residential plots in a greener,"
        subtitle="Fast-emerging corridor of Nelamangala"
        textPosition="bottom-left"
        overlayOpacity={0.2}
        reraNumber="PRM/KA/RERA/1250/307/PR/110226/008465"
      />
      <BreadCrumbs title="Chartered Gulmohar" />
      <Content />
      {/* <ProjectOverview /> */}
      <ProjectDetails />
      <ProjectDetailsMobile />
      <BuiltByCharteredHousing />
      <Carousel />
      <Amenities />
      {/* <ImportantSpecification /> */}
      <LocationAdvantage />
      <ExploreProjectDetails />
      <Form1956 />
    </div>
  );
};

export default Chartered1956;
