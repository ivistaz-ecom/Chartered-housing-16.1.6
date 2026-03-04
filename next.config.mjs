/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/Brochure/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/contact-us',
        permanent: true,
      },
      {
        source: '/ongoing',
        destination: '/projects/ongoing',
        permanent: true,
      },
      {
        source: '/ongoing/chartered-woodpecker',
        destination: '/projects/completed',
        permanent: true,
      },
      {
        source: '/ongoing/apartments-in-bangalore-hummingbird',
        destination: '/projects/completed',
        permanent: true,
      },
      {
        source: '/bangalore/apartments-on-kanakapura-road',
        destination: '/projects/completed',
        permanent: true,
      },
      {
        source: '/bangalore/luxury-villas-in-electronic-city',
        destination: '/projects/completed',
        permanent: true,
      },
      {
        source: '/bangalore/plots-in-nelamangala',
        destination: '/projects/upcoming',
        permanent: true,
      },
      {
        source: '/completed',
        destination: '/projects/completed',
        permanent: true,
      },
      // Completed project redirects
      {
        source: '/completed/villas-in-bangalore-grasshopper-2',
        destination: '/projects/completed',
        permanent: true,
      },
      {
        source: '/completed/plot-in-bangalore-windsong',
        destination: '/projects/completed',
        permanent: true,
      },
      {
        source: '/completed/apartments-in-bangalore-beverly-hills',
        destination: '/projects/completed',
        permanent: true,
      },
      {
        source: '/completed/apartments-in-bangalore-kuteer',
        destination: '/projects/completed',
        permanent: true,
      },
      {
        source: '/completed/apartments-in-bangalore-rathna',
        destination: '/projects/completed',
        permanent: true,
      },
      // CSR redirects
      {
        source: '/csr/culture',
        destination: '/csr-activities',
        permanent: true,
      },
      {
        source: '/csr/miscellaneous',
        destination: '/csr-activities',
        permanent: true,
      },
      {
        source: '/csr/real-estate-investments-an-exceptional-way-to-maximise-profits',
        destination: '/csr-activities',
        permanent: true,
      },
      {
        source: '/csr/nature',
        destination: '/csr-activities',
        permanent: true,
      },
      {
        source: '/csr/experience-the-luxury-that-bangalore-has-to-offer',
        destination: '/csr-activities',
        permanent: true,
      },
      {
        source: '/csr/why-luxury-villas-in-bangalore-are-better-than-5-star-hotels',
        destination: '/csr-activities',
        permanent: true,
      },
      {
        source: '/csr/education',
        destination: '/csr-activities',
        permanent: true,
      },
      {
        source: '/csr/should-i-buy-a-house-or-rent-a-house',
        destination: '/csr-activities',
        permanent: true,
      },
      {
        source: '/csr/basic-real-estate-terms-you-should-know-before-buying-a-flat',
        destination: '/csr-activities',
        permanent: true,
      },
      {
        source: '/csr/how-to-make-your-house-a-smart-home',
        destination: '/csr-activities',
        permanent: true,
      },
      // Blog redirects
      {
        source: '/blogs/experience-the-luxury-that-bangalore-has-to-offer',
        destination: '/blogs',
        permanent: true,
      },
      {
        source: '/blogs/to-live-in-the-city-or-away-from-it',
        destination: '/blogs',
        permanent: true,
      },
      {
        source: '/blogs/real-estate-investments-an-exceptional-way-to-maximise-profits',
        destination: '/blogs',
        permanent: true,
      },
      {
        source: '/blogs/how-do-i-choose-a-good-house-moving-company',
        destination: '/blogs',
        permanent: true,
      },
      {
        source: '/blogs/complete-guide-for-shifting-your-house',
        destination: '/blogs',
        permanent: true,
      },
      {
        source: '/blogs/how-to-make-your-house-a-smart-home',
        destination: '/blogs',
        permanent: true,
      },
      {
        source: '/blogs/basic-real-estate-terms-you-should-know-before-buying-a-flat',
        destination: '/blogs',
        permanent: true,
      },
      {
        source: '/media',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blogs',
        destination: '/',
        permanent: true,
      },
      {
        source: '/sitemap',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
