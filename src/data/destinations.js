// Expanded destination data – country, region/state, transport (bus), rating, price, availability
export const destinations = [
  {
    id: 1,
    name: "Bali",
    country: "Indonesia",
    region: "Bali Province",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    rating: 4.8,
    reviews: 12450,
    startingPrice: 899,
    currency: "USD",
    packagesAvailable: 18,
    bestTime: "Apr - Oct",
    tags: ["Beach", "Culture", "Adventure", "Relax"],
    description: "Tropical paradise with stunning beaches, ancient temples, rice terraces and vibrant nightlife.",
    highlights: ["Ubud Rice Terraces", "Tanah Lot Temple", "Seminyak Beach", "Mount Batur Sunrise"],
    transport: {
      airport: "Ngurah Rai International (DPS)",
      bus: "Perama & Trans Sarbagita buses connect major towns. Airport shuttle buses available 24/7.",
      local: "Grab, Gojek, private driver, scooter rental",
      averageBusFare: "$2–8 per ride"
    }
  },
  {
    id: 2,
    name: "Tokyo",
    country: "Japan",
    region: "Kanto Region",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
    rating: 4.9,
    reviews: 18720,
    startingPrice: 1299,
    currency: "USD",
    packagesAvailable: 24,
    bestTime: "Mar - May, Sep - Nov",
    tags: ["City", "Food", "Culture", "Shopping"],
    description: "Futuristic metropolis blending ancient temples, cutting-edge technology and world-class cuisine.",
    highlights: ["Shibuya Crossing", "Senso-ji Temple", "Tokyo Skytree", "Tsukiji Outer Market"],
    transport: {
      airport: "Narita (NRT) / Haneda (HND)",
      bus: "Airport Limousine Bus & Keisei Skyliner. City buses cover all wards. Overnight highway buses to Osaka/Kyoto.",
      local: "JR Yamanote Line, Metro, Suica/Pasmo card",
      averageBusFare: "$2–15 (airport bus higher)"
    }
  },
  {
    id: 3,
    name: "Paris",
    country: "France",
    region: "Île-de-France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
    rating: 4.7,
    reviews: 22100,
    startingPrice: 1099,
    currency: "USD",
    packagesAvailable: 31,
    bestTime: "Apr - Jun, Sep - Oct",
    tags: ["Romance", "Culture", "Food", "Art"],
    description: "The City of Light – iconic landmarks, world-class museums, cafés and romantic streets.",
    highlights: ["Eiffel Tower", "Louvre Museum", "Notre-Dame", "Montmartre"],
    transport: {
      airport: "Charles de Gaulle (CDG) / Orly (ORY)",
      bus: "RoissyBus & OrlyBus airport shuttles. City buses (RATP) and Noctilien night buses cover the whole city.",
      local: "Metro, RER, Vélib bikes",
      averageBusFare: "$2–12"
    }
  },
  {
    id: 4,
    name: "Goa",
    country: "India",
    region: "Goa State",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80",
    rating: 4.5,
    reviews: 9800,
    startingPrice: 399,
    currency: "USD",
    packagesAvailable: 42,
    bestTime: "Nov - Mar",
    tags: ["Beach", "Party", "Budget", "Relax"],
    description: "Sun, sand, seafood and vibrant nightlife on India's beautiful west coast.",
    highlights: ["Calangute Beach", "Fort Aguada", "Dudhsagar Falls", "Old Goa Churches"],
    transport: {
      airport: "Goa International (GOI) – Dabolim / Manohar",
      bus: "Kadamba Transport (KTCL) state buses connect all beaches & towns. Private AC Volvo buses from Mumbai/Bangalore.",
      local: "Taxi, scooter rental, local buses",
      averageBusFare: "$0.5–5"
    }
  },
  {
    id: 5,
    name: "Santorini",
    country: "Greece",
    region: "South Aegean",
    image: "https://images.unsplash.com/photo-1570077186671-e1098ede29e7?w=800&q=80",
    rating: 4.9,
    reviews: 15430,
    startingPrice: 1199,
    currency: "USD",
    packagesAvailable: 14,
    bestTime: "May - Oct",
    tags: ["Romance", "Beach", "Luxury", "Views"],
    description: "Iconic white-washed buildings, blue-domed churches and the most famous sunsets in the world.",
    highlights: ["Oia Sunset", "Fira Town", "Red Beach", "Ancient Akrotiri"],
    transport: {
      airport: "Santorini (JTR)",
      bus: "KTEL Santorini buses link airport, Fira, Oia, Perissa and all major beaches. Frequent in summer.",
      local: "ATV/scooter rental, taxi, boat transfers",
      averageBusFare: "$2–6"
    }
  },
  {
    id: 6,
    name: "Dubai",
    country: "United Arab Emirates",
    region: "Emirate of Dubai",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    rating: 4.6,
    reviews: 14320,
    startingPrice: 999,
    currency: "USD",
    packagesAvailable: 27,
    bestTime: "Nov - Mar",
    tags: ["Luxury", "Shopping", "Adventure", "City"],
    description: "Ultra-modern city of skyscrapers, desert adventures and world-class shopping malls.",
    highlights: ["Burj Khalifa", "Dubai Mall", "Desert Safari", "Palm Jumeirah"],
    transport: {
      airport: "Dubai International (DXB)",
      bus: "RTA public buses cover the entire emirate. Airport buses and intercity buses to Abu Dhabi & Sharjah.",
      local: "Metro, Tram, Taxi, Careem",
      averageBusFare: "$1–5"
    }
  },
  {
    id: 7,
    name: "Maldives",
    country: "Maldives",
    region: "North Male Atoll",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
    rating: 4.9,
    reviews: 11200,
    startingPrice: 1899,
    currency: "USD",
    packagesAvailable: 9,
    bestTime: "Nov - Apr",
    tags: ["Luxury", "Beach", "Honeymoon", "Relax"],
    description: "Overwater villas, crystal-clear lagoons and the ultimate tropical escape.",
    highlights: ["Overwater Bungalows", "Snorkeling Reefs", "Bioluminescent Beach", "Island Hopping"],
    transport: {
      airport: "Velana International (MLE)",
      bus: "Limited public buses on Malé island. Most transfers are by speedboat or seaplane.",
      local: "Speedboat, seaplane, dhoni boats",
      averageBusFare: "N/A (boat transfers $20–80)"
    }
  },
  {
    id: 8,
    name: "New York",
    country: "United States",
    region: "New York State",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80",
    rating: 4.7,
    reviews: 25600,
    startingPrice: 1099,
    currency: "USD",
    packagesAvailable: 35,
    bestTime: "Apr - Jun, Sep - Nov",
    tags: ["City", "Shopping", "Food", "Culture"],
    description: "The city that never sleeps – iconic skyline, Broadway, world-class museums and endless energy.",
    highlights: ["Times Square", "Central Park", "Statue of Liberty", "Brooklyn Bridge"],
    transport: {
      airport: "JFK / Newark (EWR) / LaGuardia (LGA)",
      bus: "MTA city buses + NYC Airporter / Express buses from airports. Greyhound & Megabus for intercity.",
      local: "Subway, Citi Bike, Yellow Taxi, Uber",
      averageBusFare: "$2.90 (local) / $15–30 airport"
    }
  },
  {
    id: 9,
    name: "Jaipur",
    country: "India",
    region: "Rajasthan",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80",
    rating: 4.6,
    reviews: 8700,
    startingPrice: 349,
    currency: "USD",
    packagesAvailable: 28,
    bestTime: "Oct - Mar",
    tags: ["Culture", "Heritage", "Budget", "Photography"],
    description: "The Pink City – majestic forts, vibrant bazaars and rich Rajasthani culture.",
    highlights: ["Amber Fort", "Hawa Mahal", "City Palace", "Jantar Mantar"],
    transport: {
      airport: "Jaipur International (JAI)",
      bus: "RSRTC state buses & private Volvo AC buses connect to Delhi, Agra, Udaipur. Local city buses available.",
      local: "Auto-rickshaw, Uber, metro (partial)",
      averageBusFare: "$0.5–8"
    }
  },
  {
    id: 10,
    name: "Swiss Alps",
    country: "Switzerland",
    region: "Bernese Oberland",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80",
    rating: 4.9,
    reviews: 9800,
    startingPrice: 1599,
    currency: "USD",
    packagesAvailable: 11,
    bestTime: "Jun - Sep (summer), Dec - Mar (ski)",
    tags: ["Nature", "Adventure", "Luxury", "Scenic"],
    description: "Breathtaking alpine peaks, crystal lakes, charming villages and world-famous scenic trains.",
    highlights: ["Jungfraujoch", "Interlaken", "Grindelwald", "Lake Lucerne"],
    transport: {
      airport: "Zurich (ZRH) / Geneva (GVA)",
      bus: "PostBus network reaches almost every village. Airport shuttles and scenic bus routes available.",
      local: "Swiss Travel Pass, trains, cable cars",
      averageBusFare: "$5–25"
    }
  },
  {
    id: 11,
    name: "Cape Town",
    country: "South Africa",
    region: "Western Cape",
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&q=80",
    rating: 4.7,
    reviews: 7600,
    startingPrice: 799,
    currency: "USD",
    packagesAvailable: 16,
    bestTime: "Nov - Mar",
    tags: ["Nature", "Adventure", "Beach", "Wine"],
    description: "Dramatic mountains, pristine beaches, vibrant culture and world-class wine lands.",
    highlights: ["Table Mountain", "Cape of Good Hope", "V&A Waterfront", "Stellenbosch"],
    transport: {
      airport: "Cape Town International (CPT)",
      bus: "MyCiTi bus system + airport shuttles. Intercity buses (Greyhound, Intercape) to other cities.",
      local: "Uber, taxis, hop-on hop-off buses",
      averageBusFare: "$1–10"
    }
  },
  {
    id: 12,
    name: "Bangkok",
    country: "Thailand",
    region: "Central Thailand",
    image: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=800&q=80",
    rating: 4.6,
    reviews: 19800,
    startingPrice: 599,
    currency: "USD",
    packagesAvailable: 38,
    bestTime: "Nov - Feb",
    tags: ["Food", "Culture", "Shopping", "Nightlife"],
    description: "Bustling capital full of ornate temples, floating markets, street food and vibrant nightlife.",
    highlights: ["Grand Palace", "Wat Arun", "Chatuchak Market", "Chao Phraya River"],
    transport: {
      airport: "Suvarnabhumi (BKK) / Don Mueang (DMK)",
      bus: "Airport Rail Link + public buses. Comfortable VIP buses to Chiang Mai, Phuket, Pattaya.",
      local: "BTS Skytrain, MRT, river boats, Grab",
      averageBusFare: "$0.5–8"
    }
  }
];

export const popularSearches = [
  "Bali", "Tokyo", "Paris", "Goa", "Santorini", "Dubai",
  "Maldives", "New York", "Jaipur", "Swiss Alps", "Cape Town", "Bangkok",
  "India", "Japan", "France", "Thailand", "Greece"
];
