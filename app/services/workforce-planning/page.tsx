import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function WorkforcePlanningPage() {
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
        Workforce Planning &amp;{" "}
        <span className="text-epiphanyBg">Downsizing</span>
      </h1>

      <article className="prose prose-lg max-w-none space-y-8 md:space-y-12 bg-epiphanyGray p-4 md:p-8 rounded-lg shadow-md">
        <p>
          Whether your business is expanding, restructuring, or downsizing,
          strategic workforce planning ensures that changes are managed
          effectively, minimize disruption, and remain compliant with labor laws.
          We help businesses navigate workforce transitions with confidence,
          providing expert guidance on layoffs, restructuring, severance
          policies, and future workforce planning.
        </p>

        <h2 className="text-2xl text-primary mb-2">
          Strategic Workforce Planning &amp; Organizational Readiness
        </h2>
        <section className="border border-border rounded-md p-4 md:p-6 bg-white dark:bg-card">
          <p className="mb-4">
            A proactive workforce strategy ensures business continuity,
            minimizes workforce gaps, and aligns HR initiatives with company
            objectives. We help organizations anticipate workforce needs,
            optimize staffing levels, and develop HR frameworks that support
            long-term business growth.
          </p>
          <h3 className="text-lg font-medium mb-2">
            Aligning HR Strategy with Business Objectives
          </h3>
          <ul className="list-disc list-outside ml-5 space-y-2 md:space-y-3">
            <li className="py-1">
              <div className="pl-1">
                <strong>Workforce Forecasting &amp; Talent Planning:</strong> Analyzing
                hiring trends, internal skills gaps, and workforce demographics to
                plan for future staffing needs.
              </div>
            </li>
            <li>
              <strong>Optimizing Workforce Costs &amp; Efficiency:</strong> Helping
              businesses balance payroll costs, benefits administration, and
              workforce structure to improve profitability.
            </li>
            <li>
              <strong>Strategic Recruitment &amp; Internal Mobility Planning:</strong>{" "}
              Ensuring businesses hire, promote, and retain the right talent to
              sustain operational success.
            </li>
          </ul>
        </section>

        <h2 className="text-2xl text-primary mb-2">
          Compliance-Focused Workforce Adjustments
        </h2>
        <section className="border border-border rounded-md p-6 bg-white dark:bg-card">
          <ul className="list-disc list-inside space-y-2 md:space-y-3">
            <li>
              <strong>Managing HR Risks During Workforce Changes:</strong> Ensuring
              compliance with U.S. federal, state, local, and international
              employment laws.
            </li>
            <li>
              <strong>Job Classification &amp; Compensation Reviews:</strong>{" "}
              Ensuring proper classification, salary structures, and benefits
              compliance.
            </li>
            <li>
              <strong>HR Compliance Audits for Organizational Changes:</strong>{" "}
              Evaluating contracts, severance agreements, and restructuring
              policies to align with best practices.
            </li>
          </ul>
        </section>

        <h2 className="text-2xl text-primary mb-2">
          Managing Layoffs &amp; Organizational Restructuring
        </h2>
        <section className="border border-border rounded-md p-6 bg-white dark:bg-card">
          <p className="mb-4">
            Downsizing and restructuring are sensitive business decisions that
            require careful execution to protect reputation, retain key
            employees, and minimize legal risks. We guide businesses through
            structured layoff procedures ensuring fairness and transparency.
          </p>
          <h3 className="text-lg font-medium mb-2">
            Ethical &amp; Legally Compliant Layoff Planning
          </h3>
          <ul className="list-disc list-outside ml-5 space-y-2 md:space-y-3 mb-4">
            <li>
              <strong>Assessing Workforce Needs &amp; Business Impact:</strong>{" "}
              Conducting HR impact assessments to determine which roles should be
              adjusted or eliminated.
            </li>
            <li>
              <strong>Ensuring Legal Compliance:</strong> Advising on WARN Act (U.S.),
              EU collective dismissal rules, and country-specific protections.
            </li>
            <li>
              <strong>Manager Training on Layoff Communication:</strong> Coaching
              leaders to deliver decisions professionally and empathetically.
            </li>
          </ul>
          <h3 className="text-lg font-medium mb-2">
            Employee Relations &amp; Support During Downsizing
          </h3>
          <ul className="list-disc list-inside space-y-2 md:space-y-3">
            <li>
              <strong>Severance Plan Development:</strong> Structuring packages
              with benefits continuation, transition assistance, and compliance.
            </li>
            <li>
              <strong>Handling Employee Morale &amp; Engagement:</strong> Strategies
              to support remaining staff, rebuild trust, and sustain productivity.
            </li>
            <li>
              <strong>Providing Outplacement Services:</strong> Resume coaching,
              job placement resources, and career counseling for displaced
              employees.
            </li>
          </ul>
        </section>

        <h2 className="text-2xl text-primary mb-2">
          Severance Policies &amp; Exit Strategy Development
        </h2>
        <section className="border border-border rounded-md p-6 bg-white dark:bg-card">
          <p className="mb-4">
            A well-structured exit strategy protects the company while supporting
            employees during transitions. We help businesses design severance
            policies that are competitive, compliant, and financially sustainable.
          </p>
          <h3 className="text-lg font-medium mb-2">
            Structuring Fair &amp; Compliant Severance Packages
          </h3>
          <ul className="list-disc list-inside space-y-2 md:space-y-3 mb-4">
            <li>
              <strong>Customized Severance Agreements:</strong> Drafting policies
              aligned with culture, budget, and labor laws.
            </li>
            <li>
              <strong>Benefits Continuation &amp; Post-Employment Support:</strong>{" "}
              Extended health benefits, COBRA compliance, and transition assistance.
            </li>
            <li>
              <strong>Documentation &amp; Compliance Reviews:</strong> Ensuring NDAs
              and exit documents comply with all relevant laws.
            </li>
          </ul>
          <h3 className="text-lg font-medium mb-2">
            Managing Employee Transitions &amp; Offboarding
          </h3>
          <ul className="list-disc list-inside space-y-2 md:space-y-3">
            <li>
              <strong>Knowledge Transfer &amp; Continuity Planning:</strong>{" "}
              Capturing and sharing critical knowledge before exits.
            </li>
            <li>
              <strong>Smooth Offboarding Processes:</strong> Standardizing exits,
              final pay, and property returns.
            </li>
            <li>
              <strong>Handling All Separation Types:</strong> Best practices for
              resignations, retirements, and involuntary terminations.
            </li>
          </ul>
        </section>

        <h2 className="text-2xl text-primary mb-2">
          Future Workforce Planning &amp; Organizational Growth
        </h2>
        <section className="border border-border rounded-md p-6 bg-white dark:bg-card">
          <p className="mb-4">
            A well-planned strategy ensures businesses remain adaptable and ready
            for future challenges. We help companies anticipate staffing needs,
            align HR practices with growth, and build a resilient workforce.
          </p>
          <h3 className="text-lg font-medium mb-2">
            Proactive Workforce Planning for Business Growth
          </h3>
          <ul className="list-disc list-outside ml-5 space-y-2 mb-4">
            <li>
              <strong>Analyzing Workforce Trends &amp; Hiring Needs:</strong>{" "}
              Identifying future talent gaps and emerging skills.
            </li>
            <li>
              <strong>Developing Scalable Recruitment &amp; Retention:</strong>{" "}
              Hiring at the right time to minimize turnover.
            </li>
            <li>
              <strong>Workforce Cost &amp; Compensation Planning:</strong>{" "}
              Balancing salaries, incentives, and benefits.
            </li>
          </ul>
          <h3 className="text-lg font-medium mb-2">
            Succession Planning &amp; Internal Talent Development
          </h3>
          <ul className="list-disc list-outside ml-5 space-y-2">
            <li>
              <strong>Identifying &amp; Preparing Future Leaders:</strong>{" "}
              Succession frameworks to ensure leadership continuity.
            </li>
            <li>
              <strong>Career Pathing &amp; Upskilling:</strong> Structured growth
              programs to develop internal talent.
            </li>
            <li>
              <strong>Hybrid &amp; Remote Workforce Management:</strong> Ensuring
              compliance and engagement for distributed teams.
            </li>
          </ul>
        </section>

        <h2 className="text-2xl text-primary mb-4">
          Why Choose Our Workforce Planning &amp; Downsizing Services?
        </h2>
        <ul className="list-disc list-outside ml-5 space-y-2 md:space-y-3">
          <li>
             Legally Compliant Workforce Solutions — Ensuring all transitions
            align with labor laws.
          </li>
          <li>
             HR-Driven Business Strategy — Integrating HR planning with company goals.
          </li>
          <li>
             Balanced Workforce Management — Tailored strategies for growth,
            restructuring, or downsizing.
          </li>
        </ul>
      </article>
    </div>
  )
}
