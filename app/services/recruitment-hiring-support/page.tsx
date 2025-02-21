import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function RecruitmentHiringSupportPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/" className="text-secondary hover:text-secondary/80">
          ← Back to Home
        </Link>
      </div>
      <h1 className="text-4xl font-serif mb-6">Recruitment &amp; Hiring Support</h1>
      <div className="prose prose-lg max-w-none">
        <p>
          Finding the right talent is crucial. We streamline your hiring process to save time and improve hiring decisions.
        </p>
        <ul>
          <li>Create job descriptions and job postings</li>
          <li>Conduct candidate screening and interviews</li>
          <li>Perform background and reference checks</li>
          <li>Offer seamless onboarding solutions</li>
        </ul>
        <Button asChild className="mt-8 bg-[#333333] hover:bg-[#262626]">
          <Link href="/contact">Get Started</Link>
        </Button>
      </div>
    </div>
  )
}
