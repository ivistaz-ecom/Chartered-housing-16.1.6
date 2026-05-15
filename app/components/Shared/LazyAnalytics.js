"use client"
import { useEffect, useState } from "react"
import Script from "next/script"

/**
 * LazyAnalytics - Loads analytics scripts only after user interaction
 * This significantly reduces initial page load time
 */
export default function LazyAnalytics() {
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    // Load scripts after first user interaction (click, scroll, touch, keydown)
    const events = ["mousedown", "touchstart", "keydown", "scroll"]
    const loadScripts = () => {
      if (!shouldLoad) {
        setShouldLoad(true)
        // Remove listeners after first interaction
        events.forEach((event) => {
          document.removeEventListener(event, loadScripts, { passive: true })
        })
      }
    }

    // Add event listeners with passive option for better performance
    events.forEach((event) => {
      document.addEventListener(event, loadScripts, {
        passive: true,
        once: true,
      })
    })

    // Fallback: Load after 3 seconds if no interaction
    const fallbackTimer = setTimeout(() => {
      if (!shouldLoad) {
        setShouldLoad(true)
        events.forEach((event) => {
          document.removeEventListener(event, loadScripts, { passive: true })
        })
      }
    }, 3000)

    return () => {
      clearTimeout(fallbackTimer)
      events.forEach((event) => {
        document.removeEventListener(event, loadScripts, { passive: true })
      })
    }
  }, [shouldLoad])

  if (!shouldLoad) {
    return null
  }

  return (
    <>
      {/* Google Tag Manager - Only loads after user interaction */}
      <Script
        id="gtm"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({
                  'gtm.start': new Date().getTime(),
                  event:'gtm.js'
                });

                var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),
                    dl=l!='dataLayer' ? '&l='+l : '';

                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;

                f.parentNode.insertBefore(j,f);

              })(window,document,'script','dataLayer','GTM-KZ8THWNN');
        `,
        }}
      />
    </>
  )
}
