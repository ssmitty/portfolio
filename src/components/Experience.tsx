import React from 'react';
import './Experience.css';

/**
 * Experience Component
 *
 * Displays Sean Smith's professional experience with role, duration, and key achievements.
 */
const Experience: React.FC = () => {
  return (
    <div className="experience">
      <h2>Professional Experience</h2>

      {/* D2.ai – Software Engineer (Jan–Feb 2026) */}
      <div className="experience-card">
        <div className="experience-header">
          <h3>D2.ai - Software Engineer</h3>
          <div className="experience-meta">
            <span className="location">Remote</span>
            <span className="duration">January 2026 - February 2026</span>
          </div>
        </div>
        <div className="experience-content">
          <div className="tech-stack">
            <span className="tech-tag">Python</span>
            <span className="tech-tag">Clustering</span>
            <span className="tech-tag">Model Selection and Evaluation</span>
            <span className="tech-tag">FastAPI</span>
            <span className="tech-tag">Docker</span>
            <span className="tech-tag">Data Engineering</span>
          </div>
          <div className="achievements">
            <h4>Key Achievements</h4>
            <ul>
              <li>Optimized and tested CODA clustering pipeline for cyber insurance data</li>
              <li>Developed metric dashboard for the CODA clustering pipeline</li>
              <li>Reduced the bottleneck of the shape analysis phase by sampling the dataset while maintaining data coverage and reducing computational time</li>
            </ul>
          </div>
        </div>
      </div>

      {/* PrepU – Data Engineer (Aug–Dec 2025) */}
      <div className="experience-card">
        <div className="experience-header">
          <h3>PrepU - Data Engineer</h3>
          <div className="experience-meta">
            <span className="location">Remote</span>
            <span className="duration">August 2025 - December 2025</span>
          </div>
        </div>
        <div className="experience-content">
          <div className="tech-stack">
            <span className="tech-tag">React</span>
            <span className="tech-tag">TypeScript</span>
            <span className="tech-tag">OpenAI API</span>
            <span className="tech-tag">AWS Lambda</span>
            <span className="tech-tag">DynamoDB</span>
            <span className="tech-tag">Node.js</span>
          </div>
          <div className="achievements">
            <h4>Key Achievements</h4>
            <ul>
              <li>
                Integrated OpenAI to automatically generate personalized assessment feedback triggered immediately upon completion of each student assessment, ensuring timely and actionable guidance
              </li>
              <li>
                Refactored DynamoDB schemas and modularized backend services, improving maintainability, reducing query latency, and simplifying feature development for the platform
              </li>
              <li>
                Created a DynamoDB Stream to Lambda workflow that automatically detects assessment completion events and triggers real-time OpenAI feedback generation, enabling fully automated response pipelines
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* D2.ai – Data Engineer (May–Aug 2025) */}
      <div className="experience-card">
        <div className="experience-header">
          <h3>D2.ai • Data Engineer</h3>
          <div className="experience-meta">
            <span className="location">Remote</span>
            <span className="duration">May 2025 - August 2025</span>
          </div>
        </div>
        <div className="experience-content">
          <div className="tech-stack">
            <span className="tech-tag">Python</span>
            <span className="tech-tag">AWS EC2</span>
            <span className="tech-tag">Load Balancer</span>
            <span className="tech-tag">API</span>
            <span className="tech-tag">SEC Filings</span>
          </div>
          <div className="achievements">
            <h4>Key Achievements</h4>
            <ul>
              <li>Developed and deployed an API to retrieve public company names (NASDAQ/NYSE) and SEC filings</li>
              <li>Deployed on AWS EC2 with a load balancer to ensure scalability, security, and high availability</li>
              <li>Evaluated performance across 10,000 test cases with 97.4% precision, 97.3% recall, and 95.5% F1 score, and 0.0206-second mean lookup speed</li>
              <li>Constructed a mock insurance quote simulator to analyze the impact of 33 rating features on yearly pricing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
