import '../../css/showcase.css';

/* Shared layout primitives for the showcase pages */

export const PageShell = ({ eyebrow, title, lead, children }) => (
  <div className="showcase">
    <header className="showcase-header">
      {eyebrow && <span className="showcase-eyebrow">{eyebrow}</span>}
      <h1>{title}</h1>
      {lead && <p className="showcase-lead">{lead}</p>}
    </header>
    {children}
  </div>
);

export const Section = ({ title, description, children }) => (
  <section className="showcase-section">
    <div className="section-head">
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
    {children}
  </section>
);

export const Grid = ({ cols, children }) => (
  <div className={`showcase-grid ${cols ? `cols-${cols}` : ''}`}>{children}</div>
);

export const DemoCard = ({ label, stageClassName = '', children }) => (
  <div className="demo-card">
    <div className={`demo-stage ${stageClassName}`}>{children}</div>
    {label && <div className="demo-label">{label}</div>}
  </div>
);
