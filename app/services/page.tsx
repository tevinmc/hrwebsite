import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button"
import Link from "next/link"


export default function ServicesPage() {
  const services = [
    {
      title: "US and International Compliance & Employment Law",
      description: "Keep your business legally compliant.",
      buttonText: "Learn More",
      href: "/services/compliance-employment-law",
    },
    {
      title: "Recruitment & Hiring Support",
      description: "Find and retain top talent.",
      buttonText: "Learn More",
      href: "/services/recruitment-hiring-support",
    },
    {
      title: "Employee Relations & Conflict Resolution",
      description: "Build a positive workplace culture.",
      buttonText: "Learn More",
      href: "/services/employee-relations",
    },
    {
      title: "Performance Management",
      description: "Improve employee productivity and retention.",
      buttonText: "Learn More",
      href: "/services/performance-management",
    },
    {
      title: "Payroll & Benefits Administration",
      description: "Simplify payroll and benefits management.",
      buttonText: "Learn More",
      href: "/services/payroll-benefits",
    },
    {
      title: "HR Strategy & Organizational Development",
      description: "Align HR with your business goals.",
      buttonText: "Learn More",
      href: "/services/hr-strategy",
    },
    {
      title: "Workforce Planning & Downsizing",
      description: "Navigate business growth or restructuring.",
      buttonText: "Learn More",
      href: "/services/workforce-planning",
    },
  ];
  

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="mb-6 md:mb-8">
          <Link href="/" className="text-secondary hover:text-secondary/80">
            ← Back to Home
          </Link>
        </div>
        <h1 className="text-3xl md:text-4xl font-serif mb-8 md:mb-12">Our Services</h1>
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.href} className="bg-[#333333] text-white rounded-lg p-4 md:p-6">
              <h2 className="text-xl md:text-2xl mb-3 md:mb-4">{service.title}</h2>
              <p className="mb-6">{service.description}</p>
              <Button asChild variant="outline" className="text-white border-white hover:bg-white/10">
                <Link href={service.href}>Learn More</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

