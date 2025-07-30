export interface Tour {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  price: number;
  location: string;
  groupSize: string;
  featured: boolean;
  itinerary: string[];
  included: string[];
  excluded: string[];
  faqs: { question: string; answer: string; }[];
}

export const tours: Tour[] = [
  {
    id: "kerala-backwaters",
    title: "Kerala Backwaters Experience",
    description: "Cruise through the serene backwaters of Kerala, stay in traditional houseboats, and experience the tranquil beauty of God's Own Country.",
    image: import.meta.env.DEV ? "/src/assets/kerala-backwaters.jpg" : "/assets/kerala-backwaters.jpg",
    duration: "5 Days, 4 Nights",
    price: 25000,
    location: "Kerala",
    groupSize: "2-8 People",
    featured: true,
    itinerary: [
      "Day 1: Arrival in Kochi, transfer to Alleppey, houseboat check-in",
      "Day 2: Full day backwater cruise, village visits",
      "Day 3: Kumarakom bird sanctuary, traditional fishing experience",
      "Day 4: Munnar tea gardens, spice plantation tour",
      "Day 5: Departure from Kochi"
    ],
    included: [
      "Houseboat accommodation",
      "All meals during houseboat stay",
      "Professional guide",
      "Transportation",
      "Entry fees to attractions"
    ],
    excluded: [
      "Flight tickets",
      "Personal expenses",
      "Tips and gratuities",
      "Travel insurance"
    ],
    faqs: [
      {
        question: "What is the best time to visit Kerala backwaters?",
        answer: "October to March is the ideal time with pleasant weather and clear skies."
      },
      {
        question: "Are houseboats safe?",
        answer: "Yes, all our houseboats are certified and equipped with safety equipment."
      }
    ]
  },
  {
    id: "rajasthan-heritage",
    title: "Rajasthan Royal Heritage",
    description: "Explore the majestic palaces, forts, and desert landscapes of Rajasthan. Experience royal hospitality and rich cultural heritage.",
    image: import.meta.env.DEV ? "/src/assets/rajasthan-desert.jpg" : "/assets/rajasthan-desert.jpg",
    duration: "8 Days, 7 Nights",
    price: 45000,
    location: "Rajasthan",
    groupSize: "4-12 People",
    featured: true,
    itinerary: [
      "Day 1: Arrival in Jaipur, Pink City tour",
      "Day 2: Amber Fort, City Palace, Jantar Mantar",
      "Day 3: Jaipur to Jodhpur, Mehrangarh Fort",
      "Day 4: Jodhpur to Jaisalmer, Golden Fort",
      "Day 5: Desert safari, camel ride, camp stay",
      "Day 6: Jaisalmer to Udaipur, City of Lakes",
      "Day 7: Lake Pichola, City Palace Udaipur",
      "Day 8: Departure"
    ],
    included: [
      "Palace hotel stays",
      "Desert camp experience",
      "All transfers",
      "Professional guide",
      "Camel safari",
      "Cultural shows"
    ],
    excluded: [
      "International flights",
      "Alcoholic beverages",
      "Personal shopping",
      "Tips to guide and driver"
    ],
    faqs: [
      {
        question: "What should I pack for the desert?",
        answer: "Light cotton clothes for day, warm clothes for night, sunscreen, and comfortable walking shoes."
      },
      {
        question: "Is the camel ride suitable for all ages?",
        answer: "Yes, but please inform us of any health conditions beforehand."
      }
    ]
  },
  {
    id: "leh-ladakh-adventure",
    title: "Leh-Ladakh Bike Adventure",
    description: "Epic motorcycle journey through the highest motorable roads in the world. Experience breathtaking landscapes and Buddhist culture.",
    image: import.meta.env.DEV ? "/src/assets/ladakh-mountains.jpg" : "/assets/ladakh-mountains.jpg",
    duration: "10 Days, 9 Nights",
    price: 65000,
    location: "Ladakh",
    groupSize: "6-15 People",
    featured: true,
    itinerary: [
      "Day 1: Fly to Leh, acclimatization day",
      "Day 2: Local Leh sightseeing, bike orientation",
      "Day 3: Leh to Nubra Valley via Khardung La",
      "Day 4: Nubra Valley exploration, camel safari",
      "Day 5: Nubra to Pangong Tso",
      "Day 6: Pangong Tso to Leh",
      "Day 7: Leh to Sarchu",
      "Day 8: Sarchu to Manali",
      "Day 9: Manali local sightseeing",
      "Day 10: Departure"
    ],
    included: [
      "Royal Enfield motorcycle",
      "Fuel for the entire trip",
      "Accommodation",
      "All permits",
      "Support vehicle",
      "Mechanical support"
    ],
    excluded: [
      "Flights to/from Leh",
      "Personal riding gear",
      "Alcoholic drinks",
      "Personal expenses"
    ],
    faqs: [
      {
        question: "Do I need riding experience?",
        answer: "Yes, basic motorcycle riding experience is mandatory. We conduct a riding test before the trip."
      },
      {
        question: "What about altitude sickness?",
        answer: "We include proper acclimatization days and carry medical supplies."
      }
    ]
  },
  {
    id: "golden-triangle",
    title: "Golden Triangle Classic",
    description: "Discover India's most famous circuit covering Delhi, Agra, and Jaipur. Perfect introduction to India's rich history and culture.",
    image: import.meta.env.DEV ? "/src/assets/taj-mahal.jpg" : "/assets/taj-mahal.jpg",
    duration: "6 Days, 5 Nights",
    price: 30000,
    location: "Delhi, Agra, Jaipur",
    groupSize: "2-20 People",
    featured: false,
    itinerary: [
      "Day 1: Arrival in Delhi, Old and New Delhi tour",
      "Day 2: Delhi to Agra, Taj Mahal sunset visit",
      "Day 3: Agra Fort, drive to Jaipur via Fatehpur Sikri",
      "Day 4: Amber Fort, City Palace, Hawa Mahal",
      "Day 5: Jaipur local markets, drive to Delhi",
      "Day 6: Departure"
    ],
    included: [
      "4-star hotel accommodation",
      "Private air-conditioned car",
      "Professional guide",
      "All entry fees",
      "Daily breakfast"
    ],
    excluded: [
      "Lunch and dinner",
      "Domestic flights",
      "Camera fees at monuments",
      "Personal expenses"
    ],
    faqs: [
      {
        question: "Is this tour suitable for families?",
        answer: "Absolutely! This is our most family-friendly tour with comfortable accommodations."
      },
      {
        question: "When is the best time to visit?",
        answer: "October to March offers the most pleasant weather for sightseeing."
      }
    ]
  },
  {
    id: "goa-beaches",
    title: "Goa Beach Paradise",
    description: "Relax on pristine beaches, enjoy water sports, explore Portuguese heritage, and experience Goa's vibrant nightlife.",
    image: import.meta.env.DEV ? "/src/assets/goa-beach.jpg" : "/assets/goa-beach.jpg",
    duration: "4 Days, 3 Nights",
    price: 18000,
    location: "Goa",
    groupSize: "2-10 People",
    featured: false,
    itinerary: [
      "Day 1: Arrival, North Goa beaches - Baga, Calangute",
      "Day 2: Water sports, Anjuna flea market",
      "Day 3: South Goa - Palolem, Agonda beaches",
      "Day 4: Old Goa churches, spice plantation, departure"
    ],
    included: [
      "Beach resort accommodation",
      "Airport transfers",
      "Water sports activities",
      "Guided tours",
      "Welcome drink"
    ],
    excluded: [
      "Meals (except breakfast)",
      "Alcoholic beverages",
      "Personal expenses",
      "Additional water sports"
    ],
    faqs: [
      {
        question: "Are water sports safe?",
        answer: "Yes, all water sports are conducted with certified operators and safety equipment."
      },
      {
        question: "What's the nightlife like?",
        answer: "Goa offers everything from beach shacks to upscale clubs, suitable for all preferences."
      }
    ]
  },
  {
    id: "kashmir-valley",
    title: "Kashmir Valley Beauty",
    description: "Experience the paradise on earth with Dal Lake, Mughal gardens, and snow-capped mountains. Perfect for honeymooners.",
    image: import.meta.env.DEV ? "/src/assets/hero-kashmir.jpg" : "/assets/hero-kashmir.jpg",
    duration: "7 Days, 6 Nights",
    price: 40000,
    location: "Kashmir",
    groupSize: "2-8 People",
    featured: false,
    itinerary: [
      "Day 1: Arrival Srinagar, Dal Lake houseboat",
      "Day 2: Mughal Gardens, Shankaracharya Temple",
      "Day 3: Gulmarg, Gondola ride",
      "Day 4: Pahalgam, Betaab Valley",
      "Day 5: Sonamarg, Thajiwas Glacier",
      "Day 6: Local markets, handicraft shopping",
      "Day 7: Departure"
    ],
    included: [
      "Houseboat stay on Dal Lake",
      "Hotel accommodations",
      "All transfers",
      "Shikara rides",
      "Professional guide"
    ],
    excluded: [
      "Flights",
      "Gondola ride fees",
      "Personal expenses",
      "Tips"
    ],
    faqs: [
      {
        question: "Is Kashmir safe for tourists?",
        answer: "Yes, tourist areas are well-protected and safe. We monitor the situation continuously."
      },
      {
        question: "What's the weather like?",
        answer: "Kashmir has pleasant summers and cold winters. Best time to visit is April to October."
      }
    ]
  }
];