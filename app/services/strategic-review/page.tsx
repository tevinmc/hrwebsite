import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function StrategicReviewPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/" className="text-secondary hover:text-secondary/80">
          ← Back to Home
        </Link>
      </div>
      <h1 className="text-4xl font-serif mb-6">Strategic Review of Current Practices</h1>
      <div className="prose prose-lg max-w-none">
        <p>
          UHR audit current HR practices for compliance, while establishing best practices and setting a plan for the
          future. Our strategic review process includes:
        </p>
        <ul>
          <li>Comprehensive HR Audit</li>
          <li>Compliance Assessment</li>
          <li>Best Practices Analysis</li>
          <li>Strategic Planning</li>
          <li>Implementation Roadmap</li>
        </ul>
        <Button asChild className="mt-8 bg-[#333333] hover:bg-[#262626]">
          <Link href="/contact">Request an Audit</Link>
        </Button>
      </div>
    </div>
  )
}

