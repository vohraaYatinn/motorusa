"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronDown } from "lucide-react"
import { vehicles } from "@/lib/inventory-data"

export default function InventoryPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [makeFilter, setMakeFilter] = useState("all")
  const [sortBy, setSortBy] = useState("price-asc")
  const [filtersOpen, setFiltersOpen] = useState(false)

  const filteredVehicles = vehicles
    .filter((vehicle) => {
      const matchesSearch =
        vehicle.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vehicle.model.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesMake = makeFilter === "all" || vehicle.make === makeFilter
      return matchesSearch && matchesMake
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.price - b.price
        case "price-desc":
          return b.price - a.price
        case "year-desc":
          return b.year - a.year
        case "mileage-asc": {
          const mileageA = a.mileage || Number.MAX_SAFE_INTEGER
          const mileageB = b.mileage || Number.MAX_SAFE_INTEGER
          return mileageA - mileageB
        }
        default:
          return 0
      }
    })

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="border-b border-border bg-black">
          <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-white">VIEW INVENTORY</h1>
            <div className="mt-4 h-1 w-full max-w-3xl bg-accent" />
            <p className="mt-6 text-pretty text-lg leading-relaxed text-white/90">
              Call Us for Availability{" "}
              <a href="tel:+18323906465" className="font-semibold underline">
                +1 832 390 6465
              </a>{" "}
              | More Photos Upon Request | Inquire Now Contact for Pricing
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
          {/* Filters */}
          <Card className="mb-8 border-border shadow-sm">
            {/* Toggle button for mobile */}
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="flex w-full items-center justify-between p-6 text-left md:hidden"
            >
              <span className="text-lg font-semibold">Filters & Sort</span>
              <ChevronDown className={`h-5 w-5 transition-transform ${filtersOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Filters content */}
            <div className={`${filtersOpen ? "block" : "hidden"} p-6 md:block md:p-6`}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div>
                  <Label htmlFor="search" className="text-sm font-medium">
                    Search
                  </Label>
                  <Input
                    id="search"
                    type="text"
                    placeholder="Search by make or model..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="make" className="text-sm font-medium">
                    Make
                  </Label>
                  <Select value={makeFilter} onValueChange={setMakeFilter}>
                    <SelectTrigger id="make" className="mt-2">
                      <SelectValue placeholder="All Makes" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Makes</SelectItem>
                      <SelectItem value="Honda">Honda</SelectItem>
                      <SelectItem value="Kia">Kia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="sort" className="text-sm font-medium">
                    Sort By
                  </Label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger id="sort" className="mt-2">
                      <SelectValue placeholder="Sort by..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="price-asc">Price: Low to High</SelectItem>
                      <SelectItem value="price-desc">Price: High to Low</SelectItem>
                      <SelectItem value="year-desc">Year: Newest First</SelectItem>
                      <SelectItem value="mileage-asc">Mileage: Low to High</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </Card>

          {/* Vehicle Grid */}
          <div className="mb-6 text-sm text-muted-foreground">
            Showing {filteredVehicles.length} {filteredVehicles.length === 1 ? "vehicle" : "vehicles"}
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredVehicles.map((vehicle) => (
              <Link key={vehicle.id} href={`/inventory/${vehicle.slug}`}>
                <Card className="group h-full overflow-hidden border-border transition-shadow hover:shadow-lg">
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={vehicle.image || "/placeholder.svg"}
                      alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col p-6">
                    <h3 className="text-xl font-semibold text-[oklch(0.45_0.18_260)]">
                      {vehicle.year} {vehicle.make} {vehicle.model}
                    </h3>
                    <div className="mt-4 flex items-center justify-between">
                      <p className="text-2xl font-bold text-foreground">${vehicle.price.toLocaleString()}</p>
                      <p className="text-sm text-muted-foreground">
                        {vehicle.mileage > 0 ? `${vehicle.mileage.toLocaleString()} mi` : "Mileage N/A"}
                      </p>
                    </div>
                    <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{vehicle.transmission}</span>
                      <span>•</span>
                      <span>{vehicle.fuelType}</span>
                    </div>
                    <Button className="mt-6 w-full bg-transparent" variant="outline">
                      View Details
                    </Button>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
