import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HRInfrastructurePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/" className="text-secondary hover:text-secondary/80">
          ← Back to Home
        </Link>
      </div>
      <h1 className="text-4xl font-serif mb-6">HR Infrastructure and Upgrades</h1>
      <div className="prose prose-lg max-w-none">
        <p>
          UHR serves as fresh eyes, creating client-centered, pragmatic, creative and effective solutions for your HR
          needs. Our comprehensive HR infrastructure services include:
        </p>
        <ul>
          <li>HR Policy Development and Review</li>
          <li>Employee Handbook Creation and Updates</li>
          <li>HR Process Optimization</li>
          <li>Compliance Assessment and Implementation</li>
          <li>HR Technology Solutions</li>
        </ul>
        <Button asChild className="mt-8 bg-[#333333] hover:bg-[#262626]">
          <Link href="/contact">Schedule a Consultation</Link>
        </Button>
      </div>
    </div>
  )
}

