import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import AtmCard from '../components/blocks/AtmCard';
import { hero as gymHero } from '../assets/components/website/gym';
import { hero as coffeeHero } from '../assets/components/website/coffee';
import { bigShoe1 as nikeShoe } from '../assets/components/website/nike/images';
import '../css/docs.css';

/* =========================================================================
   Icons
   ========================================================================= */
const CopyIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);
const CheckIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const ChevronDown = (props) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

/* =========================================================================
   Reusable documentation primitives
   ========================================================================= */

const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false);
  const handle = () => {
    navigator.clipboard?.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };
  return (
    <button className={`code-copy-btn ${copied ? 'copied' : ''}`} onClick={handle} aria-label="Copy code" title="Copy">
      {copied ? <CheckIcon /> : <CopyIcon />}
    </button>
  );
};

const CodeBlock = ({ code, language = 'jsx', title }) => (
  <div className={`code-block ${title ? 'has-title' : ''}`}>
    {title && (
      <div className="code-filename">
        <span className="file-dot" />
        <span>{title}</span>
        <span className="file-lang">{language}</span>
      </div>
    )}
    <div className="code-body" style={{ position: 'relative' }}>
      <CopyButton text={code} />
      <SyntaxHighlighter language={language} style={coldarkDark}
        customStyle={{ padding: '1rem 1.1rem', margin: 0, background: 'transparent' }}>
        {code}
      </SyntaxHighlighter>
    </div>
  </div>
);

const CommandTabs = ({ commands }) => {
  const [i, setI] = useState(0);
  return (
    <div className="cmd-tabs">
      <div className="cmd-tablist">
        {commands.map((c, idx) => (
          <button key={c.label} className={`cmd-tab ${i === idx ? 'active' : ''}`} onClick={() => setI(idx)}>
            {c.label}
          </button>
        ))}
      </div>
      <div className="code-body" style={{ position: 'relative' }}>
        <CopyButton text={commands[i].code} />
        <SyntaxHighlighter language="bash" style={coldarkDark}
          customStyle={{ padding: '0.85rem 1.1rem', margin: 0, background: 'transparent' }}>
          {commands[i].code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

const ComponentPreview = ({ children, code, language = 'jsx', previewClassName = '' }) => {
  const [tab, setTab] = useState('preview');
  return (
    <div className="component-preview">
      <div className="preview-tabs">
        <button className={`preview-tab ${tab === 'preview' ? 'active' : ''}`} onClick={() => setTab('preview')}>Preview</button>
        <button className={`preview-tab ${tab === 'code' ? 'active' : ''}`} onClick={() => setTab('code')}>Code</button>
      </div>
      {tab === 'preview'
        ? <div className={`preview-area ${previewClassName}`}>{children}</div>
        : (
          <div className="code-body" style={{ position: 'relative' }}>
            <CopyButton text={code} />
            <SyntaxHighlighter language={language} style={coldarkDark}
              customStyle={{ padding: '1rem 1.1rem', margin: 0, background: 'transparent' }}>
              {code}
            </SyntaxHighlighter>
          </div>
        )}
    </div>
  );
};

const PropsTable = ({ headers = ['Prop', 'Type', 'Default', 'Description'], rows }) => (
  <div className="props-table">
    <table>
      <thead><tr>{headers.map((h) => <th key={h}>{h}</th>)}</tr></thead>
      <tbody>{rows.map((row, i) => <tr key={i}>{row.map((c, j) => <td key={j}>{c}</td>)}</tr>)}</tbody>
    </table>
  </div>
);

const Callout = ({ type = 'note', children }) => {
  const icon = { note: 'ℹ️', warning: '⚠️', tip: '💡' }[type] || 'ℹ️';
  return (
    <div className={`callout ${type}`}>
      <span className="callout-icon">{icon}</span>
      <div><p>{children}</p></div>
    </div>
  );
};

const Badge = ({ children, solid }) => <span className={`doc-badge ${solid ? 'solid' : ''}`}>{children}</span>;

const Breadcrumb = ({ items }) => (
  <div className="doc-breadcrumb">
    {items.map((item, i) => (
      <React.Fragment key={i}>
        {i > 0 && <span className="sep">/</span>}
        <span className={i === items.length - 1 ? 'current' : ''}>{item}</span>
      </React.Fragment>
    ))}
  </div>
);

const DocMeta = ({ readTime }) => (
  <div className="doc-meta">
    <span>Updated June 2026</span>
    <span className="dot">·</span>
    <span>{readTime} read</span>
  </div>
);

const Steps = ({ children }) => (
  <div className="doc-steps">
    {React.Children.map(children, (child, i) => React.cloneElement(child, { num: i + 1 }))}
  </div>
);
const Step = ({ num, title, children }) => (
  <div className="doc-step">
    <div className="step-num">{num}</div>
    <p className="step-title">{title}</p>
    {children}
  </div>
);

const CardGrid = ({ children }) => <div className="link-card-grid">{children}</div>;
const LinkCard = ({ to, icon, title, desc }) => (
  <Link to={to} className="link-card">
    <div className="lc-icon">{icon}</div>
    <div className="lc-title">{title} <span className="arrow">→</span></div>
    <p className="lc-desc">{desc}</p>
  </Link>
);

const FaqItem = ({ q, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <button className="faq-q" onClick={() => setOpen(!open)} aria-expanded={open}>
        {q}
        <ChevronDown className="faq-chevron" />
      </button>
      {open && <div className="faq-a">{children}</div>}
    </div>
  );
};

const DoDont = ({ doItems, dontItems }) => (
  <div className="dodont">
    <div className="dodont-card do">
      <div className="dd-head">✓ Do</div>
      <ul>{doItems.map((d, i) => <li key={i}>{d}</li>)}</ul>
    </div>
    <div className="dodont-card dont">
      <div className="dd-head">✕ Don't</div>
      <ul>{dontItems.map((d, i) => <li key={i}>{d}</li>)}</ul>
    </div>
  </div>
);

/* Ordered list of every doc page — drives prev/next pagination */
const PAGE_ORDER = [
  { path: '/docs/introduction', title: 'Introduction' },
  { path: '/docs/installation', title: 'Installation' },
  { path: '/docs/project-structure', title: 'Project Structure' },
  { path: '/docs/components/button', title: 'Button' },
  { path: '/docs/components/card', title: 'Card' },
  { path: '/docs/components/atm-card', title: 'ATM Card' },
  { path: '/docs/templates/nike', title: 'Nike Store' },
  { path: '/docs/templates/gym', title: 'Gym — FitZone' },
  { path: '/docs/templates/coffee', title: 'Coffee — Drinko' },
  { path: '/docs/customization/theming', title: 'Theming' },
  { path: '/docs/customization/dark-mode', title: 'Dark Mode' },
  { path: '/docs/resources/accessibility', title: 'Accessibility' },
  { path: '/docs/resources/faq', title: 'FAQ' },
];

const Pagination = () => {
  const { pathname } = useLocation();
  const idx = PAGE_ORDER.findIndex((p) => p.path === pathname);
  if (idx === -1) return null;
  const prev = PAGE_ORDER[idx - 1];
  const next = PAGE_ORDER[idx + 1];
  return (
    <div className="doc-pagination">
      {prev ? (
        <Link to={prev.path} className="prev">
          <span className="page-dir">← Previous</span>
          <span className="page-title">{prev.title}</span>
        </Link>
      ) : <span />}
      {next && (
        <Link to={next.path} className="next">
          <span className="page-dir">Next →</span>
          <span className="page-title">{next.title}</span>
        </Link>
      )}
    </div>
  );
};

const DocPage = ({ crumbs, children }) => (
  <div className="doc-content">
    <Breadcrumb items={crumbs} />
    {children}
    <Pagination />
  </div>
);

/* =========================================================================
   Pages — Getting Started
   ========================================================================= */

const Introduction = () => (
  <DocPage crumbs={['Docs', 'Getting Started', 'Introduction']}>
    <h1>Introduction</h1>
    <DocMeta readTime="3 min" />
    <p className="lead">
      Component/UI is a hand-built collection of accessible React components and full-page
      website templates — copy the source, own the code, and ship faster.
    </p>

    <p>
      This is not an installable npm dependency. Like <strong>shadcn/ui</strong>, you copy the
      pieces you need directly into your project and customize them freely. Everything is built
      with <strong>React 19</strong>, <strong>Tailwind CSS v4</strong>, and{' '}
      <strong>React Router</strong>, styled through a single set of CSS variables so the whole
      library adapts to your theme and dark mode out of the box.
    </p>

    <h2>Browse the library</h2>
    <p>Jump straight into the interactive galleries, or read the guides below.</p>
    <CardGrid>
      <LinkCard to="/components" icon="🧩" title="Components" desc="Buttons, badges, inputs, alerts, tabs and more primitives." />
      <LinkCard to="/blocks" icon="🧱" title="Blocks" desc="Pre-composed sections: pricing, auth, stats, testimonials." />
      <LinkCard to="/charts" icon="📊" title="Charts" desc="Dependency-free SVG bar, line, area, and donut charts." />
      <LinkCard to="/themes" icon="🎨" title="Themes" desc="Five base palettes and seven accents, applied live." />
      <LinkCard to="/colors" icon="🌈" title="Colors" desc="Full tonal scales plus the semantic token reference." />
      <LinkCard to="/docs/installation" icon="🚀" title="Installation" desc="Get the project running locally in under a minute." />
    </CardGrid>

    <h2>Core concepts</h2>
    <ul>
      <li><strong>Own the code.</strong> Components are plain, readable React — no black boxes to fight.</li>
      <li><strong>Token-driven.</strong> One set of CSS variables powers theming, accents, and dark mode.</li>
      <li><strong>Composable.</strong> Small primitives combine into blocks, blocks into full pages.</li>
      <li><strong>Framework-native.</strong> Built on the tools you already use — React, Tailwind, Router.</li>
    </ul>

    <Callout type="tip">
      New here? Start with <strong>Installation</strong>, then open any component in the sidebar to
      see a live preview and copy its source from the <strong>Code</strong> tab.
    </Callout>
  </DocPage>
);

const Installation = () => (
  <DocPage crumbs={['Docs', 'Getting Started', 'Installation']}>
    <h1>Installation</h1>
    <DocMeta readTime="2 min" />
    <p className="lead">Get the component library running locally in under a minute.</p>

    <Callout type="note">
      <strong>Prerequisites:</strong> Node.js 18 or newer and a package manager (npm, yarn, pnpm, or bun).
    </Callout>

    <h2>Quick start</h2>
    <Steps>
      <Step title="Clone the repository">
        <CodeBlock language="bash" title="terminal"
          code={`git clone https://github.com/Avinash-yadav103/component-library.git
cd component-library`} />
      </Step>
      <Step title="Install dependencies">
        <p>Use whichever package manager you prefer:</p>
        <CommandTabs
          commands={[
            { label: 'npm', code: 'npm install' },
            { label: 'yarn', code: 'yarn' },
            { label: 'pnpm', code: 'pnpm install' },
            { label: 'bun', code: 'bun install' },
          ]}
        />
      </Step>
      <Step title="Start the dev server">
        <p>The app runs at <code>http://localhost:5173</code> with hot reload.</p>
        <CommandTabs
          commands={[
            { label: 'npm', code: 'npm run dev' },
            { label: 'yarn', code: 'yarn dev' },
            { label: 'pnpm', code: 'pnpm dev' },
            { label: 'bun', code: 'bun run dev' },
          ]}
        />
      </Step>
    </Steps>

    <h2>Available scripts</h2>
    <PropsTable
      headers={['Script', 'Description']}
      rows={[
        [<code>dev</code>, 'Start the Vite dev server with hot module replacement'],
        [<code>build</code>, 'Produce an optimized production build in dist/'],
        [<code>preview</code>, 'Preview the production build locally'],
        [<code>lint</code>, 'Run ESLint across the project'],
      ]}
    />

    <h2>Using a component in your own app</h2>
    <p>To reuse a piece elsewhere, copy its file (and any assets it imports) into your project, then import it like any React component:</p>
    <CodeBlock title="src/App.jsx" code={`import AtmCard from './components/blocks/AtmCard';

export default function App() {
  return <AtmCard />;
}`} />

    <Callout type="warning">
      Templates and blocks rely on Tailwind CSS v4 and the shared CSS variables in{' '}
      <code>src/App.css</code>. If styles look off, confirm Tailwind v4 is installed — see{' '}
      <strong>Theming</strong> for how the layer system works.
    </Callout>
  </DocPage>
);

const ProjectStructure = () => (
  <DocPage crumbs={['Docs', 'Getting Started', 'Project Structure']}>
    <h1>Project Structure</h1>
    <DocMeta readTime="3 min" />
    <p className="lead">How the repository is organized so you always know where everything lives.</p>

    <h2>Directory layout</h2>
    <CodeBlock language="bash" title="project tree"
      code={`src/
├── App.jsx                  # Routes, header, homepage gallery
├── App.css                  # Theme variables + global styles (@layer base)
├── index.css                # Tailwind v4 entry (@import "tailwindcss")
├── main.jsx                 # React root + Router
├── pages/
│   ├── Docs.jsx             # This documentation site
│   ├── Components.jsx       # /components gallery
│   ├── Blocks.jsx           # /blocks gallery
│   ├── Charts.jsx           # /charts gallery
│   ├── Themes.jsx           # /themes gallery
│   ├── Colors.jsx           # /colors gallery
│   └── showcase/Parts.jsx   # Shared showcase primitives
├── css/
│   ├── docs.css             # Documentation styles
│   └── showcase.css         # Showcase page styles
├── components/
│   ├── blocks/              # Standalone widgets (AtmCard, …)
│   └── websites/            # Full-page templates (Nike, Gym, CoffeeShop)
└── assets/
    └── components/website/  # Per-template images + barrel index.js`} />

    <h2>Where things go</h2>
    <PropsTable
      headers={['Path', 'Purpose']}
      rows={[
        [<code>components/blocks/</code>, 'Small, reusable, self-contained components'],
        [<code>components/websites/</code>, 'Complete page templates wired to a route'],
        [<code>pages/</code>, 'Top-level routed pages (docs + galleries)'],
        [<code>assets/components/website/&lt;name&gt;/</code>, 'Local images for a template, re-exported via an index.js barrel'],
        [<code>App.jsx</code>, 'Register a route + add the homepage gallery card'],
      ]}
    />

    <h2>Adding a new template</h2>
    <Steps>
      <Step title="Create the component">
        <CodeBlock title="src/components/websites/MySite.jsx" code={`export default function MySite() {
  return <div className="min-h-screen">/* … */</div>;
}`} />
      </Step>
      <Step title="Add local images + a barrel">
        <CodeBlock title="src/assets/components/website/mysite/index.js" language="js"
          code={`import hero from './hero.jpg';
export { hero };`} />
      </Step>
      <Step title="Register the route">
        <CodeBlock title="src/App.jsx" code={`import MySite from './components/websites/MySite';

<Route path="/mysite" element={<MySite />} />`} />
      </Step>
    </Steps>

    <Callout type="tip">
      Always import images through the barrel so Vite bundles them and serves from localhost —
      never hot-link external URLs, which may be blocked in the browser.
    </Callout>
  </DocPage>
);

/* =========================================================================
   Pages — Components
   ========================================================================= */

const ButtonDocs = () => (
  <DocPage crumbs={['Docs', 'Components', 'Button']}>
    <h1>Button</h1>
    <DocMeta readTime="2 min" />
    <p className="lead">Clickable triggers with variants and sizes, themed via CSS variables.</p>

    <ComponentPreview
      code={`<button className="btn btn-primary">Primary</button>
<button className="btn btn-secondary">Secondary</button>
<button className="btn btn-outline">Outline</button>
<button className="btn btn-ghost">Ghost</button>
<button className="btn btn-destructive">Destructive</button>`}>
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-secondary">Secondary</button>
      <button className="btn btn-outline">Outline</button>
      <button className="btn btn-ghost">Ghost</button>
      <button className="btn btn-destructive">Destructive</button>
    </ComponentPreview>

    <h2>Sizes</h2>
    <ComponentPreview
      code={`<button className="btn btn-primary btn-sm">Small</button>
<button className="btn btn-primary">Default</button>
<button className="btn btn-primary btn-lg">Large</button>`}>
      <button className="btn btn-primary btn-sm">Small</button>
      <button className="btn btn-primary">Default</button>
      <button className="btn btn-primary btn-lg">Large</button>
    </ComponentPreview>

    <h2>Disabled</h2>
    <ComponentPreview code={`<button className="btn btn-primary" disabled>Disabled</button>`}>
      <button className="btn btn-primary" disabled>Disabled</button>
    </ComponentPreview>

    <h2>Class reference</h2>
    <PropsTable
      headers={['Class', 'Description']}
      rows={[
        [<code>btn</code>, 'Base button — always required'],
        [<code>btn-primary</code>, 'Solid fill using the active accent color'],
        [<code>btn-secondary</code>, 'Muted secondary surface'],
        [<code>btn-outline</code>, 'Transparent with a border'],
        [<code>btn-ghost</code>, 'Transparent until hovered'],
        [<code>btn-destructive</code>, 'Destructive / danger action'],
        [<><code>btn-sm</code> · <code>btn-lg</code></>, 'Size modifiers (default is medium)'],
      ]}
    />

    <h2>Guidelines</h2>
    <DoDont
      doItems={[
        'Use one primary button per view to guide the main action.',
        'Pair destructive actions with a confirmation step.',
        'Keep labels short and action-oriented ("Save", "Delete").',
      ]}
      dontItems={[
        'Stack multiple primary buttons competing for attention.',
        'Use color alone to convey state — add text or icons.',
        'Disable a button without explaining why it is unavailable.',
      ]}
    />

    <Callout type="note">
      Buttons are native <code>&lt;button&gt;</code> elements, so they are keyboard-focusable and
      respond to Enter / Space by default. See <strong>Accessibility</strong> for more.
    </Callout>
  </DocPage>
);

const CardDocs = () => (
  <DocPage crumbs={['Docs', 'Components', 'Card']}>
    <h1>Card</h1>
    <DocMeta readTime="1 min" />
    <p className="lead">A bordered surface for grouping related content and actions.</p>

    <ComponentPreview
      code={`<div className="card">
  <div className="card-header">
    <h3 className="card-title">Project Settings</h3>
    <p className="card-description">Manage your project preferences.</p>
  </div>
  <div className="card-content">
    <p>Update the name, visibility, and team access for this project.</p>
  </div>
  <div className="card-footer">
    <button className="btn btn-primary">Save</button>
  </div>
</div>`}>
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Project Settings</h3>
          <p className="card-description">Manage your project preferences.</p>
        </div>
        <div className="card-content">
          <p>Update the name, visibility, and team access for this project.</p>
        </div>
        <div className="card-footer">
          <button className="btn btn-primary">Save</button>
        </div>
      </div>
    </ComponentPreview>

    <h2>Anatomy</h2>
    <PropsTable
      headers={['Element', 'Description']}
      rows={[
        [<code>.card</code>, 'Outer container with border, radius, and shadow'],
        [<code>.card-header</code>, 'Top region for the title and description'],
        [<code>.card-title</code>, 'Primary heading'],
        [<code>.card-description</code>, 'Muted supporting text'],
        [<code>.card-content</code>, 'Main body of the card'],
        [<code>.card-footer</code>, 'Action row, right-aligned by default'],
      ]}
    />
  </DocPage>
);

const AtmCardDocs = () => (
  <DocPage crumbs={['Docs', 'Components', 'ATM Card']}>
    <h1>ATM Card</h1>
    <DocMeta readTime="2 min" />
    <p className="lead">A realistic credit card that flips between its front and back face on click.</p>

    <ComponentPreview previewClassName="atm-card-preview"
      code={`import AtmCard from './components/blocks/AtmCard';

export default function App() {
  return <AtmCard />;
}`}>
      <AtmCard />
    </ComponentPreview>

    <h2>Usage</h2>
    <p>Import the component and render it — it's fully self-contained, manages its own flip state, and needs no props to work.</p>
    <CodeBlock title="example.jsx" code={`import AtmCard from './components/blocks/AtmCard';

<AtmCard />`} />

    <h2>Behavior</h2>
    <ul>
      <li>Click the card to toggle between the front (number, holder, expiry) and back (CVV).</li>
      <li>The flip uses the <code>.rotate-y-180</code> utility defined in <code>App.css</code>.</li>
      <li>Card artwork (chip, network logo) is bundled from <code>src/assets</code>.</li>
    </ul>

    <Callout type="note">
      The current implementation uses fixed display values. To make it data-driven, lift the card
      number, holder, and expiry into props and replace the hard-coded strings.
    </Callout>
  </DocPage>
);

/* =========================================================================
   Pages — Website Templates
   ========================================================================= */

const TemplatePage = ({ crumbs, title, badge, lead, image, demoPath, intro, sections, accent, customization }) => (
  <DocPage crumbs={crumbs}>
    <h1>{title}</h1>
    <DocMeta readTime="2 min" />
    <p className="lead">{lead}</p>

    <div className="template-meta">
      <Badge solid>{badge}</Badge>
      <Badge>Responsive</Badge>
      <Badge>Tailwind v4</Badge>
    </div>

    <div className="template-hero">
      <img src={image} alt={`${title} preview`} />
      <div className="template-overlay">
        <Link to={demoPath} className="btn btn-primary">View live demo →</Link>
      </div>
    </div>

    <p>{intro}</p>

    <h2>Page sections</h2>
    <PropsTable headers={['Section', 'What it shows']} rows={sections} />

    <h2>Usage</h2>
    <p>The template is registered as a route in <code>App.jsx</code>:</p>
    <CodeBlock title="src/App.jsx"
      code={`import ${title.split(/[ —]/)[0]}Template from './components/websites/${demoPath.replace('/', '')}';

<Route path="${demoPath}" element={<${title.split(/[ —]/)[0]}Template />} />`} />

    <h2>Customization</h2>
    <p>{customization}</p>
    <Callout type="tip">
      Swap the photography by replacing the files in{' '}
      <code>src/assets/components/website/{accent}/</code> — keep the same filenames and the barrel
      <code> index.js</code> picks them up automatically.
    </Callout>
  </DocPage>
);

const NikeDocs = () => (
  <TemplatePage
    crumbs={['Docs', 'Templates', 'Nike Store']}
    title="Nike Store" badge="Template" accent="nike" demoPath="/nike" image={nikeShoe}
    lead="A bright, conversion-focused e-commerce landing page for a sneaker brand."
    intro="Built from modular section components under nikesections/, the Nike template covers a sticky nav, hero with product showcase, popular products grid, services, special offers, customer reviews, a newsletter subscribe block, and a footer."
    sections={[
      ['Nav', 'Sticky navigation bar with logo and links'],
      ['Hero', 'Headline, CTA, and a large featured shoe'],
      ['Popular Products', 'Grid of product cards with ratings'],
      ['Services', 'Key selling points with icons'],
      ['Special Offers', 'Promotional split section'],
      ['Customer Reviews', 'Testimonials on a tinted background'],
      ['Subscribe', 'Newsletter sign-up'],
      ['Footer', 'Links and social icons on a dark background'],
    ]}
    customization="Each section lives in its own file inside src/components/websites/nikesections/, so you can edit one area without touching the rest. Colors come from the Tailwind palette; product data is defined in src/constants."
  />
);

const GymDocs = () => (
  <TemplatePage
    crumbs={['Docs', 'Templates', 'Gym — FitZone']}
    title="Gym — FitZone" badge="New" accent="gym" demoPath="/gym" image={gymHero}
    lead="A bold, dark-themed fitness landing page with an orange accent and an interactive class schedule."
    intro="FitZone is a single-file template with a dramatic hero, a programs grid, an about block, an interactive weekly schedule (switchable by training category), an animated trainers section, pricing plans, and a footer."
    sections={[
      ['Nav', 'Sticky header with mobile hamburger menu'],
      ['Hero', '“Unleash Your Potential” with dual CTAs'],
      ['Programs', 'Four image cards with hover zoom'],
      ['About', 'Grayscale-to-color image with copy'],
      ['Schedule', 'Tabbed timetable across six categories'],
      ['Trainers', 'Animated skill progress bars'],
      ['Pricing', 'Basic / Regular / Premium plans'],
      ['Footer', 'Quick links, programs, and contact'],
    ]}
    customization="The accent color #ff4500 is used throughout — find-and-replace it to re-brand. The schedule data lives in the scheduleData object at the top of Gym.jsx; edit it to change class times."
  />
);

const CoffeeDocs = () => (
  <TemplatePage
    crumbs={['Docs', 'Templates', 'Coffee — Drinko']}
    title="Coffee — Drinko" badge="New" accent="coffee" demoPath="/coffee" image={coffeeHero}
    lead="A warm, cream-toned coffee shop site with a filterable drinks menu and a new-drink promo."
    intro="Drinko features a serif-styled hero, a category-filtered menu of drink cards with prices and an add-to-cart action, a pink new-drink promo block, a delivery features section, and a dark footer."
    sections={[
      ['Nav', 'Logo, links, and wishlist / account / cart icons'],
      ['Hero', '“Order Coffee” over a full-bleed photo'],
      ['Menu', 'Five category pills filtering drink cards'],
      ['New Drink', 'Featured promo with sale pricing'],
      ['Delivery', 'Three delivery feature cards'],
      ['Footer', 'Navigation, categories, and contact'],
    ]}
    customization="Menu items live in the coffeeMenu object at the top of CoffeeShop.jsx, grouped by category. Each entry maps a name, description, price, and an imported image from the coffee asset pool."
  />
);

/* =========================================================================
   Pages — Customization
   ========================================================================= */

const ThemingDocs = () => (
  <DocPage crumbs={['Docs', 'Customization', 'Theming']}>
    <h1>Theming</h1>
    <DocMeta readTime="3 min" />
    <p className="lead">The whole library is driven by CSS variables, so re-skinning everything is a matter of changing a handful of values.</p>

    <h2>How it works</h2>
    <p>Theme tokens are defined in <code>src/App.css</code> inside an <code>@layer base</code> block. Putting them in the base layer lets Tailwind utility classes override them where needed, while keeping the library's own components consistently themed.</p>
    <CodeBlock language="css" title="src/App.css"
      code={`:root {
  --background: #ffffff;
  --foreground: #020617;
  --primary: #2563eb;
  --primary-foreground: #ffffff;
  --secondary: #f1f5f9;
  --muted: #f1f5f9;
  --muted-foreground: #64748b;
  --border: #e2e8f0;
  --radius: 0.5rem;
}`} />

    <h2>Base palettes</h2>
    <p>Five neutral bases set the overall surface tone:</p>
    <div className="theme-grid">
      {['zinc', 'slate', 'stone', 'gray', 'neutral'].map((t) => (
        <div className={`theme-item theme-${t}`} key={t}>
          <div className="theme-color" /><span>{t[0].toUpperCase() + t.slice(1)}</span>
        </div>
      ))}
    </div>

    <h2>Accent colors</h2>
    <p>Seven accents recolor buttons, links, and focus rings:</p>
    <div className="accent-grid">
      {['blue', 'violet', 'green', 'yellow', 'orange', 'red', 'pink'].map((a) => (
        <div className={`accent-item accent-${a}`} key={a}>
          <div className="accent-color" /><span>{a[0].toUpperCase() + a.slice(1)}</span>
        </div>
      ))}
    </div>

    <h2>Applying a theme</h2>
    <p>Themes are applied by toggling classes on the <code>&lt;html&gt;</code> element — exactly what the header's theme switcher does:</p>
    <CodeBlock language="js"
      code={`document.documentElement.className = 'theme-zinc accent-orange';
document.documentElement.setAttribute('data-theme', 'dark');`} />

    <h2>Token reference</h2>
    <PropsTable
      headers={['Variable', 'Description']}
      rows={[
        [<code>--background</code>, 'Page background'],
        [<code>--foreground</code>, 'Primary text color'],
        [<code>--primary</code>, 'Accent for buttons, links, focus'],
        [<code>--secondary</code>, 'Muted surface for secondary UI'],
        [<code>--muted-foreground</code>, 'Subtle / helper text'],
        [<code>--border</code>, 'Border and divider color'],
        [<code>--radius</code>, 'Base corner radius'],
      ]}
    />
  </DocPage>
);

const DarkModeDocs = () => (
  <DocPage crumbs={['Docs', 'Customization', 'Dark Mode']}>
    <h1>Dark Mode</h1>
    <DocMeta readTime="2 min" />
    <p className="lead">A single attribute flips the entire interface between light and dark.</p>

    <h2>The mechanism</h2>
    <p>Dark mode is controlled by <code>data-theme="dark"</code> on the root element. App.css defines a dark override for every token, so toggling the attribute re-colors the whole library.</p>
    <CodeBlock language="css" title="src/App.css"
      code={`[data-theme="dark"] {
  --background: #020617;
  --foreground: #f8fafc;
  --secondary: #1e293b;
  --muted: #1e293b;
  --muted-foreground: #94a3b8;
  --border: #1e293b;
}`} />

    <h2>Toggling at runtime</h2>
    <CodeBlock language="js"
      code={`function toggleTheme() {
  const root = document.documentElement;
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
}`} />

    <h2>Respecting system preference</h2>
    <p>On first load, fall back to the user's OS setting:</p>
    <CodeBlock language="js"
      code={`const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const saved = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
document.documentElement.setAttribute('data-theme', saved);`} />

    <Callout type="note">
      The header's toggle and the App component already wire this up, persisting the choice to{' '}
      <code>localStorage</code> across reloads.
    </Callout>
  </DocPage>
);

/* =========================================================================
   Pages — Resources
   ========================================================================= */

const AccessibilityDocs = () => (
  <DocPage crumbs={['Docs', 'Resources', 'Accessibility']}>
    <h1>Accessibility</h1>
    <DocMeta readTime="3 min" />
    <p className="lead">Practical guidance for keeping the components usable by everyone, on any input device.</p>

    <h2>Semantic HTML first</h2>
    <p>Reach for the right element before adding ARIA. Native elements come with built-in keyboard support, focus management, and screen-reader semantics.</p>
    <DoDont
      doItems={[
        'Use <button> for actions and <a> for navigation.',
        'Label form controls with <label> tied to an id.',
        'Use heading levels (h1→h2→h3) in order.',
      ]}
      dontItems={[
        'Make a <div> clickable without role + key handlers.',
        'Skip from h1 straight to h4.',
        'Rely on placeholder text as the only label.',
      ]}
    />

    <h2>Keyboard navigation</h2>
    <PropsTable
      headers={['Key', 'Expected behavior']}
      rows={[
        [<code>Tab</code>, 'Move focus to the next interactive element'],
        [<code>Shift + Tab</code>, 'Move focus to the previous element'],
        [<code>Enter / Space</code>, 'Activate buttons and links'],
        [<code>Esc</code>, 'Dismiss overlays, modals, and menus'],
      ]}
    />

    <h2>Focus visibility</h2>
    <p>Never remove focus outlines without providing a clear replacement. The library uses a visible focus ring derived from the <code>--ring</code> token.</p>
    <CodeBlock language="css"
      code={`.input:focus {
  outline: none;
  border-color: var(--ring);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--ring) 22%, transparent);
}`} />

    <h2>Color & contrast</h2>
    <ul>
      <li>Aim for at least <strong>4.5:1</strong> contrast for body text, <strong>3:1</strong> for large text.</li>
      <li>Never use color as the only signal — pair status colors with icons or text.</li>
      <li>Verify both light and dark themes; tokens change per mode.</li>
    </ul>

    <Callout type="tip">
      Respect users who prefer less motion by guarding animations with{' '}
      <code>@media (prefers-reduced-motion: reduce)</code>.
    </Callout>
  </DocPage>
);

const FaqDocs = () => (
  <DocPage crumbs={['Docs', 'Resources', 'FAQ']}>
    <h1>Frequently Asked Questions</h1>
    <DocMeta readTime="3 min" />
    <p className="lead">Quick answers to the things people ask most.</p>

    <FaqItem q="Is this an npm package I can install?">
      No. Like shadcn/ui, this is a copy-and-own library. You take the source of the components you
      need directly into your project, so you have full control and no runtime dependency.
    </FaqItem>
    <FaqItem q="Which versions of React and Tailwind are required?">
      React 19 and Tailwind CSS v4. The Vite plugin (<code>@tailwindcss/vite</code>) handles the
      build; there is no separate PostCSS config needed.
    </FaqItem>
    <FaqItem q="How do I change the accent color everywhere at once?">
      Apply an accent class to the <code>&lt;html&gt;</code> element, e.g.{' '}
      <code>accent-orange</code>. Every component reads the <code>--primary</code> token, so the
      whole UI updates instantly. See the Theming guide.
    </FaqItem>
    <FaqItem q="My Tailwind classes aren't overriding the global styles. Why?">
      In Tailwind v4, <code>@import "tailwindcss"</code> puts utilities in a cascade layer. Unlayered
      global CSS beats layered utilities, so legacy global styles must live in{' '}
      <code>@layer base</code>. This project already does that in <code>App.css</code>.
    </FaqItem>
    <FaqItem q="Why do template images load locally instead of from a URL?">
      Browsers can block hot-linked external images. Importing them through an asset barrel lets Vite
      bundle and serve them from your own origin, which is reliable and faster.
    </FaqItem>
    <FaqItem q="Can I use these components in a Next.js or Remix app?">
      Yes. The components are plain React. Move the markup and CSS variables over; swap{' '}
      <code>react-router</code> links for your framework's navigation primitives.
    </FaqItem>

    <Callout type="note">
      Still stuck? Open an issue on the project's GitHub repository with a minimal reproduction.
    </Callout>
  </DocPage>
);

/* =========================================================================
   "On this page" rail (scroll-spy)
   ========================================================================= */
const OnThisPage = ({ items, activeId }) => {
  if (!items.length) return null;
  return (
    <aside className="docs-toc">
      <h4>On this page</h4>
      <ul>
        {items.map((item) => (
          <li key={item.id} className={`lvl-${item.level}`}>
            <a href={`#${item.id}`} className={activeId === item.id ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' }); }}>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

/* =========================================================================
   Main Docs shell
   ========================================================================= */
const Docs = ({ theme }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [toc, setToc] = useState([]);
  const [activeId, setActiveId] = useState('');
  const contentRef = useRef(null);
  const searchRef = useRef(null);

  // Redirect bare /docs to the introduction
  useEffect(() => {
    if (location.pathname === '/docs' || location.pathname === '/docs/') {
      navigate('/docs/introduction', { replace: true });
    }
  }, [location.pathname, navigate]);

  // ⌘K / Ctrl+K focuses the sidebar search
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Build the "On this page" list + inject hover anchors on headings
  useEffect(() => {
    const root = contentRef.current;
    if (!root) return;
    const id = requestAnimationFrame(() => {
      const headings = Array.from(root.querySelectorAll('.doc-content h2, .doc-content h3'));
      const items = headings.map((h) => {
        const text = h.textContent;
        if (!h.id) {
          h.id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        }
        if (!h.querySelector('.heading-anchor')) {
          const a = document.createElement('a');
          a.className = 'heading-anchor';
          a.href = `#${h.id}`;
          a.textContent = '#';
          a.setAttribute('aria-hidden', 'true');
          h.insertBefore(a, h.firstChild);
        }
        return { id: h.id, text, level: h.tagName === 'H3' ? 3 : 2 };
      });
      setToc(items);
      setActiveId(items[0]?.id || '');
    });
    window.scrollTo({ top: 0 });
    return () => cancelAnimationFrame(id);
  }, [location.pathname]);

  // Scroll-spy
  useEffect(() => {
    if (!toc.length) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => { if (entry.isIntersecting) setActiveId(entry.target.id); }),
      { rootMargin: '0px 0px -75% 0px', threshold: 0 }
    );
    toc.forEach((t) => { const el = document.getElementById(t.id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, [toc]);

  const navItems = [
    {
      category: 'Getting Started',
      items: [
        { label: 'Introduction', path: '/docs/introduction' },
        { label: 'Installation', path: '/docs/installation' },
        { label: 'Project Structure', path: '/docs/project-structure' },
      ],
    },
    {
      category: 'Components',
      items: [
        { label: 'Button', path: '/docs/components/button' },
        { label: 'Card', path: '/docs/components/card' },
        { label: 'ATM Card', path: '/docs/components/atm-card' },
      ],
    },
    {
      category: 'Website Templates',
      items: [
        { label: 'Nike Store', path: '/docs/templates/nike' },
        { label: 'Gym — FitZone', path: '/docs/templates/gym', badge: 'New' },
        { label: 'Coffee — Drinko', path: '/docs/templates/coffee', badge: 'New' },
      ],
    },
    {
      category: 'Customization',
      items: [
        { label: 'Theming', path: '/docs/customization/theming' },
        { label: 'Dark Mode', path: '/docs/customization/dark-mode' },
      ],
    },
    {
      category: 'Resources',
      items: [
        { label: 'Accessibility', path: '/docs/resources/accessibility' },
        { label: 'FAQ', path: '/docs/resources/faq' },
      ],
    },
  ];

  const filteredNavItems = searchQuery
    ? navItems
        .map((c) => ({ ...c, items: c.items.filter((it) => it.label.toLowerCase().includes(searchQuery.toLowerCase())) }))
        .filter((c) => c.items.length > 0)
    : navItems;

  return (
    <div className={`docs-container ${toc.length ? 'has-toc' : ''} ${theme || ''}`}>
      <button className="sidebar-toggle" onClick={() => setIsSidebarOpen((o) => !o)}
        aria-label={isSidebarOpen ? 'Close sidebar' : 'Open sidebar'}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {isSidebarOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
        </svg>
      </button>

      <div className={`docs-sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <div className="search-box">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
            </svg>
            <input ref={searchRef} type="text" placeholder="Search docs..." value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} />
            <kbd>⌘K</kbd>
          </div>
        </div>

        <div className="sidebar-navigation">
          {filteredNavItems.length === 0 && <p className="nav-empty">No results.</p>}
          {filteredNavItems.map((category, index) => (
            <div className="nav-category" key={index}>
              <h3>{category.category}</h3>
              <ul>
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link to={item.path} className={location.pathname === item.path ? 'active' : ''}>
                      <span>{item.label}</span>
                      {item.badge && <span className="nav-badge">{item.badge}</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="docs-content" ref={contentRef}>
        <Routes>
          <Route path="introduction" element={<Introduction />} />
          <Route path="installation" element={<Installation />} />
          <Route path="project-structure" element={<ProjectStructure />} />
          <Route path="components/button" element={<ButtonDocs />} />
          <Route path="components/card" element={<CardDocs />} />
          <Route path="components/atm-card" element={<AtmCardDocs />} />
          <Route path="templates/nike" element={<NikeDocs />} />
          <Route path="templates/gym" element={<GymDocs />} />
          <Route path="templates/coffee" element={<CoffeeDocs />} />
          <Route path="customization/theming" element={<ThemingDocs />} />
          <Route path="customization/dark-mode" element={<DarkModeDocs />} />
          <Route path="resources/accessibility" element={<AccessibilityDocs />} />
          <Route path="resources/faq" element={<FaqDocs />} />
        </Routes>
      </div>

      <OnThisPage items={toc} activeId={activeId} />
    </div>
  );
};

export default Docs;
