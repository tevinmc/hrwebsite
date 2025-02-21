import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function WorkforcePlanningPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/" className="text-secondary hover:text-secondary/80">
          ← Back to Home
        </Link>
      </div>
      <h1 className="text-4xl font-serif mb-6">Workforce Planning &amp; Downsizing</h1>
      <div className="prose prose-lg max-w-none">
        <p>
          Whether you’re growing or downsizing, we help businesses plan workforce changes smoothly.
        </p>
        <ul>
          <li>Assist with layoffs and restructuring</li>
          <li>Develop severance policies and exit strategies</li>
          <li>Plan for future workforce needs</li>
        </ul>
        <Button asChild className="mt-8 bg-[#333333] hover:bg-[#262626]">
          <Link href="/contact">Learn More</Link>
        </Button>
      </div>
    </div>
  )
}
