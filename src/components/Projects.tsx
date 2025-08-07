import React from 'react';
import './Projects.css';

/**
 * Projects Component
 * 
 * Displays a showcase of Sean Smith's technical projects with embedded demo videos,
 * technology stacks, and detailed feature descriptions. Each project is presented
 * in a card format with visual demonstrations and interactive elements.
 * 
 * Features:
 * • Embedded YouTube demo videos for visual project demonstrations
 * • Technology stack tags for each project
 * • Detailed project descriptions and feature lists
 * • Interactive demo links for live project access
 * • Responsive design for mobile and desktop viewing
 * 
 * @component
 * @returns {JSX.Element} The projects showcase section
 */
const Projects: React.FC = () => {
  return (
    <div className="projects">
      {/* Main projects section header */}
      <h2>Projects</h2>
      
      {/* Grid container for organizing project cards */}
      <div className="projects-grid">
        
        {/* Ticker Matcher API Project Card */}
        <div className="project-card">
          {/* Project header with title and technology stack */}
          <div className="project-header">
            <h3>Ticker Matcher API</h3>
            {/* Technology stack tags */}
            <div className="tech-stack">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">Flask</span>
              <span className="tech-tag">Numpy</span>
              <span className="tech-tag">Pandas</span>
              <span className="tech-tag">OpenAI API</span>
              <span className="tech-tag">AWS EC2</span>
              <span className="tech-tag">Load Balancer</span>
              <span className="tech-tag">Docker</span>
              <span className="tech-tag">Scikit-learn</span>
            </div>
          </div>
          
          {/* Demo video section */}
          <div className="project-demo">
            <div className="demo-video">
              {/* Embedded YouTube demo video */}
              <iframe 
                src="https://www.youtube.com/embed/4Ubmj8oPhc4" 
                title="Ticker Matcher Demo"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="project-video"
              ></iframe>
            </div>
          </div>
          
          {/* Project content with description and features */}
          <div className="project-content">
            {/* Project description */}
            <p className="project-description">
              Developed and deployed an API to retrieve public company names (NASDAQ/NYSE) and return associated SEC filings.
            </p>
            
            {/* List of project features and achievements */}
            <ul className="project-features">
              <li>Deployed on AWS EC2 with load balancer for scalability and high availability</li>
              <li>Achieved 95.3% F1 score for company name retrieval</li>
              <li>Handles two-word user input with high precision and recall</li>
              <li>Real-time API responses for efficient data retrieval</li>
            </ul>
          </div>
        </div>

        {/* twang.ai Project Card */}
        <div className="project-card">
          {/* Project header with title and technology stack */}
          <div className="project-header">
            <h3>twang.ai</h3>
            {/* Technology stack tags */}
            <div className="tech-stack">
              <span className="tech-tag">Next.js</span>
              <span className="tech-tag">TypeScript</span>
              <span className="tech-tag">Tailwind CSS</span>
              <span className="tech-tag">AI API</span>
              <span className="tech-tag">GitHub Pages</span>
            </div>
          </div>
          
          {/* Demo video section */}
          <div className="project-demo">
            <div className="demo-video">
              {/* Embedded YouTube demo video */}
              <iframe 
                src="https://www.youtube.com/embed/_w2WLCA_fL8?si=rhYWtZ6PVxj6pFTT" 
                title="twang.ai Demo"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="project-video"
              ></iframe>
            </div>
          </div>
          
          {/* Project content with description and features */}
          <div className="project-content">
            {/* Project description */}
            <p className="project-description">
              AI-powered country music lyric generator that creates personalized country songs based on user preferences through an interactive quiz system.
            </p>
            
            {/* List of project features and achievements */}
            <ul className="project-features">
              <li>Interactive quiz system for mood, speed, tempo, theme, and story preferences</li>
              <li>AI-powered lyric generation using custom API endpoints</li>
              <li>Modern responsive design with seamless navigation between pages</li>
              <li>Deployed on GitHub Pages with proper routing and static export</li>
              <li>Real-time form processing and dynamic results display</li>
            </ul>
            

          </div>
        </div>

        {/* The Pink Path Project Card */}
        <div className="project-card">
          {/* Project header with title and technology stack */}
          <div className="project-header">
            <h3>The Pink Path</h3>
            {/* Technology stack tags */}
            <div className="tech-stack">
              <span className="tech-tag">TypeScript</span>
              <span className="tech-tag">HTML</span>
              <span className="tech-tag">CSS</span>
              <span className="tech-tag">OpenAI API</span>
            </div>
          </div>
          
          {/* Demo video section */}
          <div className="project-demo">
            <div className="demo-video">
              {/* Embedded YouTube demo video */}
              <iframe 
                src="https://www.youtube.com/embed/lPtLkRL3sYc" 
                title="The Pink Path Demo"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="project-video"
              ></iframe>
            </div>
          </div>
          
          {/* Project content with description and features */}
          <div className="project-content">
            {/* Project description */}
            <p className="project-description">
              Career assessment app featuring multiple-choice and open-response assessments to help users discover ideal career paths.
            </p>
            
            {/* List of project features and achievements */}
            <ul className="project-features">
              <li>Real-time AI-powered career advice using GPT-4 API</li>
              <li>Progress tracking and confetti celebration on completion</li>
              <li>Dynamic results pages with light/dark mode</li>
              <li>Secure API key management</li>
              <li>Interactive assessment flow with multiple question types</li>
            </ul>
            
            {/* Demo link section for live project access */}
            <div className="project-links">
              <a 
                href="https://emmajudd.github.io/CISC275-finalproject/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="demo-link"
              >
                Try Demo →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects; 