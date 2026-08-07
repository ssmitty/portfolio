import React from 'react';
import './Experience.css';

const Experience: React.FC = () => {
  return (
    <div className="experience">
      <h2>Professional Experience</h2>

      <div className="experience-card">
        <div className="experience-header">
          <h3>Software Engineer Intern, Wodify</h3>
          <div className="experience-meta">
            <span className="location">Philadelphia, PA</span>
            <span className="duration">June 2026 - Present</span>
          </div>
        </div>
        <div className="experience-content">
          <div className="tech-stack">
            <span className="tech-tag">OutSystems O11</span>
            <span className="tech-tag">SQL</span>
            <span className="tech-tag">Data Modeling</span>
            <span className="tech-tag">4-Layer Canvas</span>
            <span className="tech-tag">Asynchronous Processing</span>
          </div>
          <div className="achievements">
            <h4>Key Achievements</h4>
            <ul>
              <li>Delivered production backend functionality for a fitness platform serving 1M+ athletes across thousands of gyms using OutSystems O11, SQL, and 4-Layer Canvas architecture.</li>
              <li>Designed the data model, service boundaries, and asynchronous processing logic for a Milestones and Achievements system, enabling automated evaluation across multiple achievement types and member events.</li>
              <li>Reduced client milestone processing time by 60 percent by loading milestone records from the database once and using an in-memory lookup table instead of repeated per-client queries.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="experience-card">
        <div className="experience-header">
          <h3>Software Engineer Intern, D2.ai</h3>
          <div className="experience-meta">
            <span className="location">Remote</span>
            <span className="duration">December 2025 - February 2026</span>
          </div>
        </div>
        <div className="experience-content">
          <div className="tech-stack">
            <span className="tech-tag">Python</span>
            <span className="tech-tag">Clustering</span>
            <span className="tech-tag">Model Evaluation</span>
            <span className="tech-tag">Data Engineering</span>
          </div>
          <div className="achievements">
            <h4>Key Achievements</h4>
            <ul>
              <li>Reduced CODA shape-analysis runtime by 83 percent by implementing stratified sampling that preserved representative analytical coverage across large cyber-insurance datasets.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="experience-card">
        <div className="experience-header">
          <h3>Data Engineer Intern, Prep U</h3>
          <div className="experience-meta">
            <span className="location">Remote</span>
            <span className="duration">August 2025 - November 2025</span>
          </div>
        </div>
        <div className="experience-content">
          <div className="tech-stack">
            <span className="tech-tag">OpenAI API</span>
            <span className="tech-tag">AWS Lambda</span>
            <span className="tech-tag">DynamoDB</span>
            <span className="tech-tag">Node.js</span>
          </div>
          <div className="achievements">
            <h4>Key Achievements</h4>
            <ul>
              <li>Enabled near-real-time AI assessment feedback by building an event-driven DynamoDB Streams-to-AWS Lambda pipeline that generated and stored guidance after each submission.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="experience-card">
        <div className="experience-header">
          <h3>Data Science Intern, D2.ai</h3>
          <div className="experience-meta">
            <span className="location">Remote</span>
            <span className="duration">June 2025 - July 2025</span>
          </div>
        </div>
        <div className="experience-content">
          <div className="tech-stack">
            <span className="tech-tag">Python</span>
            <span className="tech-tag">AWS EC2</span>
            <span className="tech-tag">Load Balancer</span>
            <span className="tech-tag">Web REST</span>
            <span className="tech-tag">Model Selection</span>
          </div>
          <div className="achievements">
            <h4>Key Achievements</h4>
            <ul>
              <li>Achieved 97.4 percent precision, 97.3 percent recall, and 95.5 percent F1 across 10,000 test cases by developing a Python company-lookup API for NASDAQ, NYSE, and SEC filing data.</li>
              <li>Deployed the API on AWS EC2 behind an Application Load Balancer and supported automated insurance quote generation by modeling 33 company-rating features.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
