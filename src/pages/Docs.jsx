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
   Reusable documentation primitives
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

const CodeBlock = ({ code, language = 'jsx' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard?.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <div className="code-block">
      <button
        className={`code-copy-btn ${copied ? 'copied' : ''}`}
        onClick={handleCopy}
        aria-label="Copy code"
        title="Copy"
      >
        {copied ? <CheckIcon /> : <CopyIcon />}
      </button>
      <SyntaxHighlighter
        language={language}
        style={coldarkDark}
        customStyle={{ padding: '1rem 1.1rem', margin: 0, background: 'transparent' }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

const ComponentPreview = ({ children, code, language = 'jsx', previewClassName = '' }) => {
  const [tab, setTab] = useState('preview');
  return (
    <div className="component-preview">
      <div className="preview-tabs">
        <button
          className={`preview-tab ${tab === 'preview' ? 'active' : ''}`}
          onClick={() => setTab('preview')}
        >
          Preview
        </button>
        <button
          className={`preview-tab ${tab === 'code' ? 'active' : ''}`}
          onClick={() => setTab('code')}
        >
          Code
        </button>
      </div>
      {tab === 'preview' ? (
        <div className={`preview-area ${previewClassName}`}>{children}</div>
      ) : (
        <CodeBlock code={code} language={language} />
      )}
    </div>
  );
};

const PropsTable = ({ headers = ['Prop', 'Type', 'Default', 'Description'], rows }) => (
  <div className="props-table">
    <table>
      <thead>
        <tr>{headers.map((h) => <th key={h}>{h}</th>)}</tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => <td key={j}>{cell}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Callout = ({ type = 'note', children }) => {
  const icon = { note: 'ℹ️', warning: '⚠️', tip: '💡' }[type] || 'ℹ️';
  return (
    <div className={`callout ${type}`}>
      <span className="callout-icon">{icon}</span>
      <div>
        <p>{children}</p>
      </div>
    </div>
  );
};

const Badge = ({ children, solid }) => (
  <span className={`doc-badge ${solid ? 'solid' : ''}`}>{children}</span>
);

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

/* Wraps every page: breadcrumb on top, pagination at the bottom */
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

    <h2>What's inside</h2>
    <div className="feature-grid">
      <div className="feature-card">
        <div className="feature-emoji">🧩</div>
        <h4>Interactive blocks</h4>
        <p>Self-contained widgets like the flippable ATM card you can drop anywhere.</p>
      </div>
      <div className="feature-card">
        <div className="feature-emoji">🖥️</div>
        <h4>Website templates</h4>
        <p>Complete, responsive pages — Nike store, FitZone gym, and Drinko coffee shop.</p>
      </div>
      <div className="feature-card">
        <div className="feature-emoji">🎨</div>
        <h4>Theme system</h4>
        <p>Five base palettes, seven accents, and a one-click dark mode via CSS variables.</p>
      </div>
      <div className="feature-card">
        <div className="feature-emoji">📋</div>
        <h4>Copy &amp; paste</h4>
        <p>Every example ships with its source. Grab it, paste it, make it yours.</p>
      </div>
    </div>

    <h2>Philosophy</h2>
    <p>
      Good components shouldn't lock you in. Each item here is plain, readable React — no opaque
      abstractions and no runtime library to fight. You stay in control of markup, styles, and
      behavior, which makes the library equally good for learning and for shipping.
    </p>

    <Callout type="tip">
      New here? Start with <strong>Installation</strong> to get the project running, then jump to
      any component in the sidebar to see a live preview and its source.
    </Callout>
  </DocPage>
);

const Installation = () => (
  <DocPage crumbs={['Docs', 'Getting Started', 'Installation']}>
    <h1>Installation</h1>
    <p className="lead">Get the component library running locally in under a minute.</p>

    <h2>Prerequisites</h2>
    <ul>
      <li><strong>Node.js 18+</strong> and npm</li>
      <li>A terminal and your favorite editor</li>
    </ul>

    <h2>Clone &amp; install</h2>
    <p>Clone the repository and install dependencies:</p>
    <CodeBlock
      language="bash"
      code={`git clone https://github.com/Avinash-yadav103/component-library.git
cd component-library
npm install`}
    />

    <h2>Run the dev server</h2>
    <p>Start Vite — the app is served at <code>http://localhost:5173</code> with hot reload.</p>
    <CodeBlock language="bash" code={`npm run dev`} />

    <h2>Available scripts</h2>
    <PropsTable
      headers={['Script', 'Description']}
      rows={[
        [<code>npm run dev</code>, 'Start the Vite dev server with hot module replacement'],
        [<code>npm run build</code>, 'Produce an optimized production build in dist/'],
        [<code>npm run preview</code>, 'Preview the production build locally'],
        [<code>npm run lint</code>, 'Run ESLint across the project'],
      ]}
    />

    <h2>Using a component in your own app</h2>
    <p>
      To reuse a piece elsewhere, copy its file (and any assets it imports) into your project, then
      import it like any React component:
    </p>
    <CodeBlock
      code={`import AtmCard from './components/blocks/AtmCard';

export default function App() {
  return <AtmCard />;
}`}
    />

    <Callout type="note">
      Templates and blocks rely on Tailwind CSS v4 and the shared CSS variables in{' '}
      <code>src/App.css</code>. See <strong>Theming</strong> for how that layer works.
    </Callout>
  </DocPage>
);

const ProjectStructure = () => (
  <DocPage crumbs={['Docs', 'Getting Started', 'Project Structure']}>
    <h1>Project Structure</h1>
    <p className="lead">How the repository is organized so you know where everything lives.</p>

    <h2>Directory layout</h2>
    <CodeBlock
      language="bash"
      code={`src/
├── App.jsx                  # Routes, header, homepage gallery
├── App.css                  # Theme variables + global styles (@layer base)
├── index.css                # Tailwind v4 entry (@import "tailwindcss")
├── main.jsx                 # React root + Router
├── pages/
│   └── Docs.jsx             # This documentation site
├── css/
│   └── docs.css             # Documentation styles
├── components/
│   ├── blocks/              # Standalone widgets (AtmCard, …)
│   └── websites/            # Full-page templates
│       ├── Nike.jsx
│       ├── Gym.jsx
│       ├── CoffeeShop.jsx
│       └── nikesections/    # Nike's section components
└── assets/
    └── components/website/  # Per-template images + barrel index.js
        ├── gym/
        ├── coffee/
        └── nike/`}
    />

    <h2>Where things go</h2>
    <PropsTable
      headers={['Path', 'Purpose']}
      rows={[
        [<code>components/blocks/</code>, 'Small, reusable, self-contained components'],
        [<code>components/websites/</code>, 'Complete page templates wired to a route'],
        [<code>assets/components/website/&lt;name&gt;/</code>, 'Local images for a template, re-exported from an index.js barrel'],
        [<code>App.jsx</code>, 'Register a new route + add the homepage gallery card'],
      ]}
    />

    <h2>Adding a new template</h2>
    <ol>
      <li>Create <code>src/components/websites/MySite.jsx</code>.</li>
      <li>Drop images in <code>src/assets/components/website/mysite/</code> and add an <code>index.js</code> barrel.</li>
      <li>Register the route and a gallery card in <code>App.jsx</code>:</li>
    </ol>
    <CodeBlock
      code={`import MySite from './components/websites/MySite';

// inside <Routes>
<Route path="/mysite" element={<MySite />} />`}
    />

    <Callout type="tip">
      Import images through the barrel (<code>import &#123; hero &#125; from '../assets/.../mysite'</code>)
      so Vite bundles them and serves from localhost — never hot-link external URLs.
    </Callout>
  </DocPage>
);

/* =========================================================================
   Pages — Components
   ========================================================================= */

const ButtonDocs = () => (
  <DocPage crumbs={['Docs', 'Components', 'Button']}>
    <h1>Button</h1>
    <p className="lead">Clickable triggers with variants and sizes, themed via CSS variables.</p>

    <ComponentPreview
      code={`<button className="btn btn-primary">Primary</button>
<button className="btn btn-secondary">Secondary</button>
<button className="btn btn-outline">Outline</button>
<button className="btn btn-ghost">Ghost</button>
<button className="btn btn-destructive">Destructive</button>`}
    >
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
<button className="btn btn-primary btn-lg">Large</button>`}
    >
      <button className="btn btn-primary btn-sm">Small</button>
      <button className="btn btn-primary">Default</button>
      <button className="btn btn-primary btn-lg">Large</button>
    </ComponentPreview>

    <h2>Disabled</h2>
    <ComponentPreview code={`<button className="btn btn-primary" disabled>Disabled</button>`}>
      <button className="btn btn-primary" disabled>Disabled</button>
    </ComponentPreview>

    <h2>Classes</h2>
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
  </DocPage>
);

const CardDocs = () => (
  <DocPage crumbs={['Docs', 'Components', 'Card']}>
    <h1>Card</h1>
    <p className="lead">A bordered surface for grouping related content and actions.</p>

    <ComponentPreview
      previewClassName=""
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
</div>`}
    >
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
    <p className="lead">
      A realistic credit card that flips between its front and back face on click.
    </p>

    <ComponentPreview
      previewClassName="atm-card-preview"
      code={`import AtmCard from './components/blocks/AtmCard';

export default function App() {
  return <AtmCard />;
}`}
    >
      <AtmCard />
    </ComponentPreview>

    <h2>Usage</h2>
    <p>
      Import the component and render it — it's fully self-contained, manages its own flip state,
      and needs no props to work.
    </p>
    <CodeBlock
      code={`import AtmCard from './components/blocks/AtmCard';

<AtmCard />`}
    />

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
    <CodeBlock
      code={`import ${title.split(/[ —]/)[0]}Template from './components/websites/${demoPath.replace('/', '')}';

// inside <Routes>
<Route path="${demoPath}" element={<${title.split(/[ —]/)[0]}Template />} />`}
    />

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
    title="Nike Store"
    badge="Template"
    accent="nike"
    demoPath="/nike"
    image={nikeShoe}
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
    title="Gym — FitZone"
    badge="New"
    accent="gym"
    demoPath="/gym"
    image={gymHero}
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
    title="Coffee — Drinko"
    badge="New"
    accent="coffee"
    demoPath="/coffee"
    image={coffeeHero}
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
    <p className="lead">
      The whole library is driven by CSS variables, so re-skinning everything is a matter of
      changing a handful of values.
    </p>

    <h2>How it works</h2>
    <p>
      Theme tokens are defined in <code>src/App.css</code> inside an <code>@layer base</code> block.
      Putting them in the base layer lets Tailwind utility classes override them where needed, while
      keeping the library's own components consistently themed.
    </p>
    <CodeBlock
      language="css"
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
}`}
    />

    <h2>Base palettes</h2>
    <p>Five neutral bases set the overall surface tone:</p>
    <div className="theme-grid">
      {['zinc', 'slate', 'stone', 'gray', 'neutral'].map((t) => (
        <div className={`theme-item theme-${t}`} key={t}>
          <div className="theme-color" />
          <span>{t[0].toUpperCase() + t.slice(1)}</span>
        </div>
      ))}
    </div>

    <h2>Accent colors</h2>
    <p>Seven accents recolor buttons, links, and focus rings:</p>
    <div className="accent-grid">
      {['blue', 'violet', 'green', 'yellow', 'orange', 'red', 'pink'].map((a) => (
        <div className={`accent-item accent-${a}`} key={a}>
          <div className="accent-color" />
          <span>{a[0].toUpperCase() + a.slice(1)}</span>
        </div>
      ))}
    </div>

    <h2>Applying a theme</h2>
    <p>
      Themes are applied by toggling classes on the <code>&lt;html&gt;</code> element — exactly what
      the header's theme switcher does:
    </p>
    <CodeBlock
      language="js"
      code={`document.documentElement.className = 'theme-zinc accent-orange';
document.documentElement.setAttribute('data-theme', 'dark');`}
    />

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
    <p className="lead">A single attribute flips the entire interface between light and dark.</p>

    <h2>The mechanism</h2>
    <p>
      Dark mode is controlled by <code>data-theme="dark"</code> on the root element. App.css defines
      a dark override for every token, so toggling the attribute re-colors the whole library.
    </p>
    <CodeBlock
      language="css"
      code={`[data-theme="dark"] {
  --background: #020617;
  --foreground: #f8fafc;
  --secondary: #1e293b;
  --muted: #1e293b;
  --muted-foreground: #94a3b8;
  --border: #1e293b;
}`}
    />

    <h2>Toggling at runtime</h2>
    <CodeBlock
      language="js"
      code={`function toggleTheme() {
  const root = document.documentElement;
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
}`}
    />

    <h2>Respecting system preference</h2>
    <p>On first load, fall back to the user's OS setting:</p>
    <CodeBlock
      language="js"
      code={`const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const saved = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
document.documentElement.setAttribute('data-theme', saved);`}
    />

    <Callout type="note">
      The header's toggle and the App component already wire this up, persisting the choice to{' '}
      <code>localStorage</code> across reloads.
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
            <a
              href={`#${item.id}`}
              className={activeId === item.id ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
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

  // Redirect bare /docs to the introduction
  useEffect(() => {
    if (location.pathname === '/docs' || location.pathname === '/docs/') {
      navigate('/docs/introduction', { replace: true });
    }
  }, [location.pathname, navigate]);

  // Build the "On this page" list from the rendered headings
  useEffect(() => {
    const root = contentRef.current;
    if (!root) return;
    // Defer one frame so the new route's content is in the DOM
    const id = requestAnimationFrame(() => {
      const headings = Array.from(root.querySelectorAll('.doc-content h2, .doc-content h3'));
      const items = headings.map((h) => {
        if (!h.id) {
          h.id = h.textContent
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
        }
        return { id: h.id, text: h.textContent, level: h.tagName === 'H3' ? 3 : 2 };
      });
      setToc(items);
      setActiveId(items[0]?.id || '');
    });
    return () => cancelAnimationFrame(id);
  }, [location.pathname]);

  // Scroll-spy: highlight the heading currently in view
  useEffect(() => {
    if (!toc.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '0px 0px -75% 0px', threshold: 0 }
    );
    toc.forEach((t) => {
      const el = document.getElementById(t.id);
      if (el) observer.observe(el);
    });
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
  ];

  const filteredNavItems = searchQuery
    ? navItems
        .map((category) => ({
          ...category,
          items: category.items.filter((item) =>
            item.label.toLowerCase().includes(searchQuery.toLowerCase())
          ),
        }))
        .filter((category) => category.items.length > 0)
    : navItems;

  return (
    <div className={`docs-container ${toc.length ? 'has-toc' : ''} ${theme || ''}`}>
      <button
        className="sidebar-toggle"
        onClick={() => setIsSidebarOpen((o) => !o)}
        aria-label={isSidebarOpen ? 'Close sidebar' : 'Open sidebar'}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {isSidebarOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
        </svg>
      </button>

      <div className={`docs-sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <div className="search-box">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search docs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
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
        </Routes>
      </div>

      <OnThisPage items={toc} activeId={activeId} />
    </div>
  );
};

export default Docs;
