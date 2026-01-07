"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Shield, DollarSign, Award, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { vehicles } from "@/lib/inventory-data"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-black">
          <div className="absolute inset-0 bg-[url('/luxury-car-showroom.png')] bg-cover bg-center opacity-30" />
          <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
            <div className="max-w-2xl">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-white lg:text-6xl">VIEW INVENTORY</h1>
              <div className="mt-4 h-1 w-full bg-accent" />
              <p className="mt-8 text-pretty text-lg leading-relaxed text-white/90">
                Quality used cars with transparent pricing, detailed history reports, and exceptional service. Your
                journey to the perfect vehicle starts here.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button asChild size="lg" className="bg-accent text-white hover:bg-accent/90">
                  <Link href="/inventory">Browse Inventory</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
                Why Choose Motor World USA
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                We're committed to providing the best pre-owned vehicle buying experience
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border-border p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <CheckCircle2 className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-card-foreground">Quality Inspected</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Every vehicle undergoes rigorous inspection to ensure quality and reliability
                </p>
              </Card>
              <Card className="border-border p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <DollarSign className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-card-foreground">Best Prices</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Competitive pricing with transparent cost breakdowns and no hidden fees
                </p>
              </Card>
              <Card className="border-border p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-card-foreground">Warranty Options</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Extended warranty plans available for peace of mind on every purchase
                </p>
              </Card>
              <Card className="border-border p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-card-foreground">Expert Service</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Knowledgeable staff dedicated to helping you find the right vehicle
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Vehicles Section */}
        <section className="bg-muted/30 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mb-12 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
                  Featured Vehicles
                </h2>
                <ArrowRight className="h-8 w-8 text-foreground" />
              </div>
              <div className="hidden items-center gap-2 md:flex">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-12 w-12 rounded-full bg-transparent"
                  onClick={() => {
                    const container = document.getElementById("featured-scroll")
                    if (container) container.scrollBy({ left: -400, behavior: "smooth" })
                  }}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-12 w-12 rounded-full bg-transparent"
                  onClick={() => {
                    const container = document.getElementById("featured-scroll")
                    if (container) container.scrollBy({ left: 400, behavior: "smooth" })
                  }}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
            </div>
            <div className="relative">
            <div id="featured-scroll" className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
                {vehicles.map((vehicle) => (
                  <Link key={vehicle.id} href={`/inventory/${vehicle.slug}`} className="min-w-[320px] flex-shrink-0 md:min-w-[380px]">
                    <Card className="group h-full overflow-hidden border-border bg-background transition-shadow hover:shadow-xl">
                      <div className="aspect-[16/10] overflow-hidden bg-muted">
                        <img
                          src={vehicle.image || "/placeholder.svg"}
                          alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                          className="h-full object-cover transition-transform duration-300 group-hover:scale-105 w-96"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-foreground">
                          {vehicle.make} {vehicle.model} {vehicle.year}
                        </h3>
                        <div className="mt-4 flex items-baseline justify-between">
                          <p className="text-3xl font-bold text-[oklch(0.45_0.18_260)]">
                            ${vehicle.price.toLocaleString()}
                          </p>
                          <p className="text-base text-muted-foreground">
                            {vehicle.mileage > 0 ? `${vehicle.mileage.toLocaleString()} mi` : "Mileage N/A"}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <Card className="border-border bg-black p-12 text-center shadow-lg">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-white lg:text-4xl">
                Ready to Find Your Perfect Vehicle?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-white/90">
                Browse our inventory or contact us today to schedule a test drive
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Button asChild size="lg" className="bg-accent text-white hover:bg-accent/90">
                  <Link href="/inventory">Browse Inventory</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
