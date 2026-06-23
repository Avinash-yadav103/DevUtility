import { PageShell, Section, Grid, DemoCard } from './showcase/Parts';

const Check = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const stats = [
  { label: 'Total Revenue', value: '$48.2k', delta: '+12.5%', up: true },
  { label: 'Active Users', value: '2,940', delta: '+4.1%', up: true },
  { label: 'Churn Rate', value: '1.8%', delta: '-0.6%', up: false },
  { label: 'Avg. Session', value: '4m 32s', delta: '+8.0%', up: true },
];

const plans = [
  { name: 'Starter', desc: 'For side projects', price: 0, feats: ['1 project', 'Community support', '1GB storage'], featured: false },
  { name: 'Pro', desc: 'For growing teams', price: 29, feats: ['Unlimited projects', 'Priority support', '50GB storage', 'Analytics'], featured: true },
  { name: 'Enterprise', desc: 'For organizations', price: 99, feats: ['SSO & SAML', 'Dedicated support', 'Unlimited storage', 'Audit logs'], featured: false },
];

const Blocks = () => (
  <PageShell
    eyebrow="Sections"
    title="Blocks"
    lead="Pre-composed, ready-to-paste sections built from the primitives. Switch any example to the Code tab and copy it straight into your project."
  >
    <Section title="Stats" description="A row of KPI cards with trend deltas.">
      <DemoCard
        label="Stat cards"
        code={`<div className="stat-card">
  <div className="stat-label">Total Revenue</div>
  <div className="stat-value">$48.2k</div>
  <div className="stat-delta up">▲ +12.5%</div>
</div>`}
      >
        <div className="stat-row">
          {stats.map((s) => (
            <div className="stat-card" key={s.label}>
              <div className="stat-label">{s.label}</div>
              <div className="stat-value">{s.value}</div>
              <div className={`stat-delta ${s.up ? 'up' : 'down'}`}>{s.up ? '▲' : '▼'} {s.delta}</div>
            </div>
          ))}
        </div>
      </DemoCard>
    </Section>

    <Section title="Pricing" description="Tiered plans with a featured highlight.">
      <DemoCard
        label="Pricing tiers"
        code={`<div className="price-card featured">
  <h3>Pro</h3>
  <p className="price-desc">For growing teams</p>
  <div className="price-amount">$29<span>/mo</span></div>
  <ul>
    <li><CheckIcon /> Unlimited projects</li>
    <li><CheckIcon /> Priority support</li>
  </ul>
  <button className="ui-btn ui-btn-primary">Choose Pro</button>
</div>`}
      >
        <div className="showcase-grid cols-3" style={{ width: '100%' }}>
          {plans.map((p) => (
            <div className={`price-card ${p.featured ? 'featured' : ''}`} key={p.name}>
              <h3>{p.name}</h3>
              <p className="price-desc">{p.desc}</p>
              <div className="price-amount">${p.price}<span>/mo</span></div>
              <ul>
                {p.feats.map((f) => <li key={f}><Check /> {f}</li>)}
              </ul>
              <button className={`ui-btn ${p.featured ? 'ui-btn-primary' : 'ui-btn-outline'}`} style={{ width: '100%' }}>
                Choose {p.name}
              </button>
            </div>
          ))}
        </div>
      </DemoCard>
    </Section>

    <Section title="Authentication & features" description="A sign-in card next to a feature list.">
      <Grid cols={2}>
        <DemoCard
          label="Sign-in card"
          code={`<div className="block-card auth-card">
  <h3>Welcome back</h3>
  <p className="auth-sub">Sign in to continue.</p>
  <div className="ui-field">
    <label className="ui-label">Email</label>
    <input className="ui-input" placeholder="you@example.com" />
  </div>
  <div className="ui-field">
    <label className="ui-label">Password</label>
    <input className="ui-input" type="password" />
  </div>
  <button className="ui-btn ui-btn-primary">Sign in</button>
  <div className="auth-divider">OR</div>
  <button className="ui-btn ui-btn-outline">Continue with Google</button>
</div>`}
        >
          <div className="block-card auth-card">
            <h3>Welcome back</h3>
            <p className="auth-sub">Sign in to continue to your dashboard.</p>
            <div className="ui-field">
              <label className="ui-label">Email</label>
              <input className="ui-input" placeholder="you@example.com" />
            </div>
            <div className="ui-field">
              <label className="ui-label">Password</label>
              <input className="ui-input" type="password" placeholder="••••••••" />
            </div>
            <button className="ui-btn ui-btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>Sign in</button>
            <div className="auth-divider">OR</div>
            <button className="ui-btn ui-btn-outline" style={{ width: '100%' }}>Continue with Google</button>
          </div>
        </DemoCard>

        <DemoCard
          label="Feature list"
          code={`<div className="feature-block">
  <div className="feat-icon">⚡</div>
  <div>
    <h4>Lightning fast</h4>
    <p>Optimized rendering keeps every interaction instant.</p>
  </div>
</div>`}
        >
          <div className="block-card" style={{ width: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                { icon: '⚡', title: 'Lightning fast', desc: 'Optimized rendering keeps every interaction instant.' },
                { icon: '🔒', title: 'Secure by default', desc: 'Sensible defaults protect your users out of the box.' },
                { icon: '🎨', title: 'Fully themeable', desc: 'Swap palette and accent without touching markup.' },
              ].map((f) => (
                <div className="feature-block" key={f.title}>
                  <div className="feat-icon">{f.icon}</div>
                  <div>
                    <h4>{f.title}</h4>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </DemoCard>
      </Grid>
    </Section>

    <Section title="Social proof & CTA" description="A testimonial card and a gradient call-to-action.">
      <Grid cols={2}>
        <DemoCard
          label="Testimonial"
          code={`<div className="block-card testimonial">
  <p>“This library let us redesign our site in a weekend.”</p>
  <div className="who">
    <span className="ui-avatar" style={{ background: '#8b5cf6' }}>RS</span>
    <div>
      <div className="name">Riya Sharma</div>
      <div className="role">Head of Design, Northwind</div>
    </div>
  </div>
</div>`}
        >
          <div className="block-card testimonial" style={{ width: '100%' }}>
            <p>“This library let us redesign our entire marketing site in a weekend. The theming system alone saved us days of work.”</p>
            <div className="who">
              <span className="ui-avatar" style={{ background: '#8b5cf6' }}>RS</span>
              <div>
                <div className="name">Riya Sharma</div>
                <div className="role">Head of Design, Northwind</div>
              </div>
            </div>
          </div>
        </DemoCard>

        <DemoCard
          label="CTA banner"
          code={`<div className="cta-banner">
  <h3>Ready to build faster?</h3>
  <p>Grab any block, paste it in, and ship today.</p>
  <button className="ui-btn ui-btn-primary ui-btn-lg">Get started</button>
</div>`}
        >
          <div className="cta-banner">
            <h3>Ready to build faster?</h3>
            <p>Grab any block, paste it into your project, and ship today.</p>
            <button className="ui-btn ui-btn-primary ui-btn-lg">Get started</button>
          </div>
        </DemoCard>
      </Grid>
    </Section>
  </PageShell>
);

export default Blocks;
