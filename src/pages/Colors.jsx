import { useState } from 'react';
import { PageShell, Section, CodeBlock } from './showcase/Parts';

const STEPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

const families = {
  slate: ['#f8fafc', '#f1f5f9', '#e2e8f0', '#cbd5e1', '#94a3b8', '#64748b', '#475569', '#334155', '#1e293b', '#0f172a', '#020617'],
  blue: ['#eff6ff', '#dbeafe', '#bfdbfe', '#93c5fd', '#60a5fa', '#3b82f6', '#2563eb', '#1d4ed8', '#1e40af', '#1e3a8a', '#172554'],
  violet: ['#f5f3ff', '#ede9fe', '#ddd6fe', '#c4b5fd', '#a78bfa', '#8b5cf6', '#7c3aed', '#6d28d9', '#5b21b6', '#4c1d95', '#2e1065'],
  emerald: ['#ecfdf5', '#d1fae5', '#a7f3d0', '#6ee7b7', '#34d399', '#10b981', '#059669', '#047857', '#065f46', '#064e3b', '#022c22'],
  orange: ['#fff7ed', '#ffedd5', '#fed7aa', '#fdba74', '#fb923c', '#f97316', '#ea580c', '#c2410c', '#9a3412', '#7c2d12', '#431407'],
  red: ['#fef2f2', '#fee2e2', '#fecaca', '#fca5a5', '#f87171', '#ef4444', '#dc2626', '#b91c1c', '#991b1b', '#7f1d1d', '#450a0a'],
};

const tokens = [
  { name: '--background', desc: 'Page background' },
  { name: '--foreground', desc: 'Primary text' },
  { name: '--primary', desc: 'Accent / actions' },
  { name: '--secondary', desc: 'Muted surface' },
  { name: '--muted-foreground', desc: 'Subtle text' },
  { name: '--border', desc: 'Borders & dividers' },
  { name: '--card', desc: 'Card surface' },
  { name: '--destructive', desc: 'Danger actions' },
];

const Colors = () => {
  const [copied, setCopied] = useState('');

  const copy = (hex) => {
    navigator.clipboard?.writeText(hex).then(() => {
      setCopied(hex);
      setTimeout(() => setCopied(''), 1200);
    });
  };

  return (
    <PageShell
      eyebrow="Foundations"
      title="Colors"
      lead="The color primitives behind the design system, plus the semantic tokens that map them to the active theme. Click any swatch to copy its hex value."
    >
      <Section title="Palette" description="Full tonal scales from 50 (lightest) to 950 (darkest).">
        {Object.entries(families).map(([name, shades]) => (
          <div className="color-family" key={name}>
            <p className="cf-name">{name}</p>
            <div className="color-scale">
              {shades.map((hex, i) => (
                <button className="swatch" key={hex} onClick={() => copy(hex)} title={`Copy ${hex}`}
                  style={{ textAlign: 'left', padding: 0, background: 'none', border: '1px solid var(--border)', cursor: 'pointer' }}>
                  <div className="sw-chip" style={{ background: hex }} />
                  <div className="sw-meta">
                    <span className="sw-step">{copied === hex ? 'Copied!' : STEPS[i]}</span>
                    <span className="sw-hex">{hex}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </Section>

      <Section title="Semantic tokens" description="CSS variables that resolve to different colors per theme and in dark mode.">
        <div className="token-grid">
          {tokens.map((t) => (
            <div className="token-row" key={t.name}>
              <span className="tk-chip" style={{ background: `var(${t.name})` }} />
              <div>
                <div className="tk-name">{t.name}</div>
                <div className="tk-desc">{t.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <p className="copy-hint">
          These tokens are defined in <code style={{ fontFamily: 'ui-monospace, monospace' }}>src/App.css</code> and
          update automatically when you change the base palette, accent, or toggle dark mode.
        </p>
      </Section>

      <Section title="Usage" description="Reference the tokens directly in your CSS — never hard-code a hex.">
        <CodeBlock
          language="css"
          code={`.button {
  background-color: var(--primary);
  color: var(--primary-foreground);
  border: 1px solid var(--border);
  border-radius: var(--radius);
}

.card {
  background-color: var(--card);
  color: var(--foreground);
}`}
        />
      </Section>
    </PageShell>
  );
};

export default Colors;
