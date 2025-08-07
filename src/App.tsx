import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import PrepU from './components/PrepU';

/**
 * Main App Component
 * 
 * This is the root component of the portfolio application. It manages the overall
 * layout, navigation state, and renders the appropriate content based on the
 * selected navigation tab.
 * 
 * Features:
 * • Header with profile information and navigation
 * • Tab-based content switching
 * • Responsive design for mobile and desktop
 * • University of Delaware themed styling
 * 
 * @component
 * @returns {JSX.Element} The main application layout
 */
const App: React.FC = () => {
  // State to track which navigation tab is currently active
  const [activeTab, setActiveTab] = useState<string>('about');

  /**
   * Handles navigation tab changes
   * @param {string} tabName • The name of the tab to activate
   */
  const handleTabChange = (tabName: string) => {
    setActiveTab(tabName);
  };

  /**
   * Renders the appropriate content component based on the active tab
   * @returns {JSX.Element} The content component to display
   */
  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <About />;
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      case 'prep-u':
        return <PrepU />;
      default:
        return <About />;
    }
  };

  return (
    <div className="App">
      {/* Header Section • Contains profile info and navigation */}
      <header className="header">
        <div className="header-content">
          {/* Profile Picture */}
          <img src="./images/headshot.jpg" alt="Sean Smith" className="profile-pic" />
          
          {/* Name and Title */}
          <div className="header-text">
            <h1>Sean Smith</h1>
            <p>Computer Science Student & Division I Soccer Player</p>
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
          <button
            className={`nav-button ${activeTab === 'prep-u' ? 'active' : ''}`}
            onClick={() => handleTabChange('prep-u')}
          >
            Prep U
          </button>
        </nav>
      </header>

      {/* Main Content Area • Renders the selected tab content */}
      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  );
};

export default App; 