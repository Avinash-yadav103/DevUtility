import { PageShell, Section, Grid, DemoCard } from './showcase/Parts';

/* ---- Bar chart ---------------------------------------------------------- */
const BarChart = () => {
  const data = [42, 58, 35, 70, 52, 88, 64];
  const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const max = 100;
  const w = 320, h = 160, pad = 24, gap = 12;
  const barW = (w - pad * 2 - gap * (data.length - 1)) / data.length;
  return (
    <svg className="chart-svg" viewBox={`0 0 ${w} ${h}`}>
      {[0, 0.5, 1].map((t) => (
        <line key={t} x1={pad} x2={w - pad} y1={pad + (h - pad * 2) * t} y2={pad + (h - pad * 2) * t}
          stroke="var(--border)" strokeWidth="1" />
      ))}
      {data.map((v, i) => {
        const bh = (v / max) * (h - pad * 2);
        const x = pad + i * (barW + gap);
        const y = h - pad - bh;
        return (
          <g key={i}>
            <rect x={x} y={y} width={barW} height={bh} rx="4" fill="var(--primary)" />
            <text x={x + barW / 2} y={h - pad + 14} textAnchor="middle" fontSize="9" fill="var(--muted-foreground)">{labels[i]}</text>
          </g>
        );
      })}
    </svg>
  );
};

/* ---- Line chart --------------------------------------------------------- */
const LineChart = () => {
  const series = [
    { color: 'var(--primary)', values: [20, 45, 30, 60, 48, 75, 68] },
    { color: '#10b981', values: [10, 25, 38, 32, 55, 50, 72] },
  ];
  const w = 320, h = 160, pad = 24, max = 100;
  const n = series[0].values.length;
  const xFor = (i) => pad + (i * (w - pad * 2)) / (n - 1);
  const yFor = (v) => h - pad - (v / max) * (h - pad * 2);
  return (
    <svg className="chart-svg" viewBox={`0 0 ${w} ${h}`}>
      {[0, 0.5, 1].map((t) => (
        <line key={t} x1={pad} x2={w - pad} y1={pad + (h - pad * 2) * t} y2={pad + (h - pad * 2) * t}
          stroke="var(--border)" strokeWidth="1" />
      ))}
      {series.map((s, si) => (
        <g key={si}>
          <polyline
            fill="none" stroke={s.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            points={s.values.map((v, i) => `${xFor(i)},${yFor(v)}`).join(' ')}
          />
          {s.values.map((v, i) => (
            <circle key={i} cx={xFor(i)} cy={yFor(v)} r="3" fill="var(--background)" stroke={s.color} strokeWidth="2" />
          ))}
        </g>
      ))}
    </svg>
  );
};

/* ---- Area chart --------------------------------------------------------- */
const AreaChart = () => {
  const values = [30, 50, 42, 68, 55, 80, 72, 90];
  const w = 320, h = 160, pad = 24, max = 100;
  const n = values.length;
  const xFor = (i) => pad + (i * (w - pad * 2)) / (n - 1);
  const yFor = (v) => h - pad - (v / max) * (h - pad * 2);
  const line = values.map((v, i) => `${xFor(i)},${yFor(v)}`).join(' L ');
  const area = `M ${xFor(0)},${h - pad} L ${line} L ${xFor(n - 1)},${h - pad} Z`;
  return (
    <svg className="chart-svg" viewBox={`0 0 ${w} ${h}`}>
      <defs>
        <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#areaFill)" />
      <polyline fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round"
        points={values.map((v, i) => `${xFor(i)},${yFor(v)}`).join(' ')} />
    </svg>
  );
};

/* ---- Donut chart -------------------------------------------------------- */
const DonutChart = () => {
  const segments = [
    { label: 'Desktop', value: 52, color: 'var(--primary)' },
    { label: 'Mobile', value: 33, color: '#8b5cf6' },
    { label: 'Tablet', value: 15, color: '#f59e0b' },
  ];
  const total = segments.reduce((a, s) => a + s.value, 0);
  const r = 52, c = 2 * Math.PI * r, cx = 80, cy = 80;
  let offset = 0;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
      <svg width="160" height="160" viewBox="0 0 160 160">
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="var(--secondary)" strokeWidth="18" />
        {segments.map((s, i) => {
          const len = (s.value / total) * c;
          const el = (
            <circle key={i} cx={cx} cy={cy} r={r} fill="none" stroke={s.color} strokeWidth="18"
              strokeDasharray={`${len} ${c - len}`} strokeDashoffset={-offset}
              transform={`rotate(-90 ${cx} ${cy})`} strokeLinecap="butt" />
          );
          offset += len;
          return el;
        })}
        <text x={cx} y={cy - 2} textAnchor="middle" className="donut-center">{total}%</text>
        <text x={cx} y={cy + 12} textAnchor="middle" className="donut-center-sub">VISITORS</text>
      </svg>
      <div className="chart-legend" style={{ flexDirection: 'column', gap: '0.5rem', marginTop: 0 }}>
        {segments.map((s) => (
          <span key={s.label}><i style={{ background: s.color }} />{s.label} · {s.value}%</span>
        ))}
      </div>
    </div>
  );
};

/* ---- Source snippets (shown in the Code tab) ---------------------------- */
const barCode = `const data = [42, 58, 35, 70, 52, 88, 64];
const max = 100, w = 320, h = 160, pad = 24, gap = 12;
const barW = (w - pad * 2 - gap * (data.length - 1)) / data.length;

<svg viewBox={\`0 0 \${w} \${h}\`}>
  {data.map((v, i) => {
    const bh = (v / max) * (h - pad * 2);
    const x = pad + i * (barW + gap);
    return (
      <rect key={i} x={x} y={h - pad - bh} width={barW} height={bh}
        rx="4" fill="var(--primary)" />
    );
  })}
</svg>`;

const lineCode = `const values = [20, 45, 30, 60, 48, 75, 68];
const w = 320, h = 160, pad = 24, max = 100, n = values.length;
const xFor = (i) => pad + (i * (w - pad * 2)) / (n - 1);
const yFor = (v) => h - pad - (v / max) * (h - pad * 2);

<polyline fill="none" stroke="var(--primary)" strokeWidth="2.5"
  points={values.map((v, i) => \`\${xFor(i)},\${yFor(v)}\`).join(' ')} />`;

const areaCode = `const area = \`M \${xFor(0)},\${h - pad} L \${line} L \${xFor(n - 1)},\${h - pad} Z\`;

<defs>
  <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.35" />
    <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
  </linearGradient>
</defs>
<path d={area} fill="url(#areaFill)" />`;

const donutCode = `const c = 2 * Math.PI * r;          // circumference
let offset = 0;

{segments.map((s) => {
  const len = (s.value / total) * c;
  const el = (
    <circle r={r} fill="none" stroke={s.color} strokeWidth="18"
      strokeDasharray={\`\${len} \${c - len}\`}
      strokeDashoffset={-offset}
      transform={\`rotate(-90 \${cx} \${cy})\`} />
  );
  offset += len;
  return el;
})}`;

const Charts = () => (
  <PageShell
    eyebrow="Data Viz"
    title="Charts"
    lead="Dependency-free SVG charts that inherit your accent color and adapt to light and dark mode — no charting library required. Open the Code tab to copy the source."
  >
    <Section title="Comparison" description="Bar and line charts for categorical and time-series data.">
      <Grid cols={2}>
        <DemoCard label="Bar chart" stageClassName="col" code={barCode}>
          <div style={{ width: '100%' }}>
            <h3 className="chart-title">Weekly Activity</h3>
            <p className="chart-sub">Sessions per day</p>
            <BarChart />
          </div>
        </DemoCard>
        <DemoCard label="Line chart" stageClassName="col" code={lineCode}>
          <div style={{ width: '100%' }}>
            <h3 className="chart-title">Growth Trend</h3>
            <p className="chart-sub">Two-series comparison</p>
            <LineChart />
            <div className="chart-legend">
              <span><i style={{ background: 'var(--primary)' }} />This year</span>
              <span><i style={{ background: '#10b981' }} />Last year</span>
            </div>
          </div>
        </DemoCard>
      </Grid>
    </Section>

    <Section title="Trend & distribution" description="Area and donut charts for cumulative and proportional data.">
      <Grid cols={2}>
        <DemoCard label="Area chart" stageClassName="col" code={areaCode}>
          <div style={{ width: '100%' }}>
            <h3 className="chart-title">Revenue</h3>
            <p className="chart-sub">Cumulative over 8 weeks</p>
            <AreaChart />
          </div>
        </DemoCard>
        <DemoCard label="Donut chart" stageClassName="col" code={donutCode}>
          <div style={{ width: '100%' }}>
            <h3 className="chart-title">Traffic by Device</h3>
            <p className="chart-sub">Share of total visitors</p>
            <DonutChart />
          </div>
        </DemoCard>
      </Grid>
    </Section>
  </PageShell>
);

export default Charts;
