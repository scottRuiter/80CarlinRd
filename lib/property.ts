export type Photo = {
  src: string;
  alt: string;
  caption: string;
};

/**
 * Edit these values and push to `main` to update the live site.
 * Leave contactEmail empty unless you want a dedicated rental inbox
 * in the built JavaScript. Prefer showingHref (Calendly, Google Form,
 * or Zillow contact) so a personal phone or email is not scraped.
 */
export const property = {
  addressLine: "80 Carlin Rd",
  city: "Conklin",
  state: "NY",
  zip: "13748",
  bedrooms: 3,
  schoolDistrict: "Susquehanna Valley Central School District",
  rent: "",
  availableDate: "",
  zillowUrl: "https://www.zillow.com/homes/80-Carlin-Rd-Conklin-NY-13748_rb/",
  applicationUrl: "",
  showingHref: "",
  contactEmail: "",
  heroImage: "/images/front.png",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=80%20Carlin%20Rd%2C%20Conklin%2C%20NY%2013748&z=15&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=80+Carlin+Rd+Conklin+NY+13748",
  siteUrl: "https://scottruiter.github.io/80CarlinRd",
};

export const rentLabel = property.rent || "Contact for monthly rent";
export const availableLabel = property.availableDate || "Contact for availability";

export const fullAddress = `${property.addressLine}, ${property.city}, ${property.state} ${property.zip}`;

export const highlights = [
  { label: "Bedrooms", value: `${property.bedrooms} Bedrooms` },
  { label: "Backup power", value: "26 kW Generac" },
  { label: "Sunroom", value: "Updated Sunroom" },
  { label: "Fuel", value: "Natural Gas" },
  { label: "Electrical", value: "Updated Electrical" },
  { label: "Outdoors", value: "Residential Yard" },
];

export const featureCards = [
  {
    title: "26 kW Generac standby generator",
    body: "Whole-home backup power on natural gas, sized for the house rather than a couple of circuits.",
  },
  {
    title: "Automatic transfer switch",
    body: "Utility outages hand off to the generator automatically. No extension cords, no manual start.",
  },
  {
    title: "Updated electrical service / panel",
    body: "A current Eaton service panel with labeled breakers, installed to support the standby system.",
  },
  {
    title: "Updated sunroom",
    body: "An added living space that opens the house to the yard and extra daylight.",
  },
  {
    title: "Natural gas",
    body: "Gas service for heat and the standby generator — no propane tank to watch.",
  },
  {
    title: "Yard / outdoor space",
    body: "A deep, tree-lined lawn, storage shed, and room to be outside without feeling stacked on the neighbors.",
  },
];

export const leaseTerms = [
  "12-month lease preferred",
  "No smoking or vaping",
  "Renters insurance required",
  "Credit and background screening for all adult occupants",
];

export const petPolicy =
  "Pets considered on a case-by-case basis. Ask when you request a showing so we can talk through size, number, and any additional terms.";

export const aboutParagraphs = [
  `Welcome to ${fullAddress}. This is a three-bedroom home in a quiet Conklin neighborhood, served by the ${property.schoolDistrict}.`,
  "The house has been kept as a place to live, not a strip of investor gray. There is a bright updated kitchen with a center island and stainless appliances, a comfortable living room, and a finished lower level with laundry.",
  "The standout is reliability. A recently installed 26 kW natural-gas Generac standby generator, automatic transfer switch, and updated electrical service mean the house can keep running when the rest of the road goes dark.",
];

export const gallery: Photo[] = [
  { src: "/images/front.png", alt: "Front of 80 Carlin Rd", caption: "Exterior" },
  { src: "/images/front-lawn.png", alt: "Front lawn and driveway", caption: "Front lawn" },
  { src: "/images/kitchen.png", alt: "Updated kitchen with island", caption: "Kitchen" },
  { src: "/images/kitchen-island.png", alt: "Kitchen island and dining area", caption: "Kitchen island" },
  { src: "/images/kitchen-from-side.png", alt: "Kitchen looking toward the living room", caption: "Kitchen to living room" },
  { src: "/images/living-room.png", alt: "Living room", caption: "Living room" },
  { src: "/images/living-room-2.png", alt: "Living room seating", caption: "Living room" },
  { src: "/images/bedroom-middle.png", alt: "Middle bedroom", caption: "Bedroom" },
  { src: "/images/bedroom-back-left.png", alt: "Back left bedroom", caption: "Bedroom" },
  { src: "/images/bedroom-back-right.png", alt: "Back right bedroom", caption: "Bedroom" },
  { src: "/images/hallway.png", alt: "Bedroom hallway", caption: "Hallway" },
  { src: "/images/bathroom.png", alt: "Bathroom", caption: "Bathroom" },
  { src: "/images/bathroom-2.png", alt: "Bathroom vanity", caption: "Bathroom" },
  { src: "/images/bathroom-3.png", alt: "Bathroom detail", caption: "Bathroom" },
  { src: "/images/stairway.png", alt: "Stairway", caption: "Stairway" },
  { src: "/images/laundry.png", alt: "Laundry room", caption: "Laundry" },
  { src: "/images/laundry-2.png", alt: "Laundry room storage", caption: "Laundry" },
  { src: "/images/basement.png", alt: "Basement living space", caption: "Lower level" },
  { src: "/images/basement-2.png", alt: "Basement room", caption: "Lower level" },
  { src: "/images/basement-3.png", alt: "Basement area", caption: "Lower level" },
  { src: "/images/basement-bathroom.png", alt: "Basement bathroom", caption: "Lower-level bath" },
  { src: "/images/tile.png", alt: "Tile work", caption: "Tile" },
  { src: "/images/backyard.png", alt: "Backyard and shed", caption: "Yard" },
  { src: "/images/backyard-2.png", alt: "Backyard lawn", caption: "Yard" },
  { src: "/images/backyard-3.jpg", alt: "Yard and trees", caption: "Yard" },
  { src: "/images/shed.jpg", alt: "Outdoor storage shed", caption: "Shed" },
  { src: "/images/generac.jpg", alt: "26 kW Generac standby generator", caption: "Generac" },
  { src: "/images/generac-2.jpg", alt: "Generac generator installation", caption: "Generac" },
  { src: "/images/electrical-panel.jpg", alt: "Updated electrical panel and transfer switch", caption: "Electrical" },
];
