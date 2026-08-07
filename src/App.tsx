import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import headerBg from './assets/header-bg.png';

const headerStyle: React.CSSProperties = {
  backgroundImage: `linear-gradient(135deg, rgba(3, 24, 40, 0.84) 0%, rgba(0, 83, 155, 0.74) 52%, rgba(8, 42, 70, 0.82) 100%), url(${headerBg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('projects');

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <About />;
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      default:
        return <Projects />;
    }
  };

  return (
    <div className="App">
      <header className="header" style={headerStyle}>
        <div className="header-content">
          <h1>Sean Smith</h1>
          <p className="header-subtitle">
            Software engineer intern and computer science student building backend
            systems, data products, and computer vision tools.
          </p>
          <p className="header-tagline">
            B.S. Computer Science, B.S. Mathematics, and M.S. Applied Mathematics
            candidate at the University of Delaware.
          </p>

          <div className="header-links">
            <a href="https://ssmitty-wave-tracker-app-ch6ihf.streamlit.app/" target="_blank" rel="noopener noreferrer">Wave Vision</a>
            <a href="https://github.com/ssmitty" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/sean-matthew-smith/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:ssmitty@udel.edu">Email</a>
            <a href={`${process.env.PUBLIC_URL}/docs/resume.pdf`} target="_blank" rel="noopener noreferrer">Resume</a>
            <a href={`${process.env.PUBLIC_URL}/docs/transcript.pdf`} target="_blank" rel="noopener noreferrer">Transcript</a>
          </div>
        </div>

        <nav className="navigation" aria-label="Portfolio sections">
          <button
            className={`nav-button ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            Projects
          </button>
          <button
            className={`nav-button ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            Experience
          </button>
          <button
            className={`nav-button ${activeTab === 'about' ? 'active' : ''}`}
            onClick={() => setActiveTab('about')}
          >
            About
          </button>
        </nav>
      </header>

      <main className="main-content">{renderContent()}</main>
    </div>
  );
};

export default App;
