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

const title = `${property.addressLine}, ${property.city}, ${property.state} ${property.zip} | For Rent`;
const description = `3-bedroom rental at ${fullAddress}. ${property.schoolDistrict}. 26 kW Generac standby generator, updated electrical, sunroom, and yard.`;

export const metadata: Metadata = {
  metadataBase: new URL(property.siteUrl),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title,
    description,
    url: "/",
    siteName: property.addressLine,
    locale: "en_US",
    images: [
      {
        url: property.heroImage,
        alt: `Front of ${fullAddress}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [property.heroImage],
  },
  icons: {
    icon: asset("/mark.svg"),
  },
};

const listingJsonLd = {
  "@context": "https://schema.org",
  "@type": "Residence",
  name: property.addressLine,
  url: property.siteUrl,
  image: `${property.siteUrl}${property.heroImage}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: property.addressLine,
    addressLocality: property.city,
    addressRegion: property.state,
    postalCode: property.zip,
    addressCountry: "US",
  },
  numberOfRooms: property.bedrooms,
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "26 kW Generac standby generator" },
    { "@type": "LocationFeatureSpecification", name: "Automatic transfer switch" },
    { "@type": "LocationFeatureSpecification", name: "Updated electrical service" },
    { "@type": "LocationFeatureSpecification", name: "Updated sunroom" },
    { "@type": "LocationFeatureSpecification", name: "Natural gas" },
    { "@type": "LocationFeatureSpecification", name: "Yard" },
  ],
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
