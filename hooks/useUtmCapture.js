"use client"

import { useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { persistUtmFromSearchParams } from "@/lib/utmTracking"

/** Call once on the landing page to store UTMs from the URL for later form submits. */
export function useUtmCapture() {
  const searchParams = useSearchParams()

  useEffect(() => {
    persistUtmFromSearchParams(searchParams)
  }, [searchParams])
}
