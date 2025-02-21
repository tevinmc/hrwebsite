import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HRStrategyPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/" className="text-secondary hover:text-secondary/80">
          ← Back to Home
        </Link>
      </div>
      <h1 className="text-4xl font-serif mb-6">HR Strategy &amp; Organizational Development</h1>
      <div className="prose prose-lg max-w-none">
        <p>
          A strong HR strategy aligns with your business goals. We provide solutions to develop and manage your workforce.
        </p>
        <ul>
          <li>Create long-term HR strategies</li>
          <li>Offer leadership coaching and training</li>
          <li>Develop succession planning programs</li>
        </ul>
        <Button asChild className="mt-8 bg-[#333333] hover:bg-[#262626]">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  )
}
