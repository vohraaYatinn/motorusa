"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground">Contact Us</h1>
            <p className="mt-2 text-pretty text-lg leading-relaxed text-muted-foreground">
              Get in touch with our team. We're here to help you find your perfect vehicle.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Contact Info Cards */}
            <div className="space-y-6 lg:col-span-1">
              <Card className="border-border p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">Phone</h3>
                    <p className="mt-1 text-sm text-muted-foreground">General Inquiries & Rentals</p>
                    <a
                      href="tel:+18323906465"
                      className="mt-2 block text-sm font-medium text-accent transition-colors hover:text-accent/80"
                    >
                      +1 (832) 390-6465
                    </a>
                    <a
                      href="tel:8326182765"
                      className="mt-1 block text-sm font-medium text-accent transition-colors hover:text-accent/80"
                    >
                      (832) 618-2765
                    </a>
                    <p className="mt-3 text-xs text-muted-foreground">
                      For luxury or exotic vehicles, contact Muhammad Ali (Owner) directly
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="border-border p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">Email</h3>
                    <p className="mt-1 text-sm text-muted-foreground">We'll respond within 24 hours</p>
                    <a
                      href="mailto:info@motorworldusa.com"
                      className="mt-2 block text-sm font-medium text-accent transition-colors hover:text-accent/80"
                    >
                      info@motorworldusa.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="border-border p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">Location</h3>
                    <p className="mt-1 text-sm text-muted-foreground">Visit our showroom</p>
                    <p className="mt-2 text-sm font-medium text-card-foreground">
                      3716 Ocee St
                      <br />
                      Houston, TX 77063
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="border-border p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">Business Hours</h3>
                    <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                      <p>Saturday: 10:00 AM - 6:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-border p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-card-foreground">Send Us a Message</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="mt-2"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="mt-2"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="mt-2"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="mt-2 min-h-[160px]"
                      placeholder="Tell us about your needs or questions..."
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    Send Message
                  </Button>
                </form>
              </Card>

              {/* Map */}
              
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
