import { notFound } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Gauge, Fuel, Cog, Phone, Mail } from "lucide-react"

// Real vehicle data (in a real app, this would come from a database)
const vehicles = {
  "1": {
    id: "1",
    make: "Honda",
    model: "Pilot",
    year: 2012,
    price: 6900,
    mileage: 0,
    transmission: "Automatic",
    fuelType: "Gasoline",
    drivetrain: "FWD",
    color: "Burgundy",
    vin: "N/A",
    stockNumber: "MTR-001",
    images: ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg", "/images/4.jpg"],
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
  "2": {
    id: "2",
    make: "Honda",
    model: "Accord EX",
    year: 2009,
    price: 6880,
    mileage: 0,
    transmission: "Automatic",
    fuelType: "Gasoline",
    drivetrain: "FWD",
    color: "Gray",
    vin: "N/A",
    stockNumber: "MTR-002",
    images: ["/images/5.jpg", "/images/6.jpg", "/images/7.jpg", "/images/8.jpg"],
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
  "3": {
    id: "3",
    make: "Honda",
    model: "Accord Crosstour EX-L",
    year: 2010,
    price: 6710,
    mileage: 0,
    transmission: "Automatic",
    fuelType: "Gasoline",
    drivetrain: "FWD",
    color: "White",
    vin: "N/A",
    stockNumber: "MTR-003",
    images: ["/images/9.jpg", "/images/10.jpg", "/images/11.jpg", "/images/12.jpg"],
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
  "4": {
    id: "4",
    make: "Honda",
    model: "Accord EX",
    year: 2009,
    price: 6880,
    mileage: 0,
    transmission: "Automatic",
    fuelType: "Gasoline",
    drivetrain: "FWD",
    color: "Gray",
    vin: "N/A",
    stockNumber: "MTR-004",
    images: ["/images/13.jpg", "/images/14.jpg", "/images/15.jpg", "/images/16.jpg"],
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
  "5": {
    id: "5",
    make: "Kia",
    model: "Forte",
    year: 2021,
    price: 13000,
    mileage: 63000,
    transmission: "Automatic",
    fuelType: "Gasoline",
    drivetrain: "FWD",
    color: "White",
    vin: "N/A",
    stockNumber: "MTR-005",
    images: ["/images/17.jpg", "/images/18.jpg", "/images/19.jpg", "/images/20.jpg"],
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
}

export default async function VehicleDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const vehicle = vehicles[id as keyof typeof vehicles]

  if (!vehicle) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
          <Button asChild variant="ghost" className="mb-6">
            <Link href="/inventory">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Inventory
            </Link>
          </Button>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Left Column - Images and Description */}
            <div className="lg:col-span-2">
              {/* Main Image */}
              <div className="mb-4 aspect-[4/3] overflow-hidden rounded-lg bg-muted">
                <img
                  src={vehicle.images[0] || "/placeholder.svg"}
                  alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Thumbnail Images */}
              <div className="mb-8 grid grid-cols-3 gap-4">
                {vehicle.images.slice(1).map((image, idx) => (
                  <div key={idx} className="aspect-[4/3] overflow-hidden rounded-lg bg-muted">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${vehicle.year} ${vehicle.make} ${vehicle.model} - View ${idx + 2}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Description */}
              <Card className="border-border p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-card-foreground">Description</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{vehicle.description}</p>
              </Card>

              {/* Features */}
              <Card className="mt-6 border-border p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-card-foreground">Features</h2>
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {vehicle.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Right Column - Vehicle Info and Contact */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24 border-border p-6 shadow-lg">
                <div className="mb-4">
                  <Badge variant="secondary" className="mb-2">
                    Stock #{vehicle.stockNumber}
                  </Badge>
                  <h1 className="text-balance text-3xl font-bold tracking-tight text-card-foreground">
                    {vehicle.year} {vehicle.make} {vehicle.model}
                  </h1>
                </div>

                <div className="mb-6">
                  <p className="text-4xl font-bold text-accent">${vehicle.price.toLocaleString()}</p>
                </div>

                {/* Specs */}
                <div className="mb-6 space-y-4 border-b border-t border-border py-6">
                  <div className="flex items-center gap-3 text-sm">
                    <Gauge className="h-5 w-5 text-muted-foreground" />
                    <span className="text-muted-foreground">Mileage:</span>
                    <span className="ml-auto font-medium text-card-foreground">
                      {vehicle.mileage.toLocaleString()} miles
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                    <span className="text-muted-foreground">Year:</span>
                    <span className="ml-auto font-medium text-card-foreground">{vehicle.year}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Cog className="h-5 w-5 text-muted-foreground" />
                    <span className="text-muted-foreground">Transmission:</span>
                    <span className="ml-auto font-medium text-card-foreground">{vehicle.transmission}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Fuel className="h-5 w-5 text-muted-foreground" />
                    <span className="text-muted-foreground">Fuel Type:</span>
                    <span className="ml-auto font-medium text-card-foreground">{vehicle.fuelType}</span>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="mb-6 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Drivetrain:</span>
                    <span className="font-medium text-card-foreground">{vehicle.drivetrain}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Color:</span>
                    <span className="font-medium text-card-foreground">{vehicle.color}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">VIN:</span>
                    <span className="font-mono text-xs font-medium text-card-foreground">{vehicle.vin}</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <Button asChild className="w-full" size="lg">
                    <Link href="/contact">
                      <Mail className="mr-2 h-4 w-4" />
                      Contact Us
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full bg-transparent" size="lg">
                    <a href="tel:5551234567">
                      <Phone className="mr-2 h-4 w-4" />
                      Call (555) 123-4567
                    </a>
                  </Button>
                </div>

                <p className="mt-6 text-center text-xs text-muted-foreground">Schedule a test drive today!</p>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
