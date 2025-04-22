import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function EmployeeRelationsPage() {
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
        Employee Relations &amp;{" "}
        <span className="text-epiphanyBg">Conflict Resolution</span>
      </h1>

      <article className="prose prose-lg max-w-none space-y-8 md:space-y-12 bg-epiphanyGray p-4 md:p-8 rounded-lg shadow-md">
        <p>
          A healthy workplace culture fosters employee engagement, reduces
          turnover, and enhances productivity. We help businesses manage employee
          concerns effectively, improve workplace communication, and minimize
          legal risks through proactive employee relations strategies. Our
          services ensure compliance with U.S. labor laws, international workplace
          regulations, and best practices in conflict resolution.
        </p>

        <h2 className="text-2xl text-primary mb-4">
          Workplace Dispute Mediation &amp; Conflict Resolution
        </h2>
        <section className="border border-border rounded-md p-4 md:p-6 bg-white dark:bg-card">
          <ul className="list-disc list-outside ml-5 space-y-2 md:space-y-3">
            <li className="py-1">
              <div className="pl-1">
                <strong>Impartial Workplace Mediation:</strong> We facilitate
                conflict resolution between employees, managers, and teams through
                structured mediation, ensuring fairness and confidentiality.
              </div>
            </li>
            <li>
              <strong>Compliance with Labor Laws:</strong> We guide businesses in
              resolving disputes in line with EEOC (U.S.), ACAS (UK), and other
              global employment regulations, ensuring non‑discriminatory and
              legally sound outcomes.
            </li>
            <li>
              <strong>Addressing Harassment &amp; Discrimination Claims:</strong>{" "}
              We handle workplace misconduct complaints in accordance with U.S.
              Title VII, EU anti‑discrimination laws, and country‑specific
              employment protections.
            </li>
            <li>
              <strong>Union &amp; Works Council Relations:</strong> We assist
              organizations in navigating unionized environments, ensuring
              compliance with the NLRA (U.S.), EU works council laws, and
              collective bargaining agreements.
            </li>
          </ul>
        </section>

        <h2 className="text-2xl text-primary mb-4">
          Manager Training: Communication &amp; Leadership Development
        </h2>
        <section className="border border-border rounded-md p-6 bg-white dark:bg-card">
          <ul className="list-disc list-inside space-y-2 md:space-y-3">
            <li>
              <strong>Training for Conflict Prevention &amp; Resolution:</strong> We
              equip managers with skills to de‑escalate conflicts, foster open
              communication, and address employee concerns early.
            </li>
            <li>
              <strong>Leadership Development &amp; Emotional Intelligence:</strong>{" "}
              Our coaching programs focus on effective communication, empathy,
              active listening, and decision‑making to create a positive work
              environment.
            </li>
            <li>
              <strong>Legal Compliance in Management Practices:</strong> We train
              managers to handle terminations, disciplinary actions, and disputes
              per U.S. and international employment laws.
            </li>
            <li>
              <strong>DEI in Leadership:</strong> We provide inclusive leadership
              training to help managers lead diverse teams effectively, fostering
              equal opportunity and non‑discriminatory practices.
            </li>
          </ul>
        </section>

        <h2 className="text-2xl text-primary mb-4">
          Handling Employee Grievances &amp; Complaint Resolution
        </h2>
        <section className="border border-border rounded-md p-6 bg-white dark:bg-card">
          <ul className="list-disc list-inside space-y-2 md:space-y-3">
            <li>
              <strong>Fair &amp; Transparent Grievance Policies:</strong> We help
              establish clear procedures that comply with U.S. labor laws, UK
              employment tribunals, and global regulations.
            </li>
            <li>
              <strong>Investigating Employee Complaints:</strong> We conduct
              thorough, impartial investigations into harassment, discrimination,
              retaliation, and other misconduct.
            </li>
            <li>
              <strong>Corrective Actions &amp; Legal Compliance:</strong> We assist
              in implementing fair disciplinary measures while protecting both
              employees and businesses.
            </li>
            <li>
              <strong>Whistleblower Protection:</strong> We align policies with
              SOX (U.S.), EU Whistleblower Directive, and international protections
              to prevent retaliation.
            </li>
          </ul>
        </section>

        <h2 className="text-2xl text-primary mb-4">
          Building a Positive Workplace Culture
        </h2>
        <section className="border border-border rounded-md p-6 bg-white dark:bg-card">
          <ul className="list-disc list-inside space-y-2 md:space-y-3">
            <li>
              <strong>Employee Engagement Strategies:</strong> We help boost morale,
              reduce turnover, and create a workplace where employees feel valued
              and heard.
            </li>
            <li>
              <strong>Proactive Relations Management:</strong> We develop policies
              that prevent conflicts, improve communication, and foster
              collaboration.
            </li>
            <li>
              <strong>Remote &amp; Hybrid Workforce Relations:</strong> We guide
              distributed teams on virtual conflict resolution and maintaining
              engagement in remote settings.
            </li>
          </ul>
        </section>

        <h2 className="text-2xl text-primary mb-4">
          Why Choose Our Employee Relations &amp; Conflict Resolution Services?
        </h2>
        <ul className="list-disc list-outside ml-5 space-y-2 md:space-y-3">
          <li> Legally Compliant &amp; Risk‑Free Solutions</li>
          <li> Proactive Conflict Prevention</li>
          <li> Customized Support for Your Business</li>
        </ul>
      </article>
    </div>
  )
}
