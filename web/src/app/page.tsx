const features = [
  {
    title: "Adaptive Anti-Cheating Suite",
    description:
      "Real-time identity validation, multi-angle proctoring, and AI pattern analysis combine to eliminate impersonation and collusion.",
    metric: "98.7% breach detection rate",
  },
  {
    title: "Micro-Level User Customization",
    description:
      "Tailor question pools, timing, accessibility accommodations, and grading rubrics per test-taker with rules-based automation.",
    metric: "40+ configurable dimensions",
  },
  {
    title: "Real-World Edge Case Coverage",
    description:
      "Offline-safe delivery, bandwidth throttling, and hardware variance simulations mirror campus and remote lab conditions.",
    metric: "Tested across 1,200+ device profiles",
  },
];

const validationSteps = [
  {
    title: "Secure Enrollment",
    text: "Biometric, ID, and environmental checks align with university-level onboarding requirements.",
  },
  {
    title: "Live Integrity Monitoring",
    text: "Session fingerprints, keystroke dynamics, and anomaly alerts keep human proctors focused on the unexpected.",
  },
  {
    title: "Post-Exam Forensics",
    text: "Generate defensible reports with full audit trails, version comparisons, and accreditation-ready evidence packs.",
  },
];

const testimonials = [
  {
    quote:
      "We replaced three legacy testing tools and now certify 25,000 learners per semester with zero integrity incidents.",
    name: "Dr. Leena Mahajan",
    role: "Dean of Digital Learning, Eastbrook University",
  },
  {
    quote:
      "Custom accommodations down to individual keyboard layouts gave us the flexibility to support every candidate.",
    name: "Jordan Ellis",
    role: "Assessment Director, Nova Technical College",
  },
];

const faqs = [
  {
    question: "Can we integrate with our SIS and LMS stack?",
    answer:
      "Yes. Native connectors for Canvas, Blackboard, Moodle, and REST/GraphQL APIs ensure roster sync, grade passback, and webhooks.",
  },
  {
    question: "How do you handle network instability?",
    answer:
      "We stream assessments with resilient checkpoints, local encryption, and auto-resume to keep sessions intact even at 3G speeds.",
  },
  {
    question: "Is the solution compliant with accreditation bodies?",
    answer:
      "VerifiPro meets FERPA, SOC 2 Type II, ISO 27001, and WCAG 2.1 AA requirements, with annual third-party audits.",
  },
];

const stats = [
  { label: "Global Campuses", value: "180+" },
  { label: "High-Stakes Exams Delivered", value: "4.2M" },
  { label: "Uptime SLA", value: "99.99%" },
  { label: "Languages Supported", value: "32" },
];

export default function Home() {
  return (
    <div className="page">
      <header className="hero">
        <div className="hero-pattern" aria-hidden="true" />
        <div className="hero-content">
          <span className="tag">Secure assessments powered by VerifiPro</span>
          <h1>
            The only testing platform engineered for modern universities and
            remote accreditation.
          </h1>
          <p>
            Deliver resilient, high-stakes assessments with uncompromising
            academic integrity, personalized pathways, and intelligent proctoring
            that adapts to every scenario.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#demo">
              Book A Strategy Demo
            </a>
            <a className="button secondary" href="#features">
              Explore Platform
            </a>
          </div>
          <div className="hero-metric">
            <strong>Trusted by the world&apos;s best campuses.</strong> Delivered
            60,000 concurrent sittings without a single flagged incident.
          </div>
        </div>
        <div className="hero-card">
          <div className="hero-card-header">
            <span className="badge">Live Integrity Monitor</span>
            <span className="badge success">Operational</span>
          </div>
          <ul className="hero-card-list">
            <li>
              <span>Smart Lockdown</span>
              <span>Active</span>
            </li>
            <li>
              <span>Identity Confidence</span>
              <span>99.3%</span>
            </li>
            <li>
              <span>Behavior Alerts</span>
              <span>2 pending review</span>
            </li>
          </ul>
          <div className="hero-card-footer">
            Session forensics synced to registrar vault in 12 seconds.
          </div>
        </div>
      </header>

      <main>
        <section className="trusted" id="trusted">
          <h2>Partnered with leading institutions worldwide</h2>
          <div className="stats-grid">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="features" id="features">
          <div className="section-header">
            <h2>Engineered for uncompromising assessment integrity</h2>
            <p>
              Orchestrate proctoring, compliance, and personalization in one
              cohesive platform built for registrars, faculty, and testing
              centers.
            </p>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <article key={feature.title} className="feature-card">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <span className="metric">{feature.metric}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="validation">
          <div className="validation-content">
            <h2>End-to-end validation designed for real-world edge cases</h2>
            <p>
              From enrollment to audit, every step meets or exceeds global
              academic standards without sacrificing the candidate experience.
            </p>
            <div className="validation-list">
              {validationSteps.map((step, index) => (
                <div key={step.title} className="validation-item">
                  <div className="step-index">{index + 1}</div>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="validation-panel">
            <div className="panel-header">
              <span>Scenario Simulator</span>
              <span className="badge muted">Ready</span>
            </div>
            <ul>
              <li>
                <span>Low bandwidth fallback</span>
                <span>Auto-switch to adaptive stream</span>
              </li>
              <li>
                <span>Lab hardware inconsistency</span>
                <span>Virtual sandbox deployed</span>
              </li>
              <li>
                <span>Accessibility overrides</span>
                <span>WCAG profile synced</span>
              </li>
            </ul>
            <button type="button">Launch resilience test</button>
          </div>
        </section>

        <section className="testimonials" id="institutions">
          <div className="section-header">
            <h2>Built with top universities, battle-tested in mission critical exams</h2>
            <p>
              Modern campuses require flexibility without compromise. VerifiPro
              teams embed with registrars and IT leaders to harden every workflow.
            </p>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <blockquote key={testimonial.name}>
                <p>“{testimonial.quote}”</p>
                <footer>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="pricing" id="pricing">
          <div className="pricing-card">
            <span className="badge success">Most adopted</span>
            <h2>Institutional Intelligence Suite</h2>
            <p>
              Everything your assessment office needs to launch, monitor, and
              certify high-stakes testing at scale.
            </p>
            <ul>
              <li>Unlimited concurrent proctored sessions</li>
              <li>Adaptive exam design and accommodations engine</li>
              <li>Dedicated university success strategist</li>
              <li>Regulatory readiness assessments twice per year</li>
            </ul>
            <a className="button primary" href="#demo">
              Request tailored pricing
            </a>
          </div>
          <div className="pricing-note">
            <h3>Need departmental rollouts?</h3>
            <p>
              Launch within weeks using our onboarding playbooks for nursing,
              business, STEM, and continuing education programs.
            </p>
            <a href="#demo">Download deployment kit</a>
          </div>
        </section>

        <section className="faq" id="faq">
          <div className="section-header">
            <h2>Answers for your governance and IT stakeholders</h2>
            <p>
              Technical documentation, security questionnaires, and procurement
              support are available on day one.
            </p>
          </div>
          <div className="faq-grid">
            {faqs.map((faq) => (
              <div key={faq.question} className="faq-item">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="cta" id="demo">
          <div className="cta-content">
            <h2>Design the future of academic testing with VerifiPro</h2>
            <p>
              Schedule a working session with our campus strategists to map your
              exam catalog, compliance roadmap, and student experience goals.
            </p>
            <form className="cta-form">
              <input type="text" name="name" placeholder="Full name" />
              <input type="email" name="email" placeholder="Institutional email" />
              <input type="text" name="role" placeholder="Role or department" />
              <button type="submit">Secure my session</button>
            </form>
          </div>
          <div className="cta-panel">
            <h3>What&apos;s included</h3>
            <ul>
              <li>Blueprint of your existing assessment lifecycle</li>
              <li>Gap analysis vs accreditation and compliance mandates</li>
              <li>Resilience modeling for on-campus and remote cohorts</li>
              <li>Executive summary for academic senate approval</li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <span className="brand">VerifiPro</span>
          <p>Precision testing infrastructure for modern higher education.</p>
        </div>
        <div className="footer-links">
          <a href="#features">Platform</a>
          <a href="#institutions">Universities</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </div>
        <div className="footer-meta">
          <span>© {new Date().getFullYear()} VerifiPro Labs. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
