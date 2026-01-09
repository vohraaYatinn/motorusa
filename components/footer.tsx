import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-foreground">Motor World USA</h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Your trusted destination for quality pre-owned vehicles. We provide transparent pricing, detailed vehicle
              history, and exceptional customer service.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/inventory" className="text-sm text-muted-foreground transition-colors hover:text-accent">
                  Browse Inventory
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground transition-colors hover:text-accent">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>10021 Long Point Rd</li>
              <li>Houston, TX 77055</li>
              <li className="mt-4">+1 (832) 390-6465</li>
              <li>info@motorworldusa.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Motor World USA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
