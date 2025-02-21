import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ComplianceEmploymentLawPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/" className="text-secondary hover:text-secondary/80">
          ← Back to Home
        </Link>
      </div>
      <h1 className="text-4xl font-serif mb-6">
        US and International Compliance &amp; Employment Law
      </h1>
      <div className="prose prose-lg max-w-none">
        <p>
          We help businesses stay compliant with federal, state, and local labor laws, minimizing legal risks.
        </p>
        <ul>
          <li>Develop and update employee handbooks and policies</li>
          <li>Ensure US wage and hour compliance and International labor law</li>
          <li>Offer guidance on employment classifications and terminations</li>
        </ul>
        <Button asChild className="mt-8 bg-[#333333] hover:bg-[#262626]">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  )
}
