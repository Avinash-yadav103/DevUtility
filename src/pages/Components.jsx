import { useState } from 'react';
import { PageShell, Section, Grid, DemoCard } from './showcase/Parts';

const Check = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const Components = () => {
  const [on, setOn] = useState(true);
  const [checked, setChecked] = useState(true);
  const [radio, setRadio] = useState('a');
  const [tab, setTab] = useState('overview');

  return (
    <PageShell
      eyebrow="UI Kit"
      title="Components"
      lead="The building blocks of the design system — accessible, themeable primitives that respond to the active base palette and accent color."
    >
      <Section title="Buttons" description="Five variants and three sizes, all driven by the accent token.">
        <Grid>
          <DemoCard label="Variants">
            <button className="ui-btn ui-btn-primary">Primary</button>
            <button className="ui-btn ui-btn-secondary">Secondary</button>
            <button className="ui-btn ui-btn-outline">Outline</button>
            <button className="ui-btn ui-btn-ghost">Ghost</button>
            <button className="ui-btn ui-btn-destructive">Delete</button>
          </DemoCard>
          <DemoCard label="Sizes & states">
            <button className="ui-btn ui-btn-primary ui-btn-sm">Small</button>
            <button className="ui-btn ui-btn-primary">Default</button>
            <button className="ui-btn ui-btn-primary ui-btn-lg">Large</button>
            <button className="ui-btn ui-btn-primary" disabled>Disabled</button>
          </DemoCard>
          <DemoCard label="With icon">
            <button className="ui-btn ui-btn-primary"><Check /> Confirm</button>
            <button className="ui-btn ui-btn-outline">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14" /></svg>
              Add new
            </button>
          </DemoCard>
        </Grid>
      </Section>

      <Section title="Badges" description="Compact status labels and counts.">
        <Grid>
          <DemoCard label="Styles">
            <span className="ui-badge solid">Solid</span>
            <span className="ui-badge">Outline</span>
            <span className="ui-badge success"><i className="dot" /> Active</span>
            <span className="ui-badge warning">Pending</span>
            <span className="ui-badge danger">Failed</span>
          </DemoCard>
        </Grid>
      </Section>

      <Section title="Inputs & form controls" description="Text fields, switches, checkboxes, and radios.">
        <Grid>
          <DemoCard label="Text field" stageClassName="col">
            <div className="ui-field">
              <label className="ui-label">Email</label>
              <input className="ui-input" placeholder="you@example.com" />
            </div>
            <div className="ui-field">
              <label className="ui-label">Message</label>
              <textarea className="ui-textarea" rows="2" placeholder="Type here…" />
            </div>
          </DemoCard>
          <DemoCard label="Switch" stageClassName="col">
            <div className="ui-control-row">
              <button className="ui-switch" data-on={on} onClick={() => setOn(!on)} aria-label="Toggle" />
              <span>{on ? 'Notifications on' : 'Notifications off'}</span>
            </div>
          </DemoCard>
          <DemoCard label="Checkbox & radio" stageClassName="col">
            <button className="ui-control-row" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }} onClick={() => setChecked(!checked)}>
              <span className="ui-check" data-on={checked}>{checked && <Check />}</span>
              <span>Accept terms</span>
            </button>
            <button className="ui-control-row" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }} onClick={() => setRadio('a')}>
              <span className="ui-radio" data-on={radio === 'a'} /><span>Monthly</span>
            </button>
            <button className="ui-control-row" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }} onClick={() => setRadio('b')}>
              <span className="ui-radio" data-on={radio === 'b'} /><span>Yearly</span>
            </button>
          </DemoCard>
        </Grid>
      </Section>

      <Section title="Feedback" description="Alerts and progress indicators.">
        <Grid cols={2}>
          <DemoCard label="Alerts" stageClassName="col">
            <div className="ui-alert info">
              <span className="ui-alert-icon">ℹ️</span>
              <div><span className="ui-alert-title">Heads up</span>A new version is available.</div>
            </div>
            <div className="ui-alert success">
              <span className="ui-alert-icon">✅</span>
              <div><span className="ui-alert-title">Saved</span>Your changes were stored.</div>
            </div>
            <div className="ui-alert danger">
              <span className="ui-alert-icon">⛔</span>
              <div><span className="ui-alert-title">Error</span>Something went wrong.</div>
            </div>
          </DemoCard>
          <DemoCard label="Progress" stageClassName="col">
            <div className="ui-progress"><span style={{ width: '35%' }} /></div>
            <div className="ui-progress"><span style={{ width: '70%' }} /></div>
            <div className="ui-progress"><span style={{ width: '95%' }} /></div>
          </DemoCard>
        </Grid>
      </Section>

      <Section title="Navigation & display" description="Tabs, avatars, and keyboard hints.">
        <Grid cols={2}>
          <DemoCard label="Tabs">
            <div className="ui-tabs">
              <div className="ui-tablist">
                {['overview', 'activity', 'settings'].map((t) => (
                  <button key={t} className={`ui-tab ${tab === t ? 'active' : ''}`} onClick={() => setTab(t)}>
                    {t[0].toUpperCase() + t.slice(1)}
                  </button>
                ))}
              </div>
              <div className="ui-tabpanel">
                {tab === 'overview' && 'A quick summary of your account and recent metrics.'}
                {tab === 'activity' && 'Your latest actions and notifications appear here.'}
                {tab === 'settings' && 'Manage preferences, theme, and integrations.'}
              </div>
            </div>
          </DemoCard>
          <DemoCard label="Avatars & kbd" stageClassName="col">
            <div className="ui-avatar-stack">
              <span className="ui-avatar" style={{ background: '#2563eb' }}>AY</span>
              <span className="ui-avatar" style={{ background: '#8b5cf6' }}>JD</span>
              <span className="ui-avatar" style={{ background: '#10b981' }}>MK</span>
              <span className="ui-avatar" style={{ background: 'var(--secondary)', color: 'var(--foreground)' }}>+5</span>
            </div>
            <div className="ui-control-row">
              <span>Search</span><span className="ui-kbd">⌘</span><span className="ui-kbd">K</span>
            </div>
          </DemoCard>
        </Grid>
      </Section>
    </PageShell>
  );
};

export default Components;
