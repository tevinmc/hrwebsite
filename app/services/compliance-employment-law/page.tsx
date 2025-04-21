import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ComplianceEmploymentLawPage() {
  return (
    <div className="container py-12">
      <div className="mb-8">
        <Link
          href="/"
          className="text-secondary hover:text-secondary/80 transition-colors"
        >
          ← Back to Home
        </Link>
      </div>

      <h1 className="text-4xl font-serif mb-6 text-accent-foreground border-b-2 border-accent pb-2">
        US &amp; International Compliance 
        <span className="text-epiphanyBg">Employment Law</span>
      </h1>

      <article className="prose prose-lg max-w-none space-y-12 bg-epiphanyGray p-8 rounded-lg shadow-md">
        <p>
          We help businesses navigate the complexities of employment laws across the
          United States and international jurisdictions. Our expertise ensures
          compliance with federal, state, local, and global labor regulations,
          minimizing legal risks and promoting best practices in workforce management.
        </p>

        <h2 className="text-2xl text-primary mb-4">Regulatory Compliance &amp; Risk Mitigation</h2>

        <section className="border border-border rounded-md p-6 bg-white dark:bg-card">
          <h3 className="text-xl font-medium mb-2 text-foreground">Workplace Investigations</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Conduct impartial investigations into workplace misconduct, harassment,
              and discrimination claims while adhering to EEOC (U.S.), ACAS (UK), and
              international labor standards.
            </li>
            <li>
              Ensure compliance with whistleblower protections, anti‑retaliation laws,
              and confidentiality requirements across different jurisdictions.
            </li>
            <li>
              Provide detailed reports with recommendations to mitigate legal risks
              and maintain workplace integrity.
            </li>
          </ul>
        </section>

        <section className="border border-border rounded-md p-6 bg-white dark:bg-card">
          <h3 className="text-xl font-medium mb-2 text-foreground">HR Audits &amp; Compliance Reviews</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Assess compliance with U.S. laws such as the FLSA, FMLA, and ADA, as well
              as global labor laws including the EU Working Time Directive, UK
              Employment Rights Act, and country‑specific wage and hour regulations.
            </li>
            <li>
              Conduct payroll and benefits audits to ensure adherence to tax laws,
              social security contributions, and statutory entitlements in multiple
              countries.
            </li>
            <li>
              Provide customized action plans for multi‑national organizations to
              maintain legal compliance across different regulatory environments.
            </li>
          </ul>
        </section>

        {/* ...repeat similar styled <section> blocks for other topics... */}

        <h2 className="text-2xl text-primary mb-4">Why Choose Our Compliance Services?</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Global Expertise:</strong> Our team ensures compliance with
            employment laws across multiple regions, including North America,
            Europe, Asia, Latin America, and the Middle East.
          </li>
          <li>
            <strong>Risk Mitigation Strategies:</strong> We proactively address
            legal risks and ensure your business remains compliant with
            ever‑changing labor laws.
          </li>
          <li>
            <strong>Tailored Solutions:</strong> We customize our services to fit
            your industry, workforce structure, and international expansion plans.
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
