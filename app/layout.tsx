import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { asset } from "@/lib/asset";
import { fullAddress, property } from "@/lib/property";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
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

export const viewport: Viewport = {
  themeColor: "#07090d",
};

const listingJsonLd = {
  "@context": "https://schema.org",
  "@type": "SingleFamilyResidence",
  name: property.headline,
  url: property.siteUrl,
  image: `${property.siteUrl}${property.ogImage}`,
  telephone: `+1${property.contactPhone}`,
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
    <html lang="en" className={`${inter.variable} ${instrument.variable} h-full antialiased`}>
      <body className="min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(listingJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
