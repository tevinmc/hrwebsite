import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ComplianceEmploymentLawPage() {
  return (
    <div className="container py-8 md:py-12 px-4 md:px-6">
      <div className="mb-6 md:mb-8">
        <Link
          href="/"
          className="text-secondary hover:text-secondary/80 transition-colors"
        >
          ← Back to Home
        </Link>
      </div>

      <h1 className="text-3xl md:text-4xl font-serif mb-4 md:mb-6 text-accent-foreground border-b-2 border-accent pb-2">
        US &amp; International Compliance 
        <span className="text-epiphanyBg">Employment Law</span>
      </h1>

      <article className="prose prose-lg max-w-none space-y-8 md:space-y-12 bg-epiphanyGray p-4 md:p-8 rounded-lg shadow-md">
        <p>
          We help businesses navigate the complexities of employment laws across the
          United States and international jurisdictions. Our expertise ensures
          compliance with federal, state, local, and global labor regulations,
          minimizing legal risks and promoting best practices in workforce management.
        </p>

        <h2 className="text-2xl text-primary mb-2 font-bold">Regulatory Compliance &amp; Risk Mitigation</h2>
        <section className="border border-border rounded-md p-4 md:p-6 bg-white dark:bg-card">
          <h3 className="text-xl font-medium mb-2 text-foreground">Workplace Investigations</h3>
          <ul className="list-disc list-outside ml-5 space-y-2 md:space-y-3">
            <li className="py-1">
              <div className="pl-1">
                <strong>Conduct impartial investigations into workplace misconduct, harassment,
                and discrimination claims</strong> while adhering to EEOC (U.S.), ACAS (UK), and
                international labor standards.
              </div>
            </li>
            <li>
              <div className="pl-1">
                Ensure compliance with whistleblower protections, anti‑retaliation laws,
                and confidentiality requirements across different jurisdictions.
              </div>
            </li>
            <li>
              <div className="pl-1">
                Provide detailed reports with recommendations to mitigate legal risks
                and maintain workplace integrity.
              </div>
            </li>
          </ul>
        </section>

        <section className="border border-border rounded-md p-6 bg-white dark:bg-card">
          <h3 className="text-xl font-medium mb-2 text-foreground">HR Audits &amp; Compliance Reviews</h3>
          <ul className="list-disc list-outside ml-5 space-y-2 md:space-y-3">
            <li>
              <div className="pl-1">
                Assess compliance with U.S. laws such as the FLSA, FMLA, and ADA, as well
                as global labor laws including the EU Working Time Directive, UK
                Employment Rights Act, and country‑specific wage and hour regulations.
              </div>
            </li>
            <li>
              <div className="pl-1">
                Conduct payroll and benefits audits to ensure adherence to tax laws,
                social security contributions, and statutory entitlements in multiple
                countries.
              </div>
            </li>
            <li>
              <div className="pl-1">
                Provide customized action plans for multi‑national organizations to
                maintain legal compliance across different regulatory environments.
              </div>
            </li>
          </ul>
        </section>

        {/* ...repeat similar styled <section> blocks for other topics... */}

        <h2 className="text-2xl text-primary mb-4 font-bold">Why Choose Our Compliance Services?</h2>
        <ul className="list-disc list-outside ml-5 space-y-2 md:space-y-3">
          <li>
            <div className="pl-1">
              <strong>Global Expertise:</strong> Our team ensures compliance with
              employment laws across multiple regions, including North America,
              Europe, Asia, Latin America, and the Middle East.
            </div>
          </li>
          <li>
            <div className="pl-1">
              <strong>Risk Mitigation Strategies:</strong> We proactively address
              legal risks and ensure your business remains compliant with
              ever‑changing labor laws.
            </div>
          </li>
          <li>
            <div className="pl-1">
              <strong>Tailored Solutions:</strong> We customize our services to fit
              your industry, workforce structure, and international expansion plans.
            </div>
          </li>
        </ul>
      </article>

      {/* <Button
        asChild
        className="mt-8 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-md px-6 py-3 transition"
      >
        <Link href="/contact">Contact Us</Link>
      </Button> */}
    </div>
  )
}
