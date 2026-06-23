import { PageShell, Section } from './showcase/Parts';

const baseThemes = [
  { id: 'zinc', name: 'Zinc', dot: '#18181b' },
  { id: 'slate', name: 'Slate', dot: '#0f172a' },
  { id: 'stone', name: 'Stone', dot: '#1c1917' },
  { id: 'gray', name: 'Gray', dot: '#111827' },
  { id: 'neutral', name: 'Neutral', dot: '#171717' },
];

const accents = [
  { id: 'blue', name: 'Blue', color: '#2563eb' },
  { id: 'violet', name: 'Violet', color: '#8b5cf6' },
  { id: 'green', name: 'Green', color: '#10b981' },
  { id: 'yellow', name: 'Yellow', color: '#eab308' },
  { id: 'orange', name: 'Orange', color: '#f97316' },
  { id: 'red', name: 'Red', color: '#ef4444' },
  { id: 'pink', name: 'Pink', color: '#ec4899' },
];

const Themes = () => (
  <PageShell
    eyebrow="Theming"
    title="Themes"
    lead="Five neutral base palettes and seven accent colors combine into a complete look. Use the Theme switcher in the header to apply any combination live across the whole site."
  >
    <Section title="Base palettes" description="Set the overall surface and text tone of the interface.">
      <div className="theme-cards">
        {baseThemes.map((t) => (
          <div className={`theme-preview theme-${t.id}`} key={t.id}>
            <div className="tp-top">
              <div className="tp-bar" style={{ background: t.dot }} />
              <div className="tp-line" />
              <div className="tp-line short" />
            </div>
            <div className="tp-foot">
              <span className="tp-name">{t.name}</span>
              <span className="tp-dot" style={{ background: t.dot }} />
            </div>
          </div>
        ))}
      </div>
    </Section>

    <Section title="Accent colors" description="Recolor buttons, links, focus rings, and highlights.">
      <div className="accent-chips">
        {accents.map((a) => (
          <span className="accent-chip" key={a.id}>
            <i style={{ background: a.color }} />
            {a.name}
          </span>
        ))}
      </div>
    </Section>

    <Section title="How to apply" description="Themes are toggled with classes and a data attribute on the root element.">
      <div className="block-card">
        <pre style={{ margin: 0, fontSize: '0.82rem', fontFamily: 'ui-monospace, Menlo, monospace', color: 'var(--foreground)', whiteSpace: 'pre-wrap' }}>
{`// Light "Zinc" base with an orange accent
document.documentElement.className = 'theme-zinc accent-orange';

// Flip to dark mode
document.documentElement.setAttribute('data-theme', 'dark');`}
        </pre>
      </div>
      <p className="copy-hint">
        Tip: the header's <strong>Theme</strong> dropdown writes these same classes and persists your
        choice to <code style={{ fontFamily: 'ui-monospace, monospace' }}>localStorage</code>.
      </p>
    </Section>

    <Section title="Live preview" description="A sample card rendered with the currently active theme.">
      <div className="block-card" style={{ maxWidth: 420 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
          <strong style={{ fontSize: '0.95rem' }}>Upgrade your plan</strong>
          <span className="ui-badge solid">Pro</span>
        </div>
        <p style={{ margin: '0 0 1rem', fontSize: '0.85rem', color: 'var(--muted-foreground)' }}>
          Unlock advanced analytics, unlimited projects, and priority support.
        </p>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button className="ui-btn ui-btn-primary">Upgrade</button>
          <button className="ui-btn ui-btn-outline">Maybe later</button>
        </div>
      </div>
    </Section>
  </PageShell>
);

export default Themes;
