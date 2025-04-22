import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function RecruitmentHiringSupportPage() {
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
        Recruitment &amp;{" "}
        <span className="text-epiphanyBg">Hiring Support</span>
      </h1>

      <article className="prose prose-lg max-w-none space-y-8 md:space-y-12 bg-epiphanyGray p-4 md:p-8 rounded-lg shadow-md">
        <p>
          Finding the right talent is essential for business growth and long-term
          success. We help companies streamline the hiring process while ensuring
          compliance with U.S. federal, state, and local laws as well as
          international labor regulations. Our approach reduces hiring risks,
          improves candidate quality, and ensures a smooth transition for new
          employees.
        </p>

        <h2 className="text-2xl text-primary mb-2 font-bold">
          Strategic Talent Acquisition &amp; Workforce Planning
        </h2>
        <section className="border border-border rounded-md p-4 md:p-6 bg-white dark:bg-card">
          <ul className="list-disc list-outside ml-5 space-y-2 md:space-y-3">
            <li className="py-1">
              <div className="pl-1">
                <strong>Align Hiring with Business Objectives:</strong> We help
                businesses develop a structured recruitment strategy that aligns with
                workforce planning, company growth, and long-term talent needs.
              </div>
            </li>
            <li>
              <div className="pl-1">
                <strong>Job Market &amp; Salary Benchmarking:</strong> We provide
                compensation benchmarking to ensure competitive salary structures,
                aligning with U.S. FLSA regulations, EU Pay Transparency Directive,
                and international market standards.
              </div>
            </li>
            <li>
              <div className="pl-1">
                <strong>Workforce Forecasting &amp; Skills Gap Analysis:</strong> We
                assess current workforce capabilities, identify future skill needs,
                and develop proactive hiring strategies.
              </div>
            </li>
          </ul>
        </section>

        <h2 className="text-2xl text-primary mb-2 font-bold">
          Legally Compliant Job Descriptions &amp; Job Postings
        </h2>
        <section className="border border-border rounded-md p-6 bg-white dark:bg-card">
          <ul className="list-disc list-outside ml-5 space-y-2 md:space-y-3">
            <li>
              <div className="pl-1">
                <strong>Clear, Inclusive, and Legally Sound Job Descriptions:</strong>{" "}
                We craft job descriptions that attract top talent while ensuring
                compliance with EEOC (U.S.), UK Equality Act, and global hiring laws
                to prevent discriminatory language.
              </div>
            </li>
            <li>
              <strong>Salary Transparency &amp; Compliance:</strong> We ensure
              compliance with pay disclosure laws in the U.S. (e.g., California,
              New York), the EU’s Pay Transparency Directive, and other global
              salary transparency regulations.
            </li>
            <li>
              <div className="pl-1">
                <strong>Optimized Job Postings for Global Talent Acquisition:</strong>{" "}
                We develop job postings optimized for job boards, social media, and
                industry-specific platforms, ensuring consistency for multi-country
                hiring.
              </div>
            </li>
          </ul>
        </section>

        <h2 className="text-2xl text-primary mb-2 font-bold">
          Compliant Candidate Screening &amp; Interviewing
        </h2>
        <section className="border border-border rounded-md p-6 bg-white dark:bg-card">
          <ul className="list-disc list-outside ml-5 space-y-2 md:space-y-3">
            <li>
              <strong>Pre‑Screening for Efficiency &amp; Compliance:</strong> We
              streamline applicant screening while ensuring hiring practices align
              with anti‑discrimination laws (Title VII, EEOC, GDPR, and global
              labor laws).
            </li>
            <li>
              <div className="pl-1">
                <strong>Legally Structured Interview Processes:</strong> We develop
                structured interview guides to ensure fair and unbiased hiring,
                minimizing legal risks. This includes competency-based and behavioral
                interviews, diversity &amp; inclusion best practices, and compliance
                with local laws on interview questions.
              </div>
            </li>
            <li>
              <div className="pl-1">
                <strong>Skills &amp; Cultural Fit Assessments:</strong> We integrate
                job-specific tests, technical evaluations, and cultural assessments to
                ensure new hires align with company values and expectations.
              </div>
            </li>
          </ul>
        </section>

        <h2 className="text-2xl text-primary mb-2 font-bold">
          International &amp; Cross‑Border Hiring Compliance
        </h2>
        <section className="border border-border rounded-md p-6 bg-white dark:bg-card">
          <ul className="list-disc list-outside ml-5 space-y-2 md:space-y-3">
            <li>
              <div className="pl-1">
                <strong>Work Visa &amp; Sponsorship Guidance:</strong> We advise
                businesses on U.S. H‑1B, L‑1, TN visas, UK Skilled Worker Visas, EU
                Blue Card, and other work authorization requirements.
              </div>
            </li>
            <li>
              <div className="pl-1">
                <strong>Global Hiring Risk Management:</strong> We ensure compliance
                with regional employment laws related to worker classification,
                taxation, and contract structures for international employees.
              </div>
            </li>
            <li>
              <div className="pl-1">
                <strong>Remote &amp; Hybrid Work Considerations:</strong> We guide
                companies on global remote hiring, including taxation issues,
                compliance with permanent establishment laws, and international
                employment agreements.
              </div>
            </li>
          </ul>
        </section>

        <h2 className="text-2xl text-primary mb-2 font-bold">
          Legally Compliant Background &amp; Reference Checks
        </h2>
        <section className="border border-border rounded-md p-6 bg-white dark:bg-card">
          <ul className="list-disc list-outside ml-5 space-y-2 md:space-y-3">
            <li>
              <div className="pl-1">
                <strong>Adherence to Global Background Screening Laws:</strong> We
                ensure all background checks comply with FCRA (U.S.), GDPR (EU), and
                country-specific laws.
              </div>
            </li>
            <li>
              <div className="pl-1">
                <strong>Comprehensive Verification Services:</strong> We validate
                employment history, educational credentials, and professional licenses
                to prevent hiring risks.
              </div>
            </li>
            <li>
              <strong>Reference Checks to Ensure Quality Hires:</strong> We conduct
              detailed reference checks to confirm a candidate’s performance,
              experience, and fit for the role.
            </li>
          </ul>
        </section>

        <h2 className="text-2xl text-primary mb-2 font-bold">
          Seamless &amp; Compliant Onboarding Solutions
        </h2>
        <section className="border border-border rounded-md p-6 bg-white dark:bg-card">
          <ul className="list-disc list-outside ml-5 space-y-2 md:space-y-3">
            <li>
              <div className="pl-1">
                <strong>Legally Sound Employment Documentation:</strong> We prepare
                and review employment contracts, offer letters, and tax forms,
                ensuring compliance with I‑9 &amp; E‑Verify, Right to Work checks,
                and international onboarding laws.
              </div>
            </li>
            <li>
              <div className="pl-1">
                <strong>HR Policy &amp; Handbook Integration:</strong> We ensure new
                hires receive clear documentation on company policies, benefits, and
                compliance requirements from day one.
              </div>
            </li>
            <li>
              <div className="pl-1">
                <strong>Customized New Hire Training &amp; Orientation:</strong> We
                develop onboarding plans that improve engagement and retention,
                including compliance training, job-specific roadmaps, and cultural
                integration.
              </div>
            </li>
          </ul>
        </section>

        <h2 className="text-2xl text-primary mb-4 font-bold">Why Work With Us?</h2>
        <ul className="list-disc list-outside ml-5 space-y-2 md:space-y-3">
          <li><div className="pl-1">Legally Compliant &amp; Risk‑Free Hiring</div></li>
          <li><div className="pl-1">Efficient &amp; Scalable Hiring Process</div></li>
          <li><div className="pl-1">Global &amp; Local Expertise</div></li>
        </ul>
      </article>
    </div>
  )
}
