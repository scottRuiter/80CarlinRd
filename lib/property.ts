export type PhotoCategory =
  | "exterior"
  | "living"
  | "kitchen"
  | "bedroom"
  | "bath"
  | "lower"
  | "power"
  | "yard";

export type Photo = {
  src: string;
  alt: string;
  caption: string;
  category: PhotoCategory;
};

/**
 * Confirmed listing facts live here. Empty strings stay off the public page.
 * Do not add a Zillow Rent Zestimate. Asking rent is $2,500/month.
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
  contactName: "Scott Ruiter",
  contactEmail: "scott.a.ruiter@gmail.com",
  contactPhone: "6165026608",
  contactPhoneLabel: "(616) 502-6608",
  heroImage: "/images/front.jpg",
  ogImage: "/images/og.jpg",
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

export const ctas = {
  showing: "#tour",
  gallery: "#gallery",
  lease: "#lease",
  apply: property.applicationUrl || "#tour",
  zillow: property.zillowUrl,
  tel: `tel:+1${property.contactPhone}`,
  sms: `sms:+1${property.contactPhone}`,
};

export const sections = [
  { id: "home", label: "Top" },
  { id: "story", label: "The home" },
  { id: "gallery", label: "Photos" },
  { id: "power", label: "Power" },
  { id: "spaces", label: "Spaces" },
  { id: "lease", label: "Lease" },
  { id: "location", label: "Location" },
  { id: "faq", label: "FAQ" },
  { id: "tour", label: "Tour" },
];

export const stats: {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
}[] = [
  { value: 3, suffix: "", label: "Bedrooms" },
  { value: 1.5, suffix: "", label: "Bathrooms", decimals: 1 },
  { value: 1808, suffix: "", label: "Square feet" },
  { value: 26, suffix: " kW", label: "Standby power" },
];

export const galleryFilters: { id: "all" | PhotoCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "exterior", label: "Exterior" },
  { id: "living", label: "Living" },
  { id: "kitchen", label: "Kitchen" },
  { id: "bedroom", label: "Bedrooms" },
  { id: "bath", label: "Baths" },
  { id: "lower", label: "Lower level" },
  { id: "power", label: "Power" },
  { id: "yard", label: "Yard" },
];

export const featuredPhotos = [
  "/images/front.jpg",
  "/images/kitchen.jpg",
  "/images/living-room.jpg",
  "/images/backyard.jpg",
  "/images/generac.jpg",
];

export const faqs = [
  {
    q: "What is the monthly rent?",
    a: "The asking rent is $2,500 per month.",
  },
  {
    q: "How large is the home?",
    a: "Three bedrooms, 1 full bath and 1 half bath, and about 1,808 square feet on roughly 0.39 acres.",
  },
  {
    q: "Is there backup power?",
    a: "Yes. A recently installed 26 kW natural-gas Generac standby generator with automatic transfer switch and an updated electrical panel. It starts on its own during qualifying outages — no portable generator, no extension cords.",
  },
  {
    q: "What school district is this?",
    a: "Susquehanna Valley Central School District, in Conklin, Broome County.",
  },
  {
    q: "Who pays utilities?",
    a: "The tenant pays applicable utilities, including electricity, natural gas, water/sewer, internet, cable, and other individually contracted services.",
  },
  {
    q: "Are pets allowed?",
    a: "Pets may be considered with owner approval and are subject to the lease and any pet terms.",
  },
  {
    q: "What are the lease basics?",
    a: "A 12-month lease is preferred. No smoking or vaping inside the home. Renters insurance is required. Deposit, pet terms, and remaining conditions are confirmed in the signed lease.",
  },
];

export const gallery: Photo[] = [
  { src: "/images/front.jpg", alt: "Front of 80 Carlin Rd", caption: "Main exterior", category: "exterior" },
  { src: "/images/front-lawn.jpg", alt: "Front lawn, lamp post, and driveway", caption: "Alternate exterior", category: "exterior" },
  { src: "/images/living-room.jpg", alt: "Living room", caption: "Living room", category: "living" },
  { src: "/images/living-room-2.jpg", alt: "Living room seating", caption: "Living room", category: "living" },
  { src: "/images/kitchen.jpg", alt: "Updated kitchen with island", caption: "Kitchen", category: "kitchen" },
  { src: "/images/kitchen-island.jpg", alt: "Kitchen island and stainless appliances", caption: "Kitchen", category: "kitchen" },
  { src: "/images/kitchen-from-side.jpg", alt: "Kitchen looking toward dining and living areas", caption: "Dining area", category: "kitchen" },
  { src: "/images/bedroom-middle.jpg", alt: "Bedroom", caption: "Bedroom", category: "bedroom" },
  { src: "/images/bedroom-back-left.jpg", alt: "Bedroom", caption: "Bedroom", category: "bedroom" },
  { src: "/images/bedroom-back-right.jpg", alt: "Bedroom", caption: "Bedroom", category: "bedroom" },
  { src: "/images/hallway.jpg", alt: "Bedroom hallway", caption: "Hallway", category: "bedroom" },
  { src: "/images/bathroom.jpg", alt: "Full bathroom with tub and vanity", caption: "Full bathroom", category: "bath" },
  { src: "/images/bathroom-2.jpg", alt: "Full bathroom vanity and tub", caption: "Full bathroom", category: "bath" },
  { src: "/images/bathroom-3.jpg", alt: "Full bathroom detail", caption: "Full bathroom", category: "bath" },
  { src: "/images/basement-bathroom.jpg", alt: "Half bathroom", caption: "Half bathroom", category: "bath" },
  { src: "/images/stairway.jpg", alt: "Stairway", caption: "Stairway", category: "lower" },
  { src: "/images/tile.jpg", alt: "Finished lower-level living space", caption: "Lower-level space", category: "lower" },
  { src: "/images/basement.jpg", alt: "Lower-level room", caption: "Lower-level space", category: "lower" },
  { src: "/images/basement-2.jpg", alt: "Lower-level flexible space", caption: "Lower-level space", category: "lower" },
  { src: "/images/basement-3.jpg", alt: "Lower-level area", caption: "Lower-level space", category: "lower" },
  { src: "/images/laundry.jpg", alt: "Laundry area", caption: "Laundry", category: "lower" },
  { src: "/images/laundry-2.jpg", alt: "Laundry area storage", caption: "Laundry", category: "lower" },
  { src: "/images/backyard.jpg", alt: "Backyard lawn and shed", caption: "Backyard", category: "yard" },
  { src: "/images/backyard-2.jpg", alt: "Backyard", caption: "Rear exterior", category: "yard" },
  { src: "/images/backyard-3.jpg", alt: "Side and rear yard", caption: "Side yard", category: "yard" },
  { src: "/images/shed.jpg", alt: "Outdoor storage shed", caption: "Shed", category: "yard" },
  { src: "/images/generac.jpg", alt: "26 kW Generac standby generator", caption: "Generac", category: "power" },
  { src: "/images/generac-2.jpg", alt: "Generac generator installation", caption: "Generac", category: "power" },
  { src: "/images/electrical-panel.jpg", alt: "Updated electrical panel and transfer switch", caption: "Electrical panel", category: "power" },
];
