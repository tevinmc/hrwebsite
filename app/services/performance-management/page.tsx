import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PerformanceManagementPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/" className="text-secondary hover:text-secondary/80">
          ← Back to Home
        </Link>
      </div>
      <h1 className="text-4xl font-serif mb-6">Performance Management</h1>
      <div className="prose prose-lg max-w-none">
        <p>
          Engaged employees drive business success. We provide tools to manage and improve employee performance.
        </p>
        <ul>
          <li>Implement performance review systems</li>
          <li>Develop retention and engagement strategies</li>
          <li>Create improvement plans for underperforming employees</li>
        </ul>
        <Button asChild className="mt-8 bg-[#333333] hover:bg-[#262626]">
          <Link href="/contact">Improve Performance</Link>
        </Button>
      </div>
    </div>
  )
}
