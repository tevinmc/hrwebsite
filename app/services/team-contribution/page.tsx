import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TeamContributionPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/" className="text-secondary hover:text-secondary/80">
          ← Back to Home
        </Link>
      </div>
      <h1 className="text-4xl font-serif mb-6">Contribute to the Team</h1>
      <div className="prose prose-lg max-w-none">
        <p>
          UHR work as part of your HR team to help you complete time sensitive projects and add proven resources. Our
          team contribution services include:
        </p>
        <ul>
          <li>Project-Based Support</li>
          <li>Interim HR Management</li>
          <li>HR Team Augmentation</li>
          <li>Specialized Project Execution</li>
          <li>Knowledge Transfer and Training</li>
        </ul>
        <Button asChild className="mt-8 bg-[#333333] hover:bg-[#262626]">
          <Link href="/contact">Discuss Your Needs</Link>
        </Button>
      </div>
    </div>
  )
}

