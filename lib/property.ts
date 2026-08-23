export type Photo = {
  src: string;
  alt: string;
  caption: string;
};

/**
 * Confirmed listing facts live here. Empty strings stay off the public page.
 * Do not add a Zillow Rent Zestimate. Asking rent is $2,500/month.
 *
 * Leave contactEmail / contactPhone empty unless you want them in the
 * built JavaScript. Prefer showingHref or infoHref (Calendly, Google Form,
 * or Zillow contact) so a personal number is not scraped.
 */
export const property = {
  addressLine: "80 Carlin Rd",
  city: "Conklin",
  state: "NY",
  zip: "13748",
  county: "Broome County",
  listingType: "For Rent",
  propertyType: "Single-family home",
  rent: "$2,500 / month",
  rentAmount: 2500,
  bedrooms: 3,
  bathroomsLabel: "1.5 Baths",
  bathroomsDetail: "1 full + 1 half",
  livingAreaSqFt: 1808,
  lotAcres: "0.39",
  schoolDistrict: "Susquehanna Valley Central School District",
  leaseTerm: "12-month lease preferred",
  smoking: "No smoking or vaping indoors",
  pets: "Considered with owner approval",
  rentersInsurance: "Required",
  zillowStatus: "Active rental listing",
  zillowUrl: "https://www.zillow.com/homes/80-Carlin-Rd-Conklin-NY-13748_rb/",
  applicationUrl: "",
  showingHref: "",
  infoHref: "",
  contactEmail: "",
  contactPhone: "",
  heroImage: "/images/front.png",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=80%20Carlin%20Rd%2C%20Conklin%2C%20NY%2013748&z=15&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=80+Carlin+Rd+Conklin+NY+13748",
  siteUrl: "https://scottruiter.github.io/80CarlinRd",
  pageTitle: "80 Carlin Rd Conklin NY | 3 Bedroom Home for Rent",
  metaDescription:
    "Explore 80 Carlin Rd in Conklin, NY — a 3-bedroom, 1.5-bath single-family home with approximately 1,808 sq. ft., an updated sunroom, upgraded electrical service, and a 26 kW Generac standby generator.",
  socialTitle: "80 Carlin Rd | Conklin, NY",
  socialDescription:
    "3-bedroom Conklin rental featuring 1,808 sq. ft., an updated sunroom, upgraded electrical service, and a 26 kW Generac whole-home standby generator.",
  headline: "80 Carlin Rd — Comfortable 3-Bedroom Home with Whole-Home Backup Power",
  heroSubheadline:
    "3 Bedrooms • 1.5 Bathrooms • 1,808 Sq. Ft. • Susquehanna Valley Central School District",
  shortDescription:
    "Spacious 3-bedroom, 1.5-bath single-family home offering approximately 1,808 sq. ft. of living space in Conklin, NY. The property features an updated sunroom, upgraded electrical service, and a recently installed 26 kW natural-gas Generac standby generator with automatic transfer switch.",
};

/** Fill these in later. Empty values are not shown on the site. */
export const pending = {
  securityDeposit: "",
  availableDate: "",
  catsAllowed: "",
  dogsAllowed: "",
  maxPets: "",
  petDeposit: "",
  monthlyPetRent: "",
  heatingType: "",
  airConditioning: "",
  washerIncluded: "",
  dryerIncluded: "",
  refrigeratorIncluded: "",
  dishwasher: "",
  microwave: "",
  garage: "",
  parkingSpaces: "",
  basementDetails: "",
  lawnCare: "",
  snowRemoval: "",
  trashRecycling: "",
  waterSewer: "",
  applicationProcess: "",
  generatorInstallYear: "",
};

export const fullAddress = `${property.addressLine}, ${property.city}, ${property.state} ${property.zip}`;
export const rentLabel = property.rent;
export const availableLabel = pending.availableDate;

export const aboutParagraphs = [
  "Welcome to 80 Carlin Rd in Conklin, NY, a spacious 3-bedroom, 1.5-bath single-family home offering approximately 1,808 square feet of living space.",
  "Located within the Susquehanna Valley Central School District, the property offers a comfortable residential setting with convenient access to Conklin, Binghamton, shopping, services, major roadways, and surrounding employment centers.",
  "One of the home's standout features is a recently installed 26 kW natural-gas Generac standby generator with automatic transfer switch. The installation was complemented by an updated electrical service panel with modern circuit breakers, providing dependable automatic backup power during utility outages.",
  "The home also includes an updated sunroom with new flooring and refreshed finishes, creating a bright and versatile additional living area that can serve as a sitting room, home office, hobby area, entertaining space, or relaxing seasonal retreat.",
  "With three bedrooms and approximately 1,808 square feet of living space, the home provides flexibility for bedrooms, guests, work-from-home space, hobbies, or additional storage.",
  "Thoughtful upgrades, reliable infrastructure, additional living space, whole-home backup power, and a convenient Conklin location make 80 Carlin Rd a distinctive rental opportunity.",
];

export const highlights = [
  { label: "Bedrooms", value: "3 Bedrooms" },
  { label: "Bathrooms", value: "1.5 Baths" },
  { label: "Living area", value: "1,808 Sq. Ft." },
  { label: "Home type", value: "Single-family" },
  { label: "Lot", value: "Approx. 0.39 acres" },
  { label: "Schools", value: "Susquehanna Valley" },
  { label: "Backup power", value: "26 kW Generac" },
  { label: "Sunroom", value: "Updated sunroom" },
];

export const highlightList = [
  "3 bedrooms",
  "1 full bathroom + 1 half bathroom",
  "Approximately 1,808 sq. ft.",
  "Single-family home",
  "Approximately 0.39-acre property",
  "Susquehanna Valley Central School District",
  "26 kW Generac standby generator",
  "Natural-gas generator",
  "Automatic transfer switch",
  "Updated electrical service",
  "Updated breaker panel",
  "Updated sunroom",
  "New sunroom flooring",
  "Refreshed interior finishes",
  "Additional flexible living space",
  "Residential setting",
  "Convenient access to Greater Binghamton",
];

export const featureCards = [
  {
    title: "26 kW Generac standby generator",
    body: "Recently installed whole-home backup power on natural gas — sized for the house, not a couple of circuits.",
  },
  {
    title: "Automatic transfer switch",
    body: "Backup power starts automatically during qualifying utility outages. No cords, no manual setup.",
  },
  {
    title: "Updated electrical service / panel",
    body: "Updated service panel with modern circuit breakers, installed with the standby system.",
  },
  {
    title: "Updated sunroom",
    body: "New flooring and refreshed finishes. Use it as a sitting room, office, hobby space, or seasonal retreat.",
  },
  {
    title: "Natural gas",
    body: "Gas service for the home and the standby generator. No portable generator and no propane tank to watch.",
  },
  {
    title: "Yard / outdoor space",
    body: "About 0.39 acres in a residential Conklin setting, with lawn, trees, and room to be outside.",
  },
];

export const generatorCopy = {
  kicker: "Whole-home backup power",
  headline: "Power when the neighborhood goes dark.",
  paragraphs: [
    "A major feature of 80 Carlin Rd is its recently installed 26 kW Generac natural-gas standby generator.",
    "The system includes an automatic transfer switch, allowing backup power to activate automatically when qualifying utility outages occur.",
    "The installation also included an updated electrical service panel and modern circuit breakers, representing a significant improvement to the home's electrical infrastructure.",
  ],
  bullets: [
    "26 kW Generac standby generator",
    "Natural-gas fuel source",
    "Automatic transfer switch",
    "Automatic startup during outages",
    "Permanent installation",
    "Updated electrical panel",
    "Modern circuit breakers",
    "No portable generator setup required",
  ],
};

export const sunroomUses = [
  "Home office",
  "Sitting room",
  "Reading room",
  "Hobby area",
  "Entertainment space",
  "Morning coffee room",
  "Relaxation space",
];

export const leaseTerms = [
  "$2,500/month",
  "12-month lease preferred",
  "Tenant is responsible for applicable utilities, including electricity, natural gas, water/sewer, internet, cable, and other individually contracted services",
  "No smoking or vaping inside the home",
  "Tenant is responsible for routine cleanliness and normal day-to-day care of the property",
  "Tenant is responsible for damage beyond normal wear and tear caused by the tenant, occupants, guests, or pets",
  "Maintenance concerns or property damage must be reported promptly to the property owner",
  "Pets may be considered with owner approval and are subject to applicable lease and pet terms",
  "Renters insurance is required for the duration of the lease",
  "Security deposit, pet terms, maintenance responsibilities, and all other rental conditions will be detailed in the signed lease agreement",
];

export const petPolicy =
  "Pets may be considered with owner approval and are subject to applicable lease and pet terms.";

export const locationAccess = [
  "Binghamton",
  "Greater Binghamton employment centers",
  "Shopping",
  "Grocery stores",
  "Restaurants",
  "Local services",
  "Major roadways",
  "Regional destinations",
];

function mailto(subject: string) {
  if (!property.contactEmail) return "";
  return `mailto:${property.contactEmail}?subject=${encodeURIComponent(subject)}`;
}

export const ctas = {
  showing: property.showingHref || mailto("Showing request — 80 Carlin Rd") || "#contact",
  info: property.infoHref || mailto("Information request — 80 Carlin Rd") || "#contact",
  gallery: "#gallery",
  lease: "#lease",
  apply: property.applicationUrl || "#contact",
  zillow: property.zillowUrl,
};

export const gallery: Photo[] = [
  { src: "/images/front.png", alt: "Front of 80 Carlin Rd", caption: "Main exterior" },
  { src: "/images/front-lawn.png", alt: "Front lawn, lamp post, and driveway", caption: "Alternate exterior" },
  { src: "/images/living-room.png", alt: "Living room", caption: "Living room" },
  { src: "/images/living-room-2.png", alt: "Living room seating", caption: "Living room" },
  { src: "/images/kitchen.png", alt: "Updated kitchen with island", caption: "Kitchen" },
  { src: "/images/kitchen-island.png", alt: "Kitchen island and stainless appliances", caption: "Kitchen" },
  { src: "/images/kitchen-from-side.png", alt: "Kitchen looking toward dining and living areas", caption: "Dining area" },
  { src: "/images/bedroom-middle.png", alt: "Bedroom", caption: "Bedroom" },
  { src: "/images/bedroom-back-left.png", alt: "Bedroom", caption: "Bedroom" },
  { src: "/images/bedroom-back-right.png", alt: "Bedroom", caption: "Bedroom" },
  { src: "/images/hallway.png", alt: "Bedroom hallway", caption: "Hallway" },
  { src: "/images/bathroom.png", alt: "Full bathroom with tub and vanity", caption: "Full bathroom" },
  { src: "/images/bathroom-2.png", alt: "Full bathroom vanity and tub", caption: "Full bathroom" },
  { src: "/images/bathroom-3.png", alt: "Full bathroom detail", caption: "Full bathroom" },
  { src: "/images/basement-bathroom.png", alt: "Half bathroom", caption: "Half bathroom" },
  { src: "/images/stairway.png", alt: "Stairway", caption: "Stairway" },
  { src: "/images/tile.png", alt: "Finished lower-level living space", caption: "Lower-level space" },
  { src: "/images/basement.png", alt: "Lower-level room", caption: "Lower-level space" },
  { src: "/images/basement-2.png", alt: "Lower-level flexible space", caption: "Lower-level space" },
  { src: "/images/basement-3.png", alt: "Lower-level area", caption: "Lower-level space" },
  { src: "/images/laundry.png", alt: "Laundry area", caption: "Laundry" },
  { src: "/images/laundry-2.png", alt: "Laundry area storage", caption: "Laundry" },
  { src: "/images/backyard.png", alt: "Backyard lawn and shed", caption: "Backyard" },
  { src: "/images/backyard-2.png", alt: "Backyard", caption: "Rear exterior" },
  { src: "/images/backyard-3.jpg", alt: "Side and rear yard", caption: "Side yard" },
  { src: "/images/shed.jpg", alt: "Outdoor storage shed", caption: "Shed" },
  { src: "/images/generac.jpg", alt: "26 kW Generac standby generator", caption: "Generac" },
  { src: "/images/generac-2.jpg", alt: "Generac generator installation", caption: "Generac" },
  { src: "/images/electrical-panel.jpg", alt: "Updated electrical panel and transfer switch", caption: "Electrical panel" },
];
