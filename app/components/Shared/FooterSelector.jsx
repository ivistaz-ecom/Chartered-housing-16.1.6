"use client"

import { usePathname } from "next/navigation"
import Footer from "./Footer"

const FooterSelector = () => {
  const pathname = usePathname()

  const normalizedPath = pathname?.replace(/\/+$/, "") || "/"

  const hideFooterPages = ["/thank-you"]

  const shouldHideFooter = hideFooterPages.includes(normalizedPath)

  if (shouldHideFooter) return null

  return <Footer />
}

export default FooterSelector
