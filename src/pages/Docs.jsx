import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import AtmCard from '../components/blocks/AtmCard';
import '../css/docs.css';

// Documentation pages components
const Introduction = () => (
  <div className="doc-content">
    <h1>Introduction</h1>
    <p className="lead">
      Component/UI is a library of beautifully designed, accessible React components that you can use in your projects.
    </p>
    
    <h2>Key Features</h2>
    <ul>
      <li>Accessible and responsive components</li>
      <li>Customizable with CSS variables</li>
      <li>Dark mode and theme support</li>
      <li>Interactive and animated elements</li>
      <li>Fully typed with TypeScript (optional)</li>
    </ul>
    
    <h2>Philosophy</h2>
    <p>
      Component/UI is designed with simplicity and flexibility in mind. We believe that developers should be able to quickly integrate beautiful UI components without sacrificing customization options.
    </p>
    <p>
      All components are built with accessibility as a priority, ensuring your applications are usable by everyone.
    </p>

    <h2>Community</h2>
    <p>
      Component/UI is an open-source project maintained by a community of developers. We welcome contributions and feedback!
    </p>
  </div>
);

const Installation = () => {
  const installCode = `# Using npm
npm install componentui

# Using yarn
yarn add componentui

# Using pnpm
pnpm add componentui`;

  const usageCode = `import React from 'react';
import { Button } from 'componentui';

function App() {
  return (
    <div>
      <Button variant="primary">Click Me</Button>
    </div>
  );
}`;

  return (
    <div className="doc-content">
      <h1>Installation</h1>
      <p className="lead">
        Getting started with Component/UI in your project is quick and easy.
      </p>
      
      <h2>Install the package</h2>
      <p>
        Install Component/UI using your preferred package manager:
      </p>
      <div className="code-block">
        <SyntaxHighlighter language="bash" style={coldarkDark}>
          {installCode}
        </SyntaxHighlighter>
      </div>
      
      <h2>Basic Usage</h2>
      <p>
        After installation, you can import and use components in your React application:
      </p>
      <div className="code-block">
        <SyntaxHighlighter language="jsx" style={coldarkDark}>
          {usageCode}
        </SyntaxHighlighter>
      </div>
      
      <h2>CSS Variables</h2>
      <p>
        Component/UI uses CSS variables for theming. You can customize these variables in your CSS:
      </p>
      <div className="code-block">
        <SyntaxHighlighter language="css" style={coldarkDark}>{`
:root {
  --primary: #2563eb;
  --primary-foreground: #ffffff;
  --background: #ffffff;
  --foreground: #020617;
  /* other variables */
}
        `}</SyntaxHighlighter>
      </div>
    </div>
  );
};

const ButtonDocs = () => {
  const buttonCode = `import { Button } from 'componentui';

// Basic button
<Button>Default Button</Button>

// Variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// With icon
<Button>
  <IconCalendar className="mr-2" /> 
  Schedule
</Button>

// Disabled state
<Button disabled>Disabled</Button>

// Loading state
<Button isLoading>Loading</Button>`;

  return (
    <div className="doc-content">
      <h1>Button</h1>
      <p className="lead">
        A versatile button component with various styles and states.
      </p>
      
      <div className="component-preview">
        <div className="preview-area">
          <button className="btn btn-primary">Primary Button</button>
          <button className="btn btn-secondary">Secondary Button</button>
          <button disabled className="btn btn-primary">Disabled</button>
        </div>
      </div>
      
      <h2>Usage</h2>
      <div className="code-block">
        <SyntaxHighlighter language="jsx" style={coldarkDark}>
          {buttonCode}
        </SyntaxHighlighter>
      </div>
      
      <h2>Props</h2>
      <div className="props-table">
        <table>
          <thead>
            <tr>
              <th>Prop</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>variant</td>
              <td><code>string</code></td>
              <td><code>'default'</code></td>
              <td>Button style variant: 'default', 'primary', 'secondary', 'destructive', 'outline', 'ghost'</td>
            </tr>
            <tr>
              <td>size</td>
              <td><code>string</code></td>
              <td><code>'md'</code></td>
              <td>Button size: 'sm', 'md', 'lg'</td>
            </tr>
            <tr>
              <td>isLoading</td>
              <td><code>boolean</code></td>
              <td><code>false</code></td>
              <td>Whether the button is in a loading state</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td><code>boolean</code></td>
              <td><code>false</code></td>
              <td>Whether the button is disabled</td>
            </tr>
            <tr>
              <td>className</td>
              <td><code>string</code></td>
              <td><code>''</code></td>
              <td>Additional CSS classes</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const CardDocs = () => {
  const cardCode = `import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from 'componentui';

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>`;

  return (
    <div className="doc-content">
      <h1>Card</h1>
      <p className="lead">
        A container component for displaying content in a distinct card format.
      </p>
      
      <div className="component-preview">
        <div className="preview-area">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Card Title</h3>
              <p className="card-description">Card description goes here</p>
            </div>
            <div className="card-content">
              <p>This is the main content of the card. You can put any elements here.</p>
            </div>
            <div className="card-footer">
              <button className="btn btn-primary">Action</button>
            </div>
          </div>
        </div>
      </div>
      
      <h2>Usage</h2>
      <div className="code-block">
        <SyntaxHighlighter language="jsx" style={coldarkDark}>
          {cardCode}
        </SyntaxHighlighter>
      </div>
      
      <h2>Components</h2>
      <div className="props-table">
        <table>
          <thead>
            <tr>
              <th>Component</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>Card</code></td>
              <td>The main card container component</td>
            </tr>
            <tr>
              <td><code>CardHeader</code></td>
              <td>Container for card title and description</td>
            </tr>
            <tr>
              <td><code>CardTitle</code></td>
              <td>The title of the card</td>
            </tr>
            <tr>
              <td><code>CardDescription</code></td>
              <td>A description or subtitle for the card</td>
            </tr>
            <tr>
              <td><code>CardContent</code></td>
              <td>The main content area of the card</td>
            </tr>
            <tr>
              <td><code>CardFooter</code></td>
              <td>The footer area of the card, typically for actions</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const AtmCardDocs = () => {
  const atmCardCode = `import { AtmCard } from 'componentui';

// Basic usage
<AtmCard />

// With custom name and number
<AtmCard 
  holderName="John Doe"
  cardNumber="4242 4242 4242 4242"
  expiryDate="12/25"
/>`;

  return (
    <div className="doc-content">
      <h1>ATM Card</h1>
      <p className="lead">
        A realistic, interactive credit card component that flips to show front and back.
      </p>
      
      <div className="component-preview">
        <div className="preview-area atm-card-preview">
          <AtmCard />
        </div>
      </div>
      
      <h2>Usage</h2>
      <div className="code-block">
        <SyntaxHighlighter language="jsx" style={coldarkDark}>
          {atmCardCode}
        </SyntaxHighlighter>
      </div>
      
      <h2>Props</h2>
      <div className="props-table">
        <table>
          <thead>
            <tr>
              <th>Prop</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>holderName</td>
              <td><code>string</code></td>
              <td><code>'Avinash Yadav'</code></td>
              <td>Name of the card holder</td>
            </tr>
            <tr>
              <td>cardNumber</td>
              <td><code>string</code></td>
              <td><code>'8800 3350 4123 1234'</code></td>
              <td>Card number displayed on the front</td>
            </tr>
            <tr>
              <td>expiryDate</td>
              <td><code>string</code></td>
              <td><code>'12/25'</code></td>
              <td>Expiry date of the card</td>
            </tr>
            <tr>
              <td>cvv</td>
              <td><code>string</code></td>
              <td><code>'123'</code></td>
              <td>CVV number displayed on the back</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const ThemingDocs = () => {
  const themeCode = `// Custom CSS variables
:root {
  --primary: #3b82f6;
  --primary-foreground: #ffffff;
  --secondary: #f3f4f6;
  --secondary-foreground: #111827;
  --background: #ffffff;
  --foreground: #020617;
  --accent: #f8fafc;
  --accent-foreground: #0f172a;
  --border: #e2e8f0;
}

// Dark mode
[data-theme="dark"] {
  --primary: #3b82f6;
  --primary-foreground: #ffffff;
  --secondary: #1e293b;
  --secondary-foreground: #f8fafc;
  --background: #020617;
  --foreground: #f8fafc;
  --accent: #1e293b;
  --accent-foreground: #f8fafc;
  --border: #1e293b;
}`;

  return (
    <div className="doc-content">
      <h1>Theming</h1>
      <p className="lead">
        Learn how to customize the look and feel of components.
      </p>
      
      <h2>CSS Variables</h2>
      <p>
        Component/UI uses CSS variables for theming. You can override these variables to customize the appearance of components.
      </p>
      <div className="code-block">
        <SyntaxHighlighter language="css" style={coldarkDark}>
          {themeCode}
        </SyntaxHighlighter>
      </div>
      
      <h2>Theme Variables</h2>
      <div className="props-table">
        <table>
          <thead>
            <tr>
              <th>Variable</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>--primary</code></td>
              <td>Primary color used for buttons, links, and other interactive elements</td>
            </tr>
            <tr>
              <td><code>--primary-foreground</code></td>
              <td>Text color used on primary colored backgrounds</td>
            </tr>
            <tr>
              <td><code>--secondary</code></td>
              <td>Secondary color used for less prominent elements</td>
            </tr>
            <tr>
              <td><code>--secondary-foreground</code></td>
              <td>Text color used on secondary colored backgrounds</td>
            </tr>
            <tr>
              <td><code>--background</code></td>
              <td>Main background color</td>
            </tr>
            <tr>
              <td><code>--foreground</code></td>
              <td>Main text color</td>
            </tr>
            <tr>
              <td><code>--accent</code></td>
              <td>Accent color for highlights and focus states</td>
            </tr>
            <tr>
              <td><code>--border</code></td>
              <td>Color used for borders</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <h2>Theme Presets</h2>
      <p>
        Component/UI comes with several theme presets that you can use:
      </p>
      <div className="theme-grid">
        <div className="theme-item theme-zinc">
          <div className="theme-color"></div>
          <span>Zinc</span>
        </div>
        <div className="theme-item theme-slate">
          <div className="theme-color"></div>
          <span>Slate</span>
        </div>
        <div className="theme-item theme-stone">
          <div className="theme-color"></div>
          <span>Stone</span>
        </div>
        <div className="theme-item theme-gray">
          <div className="theme-color"></div>
          <span>Gray</span>
        </div>
        <div className="theme-item theme-neutral">
          <div className="theme-color"></div>
          <span>Neutral</span>
        </div>
      </div>
      
      <h2>Accent Colors</h2>
      <div className="accent-grid">
        <div className="accent-item accent-blue">
          <div className="accent-color"></div>
          <span>Blue</span>
        </div>
        <div className="accent-item accent-violet">
          <div className="accent-color"></div>
          <span>Violet</span>
        </div>
        <div className="accent-item accent-green">
          <div className="accent-color"></div>
          <span>Green</span>
        </div>
        <div className="accent-item accent-yellow">
          <div className="accent-color"></div>
          <span>Yellow</span>
        </div>
        <div className="accent-item accent-orange">
          <div className="accent-color"></div>
          <span>Orange</span>
        </div>
        <div className="accent-item accent-red">
          <div className="accent-color"></div>
          <span>Red</span>
        </div>
        <div className="accent-item accent-pink">
          <div className="accent-color"></div>
          <span>Pink</span>
        </div>
      </div>
    </div>
  );
};

const CustomizationDocs = () => {
  const customizationCode = `// Custom component with Tailwind classes
import { Button } from 'componentui';

function CustomButton({ children, ...props }) {
  return (
    <Button 
      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600" 
      {...props}
    >
      {children}
    </Button>
  );
}`;

  return (
    <div className="doc-content">
      <h1>Customization</h1>
      <p className="lead">
        Learn how to customize and extend components to fit your needs.
      </p>
      
      <h2>Custom Styling</h2>
      <p>
        You can customize components using CSS, Tailwind CSS, or by extending components:
      </p>
      <div className="code-block">
        <SyntaxHighlighter language="jsx" style={coldarkDark}>
          {customizationCode}
        </SyntaxHighlighter>
      </div>
      
      <h2>Composition</h2>
      <p>
        Most Component/UI components are designed for composition. You can combine them to create more complex UI elements:
      </p>
      <div className="code-block">
        <SyntaxHighlighter language="jsx" style={coldarkDark}>{`
// Creating a notification card by composing Card components
import { Card, CardContent, Button } from 'componentui';

function NotificationCard({ title, message, onDismiss }) {
  return (
    <Card>
      <CardContent>
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-gray-500">{message}</p>
        <div className="mt-4 flex justify-end">
          <Button onClick={onDismiss}>Dismiss</Button>
        </div>
      </CardContent>
    </Card>
  );
}
        `}</SyntaxHighlighter>
      </div>
      
      <h2>Global Overrides</h2>
      <p>
        You can create global style overrides for all instances of a component:
      </p>
      <div className="code-block">
        <SyntaxHighlighter language="css" style={coldarkDark}>{`
/* Global button styling override */
.btn-primary {
  background-color: #8b5cf6;
  border-radius: 8px;
}

.btn-primary:hover {
  background-color: #7c3aed;
}
        `}</SyntaxHighlighter>
      </div>
    </div>
  );
};

// Main Docs Component
const Docs = ({ theme }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  // Automatically navigate to introduction when visiting /docs
  useEffect(() => {
    if (location.pathname === '/docs') {
      navigate('/docs/introduction');
    }
  }, [location.pathname, navigate]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Sidebar navigation items
  const navItems = [
    {
      category: 'Getting Started',
      items: [
        { label: 'Introduction', path: '/docs/introduction' },
        { label: 'Installation', path: '/docs/installation' },
      ]
    },
    {
      category: 'Components',
      items: [
        { label: 'Button', path: '/docs/components/button' },
        { label: 'Card', path: '/docs/components/card' },
        { label: 'ATM Card', path: '/docs/components/atm-card' },
        // Add more component links here
      ]
    },
    {
      category: 'Customization',
      items: [
        { label: 'Theming', path: '/docs/customization/theming' },
        { label: 'Customization', path: '/docs/customization/advanced' },
      ]
    },
  ];

  // Filter navigation items based on search
  const filteredNavItems = searchQuery
    ? navItems.map(category => ({
        ...category,
        items: category.items.filter(item => 
          item.label.toLowerCase().includes(searchQuery.toLowerCase())
        ),
      })).filter(category => category.items.length > 0)
    : navItems;

  return (
    <div className={`docs-container ${theme}`}>
      <button 
        className="sidebar-toggle" 
        onClick={toggleSidebar}
        aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {isSidebarOpen ? (
            <path d="M18 6L6 18M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
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
              placeholder="Search documentation..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        <div className="sidebar-navigation">
          {filteredNavItems.map((category, index) => (
            <div className="nav-category" key={index}>
              <h3>{category.category}</h3>
              <ul>
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link 
                      to={item.path} 
                      className={location.pathname === item.path ? 'active' : ''}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      <div className="docs-content">
        <Routes>
          <Route path="introduction" element={<Introduction />} />
          <Route path="installation" element={<Installation />} />
          <Route path="components/button" element={<ButtonDocs />} />
          <Route path="components/card" element={<CardDocs />} />
          <Route path="components/atm-card" element={<AtmCardDocs />} />
          <Route path="customization/theming" element={<ThemingDocs />} />
          <Route path="customization/advanced" element={<CustomizationDocs />} />
        </Routes>
      </div>
    </div>
  );
};

export default Docs;