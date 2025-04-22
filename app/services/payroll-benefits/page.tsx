import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PayrollBenefitsPage() {
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
        Payroll &amp;{" "}
        <span className="text-epiphanyBg">Benefits Administration</span>
      </h1>

      <article className="prose prose-lg max-w-none space-y-8 md:space-y-12 bg-epiphanyGray p-4 md:p-8 rounded-lg shadow-md">
        <p>
          Managing payroll and employee benefits can be complex, especially with
          evolving compliance requirements, tax regulations, and global workforce
          considerations. We help businesses simplify payroll operations, ensure
          legal compliance, and develop competitive benefits packages that attract
          and retain top talent.
        </p>

        <h2 className="text-2xl text-primary mb-4">
          Payroll Setup &amp; Compliance Management
        </h2>
        <section className="border border-border rounded-md p-4 md:p-6 bg-white dark:bg-card">
          <p className="mb-4">
            Ensuring accurate and compliant payroll processing is essential to avoid
            legal penalties and maintain employee trust. We provide end-to-end
            payroll support, from setup to ongoing administration.
          </p>

          <h3 className="text-lg font-medium mb-2">
            Payroll System Implementation &amp; Management
          </h3>
          <ul className="list-disc list-inside space-y-2 md:space-y-3 mb-4">
            <li className="py-1">
              <strong>Payroll System Selection &amp; Integration:</strong> Assisting
              businesses in choosing the right payroll software or third-party
              provider to streamline payroll processing.
            </li>
            <li>
              <strong>Payroll Automation &amp; Process Optimization:</strong>{" "}
              Implementing time‑tracking, wage calculations, and tax reporting
              automation to reduce errors and inefficiencies.
            </li>
            <li>
              <strong>Global Payroll Coordination:</strong> Ensuring compliance with
              cross-border payroll regulations for businesses managing remote teams
              and international employees.
            </li>
          </ul>

          <h3 className="text-lg font-medium mb-2">
            Ensuring Legal &amp; Tax Compliance
          </h3>
          <ul className="list-disc list-inside space-y-2 md:space-y-3">
            <li>
              <strong>U.S. Payroll Compliance:</strong> Aligning payroll processing
              with IRS regulations, FLSA wage laws, state tax requirements, and ACA
              reporting mandates.
            </li>
            <li>
              <strong>International Payroll Compliance:</strong> Ensuring adherence
              to country‑specific tax laws, social security contributions (e.g.,
              EU social security, Canada’s CPP, UK NICs), and labor regulations.
            </li>
            <li>
              <strong>Payroll Tax Filing &amp; Reporting:</strong> Assisting with
              accurate payroll tax filing, W‑2s, 1099s, and other required tax
              documents for employees and contractors.
            </li>
          </ul>
        </section>

        <h2 className="text-2xl text-primary mb-4">
          Employee Benefits Selection &amp; Management
        </h2>
        <section className="border border-border rounded-md p-6 bg-white dark:bg-card">
          <h3 className="text-lg font-medium mb-2">
            Designing &amp; Managing Comprehensive Benefits Packages
          </h3>
          <ul className="list-disc list-inside space-y-2 md:space-y-3 mb-4">
            <li>
              <strong>Health &amp; Wellness Benefits:</strong> Assisting in the
              selection and management of health insurance, dental, vision, and
              wellness programs that comply with ACA (U.S.), NHS (UK), and other
              international healthcare mandates.
            </li>
            <li>
              <strong>Retirement &amp; Pension Plans:</strong> Helping businesses set
              up 401(k), IRAs, Roth plans (U.S.), pension schemes (EU &amp; UK),
              and international retirement benefits.
            </li>
            <li>
              <strong>Paid Time Off (PTO) &amp; Leave Policies:</strong> Ensuring
              compliance with FMLA (U.S.), EU Paid Leave Directive, and other
              global leave laws while developing customized PTO policies.
            </li>
          </ul>

          <h3 className="text-lg font-medium mb-2">
            Regulatory Compliance for Employee Benefits
          </h3>
          <ul className="list-disc list-inside space-y-2 md:space-y-3">
            <li>
              <strong>U.S. Benefits Compliance:</strong> Ensuring adherence to ERISA,
              COBRA, HIPAA, and ACA regulations to avoid penalties.
            </li>
            <li>
              <strong>Global Benefits Compliance:</strong> Managing benefits in
              compliance with country‑specific labor laws, taxation rules, and
              mandatory employer contributions.
            </li>
            <li>
              <strong>Equity &amp; Non‑Discrimination:</strong> Ensuring benefits
              plans meet legal and ethical standards for fair access and equal
              opportunity.
            </li>
          </ul>
        </section>

        <h2 className="text-2xl text-primary mb-4">
          Employee Benefits Education &amp; Communication
        </h2>
        <section className="border border-border rounded-md p-6 bg-white dark:bg-card">
          <h3 className="text-lg font-medium mb-2">
            Employee Education &amp; Open Enrollment Support
          </h3>
          <ul className="list-disc list-inside space-y-2 md:space-y-3 mb-4">
            <li>
              <strong>Customized Benefits Guides:</strong> Creating easy-to-understand
              materials that explain health plans, retirement options, and PTO
              policies.
            </li>
            <li>
              <strong>Benefits Enrollment Assistance:</strong> Supporting employees
              during open enrollment periods, new hire onboarding, and life event
              changes.
            </li>
            <li>
              <strong>Financial Wellness &amp; Retirement Planning:</strong>{" "}
              Providing workshops, one-on-one counseling, and digital resources to
              help employees maximize their benefits.
            </li>
          </ul>

          <h3 className="text-lg font-medium mb-2">
            Ongoing Benefits Support &amp; Employee Advocacy
          </h3>
          <ul className="list-disc list-inside space-y-2 md:space-y-3">
            <li>
              <strong>Claims &amp; Questions Assistance:</strong> Helping employees
              navigate healthcare claims, retirement contributions, and leave
              requests.
            </li>
            <li>
              <strong>Policy Updates &amp; Compliance Reviews:</strong> Ensuring
              benefit plans remain competitive and legally compliant with changing
              labor laws and tax regulations.
            </li>
          </ul>
        </section>

        <h2 className="text-2xl text-primary mb-4">
          Why Choose Our Payroll &amp; Benefits Administration Services?
        </h2>
        <ul className="list-disc list-inside space-y-2 md:space-y-3">
          <li> Simplified Payroll Operations &amp; Compliance</li>
          <li> Competitive &amp; Compliant Benefits Packages</li>
          <li> Expert Support &amp; Ongoing Employee Advocacy</li>
        </ul>
      </article>

    </div>
  )
}
