import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function EmployeeRelationsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/" className="text-secondary hover:text-secondary/80">
          ← Back to Home
        </Link>
      </div>
      <h1 className="text-4xl font-serif mb-6">Employee Relations &amp; Conflict Resolution</h1>
      <div className="prose prose-lg max-w-none">
        <p>
          A healthy workplace culture leads to higher productivity. We help businesses manage employee concerns effectively.
        </p>
        <ul>
          <li>Meditate workplace disputes and conflicts</li>
          <li>Train managers on communication and leadership</li>
          <li>Guide businesses in handling employee grievances</li>
        </ul>
        <Button asChild className="mt-8 bg-[#333333] hover:bg-[#262626]">
          <Link href="/contact">Learn More</Link>
        </Button>
      </div>
    </div>
  )
}
