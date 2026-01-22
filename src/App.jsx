import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "@dr.pogodin/react-helmet";
import {
  CheckCircle2,
  Gauge,
  ShieldAlert,
  Cpu,
  Activity,
  LineChart,
  CircuitBoard,
  AlertTriangle,
  Target,
  BarChart3,
  Building2,
  Factory,
  Waves,
  TrendingUp,
  ArrowRight,
  ClipboardList,
  Wrench,
  Satellite,
  Calculator,
  GitCompare,
  Network,
  Bell,
  Layers,
  PlugZap,
} from "lucide-react";

/**
 * NOTE
 * The previous syntax error was caused by curly quotes (e.g., “ ”) being present
 * in JSX strings. TypeScript/JSX requires straight quotes (" or ').
 * This file uses ONLY straight quotes and normal hyphens to avoid parser issues.
 */

// Simple NBE Icon (SVG)
const NBELogo = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0"
    aria-label="NBE logo"
  >
    <circle cx="32" cy="32" r="30" fill="#0ea5e9" opacity="0.18" />
    <circle cx="32" cy="32" r="22" stroke="#22d3ee" strokeWidth="2" opacity="0.6" />
    <text
      x="32"
      y="38"
      textAnchor="middle"
      fontSize="18"
      fontWeight="800"
      letterSpacing="1.5"
      fill="#e2e8f0"
      fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"
    >
      NBE
    </text>
  </svg>
);

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="container mx-auto px-6 max-w-6xl">{children}</div>
);

const Section = ({
  id,
  title,
  subtitle,
  children,
}: {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) => (
  <section id={id} className="relative py-20">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/40 to-slate-950 pointer-events-none" />
    <Container>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-semibold text-white"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-2 text-slate-300 max-w-3xl"
        >
          {subtitle}
        </motion.p>
      )}
      <div className="mt-10">{children}</div>
    </Container>
  </section>
);

const Stat = ({ label, value }: { label: string; value: string }) => (
  <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 shadow-lg backdrop-blur">
    <div className="text-3xl font-bold text-white">{value}</div>
    <div className="text-slate-400 mt-1">{label}</div>
  </div>
);

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2 rounded-full bg-cyan-400/10 text-cyan-300 px-3 py-1 text-sm border border-cyan-500/30">
    {children}
  </span>
);

const Card = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
    <div className="flex items-center gap-2 text-cyan-300">
      {icon}
      <span className="font-medium">{title}</span>
    </div>
    <div className="mt-3 text-slate-300 space-y-3">{children}</div>
  </div>
);

const UseCaseCard = ({
  icon,
  tag,
  title,
  context,
  outcomes,
  to,
}: {
  icon: React.ReactNode;
  tag: string;
  title: string;
  context: string;
  outcomes: string[];
  to: string;
}) => (
  <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 shadow-lg backdrop-blur flex flex-col">
    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-2 text-cyan-300">
        {icon}
        <span className="font-medium">{tag}</span>
      </div>
      <span className="text-xs text-slate-400 border border-slate-800 rounded-full px-3 py-1">Case Study</span>
    </div>

    <div className="mt-4 text-xl font-semibold text-white leading-snug">{title}</div>
    <p className="mt-2 text-slate-300">{context}</p>

    <ul className="mt-4 space-y-2 text-sm text-slate-300">
      {outcomes.map((t, i) => (
        <li key={i} className="flex gap-3">
          <CheckCircle2 className="w-5 h-5 text-cyan-400" />
          <span>{t}</span>
        </li>
      ))}
    </ul>

    <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
      <span className="text-sm text-slate-400">Read the full story</span>
      <Link
        to={to}
        className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-slate-950/40 border border-slate-800 text-slate-200 hover:bg-slate-900 transition"
      >
        View
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  </div>
);

const TopNav = () => (
  <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/70 backdrop-blur">
    <Container>
      <div className="h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <NBELogo />
          <div className="font-semibold text-white tracking-wide">Northbound Engineering Services</div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link to="/" className="hover:text-white text-slate-300">
            Home
          </Link>
          <Link to="/use-case-1" className="hover:text-white text-slate-300">
            Use Case 1
          </Link>
          <Link to="/use-case-2" className="hover:text-white text-slate-300">
            Use Case 2
          </Link>
          <Link to="/use-case-3" className="hover:text-white text-slate-300">
            Use Case 3
          </Link>
        </nav>
      </div>
    </Container>
  </header>
);

const Footer = () => (
  <footer className="py-10 border-t border-slate-800/60">
    <Container>
      <div className="text-sm text-slate-400 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <NBELogo />
          <span>
            &copy; {new Date().getFullYear()} Northbound Engineering Services • Engineering reality. Predictable
            performance.
          </span>
        </div>
        <div className="flex gap-4">
          <Link to="/" className="hover:text-slate-200">
            Home
          </Link>
          <Link to="/use-case-1" className="hover:text-slate-200">
            Use Case 1
          </Link>
          <Link to="/use-case-2" className="hover:text-slate-200">
            Use Case 2
          </Link>
          <Link to="/use-case-3" className="hover:text-slate-200">
            Use Case 3
          </Link>
        </div>
      </div>
    </Container>
  </footer>
);

function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-200 selection:bg-cyan-500/30">
      <TopNav />
      {children}
      <Footer />
    </div>
  );
}

function HomePage() {
  return (
    <PageShell>
      <Helmet>
        <title>Northbound Engineering Services | Capital-Efficient Reliability</title>
        <meta
          name="description"
          content="Northbound Engineering Services helps asset-intensive operators turn engineering reality into predictable performance—reducing unplanned downtime, optimizing maintenance cost, and improving capital efficiency."
        />
        <meta property="og:title" content="Northbound Engineering Services | Capital-Efficient Reliability" />
        <meta
          property="og:description"
          content="Executive-led, engineering-backed reliability that drives capital efficiency: reduce NPT, optimize cost, and improve asset utilization."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?q=80&w=2000&auto=format&fit=crop"
            alt="Industrial operations"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/40 to-slate-950" />
        </div>
        <Container>
          <div className="relative py-28 md:py-36">
            <div className="max-w-3xl">
              <Pill>
                <Cpu className="w-4 h-4" /> From reactive to generative reliability
              </Pill>
              <h1 className="mt-4 text-4xl md:text-6xl font-semibold text-white leading-tight">
                From Reactive to <span className="text-cyan-400">Generative Reliability</span>
              </h1>
              <p className="mt-5 text-lg text-slate-300 max-w-2xl">
                Maintenance excellence starts with <span className="font-semibold text-white">engineering reality</span>
                and scales into predictable business performance. We combine decades of hands-on leadership, advanced
                digital technologies, and practical common sense to deliver forecast accuracy, predictable OPEX and
                Capex, optimal asset utilization, and clear operational visibility.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Pill>
                  <Gauge className="w-4 h-4" /> 30-70% less unplanned downtime
                </Pill>
                <Pill>
                  <LineChart className="w-4 h-4" /> 20-40% cost optimization
                </Pill>
                <Pill>
                  <ShieldAlert className="w-4 h-4" /> Alarm governance for safer ops
                </Pill>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SUMMARY */}
      <Section
        title="Executive Summary"
        subtitle="Maintenance efficiency is no longer a future aspiration - it is a mandatory competitive advantage."
      >
        <div className="grid md:grid-cols-3 gap-6">
          <Stat label="Unplanned downtime (NPT)" value="-30-70%" />
          <Stat label="Maintenance cost" value="-20-40%" />
          <Stat label="Productivity" value="+15-40%" />
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <img
            src="https://images.unsplash.com/photo-1551281044-8d8d0d8d0c03?q=80&w=1600&auto=format&fit=crop"
            alt="Control room"
            className="rounded-2xl shadow-2xl border border-slate-800"
          />
          <div className="space-y-4 text-slate-300">
            <p>
              In asset-intensive industries, maintenance is not a support function; it is the foundation for stable
              operations, predictable performance and controlled risk. Healthy equipment delivers high uptime, reduced
              operational and safety risk, consistent quality and disciplined processes.
            </p>
            <p>
              We partner from the operating floor to top management, strengthening processes, applying the right
              technologies and developing human capabilities to turn maintenance excellence into measurable business
              performance.
            </p>
            <ul className="space-y-2">
              {[
                "Enhanced HSE compliance through alarm governance",
                "Real-time operational/performance dashboards",
                "Clear scoreboard performance indicators",
              ].map((t, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* CHALLENGES */}
      <Section
        title="Industrial Challenges"
        subtitle="Common failure patterns that erode quality, uptime, and capital efficiency."
      >
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <Activity className="w-5 h-5" />,
              title: "Life vs Spec Gap",
              text: "Actual life of major components does not meet engineering specifications.",
            },
            {
              icon: <AlertTriangle className="w-5 h-5" />,
              title: "Spare Response Limits",
              text: "Inventory levels cannot guarantee timely response to failures.",
            },
            {
              icon: <CircuitBoard className="w-5 h-5" />,
              title: "Data Silos",
              text: "Fragmented systems delay decisions and hide systemic patterns.",
            },
            {
              icon: <Gauge className="w-5 h-5" />,
              title: "Over-Maintenance",
              text: "Uncoordinated or time-based repairs increase cost without reducing failures.",
            },
            {
              icon: <ShieldAlert className="w-5 h-5" />,
              title: "Alarm Flooding",
              text: "Noise overwhelms operators and reduces situational awareness.",
            },
            {
              icon: <LineChart className="w-5 h-5" />,
              title: "High TCO",
              text: "Lost reliability drives higher total cost of ownership and unplanned work.",
            },
          ].map((c, i) => (
            <div key={i} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="flex items-center gap-2 text-cyan-300">
                {c.icon}
                <span className="font-medium">{c.title}</span>
              </div>
              <p className="mt-2 text-slate-300">{c.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* USE CASES (CARDS) */}
      <Section title="Use Cases" subtitle="Three real-world transformations - summarized for fast scanning.">
        <div className="grid md:grid-cols-3 gap-6">
          <UseCaseCard
            icon={<Factory className="w-5 h-5" />}
            tag="Use Case 1"
            title="Zero Service Quality Losses in 6 Months"
            context="Cementing plant manufacturing - shifted from PM compliance to failure-mode maintenance effectiveness."
            outcomes={[
              "MTBF tripled in 3 months",
              "6 months with zero equipment-driven quality losses",
              "Costs reduced after repeat failures were eliminated",
            ]}
            to="/use-case-1"
          />

          <UseCaseCard
            icon={<Building2 className="w-5 h-5" />}
            tag="Use Case 2"
            title="From Availability Obsession to Capital Discipline"
            context="3,500-asset construction fleet - redefined utilization economically using telematics and ROI by project."
            outcomes={[
              "CAPEX growth reduced at least 50%",
              "Rental strategy increased to about 30% for flexibility",
              "Standby cost exposed the price of just-in-case assets",
            ]}
            to="/use-case-2"
          />

          <UseCaseCard
            icon={<Waves className="w-5 h-5" />}
            tag="Use Case 3"
            title="IIoT for Mobile Energy Operations"
            context="Mobile plants up to 50,000 HP - edge-first IIoT enabled predictive insights under changing conditions."
            outcomes={["Production increased up to 30%", "NPT reduced about 50%", "ROI about 5x in 6 months"]}
            to="/use-case-3"
          />
        </div>
      </Section>

      {/* CTA */}
      <section className="relative py-20 border-t border-slate-800/60">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-fuchsia-500/10 to-transparent" />
        <Container>
          <div className="relative p-8 md:p-12 rounded-3xl bg-slate-900/70 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 text-cyan-300">
                <NBELogo />
                <span className="font-semibold">Northbound Engineering Services</span>
              </div>
              <h3 className="mt-3 text-2xl md:text-3xl font-semibold text-white">Begin your reliability transformation</h3>
              <p className="mt-2 text-slate-300 max-w-2xl">
                Start with a readiness assessment to identify value pockets, align governance, and build a roadmap to
                predictable performance.
              </p>
            </div>
            <Link
              to="/use-case-1"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-cyan-500 text-slate-900 font-semibold shadow-lg hover:brightness-110 transition"
            >
              View Use Cases
            </Link>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}

// USE CASE 1 PAGE
function UseCase1Page() {
  return (
    <PageShell>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581091215367-59ab6b46b1b9?q=80&w=2000&auto=format&fit=crop"
            alt="Manufacturing operations"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/45 to-slate-950" />
        </div>

        <Container>
          <div className="relative py-24 md:py-32">
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-3">
                <Pill>
                  <Factory className="w-4 h-4" /> Use Case 1
                </Pill>
                <Pill>
                  <ClipboardList className="w-4 h-4" /> Maintenance Effectiveness
                </Pill>
                <Pill>
                  <ShieldAlert className="w-4 h-4" /> Quality Stability
                </Pill>
              </div>

              <h1 className="mt-4 text-4xl md:text-6xl font-semibold text-white leading-tight">
                Achieving <span className="text-cyan-400">Zero Service Quality Losses</span>
                <span className="block">in Six Months Through Maintenance Effectiveness</span>
              </h1>

              <p className="mt-5 text-lg text-slate-300 max-w-3xl">
                A cementing plant manufacturing facility in Texas proved that maintenance effectiveness - not reaction
                speed - is the foundation of service quality. NBE redesigned the maintenance system around failure
                modes, adopted effectiveness KPIs, and delivered sustained quality stability.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Pill>
                  <TrendingUp className="w-4 h-4" /> MTBF tripled (3 months)
                </Pill>
                <Pill>
                  <ShieldAlert className="w-4 h-4" /> 6 months zero quality losses
                </Pill>
                <Pill>
                  <LineChart className="w-4 h-4" /> Cost reduction followed reliability
                </Pill>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-slate-900/70 border border-slate-800 text-slate-200 font-semibold hover:bg-slate-900 transition"
                >
                  Back Home
                </Link>
                <Link
                  to="/use-case-2"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-cyan-500 text-slate-900 font-semibold shadow-lg hover:brightness-110 transition"
                >
                  Next: Use Case 2
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section
        title="1) Industry and Operational Context"
        subtitle="A service-critical manufacturing operation where quality depends on equipment reliability."
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-slate-300 space-y-4">
            <p>
              The organization operates a cementing plant manufacturing facility in Texas, supporting service-critical
              operations where equipment reliability directly impacts service quality and customer commitments.
            </p>
            <p>
              The plant operated with high production pressure and increasing market demand, requiring uninterrupted and
              stable performance from its assets. At the time of engagement, the maintenance organization was perceived
              as highly mature, with strong execution discipline and rapid response capabilities.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <Stat label="Environment" value="High demand" />
            <Stat label="Risk" value="Quality losses" />
            <Stat label="Perception" value="Highly mature" />
            <Stat label="Reality" value="Repeat failures" />
          </div>
        </div>
      </Section>

      <Section title="2) Challenges" subtitle="Great responsiveness was masking low maintenance effectiveness.">
        <div className="grid md:grid-cols-3 gap-6">
          <Card icon={<CheckCircle2 className="w-5 h-5" />} title="Strong execution metrics">
            <ul className="space-y-2 text-sm">
              {[
                "Very high preventive maintenance plan compliance",
                "Excellent Mean Time To Repair (MTTR)",
                "24x7 readiness and rapid response culture",
                "Fully stocked spare-parts inventory",
              ].map((t, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card icon={<AlertTriangle className="w-5 h-5" />} title="Business performance contradicted">
            <p>
              Service quality losses were increasing, and equipment failures ranked as the leading cause. Failures were
              frequent, repetitive, and directly impacting service delivery.
            </p>
          </Card>

          <Card icon={<GitCompare className="w-5 h-5" />} title="The contradiction">
            <ul className="space-y-2 text-sm">
              {[
                "Failures were repaired quickly",
                "But failures were happening too often",
                "High responsiveness was masking low effectiveness",
                "The organization optimized reaction speed, not prevention",
              ].map((t, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <Section title="3) Objectives" subtitle="Shift from cosmetic KPIs to real reliability and quality stability.">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-slate-300">
            <div className="flex items-center gap-2 text-cyan-300">
              <Target className="w-5 h-5" />
              <span className="font-medium">Leadership expectations</span>
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                "Better understand equipment failures and root causes",
                "Reduce repetitive failures affecting service quality",
                "Lower maintenance costs where feasible",
                "Prepare for forecasted increase in demand",
                "Avoid unplanned breakdowns during growth",
              ].map((t, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-slate-300 space-y-4">
            <div className="text-white font-medium">Priority</div>
            <p>
              The priority was not improved reporting or superficial metrics - it was reliability, quality stability,
              and confidence through demand growth.
            </p>
            <div className="mt-2 p-4 rounded-2xl bg-slate-950/50 border border-slate-800">
              <div className="text-white font-medium">Key reframe</div>
              <p className="mt-2 text-sm">Measure and manage maintenance effectiveness - not speed of reaction.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section
        title="4) Approach and Solution"
        subtitle="Failure-mode strategy redesign and effectiveness-based work."
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-slate-300 space-y-4">
            <div className="flex items-center gap-2 text-cyan-300">
              <ClipboardList className="w-5 h-5" />
              <span className="font-medium">What NBE analyzed</span>
            </div>
            <p>
              NBE performed a focused but deep analysis of historical maintenance and failure records using an FMEA
              approach to identify dominant failure mechanisms.
            </p>
            <div className="text-white font-medium">Findings</div>
            <ul className="space-y-2 text-sm">
              {[
                "Time-based preventive maintenance was ineffective",
                "PM checklists emphasized inspection - not condition restoration",
                "Same failure modes recurred shortly after PM execution",
              ].map((t, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-slate-300 space-y-4">
            <div className="flex items-center gap-2 text-cyan-300">
              <Wrench className="w-5 h-5" />
              <span className="font-medium">Strategy redesign</span>
            </div>
            <ul className="space-y-2 text-sm">
              {[
                "Eliminate checklist PM tasks with no impact on failure prevention",
                "Define technical actions to restore condition for up to 78% of identified failure modes",
                "Reset intervals based on failure behavior - not fixed schedules",
                "Redefine objective from plan compliance to maintenance effectiveness",
              ].map((t, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-3 p-4 rounded-2xl bg-slate-950/50 border border-slate-800">
              <div className="text-white font-medium">Turning point KPI</div>
              <p className="mt-2 text-sm">
                MTBF measured against the last preventive intervention - linking maintenance actions directly to
                reliability outcomes.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section title="5) Change Management and Adoption" subtitle="Shift behavior from responsiveness to prevention value.">
        <div className="grid md:grid-cols-3 gap-6">
          <Card icon={<Activity className="w-5 h-5" />} title="Mindset shift">
            <p>
              Technicians and supervisors were used to being measured on response time and compliance. The transition
              required redefining what good looked like.
            </p>
          </Card>
          <Card icon={<BarChart3 className="w-5 h-5" />} title="Enable adoption">
            <ul className="space-y-2 text-sm">
              {[
                "Task-specific work instructions",
                "New KPIs and dashboards focused on effectiveness",
                "Management objectives aligned to reliability and quality",
              ].map((t, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card icon={<ShieldAlert className="w-5 h-5" />} title="Behavioral reframe">
            <p>Preventing failures delivers more value than repairing them quickly.</p>
          </Card>
        </div>
      </Section>

      <Section title="6) Results and Outcomes" subtitle="Rapid improvements with sustained stability.">
        <div className="grid md:grid-cols-4 gap-6">
          <Stat label="MTBF" value="x3" />
          <Stat label="Quality losses" value="0 (6 mo)" />
          <Stat label="Operational volume" value="Peak" />
          <Stat label="Maintenance cost" value="Down (3 mo)" />
        </div>
      </Section>

      <Section title="7) Business Impact" subtitle="Maintenance became a strategic quality enabler.">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-slate-300">
            <p>
              The initiative demonstrated that maintenance effectiveness - not responsiveness - is the foundation of
              service quality. Stability increased confidence to meet higher demand while reducing operational risk.
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                "Stable and predictable service performance",
                "Increased confidence to meet higher demand",
                "Reduced operational risk",
                "Lower maintenance costs through failure elimination",
                "Maintenance aligned with business and quality objectives",
              ].map((t, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-slate-300">
            <div className="text-white font-medium">Key takeaways</div>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                "High PM compliance does not guarantee high reliability",
                "MTTR optimization alone cannot prevent quality losses",
                "Failure-mode-based maintenance is essential for service stability",
                "Maintenance effectiveness must be measured, not assumed",
                "Quality performance is strongly driven by maintenance strategy",
              ].map((t, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <section className="relative py-16 border-t border-slate-800/60">
        <Container>
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-slate-950/40 border border-slate-800 hover:bg-slate-900 transition"
            >
              <ArrowRight className="w-4 h-4 rotate-180" /> Back Home
            </Link>
            <Link
              to="/use-case-2"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-slate-950/40 border border-slate-800 hover:bg-slate-900 transition"
            >
              Next: Use Case 2 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}

// USE CASE 2 PAGE (FULL)
function UseCase2Page() {
  return (
    <PageShell>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=2000&auto=format&fit=crop"
            alt="Construction fleet"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/45 to-slate-950" />
        </div>

        <Container>
          <div className="relative py-24 md:py-32">
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-3">
                <Pill>
                  <Building2 className="w-4 h-4" /> Use Case 2
                </Pill>
                <Pill>
                  <BarChart3 className="w-4 h-4" /> Capital Discipline
                </Pill>
                <Pill>
                  <Satellite className="w-4 h-4" /> Telematics and BI
                </Pill>
              </div>

              <h1 className="mt-4 text-4xl md:text-6xl font-semibold text-white leading-tight">
                From Availability Obsession to <span className="text-cyan-400">Capital Discipline</span>
                <span className="block">Reframing Maintenance and Asset Management</span>
              </h1>

              <p className="mt-5 text-lg text-slate-300 max-w-3xl">
                A capital-intensive Latin American construction business transformed asset decisions by redefining
                utilization economically using telematics, ROI by project, and transparent dashboards. The operating
                model shifted from availability-driven behavior to capital-efficiency discipline.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Pill>
                  <TrendingUp className="w-4 h-4" /> CAPEX growth down 50%
                </Pill>
                <Pill>
                  <GitCompare className="w-4 h-4" /> Rental share about 30%
                </Pill>
                <Pill>
                  <Calculator className="w-4 h-4" /> Hourly cost of capital model
                </Pill>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/use-case-1"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-slate-900/70 border border-slate-800 text-slate-200 font-semibold hover:bg-slate-900 transition"
                >
                  Prev: Use Case 1
                </Link>
                <Link
                  to="/use-case-3"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-cyan-500 text-slate-900 font-semibold shadow-lg hover:brightness-110 transition"
                >
                  Next: Use Case 3
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section
        title="1) Background and Context"
        subtitle="Availability pressure often drives excess owned fleets - at the expense of capital efficiency."
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-slate-300 space-y-4">
            <p>
              Capital-intensive construction businesses operate under constant execution pressure: schedules are
              aggressive, margins are tight, and delays translate directly into financial losses. Equipment availability
              is often treated as the primary risk.
            </p>
            <p>
              The company generated about USD 350M in annual revenue, ran about 25 projects in parallel, and owned about
              3,500 assets. More than 95% of the fleet was owned, with high-capacity units exceeding USD 1.5M each.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <Stat label="Annual revenue" value="~$350M" />
            <Stat label="Projects" value="~25" />
            <Stat label="Fleet size" value="~3,500" />
            <Stat label="Owned share" value=">95%" />
          </div>
        </div>
      </Section>

      <Section title="2) Initial Problem Statement" subtitle="Maintenance was blamed - until data showed a deeper constraint.">
        <div className="grid md:grid-cols-3 gap-6">
          <Card icon={<Wrench className="w-5 h-5" />} title="Leadership narrative">
            <p>
              Project teams argued that low availability forced expensive rentals, eroding margins. Utilization metrics
              were below 60% (defined as assigned to a project).
            </p>
          </Card>
          <Card icon={<CheckCircle2 className="w-5 h-5" />} title="Maintenance response">
            <ul className="space-y-2 text-sm">
              {[
                "Preventive maintenance discipline",
                "Spare parts availability",
                "Failure response time",
                "Equipment turnaround time",
              ].map((t, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card icon={<AlertTriangle className="w-5 h-5" />} title="Contradiction">
            <p>
              Availability improved and reported utilization rose to about 95%, yet asset requests persisted and rentals
              did not decline. If availability was no longer the constraint, why did demand keep growing?
            </p>
          </Card>
        </div>
      </Section>

      <Section title="3) Turning Insight" subtitle="Availability was masking planning inefficiency and capital risk.">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-slate-300 space-y-4">
            <p>
              Service records suggested many assets accumulated far fewer productive hours than expected. The pattern
              was systemic and created resistance. Finance recognized the capital risk: with the equipment base
              approaching USD 200M, small inefficiencies destroyed large value.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-slate-300">
            <div className="text-white font-medium">Key insight</div>
            <p className="mt-3">
              The organization was not suffering from lack of availability; it was suffering from lack of capital
              discipline and resource planning. Equipment was requested just in case to compensate for uncertainty,
              poor coordination, and risk aversion.
            </p>
          </div>
        </div>
      </Section>

      <Section title="4) Telematics and Economic Utilization" subtitle="Measure productive hours, not administrative assignment.">
        <div className="grid md:grid-cols-3 gap-6">
          <Card icon={<Satellite className="w-5 h-5" />} title="Rollout">
            <p>
              Implemented aftermarket telematics to capture equipment location and operating hours under limited site
              connectivity.
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {["About 8 months rollout", "About 6 months to build trust", "About 18 months adoption"].map((t, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card icon={<GitCompare className="w-5 h-5" />} title="New definition">
            <p>
              Telematics exposed the gap between assigned utilization and economic utilization. Many assets were on-site
              but idle while still generating depreciation, capital cost, and maintenance.
            </p>
          </Card>

          <Card icon={<Calculator className="w-5 h-5" />} title="Utilization reframed">
            <p>Utilization became productive operating hours relative to capital employed, comparable to rentals.</p>
          </Card>
        </div>
      </Section>

      <Section title="5) Capital Allocation and ROI Model" subtitle="Make idle capital visible with a project-level cost of capital.">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-slate-300 space-y-4">
            <div className="text-white font-medium">Project capital model</div>
            <ul className="space-y-2 text-sm">
              {[
                "Calculate capital allocated per project (age-adjusted inventory value)",
                "Define minimum required return using WACC expectations",
                "Divide required return by operating hours to get true hourly cost of capital",
                "Define standby cost to quantify idle penalty",
              ].map((t, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-slate-300">
            <div className="text-white font-medium">Decision question changed</div>
            <p className="mt-3">From: Do we have enough equipment?</p>
            <p className="mt-2">To: Can this project economically justify the capital it is consuming?</p>
          </div>
        </div>
      </Section>

      <Section title="6) BI and Transparency" subtitle="Public, comparable metrics shifted behavior faster than policy.">
        <div className="grid md:grid-cols-3 gap-6">
          <Card icon={<BarChart3 className="w-5 h-5" />} title="Monthly dashboard">
            <ul className="space-y-2 text-sm">
              {[
                "ROI by project",
                "Telematics-based utilization",
                "Maintenance cost",
                "Equipment capital as percent of project revenue",
              ].map((t, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card icon={<AlertTriangle className="w-5 h-5" />} title="Resistance">
            <p>Site leadership resisted initially, but economic exposure created the decisive shift.</p>
          </Card>
          <Card icon={<TrendingUp className="w-5 h-5" />} title="Behavior change">
            <p>Requests became economically justified rather than precautionary, improving planning discipline.</p>
          </Card>
        </div>
      </Section>

      <Section title="7) Illustrative Example" subtitle="High-capacity cranes: from excess capacity to high-utilization execution.">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-slate-300 space-y-4">
            <p>
              One project planned continuous use of five cranes (about USD 1.5M each) and still rented additional cranes
              due to perceived availability risk. Maintenance ensured availability.
            </p>
            <p>
              Telematics showed utilization was far below expectations. After ROI exposure, execution was restructured
              around three owned cranes at high utilization plus selective rental, and idle cranes were redeployed.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-slate-300">
            <div className="text-white font-medium">Outcome</div>
            <ul className="mt-4 space-y-2 text-sm">
              {["Cost savings", "Reduced idle capital", "Improved fleet flexibility", "No compromise on delivery"].map(
                (t, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                    <span>{t}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </Section>

      <Section title="8) Results and Business Impact" subtitle="A multi-year shift from availability to capital efficiency.">
        <div className="grid md:grid-cols-4 gap-6">
          <Stat label="CAPEX growth" value="Down 50%" />
          <Stat label="Rental share" value="About 30%" />
          <Stat label="Some classes" value="100% rental" />
          <Stat label="Adoption" value="About 18 months" />
        </div>
      </Section>

      <Section title="9) Lessons Learned" subtitle="What this case proves for asset-intensive businesses.">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-slate-300">
            <ul className="space-y-2 text-sm">
              {[
                "Maintenance performance alone does not guarantee business efficiency",
                "Utilization must be defined economically, not administratively",
                "Transparency changes behavior faster than policy",
                "Maintenance and asset management are strategic capital functions",
                "Trust takes time - data credibility and adoption require sustained leadership",
              ].map((t, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-slate-300 space-y-4">
            <div className="text-white font-medium">Design principle</div>
            <p>
              Use telematics to measure productive hours, then govern capital with ROI dashboards that make idle assets
              visible.
            </p>
            <div className="mt-2 flex flex-wrap gap-3">
              <Pill>
                <Satellite className="w-4 h-4" /> Telematics
              </Pill>
              <Pill>
                <BarChart3 className="w-4 h-4" /> ROI dashboards
              </Pill>
              <Pill>
                <Calculator className="w-4 h-4" /> Cost of capital
              </Pill>
            </div>
          </div>
        </div>
      </Section>

      <section className="relative py-16 border-t border-slate-800/60">
        <Container>
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <Link
              to="/use-case-1"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-slate-950/40 border border-slate-800 hover:bg-slate-900 transition"
            >
              <ArrowRight className="w-4 h-4 rotate-180" /> Prev: Use Case 1
            </Link>
            <Link
              to="/use-case-3"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-slate-950/40 border border-slate-800 hover:bg-slate-900 transition"
            >
              Next: Use Case 3 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}

// USE CASE 3 PAGE
function UseCase3Page() {
  return (
    <PageShell>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=2000&auto=format&fit=crop"
            alt="Mobile energy operations"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/45 to-slate-950" />
        </div>

        <Container>
          <div className="relative py-24 md:py-32">
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-3">
                <Pill>
                  <Waves className="w-4 h-4" /> Use Case 3
                </Pill>
                <Pill>
                  <Network className="w-4 h-4" /> IIoT Platform
                </Pill>
                <Pill>
                  <Bell className="w-4 h-4" /> Alarm Governance
                </Pill>
              </div>

              <h1 className="mt-4 text-4xl md:text-6xl font-semibold text-white leading-tight">
                IIoT Driving <span className="text-cyan-400">Peak Efficiency</span>, Reliability,
                <span className="block">and Cultural Transformation in Mobile Energy Operations</span>
              </h1>

              <p className="mt-5 text-lg text-slate-300 max-w-3xl">
                Mobile and dismountable plants, mobilizing up to 50,000 horsepower, operate in remote environments with
                changing conditions and intermittent connectivity. NBE implemented an edge-first IIoT reliability
                platform with adaptive predictive intelligence and strong alarm governance.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Pill>
                  <TrendingUp className="w-4 h-4" /> Production up to +30%
                </Pill>
                <Pill>
                  <Gauge className="w-4 h-4" /> NPT about -50%
                </Pill>
                <Pill>
                  <LineChart className="w-4 h-4" /> ROI about 5x (6 months)
                </Pill>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/use-case-2"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-slate-900/70 border border-slate-800 text-slate-200 font-semibold hover:bg-slate-900 transition"
                >
                  Prev: Use Case 2
                </Link>
                <Link
                  to="/"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-cyan-500 text-slate-900 font-semibold shadow-lg hover:brightness-110 transition"
                >
                  Back Home
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section
        title="1) Industry and Operational Context"
        subtitle="Mobile field operations where reliability depends on coordinated assets and controls."
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-slate-300 space-y-4">
            <p>
              The organization is an energy-sector service provider whose core business depends on mobilizing high-power
              industrial equipment to deliver complex field services. Operations can require coordinated deployment of
              up to 50,000 horsepower, assembled as mobile and dismountable plants.
            </p>
            <p>
              These operations rely on precise interaction of multiple assets, control systems, and power units under
              changing environmental, operational, and connectivity conditions.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <Stat label="Scale" value="Up to 50,000 HP" />
            <Stat label="Environment" value="Remote and dynamic" />
            <Stat label="Connectivity" value="Intermittent" />
            <Stat label="Constraint" value="Coordination" />
          </div>
        </div>
      </Section>

      <Section title="2) Challenges" subtitle="Operational complexity plus changing edge conditions plus limited bandwidth.">
        <div className="grid md:grid-cols-3 gap-6">
          <Card icon={<PlugZap className="w-5 h-5" />} title="Operational complexity">
            <ul className="space-y-2 text-sm">
              {[
                "Mobilize, interconnect, and commission repeatedly",
                "Interoperability across heterogeneous assets and controls",
                "Constantly changing operating conditions",
              ].map((t, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card icon={<Network className="w-5 h-5" />} title="Connectivity constraints">
            <ul className="space-y-2 text-sm">
              {[
                "Internet often limited, unstable, or unavailable",
                "Low-bandwidth and non-wired environments",
                "Remote sites require offline robustness",
              ].map((t, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card icon={<AlertTriangle className="w-5 h-5" />} title="Predictive limits">
            <ul className="space-y-2 text-sm">
              {[
                "Traditional models struggle with changing conditions",
                "Static thresholds become unreliable",
                "Raw streaming overloads teams and networks",
              ].map((t, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <Section title="3) Objectives" subtitle="Improve efficiency and reliability without creating alarm fatigue or overload.">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-slate-300">
            <div className="flex items-center gap-2 text-cyan-300">
              <Target className="w-5 h-5" />
              <span className="font-medium">Program objectives</span>
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                "Improve operational efficiency and reliability of mobile assets",
                "Reduce non-productive time (NPT) during field operations",
                "Enable predictive insights despite changing edge conditions",
                "Integrate heterogeneous equipment into a single operational view",
                "Avoid alarm fatigue and operational overload",
                "Drive adoption and trust in remote monitoring",
              ].map((t, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-slate-300 space-y-4">
            <div className="text-white font-medium">Success criteria</div>
            <p>
              Predictive maintenance needed to be actionable in dynamic field conditions without overwhelming crews.
              Edge-first contextualization and governance were mandatory.
            </p>
          </div>
        </div>
      </Section>

      <Section title="4) Approach and Solution" subtitle="Edge-first integration designed for low-bandwidth environments.">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-slate-300 space-y-4">
            <div className="flex items-center gap-2 text-cyan-300">
              <Network className="w-5 h-5" />
              <span className="font-medium">Platform design</span>
            </div>
            <ul className="space-y-2 text-sm">
              {[
                "Leverage embedded sensors and existing control systems",
                "Integrate multiple communication protocols and architectures",
                "Unify control and monitoring into one platform",
                "Create transmission rules for intermittent connectivity",
              ].map((t, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-slate-300 space-y-4">
            <div className="flex items-center gap-2 text-cyan-300">
              <Layers className="w-5 h-5" />
              <span className="font-medium">Why edge-first</span>
            </div>
            <ul className="space-y-2 text-sm">
              {[
                "Filter and contextualize data at the edge",
                "Transmit only meaningful, actionable information",
                "Maintain robustness under intermittent connectivity",
                "Make large-scale remote monitoring feasible",
              ].map((t, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section
        title="5) Predictive Intelligence and Alarm Governance"
        subtitle="Adaptive prediction plus discipline to prevent alarm fatigue."
      >
        <div className="grid md:grid-cols-3 gap-6">
          <Card icon={<LineChart className="w-5 h-5" />} title="Predictive build">
            <ul className="space-y-2 text-sm">
              {[
                "Identify critical variables and relationships",
                "Correlate conditions to failure behavior",
                "Create about 150 predictive algorithms",
              ].map((t, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card icon={<Bell className="w-5 h-5" />} title="Governance">
            <ul className="space-y-2 text-sm">
              {[
                "Classify alarms by risk and impact",
                "Prioritize and escalate based on context",
                "Eliminate nuisance and low-value alarms",
              ].map((t, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card icon={<ShieldAlert className="w-5 h-5" />} title="Outcome">
            <p>
              Predictive insights supported decision-making rather than overwhelming operators, building trust and
              sustained adoption.
            </p>
          </Card>
        </div>
      </Section>

      <Section title="6) Change Management and Adoption" subtitle="Reliability improvement accelerated trust in remote monitoring.">
        <div className="grid md:grid-cols-3 gap-6">
          <Card icon={<Activity className="w-5 h-5" />} title="Initial skepticism">
            <ul className="space-y-2 text-sm">
              {["Remote monitoring", "Centralized decision support", "Algorithm-driven recommendations"].map(
                (t, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                    <span>{t}</span>
                  </li>
                )
              )}
            </ul>
          </Card>
          <Card icon={<TrendingUp className="w-5 h-5" />} title="Trust built">
            <ul className="space-y-2 text-sm">
              {[
                "Operations teams trusted predictive alerts",
                "Maintenance shifted proactive",
                "Remote control center became an operational partner",
              ].map((t, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card icon={<CheckCircle2 className="w-5 h-5" />} title="Cultural outcome">
            <p>Moved from experience-driven reaction to data-supported execution without losing local expertise.</p>
          </Card>
        </div>
      </Section>

      <Section title="7) Results and Outcomes" subtitle="Operational gains with scalability across operations.">
        <div className="grid md:grid-cols-4 gap-6">
          <Stat label="Production" value="+30%" />
          <Stat label="NPT" value="Down 50%" />
          <Stat label="Predictive algorithms" value="~150" />
          <Stat label="Scalability" value="Proven" />
        </div>
      </Section>

      <Section title="8) Business Impact" subtitle="IIoT evolved from experimental to a core operational capability.">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-slate-300">
            <ul className="space-y-2 text-sm">
              {[
                "ROI of about 5x within six months",
                "Improved service delivery reliability",
                "Higher utilization of existing assets",
                "Reduced operational risk in remote environments",
                "Stronger differentiation in competitive market",
              ].map((t, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-slate-300">
            <div className="text-white font-medium">Key takeaways</div>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                "IIoT value depends on integration, not sensors alone",
                "Mobile operations require adaptive predictive models",
                "Alarm governance is critical to adoption",
                "Reliability improvement accelerates cultural change",
                "Remote monitoring becomes trusted when it delivers results",
              ].map((t, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <section className="relative py-16 border-t border-slate-800/60">
        <Container>
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <Link
              to="/use-case-2"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-slate-950/40 border border-slate-800 hover:bg-slate-900 transition"
            >
              <ArrowRight className="w-4 h-4 rotate-180" /> Prev: Use Case 2
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-slate-950/40 border border-slate-800 hover:bg-slate-900 transition"
            >
              Back Home <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/use-case-1" element={<UseCase1Page />} />
        <Route path="/use-case-2" element={<UseCase2Page />} />
        <Route path="/use-case-3" element={<UseCase3Page />} />
      </Routes>
    </BrowserRouter>
  );
}

/*
  Minimal smoke tests (documentation-only)
  ------------------------------
  If you have a test runner, you can convert these into real tests.

  Expected behavior:
  1) Home route renders without crashing.
  2) Use case routes render without crashing.

  Pseudocode example (React Testing Library):

  import { render, screen } from '@testing-library/react';
  import { MemoryRouter } from 'react-router-dom';

  test('renders home', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/Northbound Engineering Services/i)).toBeInTheDocument();
  });

  test('renders use case 1', () => {
    render(
      <MemoryRouter initialEntries={['/use-case-1']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/Use Case 1/i)).toBeInTheDocument();
  });
*/
