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
    mileage: 0,
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
    id: "2",
    slug: "2009-honda-accord-ex-gray-1",
    make: "Honda",
    model: "Accord EX",
    year: 2009,
    price: 6880,
    mileage: 0,
    transmission: "Automatic",
    fuelType: "Gasoline",
    image: "/images/5.jpg",
    images: ["/images/5.jpg", "/images/6.jpg", "/images/7.jpg", "/images/8.jpg"],
    drivetrain: "FWD",
    color: "Gray",
    vin: "N/A",
    stockNumber: "MTR-002",
    description:
      "Excellent condition inside and out. Runs smooth, well-maintained, clean title, and ready to drive. Message me if interested!",
    features: [
      "Reliable 4-cylinder engine",
      "Automatic transmission",
      "Power windows, locks, and mirrors",
      "Comfortable cloth interior",
      "Cold A/C and strong heater",
      "Great daily commuter",
    ],
  },
  {
    id: "3",
    slug: "2010-honda-accord-crosstour-ex-l-white",
    make: "Honda",
    model: "Accord Crosstour EX-L",
    year: 2010,
    price: 6710,
    mileage: 0,
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
    mileage: 0,
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
]

export const vehiclesBySlug = vehicles.reduce<Record<string, Vehicle>>((map, vehicle) => {
  map[vehicle.slug] = vehicle
  return map
}, {})


