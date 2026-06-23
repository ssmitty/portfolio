import React, { useState, useRef, useEffect, useCallback } from 'react';
import './App.css';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';

/**
 * Map each navigation tab to its background song.
 *
 * Drop matching audio files into `public/music/` using these exact names:
 *   public/music/about.mp3
 *   public/music/experience.mp3
 *   public/music/projects.mp3
 *
 * PUBLIC_URL keeps the paths correct under the /portfolio/ GitHub Pages base.
 */
const TAB_SONGS: Record<string, string> = {
  about: process.env.PUBLIC_URL + '/music/about.mp3',
  experience: process.env.PUBLIC_URL + '/music/experience.mp3',
  projects: process.env.PUBLIC_URL + '/music/projects.mp3',
};

/**
 * Main App Component
 *
 * Manages the overall layout, tab navigation, and the per-tab music system.
 * Each tab's song plays once per browser session the first time the user
 * lands on that tab.
 *
 * @component
 * @returns {JSX.Element} The main application layout
 */
const App: React.FC = () => {
  // State to track which navigation tab is currently active
  const [activeTab, setActiveTab] = useState<string>('about');

  // Whether music playback is enabled (user can toggle it off)
  const [soundOn, setSoundOn] = useState<boolean>(true);

  // Holds the currently playing audio element so we can stop it on tab change
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Mirror of soundOn so the playback callback always sees the latest value
  const soundOnRef = useRef<boolean>(true);

  useEffect(() => {
    soundOnRef.current = soundOn;
  }, [soundOn]);

  /**
   * Plays the song for a given tab, but only once per browser session.
   * Respects the user's sound preference and browser autoplay policies.
   */
  const playForTab = useCallback((tab: string) => {
    if (!soundOnRef.current) return;

    const src = TAB_SONGS[tab];
    if (!src) return;

    // Only play a tab's song the first time it is visited this session
    if (sessionStorage.getItem(`song-played-${tab}`)) return;

    // Stop whatever is currently playing before starting the new track
    if (audioRef.current) {
      audioRef.current.pause();
    }

    const audio = new Audio(src);
    audioRef.current = audio;
    audio
      .play()
      .then(() => {
        // Mark as played only after playback actually starts
        sessionStorage.setItem(`song-played-${tab}`, 'true');
      })
      .catch(() => {
        // Autoplay blocked or file missing; will retry on the next tab click
      });
  }, []);

  /**
   * Handles navigation tab changes and triggers that tab's song.
   */
  const handleTabChange = (tabName: string) => {
    setActiveTab(tabName);
    playForTab(tabName);
  };

  /**
   * Toggles music on/off. Turning it off pauses any current playback.
   */
  const toggleSound = () => {
    setSoundOn((prev) => {
      const next = !prev;
      if (!next && audioRef.current) {
        audioRef.current.pause();
      }
      return next;
    });
  };

  // Try to play the default tab's song on first load.
  // Browsers usually block this until the first interaction, after which
  // clicking any tab will start its song.
  useEffect(() => {
    playForTab('about');
  }, [playForTab]);

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
      <header className="header">
        {/* Sound toggle in the top corner */}
        <button
          className="sound-toggle"
          onClick={toggleSound}
          aria-label={soundOn ? 'Turn music off' : 'Turn music on'}
        >
          {soundOn ? 'Sound on' : 'Sound off'}
        </button>

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
