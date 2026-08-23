export type PhotoCategory =
  | "exterior"
  | "living"
  | "kitchen"
  | "bedroom"
  | "bath"
  | "lower"
  | "power"
  | "yard"
  | "sunroom";

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
    "Explore 80 Carlin Rd in Conklin, NY — a 3-bedroom, 1.5-bath home with 1,808 sq. ft., an attached 1-stall garage, Nest thermostats and zone sensors, Wi-Fi 6, wired Ethernet, PIN side-door entry, and a 26 kW Generac standby generator.",
  socialTitle: "80 Carlin Rd | Conklin, NY",
  socialDescription:
    "3-bedroom Conklin rental with an attached 1-stall garage, Nest zone comfort, Wi-Fi 6 and wired Ethernet, electronic PIN side-door entry, and a 26 kW Generac whole-home standby generator.",
  headline: "80 Carlin Rd — Comfortable 3-Bedroom Home with Whole-Home Backup Power",
  heroSubheadline:
    "3 Bedrooms • 1.5 Bathrooms • 1,808 Sq. Ft. • Susquehanna Valley Central School District",
  shortDescription:
    "Spacious 3-bedroom, 1.5-bath single-family home offering approximately 1,808 sq. ft. of living space in Conklin, NY. The property includes an attached 1-stall garage, Nest thermostats with zone sensors on each floor, electronic PIN side-door entry, Wi-Fi 6 and high-speed wired Ethernet, an updated sunroom, upgraded electrical service, and a recently installed 26 kW natural-gas Generac standby generator with automatic transfer switch.",
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
  garage: "Attached 1-stall garage",
  parkingSpaces: "1 garage stall",
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
  { label: "Garage", value: "Attached 1-stall" },
  { label: "Schools", value: "Susquehanna Valley" },
  { label: "Backup power", value: "26 kW Generac" },
  { label: "Sunroom", value: "Updated sunroom" },
  { label: "Comfort", value: "Nest + zone sensors" },
  { label: "Access", value: "PIN side-door entry" },
  { label: "Network", value: "Wi-Fi 6 + Ethernet" },
];

export const highlightList = [
  "3 bedrooms",
  "1 full bathroom + 1 half bathroom",
  "Approximately 1,808 sq. ft.",
  "Single-family home",
  "Attached 1-stall garage",
  "Approximately 0.39-acre property",
  "Susquehanna Valley Central School District",
  "26 kW Generac standby generator",
  "Natural-gas generator",
  "Automatic transfer switch",
  "Updated electrical service",
  "Updated breaker panel",
  "Updated sunroom",
  "Individual Nest thermostats",
  "Zone sensors on each floor",
  "Electronic PIN side-door entry",
  "Wi-Fi 6",
  "High-speed wired Ethernet",
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
  {
    title: "Attached 1-stall garage",
    body: "An attached one-stall garage for a car, bikes, or winter storage — off the street and out of the weather.",
  },
  {
    title: "Nest thermostats + zone sensors",
    body: "Individual Nest thermostats with zone sensors on each floor, so comfort is set by level instead of one house-wide guess.",
  },
  {
    title: "Electronic PIN side-door entry",
    body: "Keyless PIN entry at the side door — no hiding a spare key, no waiting if someone is running late.",
  },
  {
    title: "Wi-Fi 6 and wired Ethernet",
    body: "Wi-Fi 6 throughout plus high-speed Ethernet drops for offices, TVs, and anything that should not share the air.",
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

export const connectedHome = [
  {
    title: "Nest, floor by floor",
    body: "Individual Nest thermostats with zone sensors on each floor. Heat and cool the level you are using, not the whole house at once.",
  },
  {
    title: "PIN side-door entry",
    body: "Electronic keypad at the side door. Issue a code for showings, guests, or a late night — no spare key under the mat.",
  },
  {
    title: "Wi-Fi 6 + wired Ethernet",
    body: "Modern wireless for phones and laptops, plus high-speed Ethernet for desks, consoles, and anything that should stay locked on.",
  },
];

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
  "Gross household income must be at least 3× the monthly rent ($7,500/month at $2,500 rent)",
  "Credit score must be 650 or higher",
  "Renters insurance is required for the duration of the lease",
  "Security deposit, pet terms, maintenance responsibilities, and all other rental conditions will be detailed in the signed lease agreement",
];

export const petPolicy =
  "Pets may be considered with owner approval and are subject to applicable lease and pet terms.";

export const qualifications = [
  {
    title: "3× income",
    body: "Gross household income must be at least three times the monthly rent — $7,500/month at $2,500 rent.",
  },
  {
    title: "650+ credit",
    body: "A credit score of 650 or higher is required for all adult applicants.",
  },
  {
    title: "Renters insurance",
    body: "An active renters insurance policy is required for the full term of the lease.",
  },
];

export type AreaCategory =
  | "parks"
  | "waterfalls"
  | "outdoors"
  | "sports"
  | "entertainment"
  | "culture"
  | "shopping"
  | "university"
  | "schools";

export const areaCategories: { id: "all" | AreaCategory; label: string; icon: string }[] = [
  { id: "all", label: "All", icon: "◆" },
  { id: "parks", label: "Parks", icon: "🌳" },
  { id: "waterfalls", label: "Waterfalls", icon: "💧" },
  { id: "outdoors", label: "Outdoors", icon: "🏞" },
  { id: "sports", label: "Sports", icon: "⚾" },
  { id: "entertainment", label: "Entertainment", icon: "🎭" },
  { id: "culture", label: "Culture", icon: "🏛" },
  { id: "shopping", label: "Shopping", icon: "🛍" },
  { id: "university", label: "University", icon: "🎓" },
  { id: "schools", label: "Schools", icon: "🏫" },
];

export const homeCoords = { lat: 42.0543255, lng: -75.8239855 };

export const areaPlaces: {
  name: string;
  category: AreaCategory;
  blurb: string;
  query: string;
  lat: number;
  lng: number;
}[] = [
  {
    name: "Otsiningo Park",
    category: "parks",
    blurb:
      "One of Greater Binghamton's major parks, with walking and biking paths, open green space, fishing, athletic fields, picnic areas, and seasonal events.",
    query: "Otsiningo Park, Binghamton, NY",
    lat: 42.1201267,
    lng: -75.9048827,
  },
  {
    name: "Recreation Park",
    category: "parks",
    blurb:
      "Binghamton's historic West Side park — the 1925 carousel, playgrounds, the old swimming pools, and summer concerts a short drive from Conklin.",
    query: "Recreation Park, Beethoven Street, Binghamton, NY",
    lat: 42.0993044,
    lng: -75.9337108,
  },
  {
    name: "Cheri Lindsey Park",
    category: "parks",
    blurb:
      "A North Side neighborhood park along the Chenango River with fields, a playground, and river access — close to Otsiningo.",
    query: "Cheri Lindsey Park, Binghamton, NY",
    lat: 42.1129937,
    lng: -75.9056368,
  },
  {
    name: "Aqua-Terra Wilderness Area",
    category: "parks",
    blurb:
      "466 acres of Broome County trails and a fishing pond in the Town of Binghamton — a quiet hike without leaving the county.",
    query: "Aqua-Terra Wilderness Area, Binghamton, NY",
    lat: 42.0316445,
    lng: -75.9386081,
  },
  {
    name: "Grippen Park",
    category: "parks",
    blurb:
      "Endicott riverfront park with a boat launch, playground, and open lawn along the Susquehanna.",
    query: "Grippen Park, Endicott, NY",
    lat: 42.0858656,
    lng: -76.0782459,
  },
  {
    name: "Chenango Valley State Park",
    category: "parks",
    blurb:
      "A New York State park north of Binghamton with a lake, camping, swimming, golf, and wooded trails — an easy day out from Conklin.",
    query: "Chenango Valley State Park, Chenango Forks, NY",
    lat: 42.2169359,
    lng: -75.8394833,
  },
  {
    name: "Nathaniel Cole Park",
    category: "parks",
    blurb:
      "A Broome County park in Colesville with a lake, beach, picnic shelters, and hiking — east of Conklin toward Harpursville.",
    query: "Nathaniel Cole Park, Harpursville, NY",
    lat: 42.1418021,
    lng: -75.7068563,
  },
  {
    name: "Greenwood Park",
    category: "parks",
    blurb:
      "Broome County park in Nanticoke with a lake, camping, and trails — a quieter weekend park west of the valley.",
    query: "Greenwood Park, Lisle, NY",
    lat: 42.2852125,
    lng: -76.0905722,
  },
  {
    name: "Finch Hollow Nature Center",
    category: "parks",
    blurb:
      "A small Broome County nature center and trail system in Johnson City — easy outdoor time for kids.",
    query: "Finch Hollow Nature Center, Johnson City, NY",
    lat: 42.1442524,
    lng: -75.9793121,
  },
  {
    name: "Cutler Botanic Garden",
    category: "parks",
    blurb:
      "Cornell Cooperative Extension's demonstration gardens on Front Street — a quiet walk through seasonal plantings.",
    query: "Cutler Botanic Garden, Binghamton, NY",
    lat: 42.1284519,
    lng: -75.9057694,
  },
  {
    name: "Wolfe Park Waterfall",
    category: "waterfalls",
    blurb:
      "A 10–12 ft cascade on the blue trail at Wolfe Park in the Town of Chenango — the closest photogenic waterfall to the house.",
    query: "Wolfe Park, Dorman Road, Chenango, NY",
    lat: 42.16183,
    lng: -75.91206,
  },
  {
    name: "IBM Glen Waterfall",
    category: "waterfalls",
    blurb:
      "A wooded glen off Robinson Hill Road in Endicott with stone bridges, old-growth trees, and a waterfall on Gray's Creek.",
    query: "IBM Glen, 1250 Robinson Hill Road, Endicott, NY",
    lat: 42.12955,
    lng: -75.99865,
  },
  {
    name: "Buttermilk Falls State Park",
    category: "waterfalls",
    blurb:
      "A classic Finger Lakes day trip to Ithaca — a wide cascade, gorge trails, and a swimming hole at the base of the falls.",
    query: "Buttermilk Falls State Park, Ithaca, NY",
    lat: 42.4063318,
    lng: -76.5119238,
  },
  {
    name: "Fillmore Glen State Park",
    category: "waterfalls",
    blurb:
      "A gorge park in Moravia with multiple waterfalls and the Cowsheds — a longer but worthwhile Southern Tier / Finger Lakes drive.",
    query: "Fillmore Glen State Park, Moravia, NY",
    lat: 42.6904485,
    lng: -76.386576,
  },
  {
    name: "Conklin Players Club",
    category: "outdoors",
    blurb:
      "An 18-hole public golf course right in Conklin — scenic Southern Tier golf close to home.",
    query: "Conklin Players Club, 1520 Conklin Road, Conklin, NY",
    lat: 42.023562,
    lng: -75.7995285,
  },
  {
    name: "Ross Park Zoo",
    category: "outdoors",
    blurb:
      "One of the nation's oldest zoos, part of Binghamton since 1875, with red pandas, African penguins, red wolves, and more. The Ross Park area also has additional recreation around it.",
    query: "Ross Park Zoo, Binghamton, NY",
    lat: 42.0745764,
    lng: -75.9081642,
  },
  {
    name: "Two Rivers Greenway",
    category: "outdoors",
    blurb:
      "The walking and biking path along the Chenango and Susquehanna through downtown Binghamton — a weeknight walk or ride.",
    query: "Two Rivers Greenway, Binghamton, NY",
    lat: 42.0980036,
    lng: -75.9154975,
  },
  {
    name: "En-Joie Golf Course",
    category: "outdoors",
    blurb:
      "A historic public course in Endicott, former home of the B.C. Open — another 18-hole option besides Conklin Players Club.",
    query: "En-Joie Golf Course, Endicott, NY",
    lat: 42.0879915,
    lng: -76.0835397,
  },
  {
    name: "Hawkins Pond",
    category: "outdoors",
    blurb:
      "A Broome County natural area in Windsor with a pond, woods, and quiet trails — fishing and a walk in the hills east of Conklin.",
    query: "Hawkins Pond, Windsor, NY",
    lat: 42.0047603,
    lng: -75.6509572,
  },
  {
    name: "Binghamton Rumble Ponies",
    category: "sports",
    blurb:
      "Double-A professional baseball affiliated with the New York Mets, at Mirabito Stadium in downtown Binghamton.",
    query: "Mirabito Stadium, Binghamton, NY",
    lat: 42.1030931,
    lng: -75.904792,
  },
  {
    name: "Visions Veterans Memorial Arena",
    category: "sports",
    blurb:
      "Downtown arena for Black Bears hockey, concerts, sporting events, family shows, and other regional entertainment.",
    query: "Visions Veterans Memorial Arena, Binghamton, NY",
    lat: 42.0957335,
    lng: -75.9131945,
  },
  {
    name: "Binghamton University Athletics",
    category: "sports",
    blurb:
      "NCAA Division I Bearcats basketball, baseball, lacrosse, soccer, and other collegiate sports on the Vestal campus.",
    query: "Binghamton University Events Center, Vestal, NY",
    lat: 42.0933917,
    lng: -75.9719273,
  },
  {
    name: "Broome County Forum Theatre",
    category: "entertainment",
    blurb:
      "Historic downtown theater for Broadway touring productions, concerts, opera, orchestral performances, and other live entertainment.",
    query: "The Forum Performing Arts Theater, Washington Street, Binghamton, NY",
    lat: 42.101527,
    lng: -75.9123602,
  },
  {
    name: "Anderson Center",
    category: "entertainment",
    blurb:
      "Binghamton University's Anderson Center hosts performances, lectures, and public programming on the Vestal campus.",
    query: "Anderson Center, Binghamton University, Vestal, NY",
    lat: 42.0898359,
    lng: -75.9684111,
  },
  {
    name: "Cider Mill Playhouse",
    category: "entertainment",
    blurb:
      "A long-running Endicott theater for plays and musicals — live local stage a short drive west.",
    query: "Cider Mill Playhouse, Endicott, NY",
    lat: 42.0983154,
    lng: -76.0665489,
  },
  {
    name: "Roberson Museum & Science Center",
    category: "culture",
    blurb:
      "Art, regional history, science exhibits, a historic mansion, rotating exhibitions, and the area's planetarium in downtown Binghamton.",
    query: "Roberson Museum and Science Center, Binghamton, NY",
    lat: 42.0937416,
    lng: -75.9185246,
  },
  {
    name: "Phelps Mansion Museum",
    category: "culture",
    blurb:
      "A preserved 1870 Gilded Age mansion in downtown Binghamton, with historic interiors, tours, and special events.",
    query: "Phelps Mansion Museum, Binghamton, NY",
    lat: 42.100712,
    lng: -75.905629,
  },
  {
    name: "Kopernik Observatory & Science Center",
    category: "culture",
    blurb:
      "Public astronomy programs, telescopes, STEM programming, and special events in Vestal.",
    query: "Kopernik Observatory & Science Center, Vestal, NY",
    lat: 42.0021034,
    lng: -76.033339,
  },
  {
    name: "Bundy Museum of History & Art",
    category: "culture",
    blurb:
      "The 1892 Bundy house on the West Side — local history, art exhibits, and the birthplace story of IBM's roots in Binghamton.",
    query: "Bundy Museum, Binghamton, NY",
    lat: 42.1016775,
    lng: -75.9278829,
  },
  {
    name: "Vestal Parkway",
    category: "shopping",
    blurb:
      "The main commercial corridor for stores, restaurants, and everyday services — Town Square, Parkway Plaza, and the Shoppes at Vestal.",
    query: "Town Square Mall, Vestal Parkway, Vestal, NY",
    lat: 42.0979424,
    lng: -76.0101298,
  },
  {
    name: "Wegmans",
    category: "shopping",
    blurb: "Everyday grocery run in Johnson City, a short drive from Conklin.",
    query: "Wegmans, Johnson City, NY",
    lat: 42.1229229,
    lng: -75.9731638,
  },
  {
    name: "Target",
    category: "shopping",
    blurb: "Target on Vestal Parkway for household, clothing, and everyday shopping.",
    query: "Target, Vestal Parkway, Vestal, NY",
    lat: 42.0938074,
    lng: -76.0016046,
  },
  {
    name: "Downtown Binghamton",
    category: "shopping",
    blurb:
      "Restaurants, businesses, and nightlife in the city center — a convenient night out from a Conklin home base.",
    query: "Downtown Binghamton, NY",
    lat: 42.0988,
    lng: -75.9125,
  },
  {
    name: "Oakdale Commons",
    category: "shopping",
    blurb:
      "The Johnson City mall and surrounding stores — another everyday shopping option besides Vestal Parkway.",
    query: "Oakdale Mall, Johnson City, NY",
    lat: 42.1289232,
    lng: -75.9742083,
  },
  {
    name: "Binghamton University",
    category: "university",
    blurb:
      "Main campus at 4400 Vestal Parkway East. NCAA Division I athletics, Anderson Center performances, lectures, cultural events, and a strong base of technology, research, healthcare, and professional employment.",
    query: "4400 Vestal Parkway East, Vestal, NY",
    lat: 42.0953444,
    lng: -75.9672052,
  },
  {
    name: "SUNY Broome",
    category: "university",
    blurb:
      "Broome Community College on Upper Front Street — two-year programs, workforce training, and a second campus in the valley.",
    query: "SUNY Broome, Binghamton, NY",
    lat: 42.1351797,
    lng: -75.9123768,
  },
  {
    name: "Susquehanna Valley Central School District",
    category: "schools",
    blurb:
      "80 Carlin Rd is in the Susquehanna Valley Central School District — the Sabers. The district covers Conklin and nearby towns, with elementary, middle, and high school in the local community.",
    query: "Susquehanna Valley Senior High School, 1040 Conklin Rd, Conklin, NY",
    lat: 42.0767433,
    lng: -75.823247,
  },
  {
    name: "Francis P. Donnelly Elementary School",
    category: "schools",
    blurb:
      "The Conklin elementary school (Pre-K–5) at 1168 Conklin Rd — the district's neighborhood elementary on this side of the valley.",
    query: "Francis P. Donnelly School, 1168 Conklin Rd, Conklin, NY",
    lat: 42.0611879,
    lng: -75.8101906,
  },
  {
    name: "Richard T. Stank Middle School",
    category: "schools",
    blurb:
      "Grades 6–8 at 1040 Conklin Rd in Conklin, on the same campus as the high school.",
    query: "Richard T. Stank Middle School, 1040 Conklin Rd, Conklin, NY",
    lat: 42.0772877,
    lng: -75.8239573,
  },
  {
    name: "Susquehanna Valley Senior High School",
    category: "schools",
    blurb:
      "Grades 9–12 at 1040 Conklin Rd in Conklin. The district high school for Sabers athletics, arts, and academics.",
    query: "Susquehanna Valley Senior High School, 1040 Conklin Rd, Conklin, NY",
    lat: 42.0767433,
    lng: -75.823247,
  },
  {
    name: "Brookside Elementary School",
    category: "schools",
    blurb:
      "The district's other elementary (Pre-K–5), at 3849 Saddlemire Rd in the Town of Binghamton.",
    query: "Brookside Elementary School, 3849 Saddlemire Rd, Binghamton, NY",
    lat: 42.0287232,
    lng: -75.8934459,
  },
];

export const outdoorLiving = [
  "Walking and biking trails",
  "Parks and green spaces",
  "Golf",
  "Fishing",
  "Hiking",
  "Picnic areas",
  "Seasonal recreation",
  "Nearby state and county parks",
  "Waterfalls and gorge walks",
];

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

/** Order must match the section order in app/page.tsx — the scrollspy reads this list. */
export const sections = [
  { id: "home", label: "Home" },
  { id: "story", label: "Property" },
  { id: "gallery", label: "Gallery" },
  { id: "spaces", label: "The Spaces" },
  { id: "features", label: "Features" },
  { id: "explore", label: "Explore the Area" },
  { id: "lease", label: "Lease Terms" },
  { id: "faq", label: "Qualifications" },
  { id: "tour", label: "Request a Showing" },
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
  { id: "sunroom", label: "Sunroom" },
  { id: "bedroom", label: "Bedrooms" },
  { id: "bath", label: "Baths" },
  { id: "lower", label: "Lower level" },
  { id: "power", label: "Power" },
  { id: "yard", label: "Yard" },
];

export const featuredPhotos = [
  "/images/front.jpg",
  "/images/kitchen.jpg",
  "/images/sunroom.jpg",
  "/images/living-room.jpg",
  "/images/generac.jpg",
];

export const faqs = [
  {
    q: "What is the monthly rent?",
    a: "The asking rent is $2,500 per month.",
  },
  {
    q: "How large is the home?",
    a: "Three bedrooms, 1 full bath and 1 half bath, and about 1,808 square feet on roughly 0.39 acres, plus an attached 1-stall garage.",
  },
  {
    q: "Is there a garage?",
    a: "Yes. The house has an attached 1-stall garage.",
  },
  {
    q: "Is there backup power?",
    a: "Yes. A recently installed 26 kW natural-gas Generac standby generator with automatic transfer switch and an updated electrical panel. It starts on its own during qualifying outages — no portable generator, no extension cords.",
  },
  {
    q: "How is heating and cooling controlled?",
    a: "Individual Nest thermostats with zone sensors on each floor, so each level can run on its own schedule.",
  },
  {
    q: "Is there keyless entry?",
    a: "Yes. The side door has electronic PIN entry — no spare key required.",
  },
  {
    q: "How is the internet set up?",
    a: "The house has Wi-Fi 6 plus high-speed wired Ethernet drops for desks, TVs, and anything that should stay on a cable.",
  },
  {
    q: "What school district is this?",
    a: "Susquehanna Valley Central School District (the Sabers). District schools include Francis P. Donnelly Elementary in Conklin, Brookside Elementary, Richard T. Stank Middle School, and Susquehanna Valley Senior High School — both the middle and high school are on Conklin Rd.",
  },
  {
    q: "What is nearby?",
    a: "A residential Conklin setting with easy access to Greater Binghamton — parks, nearby waterfalls, Ross Park Zoo, Conklin Players Club, downtown sports and theater, Vestal Parkway shopping, and Binghamton University.",
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
  {
    q: "What are the income and credit requirements?",
    a: "Gross household income must be at least 3× the monthly rent ($7,500/month at $2,500 rent). Credit score must be 650 or higher.",
  },
  {
    q: "Is renters insurance required?",
    a: "Yes. Renters insurance is required for the duration of the lease.",
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
  { src: "/images/sunroom.jpg", alt: "Updated sunroom with new flooring and wraparound windows", caption: "Sunroom", category: "sunroom" },
  { src: "/images/sunroom-2.jpg", alt: "Sunroom windows looking onto the backyard", caption: "Sunroom", category: "sunroom" },
  { src: "/images/sunroom-3.jpg", alt: "Sunroom corner with new Jeld-Wen windows and wood paneling", caption: "Sunroom", category: "sunroom" },
  { src: "/images/bedroom-middle.jpg", alt: "Bedroom", caption: "Bedroom", category: "bedroom" },
  { src: "/images/bedroom-back-left.jpg", alt: "Bedroom", caption: "Bedroom", category: "bedroom" },
  { src: "/images/bedroom-back-right.jpg", alt: "Bedroom", caption: "Bedroom", category: "bedroom" },
  { src: "/images/hallway.jpg", alt: "Bedroom hallway", caption: "Hallway", category: "bedroom" },
  { src: "/images/bathroom.jpg", alt: "Full bathroom with tub and vanity", caption: "Full bathroom", category: "bath" },
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
  { src: "/images/backyard-4.jpg", alt: "Backyard with lawn, hammock, and above-ground pool", caption: "Yard and pool", category: "yard" },
  { src: "/images/backyard-5.jpg", alt: "Storage shed and fenced backyard", caption: "Shed and lawn", category: "yard" },
  { src: "/images/backyard-6.jpg", alt: "Rear of the house showing the sunroom and yard", caption: "Rear and sunroom", category: "yard" },
  { src: "/images/shed.jpg", alt: "Outdoor storage shed", caption: "Shed", category: "yard" },
  { src: "/images/generac.jpg", alt: "26 kW Generac standby generator", caption: "Generac", category: "power" },
  { src: "/images/generac-2.jpg", alt: "Generac generator installation", caption: "Generac", category: "power" },
  { src: "/images/electrical-panel.jpg", alt: "Updated electrical panel and transfer switch", caption: "Electrical panel", category: "power" },
];
