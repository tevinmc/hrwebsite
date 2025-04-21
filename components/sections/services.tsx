import { Button } from "@/components/ui/button"
import { ServiceCard } from "@/components/ui/service-card"
import Link from "next/link"

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


export function ServicesSection() {
  return (
    <section className="py-12 md:py-16 px-4 md:px-8 bg-gray-100">
      <h2 className="text-2xl md:text-3xl font-serif text-center mb-8 md:mb-12">Our Services</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
      {/* <div className="text-center mt-8">
        <Button asChild variant="default" className="bg-[#333333] hover:bg-[#262626] ">
          <Link href="/services">See All HR Services</Link>
        </Button>
      </div> */}
    </section>
  )
}

