import localFont from "next/font/local"
import "./globals.css"
import HeaderSelector from "./components/Shared/HeaderSelector"
import Footer from "./components/Shared/Footer"
import ScrollToTop from "./utils/ScrollToTop"
import LazyAnalytics from "./components/Shared/LazyAnalytics"
import ClarityInit from "./components/Clarity"
import FooterSelector from "./components/Shared/FooterSelector"
import Script from "next/script"

// Optimize Nunito font with Next.js font optimization
const nunito = localFont({
  src: [
    {
      path: "./font/Nunito/Nunito-VariableFont_wght.ttf",
      weight: "200 1000",
      style: "normal",
    },
    {
      path: "./font/Nunito/Nunito-Italic-VariableFont_wght.ttf",
      weight: "200 1000",
      style: "italic",
    },
  ],
  variable: "--font-nunito",
  display: "swap",
  preload: true,
  fallback: ["sans-serif"],
})

// Optimize Roboto Serif font with Next.js font optimization
const robotoSerif = localFont({
  src: [
    {
      path: "./font/Roboto_Serif/RobotoSerif-VariableFont_GRAD,opsz,wdth,wght.ttf",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "./font/Roboto_Serif/RobotoSerif-Italic-VariableFont_GRAD,opsz,wdth,wght.ttf",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-roboto-serif",
  display: "swap",
  preload: true,
  fallback: ["serif"],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="msvalidate.01" content="A827D56A91561DA21E2E94273F4D52D5" />

        <Script id="gtm" strategy="afterInteractive">
          {`
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
  `}
        </Script>
      </head>

      <body
        className={`${nunito.variable} ${robotoSerif.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KZ8THWNN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <HeaderSelector />
        {children}
        <FooterSelector />
        <ClarityInit />
        <ScrollToTop />
        {/* Lazy load analytics scripts after user interaction */}
        <LazyAnalytics />
      </body>
    </html>
  )
}
