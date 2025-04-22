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

        <h2 className="text-2xl text-primary mb-2">
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
          <ul className="list-disc list-outside ml-5 space-y-2 md:space-y-3 mb-4">
            <li className="py-1">
              <div className="pl-1">
                <strong>Payroll System Selection &amp; Integration:</strong> Assisting
                businesses in choosing the right payroll software or third-party
                provider to streamline payroll processing.
              </div>
            </li>
            <li>
              <div className="pl-1">
                <strong>Payroll Automation &amp; Process Optimization:</strong>{" "}
                Implementing time‑tracking, wage calculations, and tax reporting
                automation to reduce errors and inefficiencies.
              </div>
            </li>
            <li>
              <div className="pl-1">
                <strong>Global Payroll Coordination:</strong> Ensuring compliance with
                cross-border payroll regulations for businesses managing remote teams
                and international employees.
              </div>
            </li>
          </ul>

          <h3 className="text-lg font-medium mb-2">
            Ensuring Legal &amp; Tax Compliance
          </h3>
          <ul className="list-disc list-outside ml-5 space-y-2 md:space-y-3">
            <li>
              <div className="pl-1">
                <strong>U.S. Payroll Compliance:</strong> Aligning payroll processing
                with IRS regulations, FLSA wage laws, state tax requirements, and ACA
                reporting mandates.
              </div>
            </li>
            <li>
              <strong>International Payroll Compliance:</strong> Ensuring adherence
              to country‑specific tax laws, social security contributions (e.g.,
              EU social security, Canada’s CPP, UK NICs), and labor regulations.
            </li>
            <li>
              <div className="pl-1">
                <strong>Payroll Tax Filing &amp; Reporting:</strong> Assisting with
                accurate payroll tax filing, W‑2s, 1099s, and other required tax
                documents for employees and contractors.
              </div>
            </li>
          </ul>
        </section>

        <h2 className="text-2xl text-primary mb-2">
          Employee Benefits Selection &amp; Management
        </h2>
        <section className="border border-border rounded-md p-6 bg-white dark:bg-card">
          <h3 className="text-lg font-medium mb-2">
            Designing &amp; Managing Comprehensive Benefits Packages
          </h3>
          <ul className="list-disc list-outside ml-5 space-y-2 md:space-y-3 mb-4">
            <li>
              <div className="pl-1">
                <strong>Health &amp; Wellness Benefits:</strong> Assisting in the
                selection and management of health insurance, dental, vision, and
                wellness programs that comply with ACA (U.S.), NHS (UK), and other
                international healthcare mandates.
              </div>
            </li>
            <li>
              <div className="pl-1">
                <strong>Retirement &amp; Pension Plans:</strong> Helping businesses set
                up 401(k), IRAs, Roth plans (U.S.), pension schemes (EU &amp; UK),
                and international retirement benefits.
              </div>
            </li>
            <li>
              <div className="pl-1">
                <strong>Paid Time Off (PTO) &amp; Leave Policies:</strong> Ensuring
                compliance with FMLA (U.S.), EU Paid Leave Directive, and other
                global leave laws while developing customized PTO policies.
              </div>
            </li>
          </ul>

          <h3 className="text-lg font-medium mb-2">
            Regulatory Compliance for Employee Benefits
          </h3>
          <ul className="list-disc list-outside ml-5 space-y-2 md:space-y-3">
            <li>
              <div className="pl-1">
                <strong>U.S. Benefits Compliance:</strong> Ensuring adherence to ERISA,
                COBRA, HIPAA, and ACA regulations to avoid penalties.
              </div>
            </li>
            <li>
              <div className="pl-1">
                <strong>Global Benefits Compliance:</strong> Managing benefits in
                compliance with country‑specific labor laws, taxation rules, and
                mandatory employer contributions.
              </div>
            </li>
            <li>
              <div className="pl-1">
                <strong>Equity &amp; Non‑Discrimination:</strong> Ensuring benefits
                plans meet legal and ethical standards for fair access and equal
                opportunity.
              </div>
            </li>
          </ul>
        </section>

        <h2 className="text-2xl text-primary mb-2">
          Employee Benefits Education &amp; Communication
        </h2>
        <section className="border border-border rounded-md p-6 bg-white dark:bg-card">
          <h3 className="text-lg font-medium mb-2">
            Employee Education &amp; Open Enrollment Support
          </h3>
          <ul className="list-disc list-outside ml-5 space-y-2 md:space-y-3 mb-4">
            <li>
              <div className="pl-1">
                <strong>Customized Benefits Guides:</strong> Creating easy-to-understand
                materials that explain health plans, retirement options, and PTO
                policies.
              </div>
            </li>
            <li>
              <div className="pl-1">
                <strong>Benefits Enrollment Assistance:</strong> Supporting employees
                during open enrollment periods, new hire onboarding, and life event
                changes.
              </div>
            </li>
            <li>
              <div className="pl-1">
                <strong>Financial Wellness &amp; Retirement Planning:</strong>{" "}
                Providing workshops, one-on-one counseling, and digital resources to
                help employees maximize their benefits.
              </div>
            </li>
          </ul>

          <h3 className="text-lg font-medium mb-2">
            Ongoing Benefits Support &amp; Employee Advocacy
          </h3>
          <ul className="list-disc list-outside ml-5 space-y-2 md:space-y-3">
            <li>
              <div className="pl-1">
                <strong>Claims &amp; Questions Assistance:</strong> Helping employees
                navigate healthcare claims, retirement contributions, and leave
                requests.
              </div>
            </li>
            <li>
              <div className="pl-1">
                <strong>Policy Updates &amp; Compliance Reviews:</strong> Ensuring
                benefit plans remain competitive and legally compliant with changing
                labor laws and tax regulations.
              </div>
            </li>
          </ul>
        </section>

        <h2 className="text-2xl text-primary mb-4">
          Why Choose Our Payroll &amp; Benefits Administration Services?
        </h2>
        <ul className="list-disc list-outside ml-5 space-y-2 md:space-y-3">
          <li><div className="pl-1">Simplified Payroll Operations &amp; Compliance</div></li>
          <li><div className="pl-1">Competitive &amp; Compliant Benefits Packages</div></li>
          <li><div className="pl-1">Expert Support &amp; Ongoing Employee Advocacy</div></li>
        </ul>
      </article>

    </div>
  )
}
