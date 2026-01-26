import React, { useEffect }  from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
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

function upsertMeta(selector: string, attrs: Record<string, string>) {
  let el = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
}

function Seo({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage,
}: {
  title: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}) {
  useEffect(() => {
    document.title = title;

    if (description) {
      upsertMeta('meta[name="description"]', { name: "description", content: description });
    }

    // Open Graph
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: ogTitle || title });
    if (ogDescription || description) {
      upsertMeta('meta[property="og:description"]', {
        property: "og:description",
        content: ogDescription || description || "",
      });
    }
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: "article" });

    if (ogImage) {
      upsertMeta('meta[property="og:image"]', { property: "og:image", content: ogImage });
      upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: ogImage });
    }
  }, [title, description, ogTitle, ogDescription, ogImage]);

  return null;
}



/**
 * NOTE
 * 
 * V1.0 jan 21 2026 - added 6 use cases
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
  {/* eliminar esa linea <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/40 to-slate-950 pointer-events-none" />*/}
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
  <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-lg backdrop-blur">
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
  <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
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
  <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-lg backdrop-blur flex flex-col">
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
  <li key={i} className="flex gap-3 items-start">
    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
    <span className="leading-snug">{t}</span>
  </li>
))}
    </ul>

    <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
      <span className="text-sm text-slate-400">Read the full story</span>
      <Link
  to={to.startsWith("/") ? to : `/${to}`}
  className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-slate-950 border border-slate-800 text-slate-200 hover:bg-slate-900 transition"
>

        View
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  </div>
);

const TopNav = () => (
  <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950 backdrop-blur">
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
          <Link to="/use-cases" className="hover:text-white text-slate-300">
            Use Cases
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
          <Link to="/use-cases" className="hover:text-slate-200">
            Use Cases
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

function UseCasesGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <UseCaseCard
        icon={<Factory className="w-5 h-5" />}
        tag="Use Case 1"
        title="Zero Service Quality Losses in 6 Months"
        context="Cementing plant manufacturing - shifted from PM compliance to failure-mode maintenance effectiveness."
        outcomes={["MTBF tripled in 3 months", "6 months with zero equipment-driven quality losses", "Costs reduced after repeat failures were eliminated"]}
        to="/use-case-1"
      />

      <UseCaseCard
        icon={<Building2 className="w-5 h-5" />}
        tag="Use Case 2"
        title="From Availability Obsession to Capital Discipline"
        context="3,500-asset construction fleet - redefined utilization economically using telematics and ROI by project."
        outcomes={["CAPEX growth reduced by a minumum of 50%", "Rental strategy increased to about 30% for flexibility", "Standby cost exposed the price of just-in-case assets"]}
        to="/use-case-2"
      />

      <UseCaseCard
        icon={<Waves className="w-5 h-5" />}
        tag="Use Case 3"
        title="IIoT for Mobile Energy Operations"
        context="Mobile plants up to 50,000 HP - edge-first IIoT enabled predictive insights under changing conditions."
        outcomes={["Production increased up to 30%", "NPT reduced by about 50%", "ROI about 5x in 6 months"]}
        to="/use-case-3"
      />

      <UseCaseCard
        icon={<ClipboardList className="w-5 h-5" />}
        tag="Use Case 4"
        title="Vendor SLAs That Turn Outsourcing Into Reliability"
        context="Energy assets with heavy contractor use - introduced enforceable SLAs and governance to stabilize maintenance quality."
        outcomes={["Reduced contractor-driven quality issues and rework", "Clear acceptance criteria, warranty, and scope boundaries", "More predictable maintenance outcomes without adding headcount"]}
        to="/use-case-4"
      />

      <UseCaseCard
        icon={<TrendingUp className="w-5 h-5" />}
        tag="Use Case 5"
        title="Life-Stage Maintenance That Cut CAPEX 30% YoY"
        context="Large distributed vehicle and equipment fleet - aligned deployment, risk, and maintenance using telemetry data."
        outcomes={["30% year-over-year reduction in capital requirements", "Extended economic life with controlled risk", "Deployment aligned to environment aggressiveness and life stage"]}
        to="/use-case-5"
      />

      <UseCaseCard
        icon={<PlugZap className="w-5 h-5" />}
        tag="Use Case 6"
        title="Local Refurbishment That Delivered $12M in Value"
        context="Pandemic supply-chain disruption - qualified a local refurbishment path under strict IP and QA governance."
        outcomes={["Lead time reduced from ~8 months to ~3 weeks", "Refurbished parts achieved ~120% original life", "Crisis solution became a scalable standard"]}
        to="/use-case-6"
      />

      <UseCaseCard
        icon={<Calculator className="w-5 h-5" />}
        tag="Use Case 7"
        title="TCO Business Case Unlocking $50M+ Savings"
        context="Critical component failures normalized over time - TCO and operating-point validation enabled a defensible redesign."
        outcomes={["Maintenance cost avoidance > $50M", "Fewer unscheduled events and higher stability", "Modern components enabled better sensing and CBM"]}
        to="/use-case-7"
      />

      <UseCaseCard
        icon={<Layers className="w-5 h-5" />}
        tag="Use Case 8"
        title="Global Maintenance Maturity: MTBF x3 Without CAPEX"
        context="Global Oil & Gas service company - assessed People, Process, Technology and delivered a phased maturity roadmap."
        outcomes={["Pilot tripled MTBF", "Record-low service quality issues", "10% maintenance cost reduction with no capital investment"]}
        to="/use-case-8"
      />

      <UseCaseCard
        icon={<Wrench className="w-5 h-5" />}
        tag="Use Case 9"
        title="Hydraulic Sanitization Restoring Plant Reliability"
        context="Sand refinement plant - contamination control and sanitation practices stopped repetitive hydraulic failures."
        outcomes={["Hydraulic MTBF improved up to 600%", "Utilization rose from 42% to ~60%", "Maintenance costs reduced about by 20% and repeat pump failures eliminated"]}
        to="/use-case-9"
      />
    </div>
  );
}

function HomePage() {
  return (
    <PageShell>
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
                Maintenance excellence starts with <span className="font-semibold text-white">engineering reality </span>
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
            src="/images/executive-summary.jpg"
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
            <div key={i} className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
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
      <Section
        id="use-cases"
        title="Use Cases"
        subtitle="Nine real-world transformations - summarized for fast scanning."
      >
        <UseCasesGrid />
      </Section>
      {/* CONTACT */}
<Section
  id="contact"
  title="Request an Assessment"
  subtitle="Start with a quick readiness assessment to identify value pockets, align governance, and build a roadmap to predictable performance."
>
  <div className="relative p-8 md:p-12 rounded-3xl bg-slate-900/70 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
    <div>
      <div className="flex items-center gap-3 text-cyan-300">
        <NBELogo />
        <span className="font-semibold">Northbound Engineering Services</span>
      </div>

      <h3 className="mt-3 text-2xl md:text-3xl font-semibold text-white">Let’s evaluate your reliability readiness</h3>

      <p className="mt-2 text-slate-300 max-w-2xl">
        Email us to schedule an initial assessment and discuss your current constraints, data readiness, and highest-impact opportunities.
      </p>

      <p className="mt-4 text-sm text-slate-400">
        Email:{" "}
        <a
          href="mailto:info@northboundengineering.com?subject=Assessment%20Request"
          className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4"
        >
          info@northboundengineering.com
        </a>
      </p>
    </div>

    <a
      href="mailto:info@northboundengineering.com?subject=Assessment%20Request"
      className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-cyan-500 text-slate-900 font-semibold shadow-lg hover:brightness-110 transition"
    >
      Request an Assessment
    </a>
  </div>
</Section>

      {/* CTA */}
      <section className="relative py-20 border-t border-slate-800/60">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-fuchsia-500/10 to-transparent" />
        <Container>
          <div className="relative p-8 md:p-12 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
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
              to="/use-cases"
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

function UseCasesPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2000&auto=format&fit=crop"
            alt="Operations"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/45 to-slate-950" />
        </div>
        <Container>
          <div className="relative py-24 md:py-32">
            <div className="max-w-4xl">
              <Pill>
                <Target className="w-4 h-4" /> Case studies
              </Pill>
              <h1 className="mt-4 text-4xl md:text-6xl font-semibold text-white leading-tight">
                Use Cases That Prove <span className="text-cyan-400">Capital-Efficient Reliability</span>
              </h1>
              <p className="mt-5 text-lg text-slate-300 max-w-3xl">
                Nine transformations across manufacturing, fleet, mobile operations, vendor governance, component TCO,
                maturity roadmaps, and hydraulic reliability.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Section title="All Use Cases" subtitle="Open any case to view the full story, structure, and outcomes.">
        <UseCasesGrid />
      </Section>
    </PageShell>
  );
}

function UseCaseFooterNav({ prev, next }: { prev?: string; next?: string }) {
  return (
    <section className="relative py-16 border-t border-slate-800/60">
      <Container>
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            {prev ? (
              <Link
                to={prev}
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-slate-950 border border-slate-800 hover:bg-slate-900 transition"
              >
                <ArrowRight className="w-4 h-4 rotate-180" /> Prev
              </Link>
            ) : (
              <Link
                to="/use-cases"
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-slate-950 border border-slate-800 hover:bg-slate-900 transition"
              >
                <ArrowRight className="w-4 h-4 rotate-180" /> All Use Cases
              </Link>
            )}

            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-slate-950 border border-slate-800 hover:bg-slate-900 transition"
            >
              Home
            </Link>
          </div>

          {next ? (
            <Link
              to={next}
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-slate-950 border border-slate-800 hover:bg-slate-900 transition"
            >
              Next <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <Link
              to="/use-cases"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-slate-950 border border-slate-800 hover:bg-slate-900 transition"
            >
              All Use Cases <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </Container>
    </section>
  );
}

// USE CASE 1 PAGE
function UseCase1Page() {
  return (
    <PageShell>
      <Helmet>
  <title>Use Case 1 — Zero Service Quality Losses | Northbound Engineering Services</title>
  <meta
    name="description"
    content="How maintenance effectiveness (not response speed) delivered six months of zero equipment-driven quality losses and tripled MTBF in a service-critical manufacturing facility."
  />
  <meta property="og:title" content="Use Case 1 — Zero Service Quality Losses" />
  <meta
    property="og:description"
    content="Maintenance effectiveness delivered sustained quality stability—MTBF tripled and quality losses reached zero for six months."
  />
  <meta property="og:type" content="article" />
</Helmet>
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
            </div>
          </div>
        </Container>
      </section>

      <Section
        title="1) Industry and Operational Context"
        subtitle="A service-critical manufacturing operation where quality depends on equipment reliability."
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 space-y-4">
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
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300">
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

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 space-y-4">
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

      <Section title="4) Approach and Solution" subtitle="Failure-mode strategy redesign and effectiveness-based work.">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 space-y-4">
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

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 space-y-4">
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
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300">
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
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300">
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

      <UseCaseFooterNav next="/use-case-2" />
    </PageShell>
  );
}

// USE CASE 2 PAGE (FULL)
function UseCase2Page() {
  return (
    <PageShell>
      <Helmet>
  <title>Use Case 2 — From Availability to Capital Discipline | Northbound Engineering Services</title>
  <meta
    name="description"
    content="How telematics and ROI dashboards reframed utilization economically, reduced CAPEX growth by ~50%, and increased fleet flexibility through a disciplined rental strategy."
  />
  <meta property="og:title" content="Use Case 2 — From Availability to Capital Discipline" />
  <meta
    property="og:description"
    content="Telematics-based economic utilization and transparent ROI dashboards reduced CAPEX growth and improved planning discipline."
  />
  <meta property="og:type" content="article" />
</Helmet>
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
            </div>
          </div>
        </Container>
      </section>

      <Section
        title="1) Background and Context"
        subtitle="Availability pressure often drives excess owned fleets - at the expense of capital efficiency."
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 space-y-4">
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
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 space-y-4">
            <p>
              Service records suggested many assets accumulated far fewer productive hours than expected. The pattern
              was systemic and created resistance. Finance recognized the capital risk: with the equipment base
              approaching USD 200M, small inefficiencies destroyed large value.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300">
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
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 space-y-4">
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
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300">
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
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 space-y-4">
            <p>
              One project planned continuous use of five cranes (about USD 1.5M each) and still rented additional cranes
              due to perceived availability risk. Maintenance ensured availability.
            </p>
            <p>
              Telematics showed utilization was far below expectations. After ROI exposure, execution was restructured
              around three owned cranes at high utilization plus selective rental, and idle cranes were redeployed.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300">
            <div className="text-white font-medium">Outcome</div>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                "Cost savings",
                "Reduced idle capital",
                "Improved fleet flexibility",
                "No compromise on delivery",
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
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300">
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

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 space-y-4">
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

      <UseCaseFooterNav prev="/use-case-1" next="/use-case-3" />
    </PageShell>
  );
}

// USE CASE 3 PAGE
function UseCase3Page() {
  return (
    <PageShell>
      <Helmet>
  <title>Use Case 3 — IIoT for Mobile Energy Operations | Northbound Engineering Services</title>
  <meta
    name="description"
    content="How an edge-first IIoT reliability platform with alarm governance improved production up to 30%, reduced NPT ~50%, and achieved ~5x ROI in six months under intermittent connectivity."
  />
  <meta property="og:title" content="Use Case 3 — IIoT for Mobile Energy Operations" />
  <meta
    property="og:description"
    content="Edge-first IIoT plus disciplined alarm governance delivered higher production, lower NPT, and scalable reliability under changing conditions."
  />
  <meta property="og:type" content="article" />
</Helmet>

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
            </div>
          </div>
        </Container>
      </section>

      <Section
        title="1) Industry and Operational Context"
        subtitle="Mobile field operations where reliability depends on coordinated assets and controls."
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 space-y-4">
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
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300">
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

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 space-y-4">
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
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 space-y-4">
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

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 space-y-4">
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

      <Section title="5) Predictive Intelligence and Alarm Governance" subtitle="Adaptive prediction plus discipline to prevent alarm fatigue.">
        <div className="grid md:grid-cols-3 gap-6">
          <Card icon={<LineChart className="w-5 h-5" />} title="Predictive build">
            <ul className="space-y-2 text-sm">
              {["Identify critical variables and relationships", "Correlate conditions to failure behavior", "Create about 150 predictive algorithms"].map(
                (t, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                    <span>{t}</span>
                  </li>
                )
              )}
            </ul>
          </Card>
          <Card icon={<Bell className="w-5 h-5" />} title="Governance">
            <ul className="space-y-2 text-sm">
              {["Classify alarms by risk and impact", "Prioritize and escalate based on context", "Eliminate nuisance and low-value alarms"].map(
                (t, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                    <span>{t}</span>
                  </li>
                )
              )}
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
              {["Remote monitoring", "Centralized decision support", "Algorithm-driven recommendations"].map((t, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card icon={<TrendingUp className="w-5 h-5" />} title="Trust built">
            <ul className="space-y-2 text-sm">
              {["Operations teams trusted predictive alerts", "Maintenance shifted proactive", "Remote control center became an operational partner"].map(
                (t, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                    <span>{t}</span>
                  </li>
                )
              )}
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
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300">
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

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300">
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

      <UseCaseFooterNav prev="/use-case-2" next="/use-case-4" />
    </PageShell>
  );
}

// USE CASE 4 PAGE
function UseCase4Page() {
  return (
    <PageShell>
      <Helmet>
  <title>Use Case 4 — Vendor SLAs & Reliability Governance | Northbound Engineering Services</title>
  <meta
    name="description"
    content="How performance-based SLAs and governance turned outsourcing into a controlled reliability capability—reducing rework, clarifying scope boundaries, and stabilizing maintenance outcomes."
  />
  <meta property="og:title" content="Use Case 4 — Vendor SLAs That Enable Reliability" />
  <meta
    property="og:description"
    content="Performance-based SLAs and acceptance criteria reduced contractor-driven quality issues and stabilized outcomes without adding headcount."
  />
  <meta property="og:type" content="article" />
</Helmet>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581092160607-ee22731c2f54?q=80&w=2000&auto=format&fit=crop"
            alt="Maintenance governance"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/45 to-slate-950" />
        </div>

        <Container>
          <div className="relative py-24 md:py-32">
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-3">
                <Pill>
                  <ClipboardList className="w-4 h-4" /> Use Case 4
                </Pill>
                <Pill>
                  <ShieldAlert className="w-4 h-4" /> Vendor Governance
                </Pill>
                <Pill>
                  <Target className="w-4 h-4" /> Quality Outcomes
                </Pill>
              </div>

              <h1 className="mt-4 text-4xl md:text-6xl font-semibold text-white leading-tight">
                Vendor SLAs That Turn <span className="text-cyan-400">Outsourcing</span>
                <span className="block">Into a Reliable, Governed Capability</span>
              </h1>

              <p className="mt-5 text-lg text-slate-300 max-w-3xl">
                In volatile labor markets, outsourcing can stabilize staffing - but it can also import quality risk.
                NBE built a vendor SLA and governance framework that defined expectations, acceptance criteria, and
                accountability, reducing rework and stabilizing maintenance outcomes.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Pill>
                  <CheckCircle2 className="w-4 h-4" /> Fewer contractor-driven quality issues
                </Pill>
                <Pill>
                  <ClipboardList className="w-4 h-4" /> Enforceable scope and warranty boundaries
                </Pill>
                <Pill>
                  <LineChart className="w-4 h-4" /> More predictable outcomes
                </Pill>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section title="1) Context" subtitle="Outsourcing was necessary - but outcomes were inconsistent.">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 space-y-4">
            <p>
              The organization operated energy assets where maintenance quality directly impacted safety, availability,
              and service performance. Workforce volatility forced the company to supplement internal capability with
              external labor-force providers.
            </p>
            <p>
              The intent was not to eliminate outsourcing, but to make it reliable, controllable, and aligned to
              operational risk.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <Stat label="Constraint" value="Labor volatility" />
            <Stat label="Risk" value="Quality variation" />
            <Stat label="Need" value="Governed outsourcing" />
            <Stat label="Goal" value="Predictable outcomes" />
          </div>
        </div>
      </Section>

      <Section title="2) Challenges" subtitle="Contracts defined hours and tasks - not outcomes.">
        <div className="grid md:grid-cols-3 gap-6">
          <Card icon={<AlertTriangle className="w-5 h-5" />} title="Inconsistent quality">
            <p>
              Rework, repeat failures, and service-quality issues traced back to contractor-executed maintenance.
            </p>
          </Card>
          <Card icon={<ClipboardList className="w-5 h-5" />} title="No enforceable expectations">
            <p>
              Quality expectations, acceptance criteria, and responsibility boundaries were unclear or missing.
            </p>
          </Card>
          <Card icon={<ShieldAlert className="w-5 h-5" />} title="Risk stayed with operations">
            <p>
              The company carried operational risk of underperformance without contractual levers to enforce quality.
            </p>
          </Card>
        </div>
      </Section>

      <Section title="3) Objectives" subtitle="Control outsourcing without increasing complexity.">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300">
            <div className="flex items-center gap-2 text-cyan-300">
              <Target className="w-5 h-5" />
              <span className="font-medium">What leadership needed</span>
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                "Improve quality delivered by external vendors",
                "Define clear, enforceable service expectations",
                "Reduce service-quality issues caused by contractor work",
                "Clarify which work should and should not be outsourced",
              ].map((t, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 space-y-4">
            <div className="text-white font-medium">Key principle</div>
            <p>
              Vendor management is a reliability discipline. Shift the relationship from time-based contracting to
              performance-based outcomes.
            </p>
            <div className="mt-2 p-4 rounded-2xl bg-slate-950/50 border border-slate-800">
              <div className="text-white font-medium">Reframe</div>
              <p className="mt-2 text-sm">Outsourcing without governance transfers risk, not responsibility.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section title="4) Approach and Solution" subtitle="SLA definition built from failure modes, risk, and task criticality.">
        <div className="grid md:grid-cols-2 gap-6">
          <Card icon={<ClipboardList className="w-5 h-5" />} title="SLA framework">
            <ul className="space-y-2 text-sm">
              {[
                "Analyze failure frequency, modes, and criticality",
                "Define task acceptance criteria and quality standards",
                "Set warranty periods and responsibility boundaries",
                "Differentiate vendors by skill level and task type",
              ].map((t, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card icon={<Layers className="w-5 h-5" />} title="Outsourcing boundaries">
            <ul className="space-y-2 text-sm">
              {[
                "Fully outsourced: low/medium complexity end-to-end",
                "Partially outsourced: execution with internal oversight",
                "Internally retained: high-criticality or proprietary work",
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

      <Section title="5) Results and Business Impact" subtitle="Outsourcing became a controlled operational lever.">
        <div className="grid md:grid-cols-3 gap-6">
          <Stat label="Rework" value="Down" />
          <Stat label="Quality issues" value="Reduced" />
          <Stat label="Predictability" value="Improved" />
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300">
            <div className="text-white font-medium">What changed</div>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                "Contractors clearly understood expectations",
                "Performance monitoring and escalation became standard",
                "Maintenance outcomes stabilized despite vendor reliance",
              ].map((t, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300">
            <div className="text-white font-medium">Key takeaways</div>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                "Performance-based contracts outperform time-based models",
                "Task criticality must define outsourcing boundaries",
                "SLAs protect reliability and service quality",
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

      <UseCaseFooterNav prev="/use-case-3" next="/use-case-5" />
    </PageShell>
  );
}

// USE CASE 5 PAGE
function UseCase5Page() {
  return (
    <PageShell>
      <Helmet>
  <title>Use Case 5 — Life-Stage Maintenance & -30% CAPEX YoY | Northbound Engineering Services</title>
  <meta
    name="description"
    content="How telemetry-enabled life-stage strategy aligned deployment, maintenance depth, and risk—cutting capital requirements ~30% year over year without compromising safety or service quality."
  />
  <meta property="og:title" content="Use Case 5 — Life-Stage Maintenance Cutting CAPEX" />
  <meta
    property="og:description"
    content="Telemetry plus life-stage strategy reduced capital requirements ~30% YoY by aligning deployment and maintenance to risk and value."
  />
  <meta property="og:type" content="article" />
</Helmet>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2000&auto=format&fit=crop"
            alt="Fleet strategy"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/45 to-slate-950" />
        </div>

        <Container>
          <div className="relative py-24 md:py-32">
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-3">
                <Pill>
                  <TrendingUp className="w-4 h-4" /> Use Case 5
                </Pill>
                <Pill>
                  <Satellite className="w-4 h-4" /> Telemetry Enabled
                </Pill>
                <Pill>
                  <Calculator className="w-4 h-4" /> Capital Efficiency
                </Pill>
              </div>

              <h1 className="mt-4 text-4xl md:text-6xl font-semibold text-white leading-tight">
                Life-Stage Maintenance That Cut
                <span className="block"><span className="text-cyan-400">Capital Requirements</span> by 30% YoY</span>
              </h1>

              <p className="mt-5 text-lg text-slate-300 max-w-3xl">
                A geographically distributed fleet improved capital efficiency by aligning maintenance strategy,
                deployment, and business risk with asset life stage. The result: a 30% year-over-year reduction in
                capital requirements without compromising safety or service quality.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Pill>
                  <TrendingUp className="w-4 h-4" /> -30% capital YoY
                </Pill>
                <Pill>
                  <GitCompare className="w-4 h-4" /> Risk-aligned deployment
                </Pill>
                <Pill>
                  <LineChart className="w-4 h-4" /> Better predictability
                </Pill>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section title="1) Context" subtitle="Telemetry existed - but strategy and capital decisions were disconnected.">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 space-y-4">
            <p>
              The client operated light-duty vehicles, trucks, and construction machinery supporting mission-critical
              services across diverse environments. Basic condition monitoring existed, but it was not driving
              maintenance, utilization, or capital allocation decisions.
            </p>
            <p>
              Maintenance, deployment, and replacement were treated as separate processes - limiting economic returns.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <Stat label="Fleet" value="Distributed" />
            <Stat label="Data" value="Telemetry" />
            <Stat label="Problem" value="Uniform strategy" />
            <Stat label="Pressure" value="Rising CAPEX" />
          </div>
        </div>
      </Section>

      <Section title="2) Challenges" subtitle="Uniform maintenance drove accelerated replacement cycles.">
        <div className="grid md:grid-cols-3 gap-6">
          <Card icon={<AlertTriangle className="w-5 h-5" />} title="Capital pressure">
            <p>
              Conservative depreciation and shortened replacement cycles increased capital requirements year over year.
            </p>
          </Card>
          <Card icon={<GitCompare className="w-5 h-5" />} title="Misaligned deployment">
            <p>
              New assets were sometimes underutilized in low-risk environments, while aging assets were exposed to
              high-stress operations.
            </p>
          </Card>
          <Card icon={<Wrench className="w-5 h-5" />} title="One-size-fits-all maintenance">
            <p>
              The same maintenance strategy was applied across environments with very different aggressiveness and risk.
            </p>
          </Card>
        </div>
      </Section>

      <Section title="3) Approach" subtitle="Define economic life stages and align maintenance and deployment.">
        <div className="grid md:grid-cols-2 gap-6">
          <Card icon={<Satellite className="w-5 h-5" />} title="Data-driven life stages">
            <ul className="space-y-2 text-sm">
              {[
                "Capture utilization, idle time, and route/environment severity",
                "Classify failure modes by life stage and operating conditions",
                "Define target economic life (not theoretical design life)",
                "Assign maintenance depth and frequency per life stage",
              ].map((t, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card icon={<GitCompare className="w-5 h-5" />} title="Utilization rebalancing">
            <ul className="space-y-2 text-sm">
              {[
                "Assign newer assets to high-aggressiveness environments",
                "Redeploy aging assets to lower-risk operations",
                "Align risk exposure with profitability",
                "Avoid over-maintenance in late life while protecting safety",
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

      <Section title="4) Results" subtitle="Lower capital intensity with controlled reliability and risk.">
        <div className="grid md:grid-cols-4 gap-6">
          <Stat label="Capital requirements" value="-30% YoY" />
          <Stat label="Asset life" value="Extended" />
          <Stat label="Risk exposure" value="Reduced" />
          <Stat label="Decision confidence" value="Higher" />
        </div>
      </Section>

      <Section title="5) Key takeaways" subtitle="Capital efficiency emerges when maintenance, risk, and deployment act as one system.">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300">
            <ul className="space-y-2 text-sm">
              {[
                "Asset age should drive deployment - not just maintenance tasks",
                "High-risk operations justify low-risk assets",
                "Maintenance spend should follow risk exposure and value creation",
                "Telemetry is a capital lever when linked to strategy",
              ].map((t, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300">
            <div className="text-white font-medium">Design principle</div>
            <p className="mt-3">
              Define life stages, then explicitly map environments, maintenance depth, and replacement timing to risk and
              profitability.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Pill>
                <Satellite className="w-4 h-4" /> Utilization
              </Pill>
              <Pill>
                <GitCompare className="w-4 h-4" /> Risk alignment
              </Pill>
              <Pill>
                <Calculator className="w-4 h-4" /> Economic life
              </Pill>
            </div>
          </div>
        </div>
      </Section>

      <UseCaseFooterNav prev="/use-case-4" next="/use-case-6" />
    </PageShell>
  );
}

// USE CASE 6 PAGE
function UseCase6Page() {
  return (
    <PageShell>
      <Helmet>
  <title>Use Case 6 — $12M Value via Local Refurbishment | Northbound Engineering Services</title>
  <meta
    name="description"
    content="How a governed local refurbishment path reduced lead time from ~8 months to ~3 weeks, achieved ~120% of original life, and delivered ~$12M value during supply-chain disruption."
  />
  <meta property="og:title" content="Use Case 6 — $12M Value Through Local Refurbishment" />
  <meta
    property="og:description"
    content="A controlled, IP- and QA-governed refurbishment program cut lead time dramatically and became a scalable operational standard."
  />
  <meta property="og:type" content="article" />
</Helmet>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1586521995568-39abaa0c2311?q=80&w=2000&auto=format&fit=crop"
            alt="Supply chain"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/45 to-slate-950" />
        </div>

        <Container>
          <div className="relative py-24 md:py-32">
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-3">
                <Pill>
                  <PlugZap className="w-4 h-4" /> Use Case 6
                </Pill>
                <Pill>
                  <ShieldAlert className="w-4 h-4" /> Crisis Response
                </Pill>
                <Pill>
                  <ClipboardList className="w-4 h-4" /> IP + QA Governance
                </Pill>
              </div>

              <h1 className="mt-4 text-4xl md:text-6xl font-semibold text-white leading-tight">
                Crisis Partnership Delivering <span className="text-cyan-400">$12M</span> in Value
                <span className="block">Through Local Refurbishment Capability</span>
              </h1>

              <p className="mt-5 text-lg text-slate-300 max-w-3xl">
                During pandemic-era disruption, an Oil & Gas services company faced severe lead-time risk on proprietary
                spare parts manufactured exclusively in the U.S. NBE enabled a controlled, temporary local refurbishment
                solution that became a strategic standard.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Pill>
                  <TrendingUp className="w-4 h-4" /> Lead time: ~8 months to ~3 weeks
                </Pill>
                <Pill>
                  <Wrench className="w-4 h-4" /> Life achieved: ~120% of original
                </Pill>
                <Pill>
                  <LineChart className="w-4 h-4" /> $12M cost avoidance
                </Pill>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section title="1) Context" subtitle="Centralized manufacturing became a critical risk under global disruption.">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 space-y-4">
            <p>
              The client depended on specialized, IP-protected components manufactured exclusively in the U.S. Global
              logistics disruption and border restrictions exposed Latin American operations to service interruptions,
              contractual exposure, and reputational risk.
            </p>
            <p>
              The mandate was intentionally narrow: implement a temporary local solution until logistics normalized.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <Stat label="Constraint" value="Supply chain" />
            <Stat label="Dependency" value="Proprietary spares" />
            <Stat label="Risk" value="Service disruption" />
            <Stat label="Scope" value="Temporary" />
          </div>
        </div>
      </Section>

      <Section title="2) Approach" subtitle="Fast, controlled engineering response with legal and QA containment.">
        <div className="grid md:grid-cols-3 gap-6">
          <Card icon={<ClipboardList className="w-5 h-5" />} title="IP boundaries">
            <p>Defined strict disclosure limits and legal frameworks to protect proprietary designs.</p>
          </Card>
          <Card icon={<Wrench className="w-5 h-5" />} title="Technical scope">
            <p>Defined refurbishment processes and acceptance criteria aligned to operational requirements.</p>
          </Card>
          <Card icon={<ShieldAlert className="w-5 h-5" />} title="Qualification">
            <p>Qualified the local supplier; validated procedures and testing with independent technical institutions.</p>
          </Card>
        </div>
      </Section>

      <Section title="3) Results" subtitle="A contingency solution exceeded expectations.">
        <div className="grid md:grid-cols-4 gap-6">
          <Stat label="Lead time" value="~3 weeks" />
          <Stat label="Prior lead time" value="~8 months" />
          <Stat label="Life achieved" value="~120%" />
          <Stat label="Value" value="~$12M" />
        </div>
      </Section>

      <Section title="4) Business impact" subtitle="Temporary crisis mitigation became a permanent operational standard.">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300">
            <ul className="space-y-2 text-sm">
              {[
                "Reduced inventory and in-transit costs",
                "Protected operations during extreme uncertainty",
                "Standardized and capitalized procedures for broader deployment",
                "Proved localization and IP protection can coexist under governance",
              ].map((t, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300">
            <div className="text-white font-medium">Key takeaways</div>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                "Crisis solutions can reveal structural opportunities",
                "Refurbishment can outperform new manufacturing",
                "Proven results are the strongest driver of strategic change",
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

      <UseCaseFooterNav prev="/use-case-5" next="/use-case-7" />
    </PageShell>
  );
}

// USE CASE 7 PAGE
function UseCase7Page() {
  return (
    <PageShell>
      <Helmet>
  <title>Use Case 7 — TCO Business Case Delivering $50M+ Savings | Northbound Engineering Services</title>
  <meta
    name="description"
    content="How operating-point validation, lifecycle cost modeling, and pilot proof created a defensible redesign decision—unlocking $50M+ savings and improving stability with better sensing and CBM readiness."
  />
  <meta property="og:title" content="Use Case 7 — TCO Business Case Delivering $50M+ Savings" />
  <meta
    property="og:description"
    content="TCO + operating-point validation + field pilot proof enabled a defensible change with $50M+ savings and fewer unscheduled events."
  />
  <meta property="og:type" content="article" />
</Helmet>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=2000&auto=format&fit=crop"
            alt="Engineering analysis"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/45 to-slate-950" />
        </div>

        <Container>
          <div className="relative py-24 md:py-32">
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-3">
                <Pill>
                  <Calculator className="w-4 h-4" /> Use Case 7
                </Pill>
                <Pill>
                  <GitCompare className="w-4 h-4" /> TCO Business Case
                </Pill>
                <Pill>
                  <CircuitBoard className="w-4 h-4" /> Modernization
                </Pill>
              </div>

              <h1 className="mt-4 text-4xl md:text-6xl font-semibold text-white leading-tight">
                Major Component TCO Evaluation
                <span className="block">Delivering <span className="text-cyan-400">$50M+</span> in Savings</span>
              </h1>

              <p className="mt-5 text-lg text-slate-300 max-w-3xl">
                A global energy provider faced persistent failures of a critical component that had gradually drifted
                outside its original design sweet spot. NBE validated the true failure drivers, quantified TCO, and
                built a defensible investment case - enabling deployment of an alternative solution.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Pill>
                  <LineChart className="w-4 h-4" /> Cost avoidance &gt; $50M
                </Pill>
                <Pill>
                  <AlertTriangle className="w-4 h-4" /> Fewer unscheduled events
                </Pill>
                <Pill>
                  <CircuitBoard className="w-4 h-4" /> Better sensing + CBM
                </Pill>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section title="1) Context" subtitle="Gradual degradation normalized underperformance.">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 space-y-4">
            <p>
              The component was deployed globally and was critical to production continuity. Operating boundaries had
              evolved over time due to technology and process changes, progressively pushing the component outside its
              original design conditions.
            </p>
            <p>
              Because the shift was gradual, reduced life expectancy and increasing failures became accepted as normal.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <Stat label="Failure cost" value="High" />
            <Stat label="Frequency" value="Increasing" />
            <Stat label="Impact" value="Availability" />
            <Stat label="Problem" value="Normalized" />
          </div>
        </div>
      </Section>

      <Section title="2) Objectives" subtitle="Validate drivers, quantify TCO, and justify change.">
        <div className="grid md:grid-cols-3 gap-6">
          <Card icon={<Target className="w-5 h-5" />} title="Technical truth">
            <p>Establish a fact-based understanding of dominant failure modes and operating-point drivers.</p>
          </Card>
          <Card icon={<Calculator className="w-5 h-5" />} title="TCO economics">
            <p>Quantify the lifecycle cost impact and expose hidden cost drivers beyond unit replacement.</p>
          </Card>
          <Card icon={<GitCompare className="w-5 h-5" />} title="Defensible decision">
            <p>Evaluate alternatives and create a performance-based business case leadership could approve.</p>
          </Card>
        </div>
      </Section>

      <Section title="3) Methodology" subtitle="Three-phase validation: life data, correlation, and alternatives.">
        <div className="grid md:grid-cols-2 gap-6">
          <Card icon={<ClipboardList className="w-5 h-5" />} title="Phased approach">
            <ul className="space-y-2 text-sm">
              {[
                "Validate historical life-cycle data across regions",
                "Build failure-mode hierarchy and remove anecdotal explanations",
                "Correlate failures with actual operating points",
                "Evaluate technical and commercial alternatives",
              ].map((t, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card icon={<CircuitBoard className="w-5 h-5" />} title="Pilot validation">
            <p>
              A controlled six-month pilot validated the selected alternative under real conditions, providing both
              technical confidence and financial proof.
            </p>
            <div className="mt-4 p-4 rounded-2xl bg-slate-950/50 border border-slate-800">
              <div className="text-white font-medium">Why it worked</div>
              <p className="mt-2 text-sm">Operating-point alignment + lifecycle economics + measurable field proof.</p>
            </div>
          </Card>
        </div>
      </Section>

      <Section title="4) Results and impact" subtitle="Approved deployment delivered large TCO reduction.">
        <div className="grid md:grid-cols-4 gap-6">
          <Stat label="Cost avoidance" value=">$50M" />
          <Stat label="Unscheduled work" value="Down" />
          <Stat label="Stability" value="Up" />
          <Stat label="Digital readiness" value="Improved" />
        </div>
      </Section>

      <Section title="5) Key takeaways" subtitle="Lifecycle performance economics beats unit-cost thinking.">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300">
            <ul className="space-y-2 text-sm">
              {[
                "Gradual degradation can normalize underperformance",
                "Operating condition changes require equipment strategy reassessment",
                "TCO analysis reveals hidden cost drivers",
                "Pilot validation accelerates executive decision-making",
              ].map((t, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300">
            <div className="text-white font-medium">Design principle</div>
            <p className="mt-3">Decide using lifecycle performance under actual operating points - not design assumptions.</p>
          </div>
        </div>
      </Section>

      <UseCaseFooterNav prev="/use-case-6" next="/use-case-8" />
    </PageShell>
  );
}

// USE CASE 8 PAGE
function UseCase8Page() {
  return (
    <PageShell>
      <Helmet>
  <title>Use Case 8 — Global Maintenance Maturity (MTBF x3) | Northbound Engineering Services</title>
  <meta
    name="description"
    content="How a People–Process–Technology maturity assessment and phased roadmap delivered a pilot MTBF x3, record-low service-quality issues, and ~10% maintenance cost reduction with no CAPEX."
  />
  <meta property="og:title" content="Use Case 8 — Global Maintenance Maturity: MTBF x3 Without CAPEX" />
  <meta
    property="og:description"
    content="A maturity roadmap across People, Process, and Technology delivered MTBF x3 and cost reduction—without capital replacement."
  />
  <meta property="og:type" content="article" />
</Helmet>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581092334651-ddf26d9b6b4b?q=80&w=2000&auto=format&fit=crop"
            alt="Global operations"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/45 to-slate-950" />
        </div>

        <Container>
          <div className="relative py-24 md:py-32">
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-3">
                <Pill>
                  <Layers className="w-4 h-4" /> Use Case 8
                </Pill>
                <Pill>
                  <Target className="w-4 h-4" /> Maturity Roadmap
                </Pill>
                <Pill>
                  <BarChart3 className="w-4 h-4" /> MTBF + Cost
                </Pill>
              </div>

              <h1 className="mt-4 text-4xl md:text-6xl font-semibold text-white leading-tight">
                Global Maintenance Maturity Transformation
                <span className="block">Tripling <span className="text-cyan-400">MTBF</span> Without CAPEX</span>
              </h1>

              <p className="mt-5 text-lg text-slate-300 max-w-3xl">
                A global Oil & Gas service company faced high variability, rising costs, and service-quality issues.
                Instead of relying on capital replacement, NBE assessed maturity across People, Process, and Technology,
                then executed a phased roadmap. The pilot delivered MTBF x3 and 10% cost reduction with no capital
                investment.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Pill>
                  <TrendingUp className="w-4 h-4" /> MTBF x3
                </Pill>
                <Pill>
                  <ShieldAlert className="w-4 h-4" /> Record-low quality issues
                </Pill>
                <Pill>
                  <LineChart className="w-4 h-4" /> -10% maintenance cost
                </Pill>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section title="1) Business context" subtitle="Leaders needed reliability and predictability across regions.">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 space-y-4">
            <p>
              With a large and aging asset base, the organization experienced inconsistent maintenance outcomes,
              recurrent failures, and limited transparency into true asset health. An ambitious CAPEX plan emerged as a
              default solution - but financial constraints demanded a better answer.
            </p>
            <p>
              Leadership asked a different question: can maintenance maturity unlock latent performance in existing
              assets?
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <Stat label="Footprint" value="Global" />
            <Stat label="Issue" value="Variability" />
            <Stat label="Risk" value="Service quality" />
            <Stat label="Default plan" value="CAPEX" />
          </div>
        </div>
      </Section>

      <Section title="2) Framework" subtitle="People, Process, Technology - four maturity stages.">
        <div className="grid md:grid-cols-3 gap-6">
          <Card icon={<Activity className="w-5 h-5" />} title="People">
            <p>Roles, competencies, leadership behaviors, decision ownership, and cross-functional collaboration.</p>
          </Card>
          <Card icon={<ClipboardList className="w-5 h-5" />} title="Process">
            <p>Strategy, planning and scheduling, governance, reliability engineering, and continuous improvement.</p>
          </Card>
          <Card icon={<CircuitBoard className="w-5 h-5" />} title="Technology">
            <p>CMMS/EAM usage, data quality, analytics, reporting, and decision support tools.</p>
          </Card>
        </div>
      </Section>

      <Section title="3) Assessment and roadmap" subtitle="Combine surveys, workshops, interviews, and data audits.">
        <div className="grid md:grid-cols-2 gap-6">
          <Card icon={<BarChart3 className="w-5 h-5" />} title="What was assessed">
            <ul className="space-y-2 text-sm">
              {[
                "Mass surveys across maintenance and operations",
                "Workshops with mid-management on alignment and execution",
                "Leader interviews on intent and governance",
                "Audit of KPIs, work order quality, backlog, and failure history",
              ].map((t, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card icon={<Layers className="w-5 h-5" />} title="Phased deployment">
            <ul className="space-y-2 text-sm">
              {[
                "Single-region pilot to prove impact",
                "Multi-region pilots to validate scalability",
                "Global rollout with training and governance",
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

      <Section title="4) Pilot results" subtitle="Improvement without capital investment.">
        <div className="grid md:grid-cols-4 gap-6">
          <Stat label="MTBF" value="x3" />
          <Stat label="Service quality issues" value="Record low" />
          <Stat label="Maintenance cost" value="-10%" />
          <Stat label="CAPEX" value="Deferred" />
        </div>
      </Section>

      <Section title="5) Key takeaways" subtitle="Often, the constraint is discipline - not asset age.">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300">
            <ul className="space-y-2 text-sm">
              {[
                "Execution gaps often drive failures attributed to aging assets",
                "A common maturity language accelerates alignment",
                "Pilot proof builds credibility for global rollout",
                "Maintenance maturity can defer CAPEX while improving returns",
              ].map((t, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300">
            <div className="text-white font-medium">Design principle</div>
            <p className="mt-3">Before replacing assets, validate whether maturity improvements can unlock performance.</p>
          </div>
        </div>
      </Section>

      <UseCaseFooterNav prev="/use-case-7" next="/use-case-9" />
    </PageShell>
  );
}

// USE CASE 9 PAGE
function UseCase9Page() {
  return (
    <PageShell>
      <Helmet>
  <title>Use Case 9 — Hydraulic System Sanitization & Reliability | Northbound Engineering Services</title>
  <meta
    name="description"
    content="How contamination control, monitoring, standardized cleaning procedures, and technician training eliminated repeat pump failures—improving hydraulic MTBF up to 600% and raising utilization from 42% to ~60%."
  />
  <meta property="og:title" content="Use Case 9 — Hydraulic System Sanitization Restoring Reliability" />
  <meta
    property="og:description"
    content="Sanitization discipline and contamination control restored hydraulic reliability—MTBF up to +600% and utilization improved materially."
  />
  <meta property="og:type" content="article" />
  <meta property="og:image" content="/images/og-cover.png" />
<meta name="twitter:image" content="/images/og-cover.png" />
</Helmet>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=2000&auto=format&fit=crop"
            alt="Hydraulic maintenance"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/45 to-slate-950" />
        </div>

        <Container>
          <div className="relative py-24 md:py-32">
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-3">
                <Pill>
                  <Wrench className="w-4 h-4" /> Use Case 9
                </Pill>
                <Pill>
                  <AlertTriangle className="w-4 h-4" /> Root Cause Reliability
                </Pill>
                <Pill>
                  <Activity className="w-4 h-4" /> Contamination Control
                </Pill>
              </div>

              <h1 className="mt-4 text-4xl md:text-6xl font-semibold text-white leading-tight">
                Restoring Reliability Through
                <span className="block"><span className="text-cyan-400">Hydraulic System Sanitization</span></span>
              </h1>

              <p className="mt-5 text-lg text-slate-300 max-w-3xl">
                A sand refinement treatment plant suffered chronic hydraulic failures that collapsed utilization.
                NBE proved the system design was sound - the weakness was sanitation discipline. By implementing
                monitoring, connection points, standardized cleaning procedures, and technician training, the plant
                restored stability within weeks.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Pill>
                  <TrendingUp className="w-4 h-4" /> MTBF up to +600%
                </Pill>
                <Pill>
                  <Gauge className="w-4 h-4" /> Utilization: 42% to ~60%
                </Pill>
                <Pill>
                  <LineChart className="w-4 h-4" /> Maintenance cost: -20%
                </Pill>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section title="1) Context" subtitle="Closed-loop hydraulics under high pressure and tight tolerances.">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 space-y-4">
            <p>
              The plant relied on hydraulically driven systems for continuous industrial production. Reliability depended
              not only on equipment design, but on oil cleanliness, sanitation, and contamination control.
            </p>
            <p>
              Even minor deviations propagated failures across multiple components, degrading availability.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <Stat label="Plant type" value="Continuous" />
            <Stat label="System" value="Closed-loop hydraulics" />
            <Stat label="Failure driver" value="Contamination" />
            <Stat label="Impact" value="Throughput" />
          </div>
        </div>
      </Section>

      <Section title="2) Challenges" subtitle="Replacing components did not solve systemic failure propagation.">
        <div className="grid md:grid-cols-3 gap-6">
          <Card icon={<AlertTriangle className="w-5 h-5" />} title="Chronic failures">
            <p>Utilization dropped to 42% and MTBF reached record lows despite repeated component replacements.</p>
          </Card>
          <Card icon={<Wrench className="w-5 h-5" />} title="Reactive maintenance">
            <p>Effort focused on restoration after failure rather than eliminating root causes.</p>
          </Card>
          <Card icon={<CircuitBoard className="w-5 h-5" />} title="Systemic root cause">
            <p>Oil contamination progressively damaged circuits operating in parallel, spreading failures.</p>
          </Card>
        </div>
      </Section>

      <Section title="3) Approach" subtitle="Prove design validity, then fix sanitation and monitoring discipline.">
        <div className="grid md:grid-cols-2 gap-6">
          <Card icon={<ClipboardList className="w-5 h-5" />} title="Diagnosis">
            <ul className="space-y-2 text-sm">
              {[
                "Analyze historical failure records and trends",
                "Inspect systems in field and review maintenance practices",
                "Collaborate with OEM to validate circuit design",
                "Confirm maintenance sanitation weaknesses as the root driver",
              ].map((t, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card icon={<Activity className="w-5 h-5" />} title="Corrective program">
            <ul className="space-y-2 text-sm">
              {[
                "Add dedicated connection points for sampling and online monitoring",
                "Standardize cleaning and sanitization procedures",
                "Introduce filtration kits and decision criteria",
                "Train technicians to interpret cleanliness indicators and prevent damage",
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

      <Section title="4) Results" subtitle="Rapid stability in three months.">
        <div className="grid md:grid-cols-4 gap-6">
          <Stat label="Hydraulic MTBF" value="Up to +600%" />
          <Stat label="Utilization" value="42% → ~60%" />
          <Stat label="Maintenance cost" value="-20%" />
          <Stat label="Repeat pump failures" value="Eliminated" />
        </div>
      </Section>

      <Section title="5) Key takeaways" subtitle="Cleanliness is a reliability parameter - not a secondary concern.">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300">
            <ul className="space-y-2 text-sm">
              {[
                "Repetitive failures often originate from systemic maintenance weaknesses",
                "Oil cleanliness must be governed with monitoring and procedure discipline",
                "OEM collaboration accelerates root-cause resolution",
                "Sustainable reliability comes from capability building, not component swaps",
              ].map((t, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300">
            <div className="text-white font-medium">Customer feedback</div>
            <p className="mt-3">
              "We did not understand how important hydraulic sanitization was until we had to repeatedly pay for broken
              pumps. Now, with proper control in place, I feel confident asking the plant for higher productivity."
            </p>
          </div>
        </div>
      </Section>

      <UseCaseFooterNav prev="/use-case-8" />
    </PageShell>
  );
}

import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If you ever use hash links (#something), handle that too
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "auto", block: "start" });
        return;
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
}


export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/use-cases" element={<UseCasesPage />} />
        <Route path="/use-case-1" element={<UseCase1Page />} />
        <Route path="/use-case-2" element={<UseCase2Page />} />
        <Route path="/use-case-3" element={<UseCase3Page />} />
        <Route path="/use-case-4" element={<UseCase4Page />} />
        <Route path="/use-case-5" element={<UseCase5Page />} />
        <Route path="/use-case-6" element={<UseCase6Page />} />
        <Route path="/use-case-7" element={<UseCase7Page />} />
        <Route path="/use-case-8" element={<UseCase8Page />} />
        <Route path="/use-case-9" element={<UseCase9Page />} />
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

  test('renders use case 4', () => {
    render(
      <MemoryRouter initialEntries={['/use-case-4']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/Use Case 4/i)).toBeInTheDocument();
  });
*/
