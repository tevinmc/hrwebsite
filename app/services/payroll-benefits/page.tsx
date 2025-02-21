import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PayrollBenefitsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/" className="text-secondary hover:text-secondary/80">
          ← Back to Home
        </Link>
      </div>
      <h1 className="text-4xl font-serif mb-6">Payroll &amp; Benefits Administration</h1>
      <div className="prose prose-lg max-w-none">
        <p>
          Managing payroll and benefits can be complex—we simplify the process to ensure accuracy and compliance.
        </p>
        <ul>
          <li>Assist with payroll setup and compliance</li>
          <li>Help select and manage employee benefits (health, retirement, PTO)</li>
          <li>Educate employees on available benefits</li>
        </ul>
        <Button asChild className="mt-8 bg-[#333333] hover:bg-[#262626]">
          <Link href="/contact">Learn More</Link>
        </Button>
      </div>
    </div>
  )
}
