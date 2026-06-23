import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import '../../css/showcase.css';

/* ---- Icons ---- */
const CopyIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

/* ---- Shared copy button ---- */
export const useCopy = () => {
  const [copied, setCopied] = useState(false);
  const copy = (text) => {
    navigator.clipboard?.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    });
  };
  return { copied, copy };
};

/* ---- Page layout primitives ---- */
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

/* ---- Standalone copyable code snippet ---- */
export const CodeBlock = ({ code, language = 'jsx' }) => {
  const { copied, copy } = useCopy();
  return (
    <div className="code-snippet">
      <button
        className={`demo-copy ${copied ? 'copied' : ''}`}
        onClick={() => copy(code)}
        aria-label="Copy code"
        title="Copy code"
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

/* ---- Demo tile with Preview / Code tabs + copy ---- */
export const DemoCard = ({ label, code, language = 'jsx', stageClassName = '', children }) => {
  const [tab, setTab] = useState('preview');
  const { copied, copy } = useCopy();

  return (
    <div className="demo-card">
      {(label || code) && (
        <div className="demo-toolbar">
          {label && <span className="demo-title">{label}</span>}
          {code && (
            <div className="demo-actions">
              <div className="demo-tabs">
                <button className={tab === 'preview' ? 'active' : ''} onClick={() => setTab('preview')}>
                  Preview
                </button>
                <button className={tab === 'code' ? 'active' : ''} onClick={() => setTab('code')}>
                  Code
                </button>
              </div>
              <button
                className={`demo-copy ${copied ? 'copied' : ''}`}
                onClick={() => copy(code)}
                aria-label="Copy code"
                title="Copy code"
              >
                {copied ? <CheckIcon /> : <CopyIcon />}
              </button>
            </div>
          )}
        </div>
      )}

      {tab === 'preview' || !code ? (
        <div className={`demo-stage ${stageClassName}`}>{children}</div>
      ) : (
        <div className="demo-codewrap">
          <SyntaxHighlighter
            language={language}
            style={coldarkDark}
            customStyle={{ padding: '1rem 1.1rem', margin: 0, background: 'transparent' }}
          >
            {code}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  );
};
