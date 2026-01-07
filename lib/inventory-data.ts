export type Vehicle = {
  id: string
  slug: string
  make: string
  model: string
  year: number
  price: number
  mileage: number
  transmission: string
  fuelType: string
  image: string
  images: string[]
  drivetrain: string
  color: string
  vin: string
  stockNumber: string
  description: string
  features: string[]
}

export const vehicles: Vehicle[] = [
  {
    id: "1",
    slug: "2012-honda-pilot-burgundy",
    make: "Honda",
    model: "Pilot",
    year: 2012,
    price: 6900,
    mileage: 150000,
    transmission: "Automatic",
    fuelType: "Gasoline",
    image: "/images/1.jpg",
    images: ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg", "/images/4.jpg"],
    drivetrain: "FWD",
    color: "Burgundy",
    vin: "N/A",
    stockNumber: "MTR-001",
    description:
      "Excellent condition inside and out. Runs smooth, well-maintained, clean title, and ready to drive. Message me if interested!",
    features: [
      "Smooth-running V6 engine",
      "Automatic transmission",
      "Cold A/C and strong heater",
      "Spacious 3-row seating",
      "Power windows and locks",
      "Clean interior, non-smoker",
    ],
  },

  {
    id: "3",
    slug: "2010-honda-accord-crosstour-ex-l-white",
    make: "Honda",
    model: "Accord Crosstour EX-L",
    year: 2010,
    price: 6710,
    mileage: 145000,
    transmission: "Automatic",
    fuelType: "Gasoline",
    image: "/images/9.jpg",
    images: ["/images/9.jpg", "/images/10.jpg", "/images/11.jpg", "/images/12.jpg"],
    drivetrain: "FWD",
    color: "White",
    vin: "N/A",
    stockNumber: "MTR-003",
    description:
      "Excellent condition inside and out. Runs smooth, well-maintained, clean title, and ready to drive. Message me if interested!",
    features: [
      "EX-L trim with leather interior",
      "Sunroof",
      "Power seats",
      "Premium audio system",
      "Spacious hatch-style cargo area",
      "Cold A/C and strong heater",
    ],
  },
  {
    id: "4",
    slug: "2009-honda-accord-ex-gray-2",
    make: "Honda",
    model: "Accord EX",
    year: 2009,
    price: 6880,
    mileage: 131000,
    transmission: "Automatic",
    fuelType: "Gasoline",
    image: "/images/13.jpg",
    images: ["/images/13.jpg", "/images/14.jpg", "/images/15.jpg", "/images/16.jpg"],
    drivetrain: "FWD",
    color: "Gray",
    vin: "N/A",
    stockNumber: "MTR-004",
    description:
      "Excellent condition inside and out. Runs smooth, well-maintained, clean title, and ready to drive. Message me if interested!",
    features: [
      "Fuel-efficient 4-cylinder engine",
      "Automatic transmission",
      "Power windows and locks",
      "Comfortable seating for five",
      "Cold A/C and strong heater",
      "Clean title and ready to drive",
    ],
  },
  {
    id: "5",
    slug: "2021-kia-forte-63000-miles",
    make: "Kia",
    model: "Forte",
    year: 2021,
    price: 13000,
    mileage: 63000,
    transmission: "Automatic",
    fuelType: "Gasoline",
    image: "/images/17.jpg",
    images: ["/images/17.jpg", "/images/18.jpg", "/images/19.jpg", "/images/20.jpg"],
    drivetrain: "FWD",
    color: "White",
    vin: "N/A",
    stockNumber: "MTR-005",
    description:
      "Sporty, fuel-efficient, and in excellent condition. This 2021 Kia Forte has just 63,000 original miles and has been very well maintained. It runs perfectly, comes with a clean title, and is ready for its next owner.",
    features: [
      "2.0L 4-cylinder engine – great fuel economy",
      "Automatic transmission",
      "Apple CarPlay & Android Auto",
      "Bluetooth connectivity",
      "Backup camera",
      "Cold A/C and great heater",
      "Power windows, locks, and mirrors",
      "Cruise control",
      "Clean interior, non-smoker vehicle",
      "New tires and recent oil change",
      "CarFax report available in photos",
    ],
  },
  {
    id: "6",
    slug: "2022-audi-e-tron-gt-quattro-premium-plus",
    make: "Audi",
    model: "e-tron GT quattro Premium Plus",
    year: 2022,
    price: 75000,
    mileage: 27352,
    transmission: "Automatic",
    fuelType: "Electric",
    image: "/images/21.png",
    images: ["/images/21.png", "/images/22.png", "/images/23.png", "/images/24.png"],
    drivetrain: "AWD",
    color: "Dark Grey",
    vin: "WAUCJBFW1N7010484",
    stockNumber: "MTR-006",
    description:
      "Premium electric luxury sports sedan in excellent condition. This 2022 Audi e-tron GT quattro Premium Plus features a stunning dark grey exterior with red leather interior, panoramic roof, and all the latest technology. AutoGrade 4.3 rating with clean AutoCheck report.",
    features: [
      "Premium Plus trim with leather interior",
      "Panoramic roof",
      "Plug-In Electric Fast Charge System",
      "Navigation System",
      "Back-up Camera",
      "Blind Spot Monitor",
      "Cross-Traffic Alert",
      "Heated Front Seats",
      "Power Driver & Passenger Seats",
      "Seat Memory",
      "Multi-Zone Air Conditioning",
      "Rear Air Conditioning",
      "Keyless Start",
      "Smart Device Integration",
      "Satellite Radio",
      "WiFi Hotspot",
      "Rain Sensing Wipers",
      "Tire Pressure Monitor",
      "Woodgrain Interior Trim",
      "Premium Synthetic Seats",
    ],
  },
  {
    id: "7",
    slug: "2021-honda-hr-v-lx",
    make: "Honda",
    model: "HR-V LX",
    year: 2021,
    price: 18500,
    mileage: 47506,
    transmission: "CVT",
    fuelType: "Gasoline",
    image: "/images/25.png",
    images: ["/images/25.png", "/images/26.png", "/images/27.png"],
    drivetrain: "FWD",
    color: "Silver/Gray",
    vin: "3CZRU5H34MM713908",
    stockNumber: "MTR-007",
    description:
      "Reliable and practical compact SUV in great condition. This 2021 Honda HR-V LX features a fuel-efficient 4-cylinder engine, CVT transmission, and spacious interior. Perfect for daily commuting and weekend adventures.",
    features: [
      "Fuel-efficient 4-Cylinder engine",
      "CVT transmission",
      "Front Wheel Drive",
      "Spacious cargo area",
      "Power windows and locks",
      "Cold A/C and strong heater",
      "Clean interior",
      "Well-maintained",
      "Ready to drive",
    ],
  },
  {
    id: "8",
    slug: "2014-dodge-grand-caravan-66000-miles",
    make: "Dodge",
    model: "Grand Caravan",
    year: 2014,
    price: 6000,
    mileage: 66000,
    transmission: "Automatic",
    fuelType: "Gasoline",
    image: "/images/28.jpg",
    images: ["/images/28.jpg", "/images/29.jpg", "/images/30.jpg", "/images/31.jpg"],
    drivetrain: "FWD",
    color: "Dark Blue",
    vin: "N/A",
    stockNumber: "MTR-008",
    description:
      "Reliable, spacious, and in great condition! This 2014 Dodge Grand Caravan has only 66,000 original miles and has been well maintained. It runs smoothly, has a clean title, and is ready for its next owner. Perfect for families, road trips, or everyday driving. Don't miss out on this dependable minivan at a great price!",
    features: [
      "3.6L V6 engine",
      "Automatic transmission",
      "Stow 'n Go seating – seats fold flat into the floor",
      "Cold A/C, rear air conditioning",
      "Power windows, locks, and mirrors",
      "Cruise control",
      "Clean interior, non-smoker vehicle",
      "Recent oil change and maintenance done",
      "CarFax report attached in the pictures",
    ],
  },
]

export const vehiclesBySlug = vehicles.reduce<Record<string, Vehicle>>((map, vehicle) => {
  map[vehicle.slug] = vehicle
  return map
}, {})



