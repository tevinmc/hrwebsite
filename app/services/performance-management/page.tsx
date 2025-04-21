import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PerformanceManagementPage() {
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
        Performance{" "}
        <span className="text-epiphanyBg">Management</span>
      </h1>

      <article className="prose prose-lg max-w-none space-y-12 bg-epiphanyGray p-8 rounded-lg shadow-md">
        <p>
          Engaged employees drive business success, reduce turnover, and improve
          overall productivity. We help businesses implement structured
          performance management systems that align with company goals, enhance
          employee engagement, and ensure compliance with U.S. and international
          labor laws.
        </p>

        <h2 className="text-2xl text-primary mb-4">
          Implementing Effective Performance Review Systems
        </h2>
        <section className="border border-border rounded-md p-6 bg-white dark:bg-card">
          <p className="mb-4">
            A well-structured performance review system provides clear
            expectations, continuous feedback, and fair evaluations. We assist
            businesses in designing and implementing performance management
            frameworks tailored to their workforce and industry.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Annual, Quarterly, or Ongoing Reviews:</strong> We develop
              structured systems balancing formal evaluations with continuous
              feedback.
            </li>
            <li>
              <strong>Competency‑Based &amp; Goal‑Oriented Assessments:</strong>{" "}
              Defining clear performance metrics aligned with business objectives.
            </li>
            <li>
              <strong>Legal Compliance &amp; Fair Practices:</strong> Ensuring
              reviews are non‑discriminatory, legally compliant, and aligned with
              EEOC, GDPR, and local employment laws.
            </li>
          </ul>
        </section>

        <h2 className="text-2xl text-primary mb-4">
          Training Leaders on Effective Performance Management
        </h2>
        <section className="border border-border rounded-md p-6 bg-white dark:bg-card">
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Coaching Managers on Constructive Feedback:</strong> Teaching
              leaders how to deliver clear, objective, and actionable evaluations.
            </li>
            <li>
              <strong>Bias‑Free &amp; Compliant Processes:</strong> Training to
              avoid unconscious bias and ensure fair assessments based on
              performance.
            </li>
            <li>
              <strong>Handling Difficult Conversations:</strong> Equipping
              managers with strategies for professional and productive
              performance discussions.
            </li>
          </ul>
        </section>

        <h2 className="text-2xl text-primary mb-4">
          Developing Retention &amp; Engagement Strategies
        </h2>
        <section className="border border-border rounded-md p-6 bg-white dark:bg-card">
          <p className="mb-4">
            High-performing companies focus on employee engagement and retention
            to create a motivated workforce. We develop tailored strategies to
            retain top talent and improve satisfaction.
          </p>
          <h3 className="text-lg font-medium mb-2">Employee Engagement Programs</h3>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>
              <strong>Culture &amp; Satisfaction Assessments:</strong> Surveys to
              measure sentiment, identify gaps, and create improvement plans.
            </li>
            <li>
              <strong>Recognition &amp; Rewards Strategies:</strong> Incentive and
              non‑monetary programs that drive engagement.
            </li>
            <li>
              <strong>Leadership &amp; Career Growth:</strong> Mentorship,
              internal mobility, and skills development to boost retention.
            </li>
          </ul>
          <h3 className="text-lg font-medium mb-2">Turnover Analysis &amp; Retention</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Key Trend Identification:</strong> Analyze exit interviews,
              sentiment, and benchmarks to spot risks.
            </li>
            <li>
              <strong>Proactive Strategies:</strong> Career development,
              compensation adjustments, and work–life balance plans.
            </li>
            <li>
              <strong>Remote &amp; Hybrid Engagement:</strong> Keeping distributed
              teams connected and motivated.
            </li>
          </ul>
        </section>

        <h2 className="text-2xl text-primary mb-4">
          Creating Improvement Plans for Underperforming Employees
        </h2>
        <section className="border border-border rounded-md p-6 bg-white dark:bg-card">
          <p className="mb-4">
            Addressing performance issues proactively and legally is key to
            improving productivity while minimizing risks. We help companies
            implement structured Performance Improvement Plans (PIPs).
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Step‑by‑Step Improvement Frameworks:</strong> Clear
              expectations, measurable goals, and realistic timeframes.
            </li>
            <li>
              <strong>Fair &amp; Documented Management:</strong> Compliance with
              FLSA, EEOC, and international standards to protect against claims.
            </li>
            <li>
              <strong>Coaching &amp; Training:</strong> Mentorship and targeted
              skill development for underperforming employees.
            </li>
          </ul>
        </section>

        <h2 className="text-2xl text-primary mb-4">
          Handling Terminations &amp; Legal Considerations
        </h2>
        <section className="border border-border rounded-md p-6 bg-white dark:bg-card">
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Documenting Issues Properly:</strong> Legally defensible
              records to prevent disputes.
            </li>
            <li>
              <strong>Ethical &amp; Compliant Terminations:</strong> Fair dismissal
              procedures in line with U.S., UK, and EU laws.
            </li>
            <li>
              <strong>Severance &amp; Exit Strategy:</strong> Structured offboarding
              with transition assistance and knowledge transfer.
            </li>
          </ul>
        </section>

        <h2 className="text-2xl text-primary mb-4">
          Why Choose Our Performance Management Services?
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li> Legally Compliant &amp; Risk‑Free Solutions</li>
          <li> Leadership‑Driven Performance Culture</li>
          <li> Customized &amp; Scalable Strategies</li>
        </ul>
      </article>
    </div>
  )
}
