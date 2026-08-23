import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Sans } from "next/font/google";
import { asset } from "@/lib/asset";
import { fullAddress, property } from "@/lib/property";
import "./globals.css";

const plex = IBM_Plex_Sans({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(property.siteUrl),
  title: property.pageTitle,
  description: property.metaDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: property.socialTitle,
    description: property.socialDescription,
    url: "/",
    siteName: property.addressLine,
    locale: "en_US",
    images: [
      {
        url: property.ogImage,
        alt: `Front of ${fullAddress}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: property.socialTitle,
    description: property.socialDescription,
    images: [property.ogImage],
  },
  icons: {
    icon: asset("/mark.svg"),
  },
};

const listingJsonLd = {
  "@context": "https://schema.org",
  "@type": "SingleFamilyResidence",
  name: property.headline,
  url: property.siteUrl,
  image: `${property.siteUrl}${property.ogImage}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: property.addressLine,
    addressLocality: property.city,
    addressRegion: property.state,
    postalCode: property.zip,
    addressCountry: "US",
  },
  numberOfBedrooms: property.bedrooms,
  numberOfBathroomsTotal: 1.5,
  floorSize: {
    "@type": "QuantitativeValue",
    value: property.livingAreaSqFt,
    unitCode: "FTK",
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "26 kW Generac standby generator" },
    { "@type": "LocationFeatureSpecification", name: "Automatic transfer switch" },
    { "@type": "LocationFeatureSpecification", name: "Updated electrical service" },
    { "@type": "LocationFeatureSpecification", name: "Updated sunroom" },
    { "@type": "LocationFeatureSpecification", name: "Natural gas" },
    { "@type": "LocationFeatureSpecification", name: "Yard" },
  ],
  offers: {
    "@type": "Offer",
    price: property.rentAmount,
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    category: "Lease",
    url: property.siteUrl,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${plex.variable} ${fraunces.variable} h-full antialiased`}>
      <body className="min-h-full bg-paper text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(listingJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
