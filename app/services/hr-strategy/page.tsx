import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HRStrategyPage() {
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
        HR Strategy &amp;{" "}
        <span className="text-epiphanyBg">Organizational Development</span>
      </h1>

      <article className="prose prose-lg max-w-none space-y-8 md:space-y-12 bg-epiphanyGray p-4 md:p-8 rounded-lg shadow-md">
        <p>
          A strong HR strategy ensures that your workforce is aligned with your
          business goals, driving productivity, engagement, and long-term
          success. We help organizations develop and manage their workforce
          effectively through strategic HR planning, leadership development, and
          succession planning.
        </p>

        <h2 className="text-2xl text-primary mb-2">
          Developing Long‑Term HR Strategies
        </h2>
        <section className="border border-border rounded-md p-4 md:p-6 bg-white dark:bg-card">
          <p className="mb-4">
            A well-defined HR strategy aligns talent management with business
            objectives, ensuring organizations remain competitive in a dynamic
            market. We help companies build customized, forward-thinking HR
            frameworks that support growth and workforce sustainability.
          </p>

          <h3 className="text-lg font-medium mb-2">
            Strategic Workforce Planning &amp; Talent Management
          </h3>
          <ul className="list-disc list-outside ml-5 space-y-2 md:space-y-3">
            <li className="py-1">
              <div className="pl-1">
                <strong>Aligning HR with Business Goals:</strong> Designing HR
                strategies that support company expansion, innovation, and
                long-term sustainability.
              </div>
            </li>
            <li>
              <div className="pl-1">
                <strong>Workforce Analytics &amp; Data‑Driven Decisions:</strong>{" "}
                Utilizing HR metrics, turnover analysis, and talent forecasting to
                improve workforce planning.
              </div>
            </li>
            <li>
              <div className="pl-1">
                <strong>Scaling HR for Growth:</strong> Helping businesses optimize
                HR operations, policies, and systems as they expand locally and
                globally.
              </div>
            </li>
          </ul>
        </section>

        <section className="border border-border rounded-md p-6 bg-white dark:bg-card">
          <h3 className="text-lg font-medium mb-2">
            HR Policy Development &amp; Org Structure Optimization
          </h3>
          <ul className="list-disc list-outside ml-5 space-y-2 md:space-y-3">
            <li>
              <div className="pl-1">
                <strong>Creating HR Policies That Support Growth:</strong> Developing
                scalable policies that foster productivity, engagement, and
                compliance.
              </div>
            </li>
            <li>
              <div className="pl-1">
                <strong>Organizational Design &amp; Structure Optimization:</strong>{" "}
                Assessing current structures and recommending adjustments for
                efficiency, agility, and future scalability.
              </div>
            </li>
            <li>
              <div className="pl-1">
                <strong>HR Technology &amp; Process Optimization:</strong> Assisting
                with HRIS selection, automation, and integration to streamline
                workforce management.
              </div>
            </li>
          </ul>
        </section>

        <h2 className="text-2xl text-primary mb-2">
          Leadership Coaching &amp; Training
        </h2>
        <section className="border border-border rounded-md p-6 bg-white dark:bg-card">
          <p className="mb-4">
            Effective leadership is a key driver of employee engagement, team
            performance, and organizational success. We offer customized
            leadership coaching and training to help managers develop the skills
            needed to lead high-performing teams.
          </p>

          <h3 className="text-lg font-medium mb-2">
            Executive &amp; Management Coaching
          </h3>
          <ul className="list-disc list-outside ml-5 space-y-2 md:space-y-3 mb-4">
            <li>
              <div className="pl-1">
                <strong>One-on-One Leadership Coaching:</strong> Personalized
                coaching for executives, senior leaders, and mid-level managers to
                enhance leadership effectiveness.
              </div>
            </li>
            <li>
              <div className="pl-1">
                <strong>Leadership Development Programs:</strong> Custom training on
                decision-making, communication, emotional intelligence, and people
                management.
              </div>
            </li>
            <li>
              <div className="pl-1">
                <strong>Building High-Performance Teams:</strong> Cultivating strong
                leadership at every level for sustained success.
              </div>
            </li>
          </ul>

          <h3 className="text-lg font-medium mb-2">
            Training &amp; Development for Managers
          </h3>
          <ul className="list-disc list-outside ml-5 space-y-2 md:space-y-3">
            <li>
              <div className="pl-1">
                <strong>Performance Management Training:</strong> Teaching managers
                to set goals, give constructive feedback, and handle evaluations
                fairly.
              </div>
            </li>
            <li>
              <div className="pl-1">
                <strong>Conflict Resolution &amp; Employee Relations Training:</strong>{" "}
                Equipping leaders to mediate disputes and foster positive team
                dynamics.
              </div>
            </li>
            <li>
              <div className="pl-1">
                <strong>Change Management &amp; Agility:</strong> Preparing leaders
                to guide teams through transitions with minimal disruption.
              </div>
            </li>
          </ul>
        </section>

        <h2 className="text-2xl text-primary mb-2">
          Succession Planning &amp; Leadership Pipelines
        </h2>
        <section className="border border-border rounded-md p-6 bg-white dark:bg-card">
          <p className="mb-4">
            A proactive succession planning strategy ensures business continuity
            by preparing future leaders and identifying key talent for critical
            roles. We help businesses develop robust succession plans that align
            with organizational growth and workforce evolution.
          </p>

          <h3 className="text-lg font-medium mb-2">
            Identifying &amp; Developing Future Leaders
          </h3>
          <ul className="list-disc list-outside ml-5 space-y-2 md:space-y-3 mb-4">
            <li>
              <div className="pl-1">
                <strong>Talent Assessment &amp; Readiness Programs:</strong>{" "}
                Identifying high-potential employees and preparing them for
                leadership roles.
              </div>
            </li>
            <li>
              <div className="pl-1">
                <strong>Career Pathing &amp; Mobility Programs:</strong> Structured
                growth opportunities aligned with business needs.
              </div>
            </li>
            <li>
              <div className="pl-1">
                <strong>Mentorship &amp; Coaching:</strong> Formal programs guiding
                emerging leaders into key positions.
              </div>
            </li>
          </ul>

          <h3 className="text-lg font-medium mb-2">
            Ensuring Continuity &amp; Stability
          </h3>
          <ul className="list-disc list-outside ml-5 space-y-2 md:space-y-3">
            <li>
              <div className="pl-1">
                <strong>Emergency Succession Plans:</strong> Structured plans for
                C-suite, senior management, and mission-critical roles.
              </div>
            </li>
            <li>
              <div className="pl-1">
                <strong>Retirement &amp; Turnover Planning:</strong> Knowledge
                transfer strategies for demographic shifts and retention risks.
              </div>
            </li>
            <li>
              <div className="pl-1">
                <strong>Diversity &amp; Inclusion:</strong> Inclusive pipelines that
                reflect organizational values.
              </div>
            </li>
          </ul>
        </section>

        <h2 className="text-2xl text-primary mb-4">
          Why Choose Our HR Strategy &amp; Org Development Services?
        </h2>
        <ul className="list-disc list-outside ml-5 space-y-2 md:space-y-3">
          <li>
            <div className="pl-1">
              Future-Focused Workforce Planning – Designing strategies for
              sustainable growth.
            </div>
          </li>
          <li>
            <div className="pl-1">
              Leadership-Driven Development – Coaching programs that build
              capable leaders.
            </div>
          </li>
          <li>
            <div className="pl-1">
              Proactive Succession Planning – Preparing organizations for
              smooth leadership transitions.
            </div>
          </li>
        </ul>
      </article>
    </div>
  )
}
