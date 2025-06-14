import { useState, useEffect } from 'react'
import AtmCard from './components/blocks/AtmCard'
import './App.css'

// Header Component
const Header = ({ theme, toggleTheme, baseTheme, accentTheme, setBaseTheme, setAccentTheme }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownOpen && !e.target.closest('.theme-selector')) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [dropdownOpen]);

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <a href="/" className="logo">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L17 7H7L12 2Z" fill="currentColor" />
              <path d="M12 22L7 17H17L12 22Z" fill="currentColor" />
              <path d="M2 12L7 7V17L2 12Z" fill="currentColor" />
              <path d="M22 12L17 17V7L22 12Z" fill="currentColor" />
            </svg>
            <span>component/ui</span>
          </a>
          <nav className="main-nav">
            <ul>
              <li><a href="#docs">Docs</a></li>
              <li><a href="#components">Components</a></li>
              <li><a href="#blocks">Blocks</a></li>
              <li><a href="#charts">Charts</a></li>
              <li><a href="#themes">Themes</a></li>
              <li><a href="#colors">Colors</a></li>
            </ul>
          </nav>
        </div>
        <div className="header-right">
          <div className="search">
            <input type="text" placeholder="Search documentation..." />
            <kbd>⌘ K</kbd>
          </div>
          <a href="https://github.com/Avinash-yadav103" className="icon-button" aria-label="GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.166 8.84 21.49C9.34 21.582 9.52 21.27 9.52 21.008C9.52 20.77 9.512 20.057 9.508 19.192C6.726 19.8 6.14 17.782 6.14 17.782C5.684 16.642 5.028 16.332 5.028 16.332C4.132 15.728 5.098 15.74 5.098 15.74C6.102 15.81 6.636 16.758 6.636 16.758C7.536 18.268 8.932 17.83 9.54 17.576C9.63 16.944 9.89 16.508 10.176 16.258C7.954 16.006 5.62 15.188 5.62 11.326C5.62 10.228 6.01 9.326 6.656 8.624C6.554 8.374 6.212 7.484 6.756 6.218C6.756 6.218 7.606 5.956 9.496 7.208C10.296 7.2 11.06 7.096 11.86 7.094C12.66 7.096 13.426 7.2 14.226 7.208C16.116 5.956 16.964 6.218 16.964 6.218C17.508 7.484 17.168 8.374 17.064 8.624C17.712 9.326 18.1 10.228 18.1 11.326C18.1 15.198 15.762 16 13.534 16.248C13.894 16.554 14.214 17.164 14.214 18.084C14.214 19.394 14.202 20.684 14.202 21.008C14.202 21.272 14.38 21.586 14.888 21.486C18.858 20.162 21.72 16.416 21.72 12C21.72 6.477 17.242 2 11.72 2H12Z" fill="currentColor" />
            </svg>
          </a>
          <div 
            className="theme-toggle" 
            aria-label="Toggle dark mode"
            onClick={toggleTheme}
            data-active={theme === 'dark' ? 'dark' : ''}
          ></div>
          <div className="theme-selector">
            <button className="theme-selector-button" onClick={toggleDropdown}>
              <span>Theme</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className={`theme-selector-dropdown ${dropdownOpen ? 'show' : ''}`}>
              <div className="dropdown-section">
                <p className="dropdown-label">Base</p>
                {['zinc', 'slate', 'stone', 'gray', 'neutral'].map(theme => (
                  <ThemeOption 
                    key={theme}
                    type="theme"
                    value={theme}
                    label={theme === 'zinc' ? 'Zinc (Default)' : theme.charAt(0).toUpperCase() + theme.slice(1)}
                    color={getThemeColor(theme)}
                    isActive={baseTheme === theme}
                    onClick={() => setBaseTheme(theme)}
                  />
                ))}
              </div>
              <div className="dropdown-section">
                <p className="dropdown-label">Accent</p>
                {['blue', 'violet', 'green', 'yellow', 'orange', 'red', 'pink'].map(accent => (
                  <ThemeOption 
                    key={accent}
                    type="accent"
                    value={accent}
                    label={accent.charAt(0).toUpperCase() + accent.slice(1)}
                    color={getAccentColor(accent)}
                    isActive={accentTheme === accent}
                    onClick={() => setAccentTheme(accent)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

// Theme Option Component
const ThemeOption = ({ type, value, label, color, isActive, onClick }) => (
  <div 
    className={`theme-selector-option ${isActive ? 'active' : ''}`} 
    data-theme={type === 'theme' ? value : undefined}
    data-accent={type === 'accent' ? value : undefined}
    onClick={onClick}
  >
    <div className="theme-selector-option-color" style={{ backgroundColor: color }}></div>
    <span>{label}</span>
  </div>
);

// Hero Section Component
const Hero = () => (
  <section className="hero">
    <div className="container">
      <div className="hero-badge">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 6V18M6 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span>Get Started with Tailwind v4</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <h1>Build your component library</h1>
      <p className="hero-subtitle">A set of beautifully-designed, accessible components and a code distribution platform. Works with your favorite frameworks. Open Source. Open Code.</p>
      <div className="hero-buttons">
        <a href="#" className="btn btn-primary">Get Started</a>
        <a href="#" className="btn btn-secondary">Browse Blocks</a>
      </div>
    </div>
  </section>
);

// Component Modal
const ComponentModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="component-modal-overlay" onClick={onClose}>
      <div className="component-modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>×</button>
        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>
  );
};

// Project Card Component
const ProjectCard = ({ image, title, description, link, onComponentSelect }) => {
  const handleClick = (e) => {
    // If the link is a component reference, render it
    if (typeof link === 'object' && link.component) {
      e.preventDefault();
      onComponentSelect(link.component);
    }
    // Otherwise, it's a regular URL link and will navigate normally
  };

  return (
    <div className="project-card">
      <img src={image} alt={title} />
      <div className="project-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        {typeof link === 'object' && link.component ? (
          <a href="#" onClick={handleClick} className="project-link">View Component</a>
        ) : (
          <a href={link} className="project-link">View Component</a>
        )}
      </div>
    </div>
  );
};

// Projects Section Component
const Projects = ({ onComponentSelect }) => {
  const projects = [
    {
      image: "img/Screenshot 2024-06-13 185432.png",
      title: "Animated Card",
      description: "Interactive card that flips on clicking. Built with HTML, CSS, and JavaScript.",
      link: { component: 'atmCard' }
    },
    {
      image: "img/Screenshot 2024-06-13 185455.png",
      title: "Info Card",
      description: "Clean information display card with minimal design for better readability.",
      link: "card/card.html"
    },
    {
      image: "img/Screenshot 2024-06-13 185522.png",
      title: "Quiz Component",
      description: "Interactive quiz interface with progress tracking and score calculation.",
      link: "Quiz/quiz.html"
    },
    {
      image: "img/Screenshot 2024-06-13 185544.png",
      title: "Quote Generator",
      description: "Dynamic quote display with elegant typography and animations.",
      link: "Quote Generator/quote.html"
    },
    {
      image: "img/Screenshot 2024-06-13 185615.png",
      title: "Sidebar Navigation",
      description: "Collapsible sidebar with smooth transitions and nested navigation.",
      link: "Sidebar/sidebar.html"
    },
    {
      image: "img/Screenshot 2024-06-13 185642.png",
      title: "Content Slider",
      description: "Smooth sliding carousel for showcasing multiple content pieces.",
      link: "Slide/slider.html"
    },
    {
      image: "img/TODO.png",
      title: "Todo List",
      description: "Feature-rich task management with drag-and-drop sorting.",
      link: "To-Do-List/index.html"
    },
    {
      image: "img/3D.png",
      title: "3D Earth",
      description: "3D earth free for projects",
      link: "3D_Earth/index.html"
    },
    {
      image: "./img/dash.png",
      title: "Dashboard",
      description: "Feature-rich task management with drag-and-drop sorting.",
      link: "Dashboard/index.html"
    },
    {
      image: "./img/Coming.webp",
      title: "Coming Soon",
      description: "Coming Soon component.",
      link: "comingsoon/index.html"
    },
    {
      image: "./img/866d11a4d57b8fd326b3d43c9a798856.jpg",
      title: "Travel Website",
      description: "Travel Website Template.",
      link: "Travel/index.html"
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Component Examples</h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
              onComponentSelect={onComponentSelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section Component
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2>Contact Me</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="5" 
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => (
  <footer className="footer">
    <div className="container">
      <p>© 2025 Component/UI. All rights reserved.</p>
    </div>
  </footer>
);

// Helper functions for theme colors
const getThemeColor = (theme) => {
  const colors = {
    zinc: "#18181b",
    slate: "#0f172a",
    stone: "#1c1917",
    gray: "#111827",
    neutral: "#171717"
  };
  return colors[theme] || colors.zinc;
};

const getAccentColor = (accent) => {
  const colors = {
    blue: "#2563eb",
    violet: "#8b5cf6",
    green: "#10b981",
    yellow: "#eab308",
    orange: "#f97316",
    red: "#ef4444",
    pink: "#ec4899"
  };
  return colors[accent] || colors.blue;
};

// Main App Component
function App() {
  const [theme, setTheme] = useState('light');
  const [baseTheme, setBaseTheme] = useState('zinc');
  const [accentTheme, setAccentTheme] = useState('blue');
  const [activeComponent, setActiveComponent] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Initialize themes on component mount
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
    const savedBaseTheme = localStorage.getItem('baseTheme') || 'zinc';
    const savedAccentTheme = localStorage.getItem('accentTheme') || 'blue';

    setTheme(savedTheme);
    setBaseTheme(savedBaseTheme);
    setAccentTheme(savedAccentTheme);
  }, []);

  // Apply themes whenever they change
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Remove any existing theme classes
    const htmlClasses = document.documentElement.className
      .split(' ')
      .filter(c => !c.startsWith('theme-') && !c.startsWith('accent-'))
      .join(' ');
    
    // Add the new theme classes
    document.documentElement.className = `${htmlClasses} theme-${baseTheme} accent-${accentTheme}`;
    
    // Save preferences
    localStorage.setItem('baseTheme', baseTheme);
    localStorage.setItem('accentTheme', accentTheme);
  }, [theme, baseTheme, accentTheme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const handleComponentSelect = (componentName) => {
    setActiveComponent(componentName);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setActiveComponent(null);
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'atmCard':
        return <AtmCard />;
      default:
        return null;
    }
  };

  return (
    <>
      <Header 
        theme={theme}
        toggleTheme={toggleTheme}
        baseTheme={baseTheme}
        accentTheme={accentTheme}
        setBaseTheme={setBaseTheme}
        setAccentTheme={setAccentTheme}
      />
      <main>
        <Hero />
        <Projects onComponentSelect={handleComponentSelect} />
        <Contact />
      </main>
      <Footer />

      <ComponentModal isOpen={modalOpen} onClose={handleCloseModal}>
        {renderActiveComponent()}
      </ComponentModal>

      {/* Add this CSS to your App.css file */}
      <style jsx>{`
        .component-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        
        .component-modal {
          background-color: var(--background);
          border-radius: 8px;
          padding: 30px;
          max-width: 90%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }
        
        .modal-close-btn {
          position: absolute;
          top: 10px;
          right: 15px;
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          color: var(--text);
        }
        
        .modal-content {
          margin-top: 10px;
        }
      `}</style>
    </>
  );
}

export default App;
