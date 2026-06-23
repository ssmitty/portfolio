import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import headerBg from './assets/header-bg.png';

// Translucent blue overlay layered over the beach photo so header text stays readable
const headerStyle: React.CSSProperties = {
  backgroundImage: `linear-gradient(135deg, rgba(0, 83, 155, 0.72) 0%, rgba(1, 58, 99, 0.82) 100%), url(${headerBg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

/**
 * Main App Component
 *
 * Manages the overall layout and tab navigation.
 *
 * @component
 * @returns {JSX.Element} The main application layout
 */
const App: React.FC = () => {
  // State to track which navigation tab is currently active
  const [activeTab, setActiveTab] = useState<string>('about');

  /**
   * Handles navigation tab changes.
   */
  const handleTabChange = (tabName: string) => {
    setActiveTab(tabName);
  };

  /**
   * Renders the appropriate content component based on the active tab.
   */
  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <About />;
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      default:
        return <About />;
    }
  };

  return (
    <div className="App">
      {/* Header Section */}
      <header className="header" style={headerStyle}>
        <div className="header-content">
          <h1>Sean Smith</h1>
          <p className="header-subtitle">
            B.S. Computer Science &amp; Mathematics, University of Delaware
          </p>
          <p className="header-tagline">Software Engineer &nbsp;&middot;&nbsp; Division I Soccer Player</p>

          <div className="header-links">
            <a href="https://github.com/ssmitty" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/sean-matthew-smith/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:ssmitty@udel.edu">Email</a>
            <a href="tel:+16098150282">609-815-0282</a>
            <a href={`${process.env.PUBLIC_URL}/docs/resume.pdf`} target="_blank" rel="noopener noreferrer">Resume</a>
            <a href={`${process.env.PUBLIC_URL}/docs/transcript.pdf`} target="_blank" rel="noopener noreferrer">Transcript</a>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="navigation">
          <button
            className={`nav-button ${activeTab === 'about' ? 'active' : ''}`}
            onClick={() => handleTabChange('about')}
          >
            About
          </button>
          <button
            className={`nav-button ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => handleTabChange('experience')}
          >
            Experience
          </button>
          <button
            className={`nav-button ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => handleTabChange('projects')}
          >
            Projects
          </button>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
