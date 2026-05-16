"use client"

import { useEffect } from "react"
import { persistUtmFromSearchParams } from "@/lib/utmTracking"

/** Call once on the landing page to store UTMs from the URL for later form submits. */
export function useUtmCapture() {
  useEffect(() => {
    persistUtmFromSearchParams(
      new URLSearchParams(window.location.search),
    )
  }, [])
}
