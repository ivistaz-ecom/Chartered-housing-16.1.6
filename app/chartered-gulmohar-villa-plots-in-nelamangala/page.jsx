import React from "react";
import LandingPage from "../components/LandingPage";
import SeoClient from "../components/Shared/SeoClient";

const siteOrigin = "https://charteredhousing.com";

const Page = () => {
  const seoField = {
    title: "Premium plots for sale near nelamangala road in Bangalore",
    description:
      "Looking for villa plots in Nelamangala? Discover Chartered Gulmohar offering premium plotted development near Tumkur Road",
    path: "/chartered-gulmohar-villa-plots-in-nelamangala",
  };

  const placeJsonLd = {
    "@context": "https://schema.org",
    "@type": "ResidentialComplex",
    name: "Chartered Gulmohar",
    description: seoField.description,
    url: `${siteOrigin}${seoField.path}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nelamangala",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Swimming Pool",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Clubhouse",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Children Play Area",
        value: true,
      },
    ],
  };

  return (
    <>
      <SeoClient {...seoField} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(placeJsonLd) }}
      />
      <LandingPage />
    </>
  );
};

export default Page;
