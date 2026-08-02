import React from 'react';
import './Experience.css';

/**
 * Experience Component
 *
 * Displays Sean Smith's professional experience with role, company, duration,
 * and key achievements, ordered from most to least recent.
 */
const Experience: React.FC = () => {
  return (
    <div className="experience">
      <h2>Professional Experience</h2>

      {/* Wodify - Software Engineer Intern (June 2026 - Present) */}
      <div className="experience-card">
        <div className="experience-header">
          <h3>Software Engineer Intern, Wodify</h3>
          <div className="experience-meta">
            <span className="location">Philadelphia, Hybrid</span>
            <span className="duration">June 2026 - Present</span>
          </div>
        </div>
        <div className="experience-content">
          <div className="tech-stack">
            <span className="tech-tag">OutSystems O11</span>
            <span className="tech-tag">SQL</span>
            <span className="tech-tag">Data Modeling</span>
            <span className="tech-tag">4-Layer Canvas</span>
            <span className="tech-tag">Web REST</span>
          </div>
          <div className="achievements">
            <h4>Key Achievements</h4>
            <ul>
              <li>Contributed production-shipped backend work for Wodify, a fitness software platform serving 1M+ athletes across thousands of gyms</li>
              <li>Designed the relational data model for a Milestones and Achievements feature in OutSystems O11, following 4-Layer Canvas architecture to keep domain, service, and orchestration modules cleanly separated</li>
              <li>Implemented upsert server actions and service actions for milestone group management, using scoped module visibility patterns so business logic could be consumed safely across the application</li>
              <li>Wrote injection-safe dynamic SQL for real-time filtering by achievement type, status, and client visibility, supporting maintainable query behavior in production workflows</li>
              <li>Built a bootstrap process to backfill milestone progress for existing gym members across Attendance, Weekly Streaks, and Gym Anniversary groups</li>
            </ul>
          </div>
        </div>
      </div>

      {/* D2.ai - Software Engineer Intern (Dec 2025 - Feb 2026) */}
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
              <li>Reduced shape analysis bottleneck by sampling datasets while preserving coverage, improving processing efficiency for cyber insurance clustering models</li>
              <li>Optimized and validated a clustering algorithm on cyber insurance data, increasing data reliability across the analysis pipeline</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Prep U - Data Engineer Intern (Aug 2025 - Nov 2025) */}
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
              <li>Decreased assessment feedback latency to near real-time by integrating OpenAI to auto-generate personalized guidance on student submission</li>
              <li>Improved query performance and maintainability by refactoring DynamoDB schemas and modularizing backend services</li>
              <li>Automated the feedback pipeline end-to-end by building a DynamoDB Stream to Lambda workflow that triggers OpenAI generation on assessment completion</li>
            </ul>
          </div>
        </div>
      </div>

      {/* D2.ai - Data Science Intern (June 2025 - July 2025) */}
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
              <li>Achieved 97.4% precision, 97.3% recall, and 95.5% F1 across 10,000 test cases by developing and deploying a public company lookup API for NASDAQ/NYSE and SEC filings</li>
              <li>Ensured high availability and scalability by deploying the API on AWS EC2 with a load balancer</li>
              <li>Quantified the impact of 33 rating features on yearly pricing by building a mock insurance quote simulator</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
