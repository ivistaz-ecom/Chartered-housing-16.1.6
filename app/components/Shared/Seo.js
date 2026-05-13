"use client"
import React, { useEffect } from "react"

function NextSeo({ title, description, path, metaImage }) {
  // Dynamically get the domain name from window.location (client-side)
  useEffect(() => {
    const domainName = typeof window !== "undefined" ? window.location.origin : "https://chartered-housing-v2.vercel.app"
    
    // Update title
    if (title) {
      document.title = title
    }

    // Helper function to update or create meta tags
    const setMetaTag = (property, content) => {
      if (!content) return
      
      let element = document.querySelector(`meta[${property.startsWith('og:') ? 'property' : 'name'}="${property}"]`)
      
      if (!element) {
        element = document.createElement('meta')
        if (property.startsWith('og:') || property.startsWith('twitter:')) {
          element.setAttribute('property', property)
        } else {
          element.setAttribute('name', property)
        }
        document.head.appendChild(element)
      }
      
      element.setAttribute('content', content)
    }

    // Update meta tags
    if (description) {
      setMetaTag('description', description)
    }
    
    setMetaTag('og:locale', 'en_US')
    setMetaTag('og:type', 'website')
    if (title) {
      setMetaTag('og:title', title)
    }
    if (description) {
      setMetaTag('og:description', description)
    }
    setMetaTag('og:url', `${domainName}${path}`)
    if (title) {
      setMetaTag('og:site_name', title)
    }
    if (metaImage) {
      setMetaTag('og:image', metaImage)
    }
    setMetaTag('twitter:card', 'summary_large_image')

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.setAttribute('href', `${domainName}${path}`)

    // Managed WebSite JSON-LD only — pages may add their own ld+json without this overwriting it
    let jsonLdScript = document.querySelector(
      'script[type="application/ld+json"][data-seo-managed="website"]'
    )
    if (!jsonLdScript) {
      jsonLdScript = document.createElement('script')
      jsonLdScript.setAttribute('type', 'application/ld+json')
      jsonLdScript.setAttribute('data-seo-managed', 'website')
      document.head.appendChild(jsonLdScript)
    }
    
    const jsonLd = {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      name: "Chartered Housing",
      url: "https://charteredhousing.com",
      potentialAction: {
        "@type": "SearchAction",
        target: `https://charteredhousing.com${path}`,
        "query-input": "required name=search_term_string",
      },
      "sameAs": [
        "https://www.instagram.com/charteredhousing?igsh=ZzJkamVuaDZjazE0",
        "https://www.facebook.com/CharteredHousing/",
        "https://in.linkedin.com/company/chartered-housing-private-limited",
        "https://www.youtube.com/@charteredhousing25"
      ]
    }
    
    jsonLdScript.textContent = JSON.stringify(jsonLd)
  }, [title, description, path, metaImage])

  return null
}

export default NextSeo