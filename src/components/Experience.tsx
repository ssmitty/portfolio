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

      {/* Surf Session Warehouse - Data Engineering Project (July 2026) */}
      <div className="experience-card">
        <div className="experience-header">
          <h3>Data Engineering Project, Surf Session Warehouse</h3>
          <div className="experience-meta">
            <span className="location">Portfolio Project</span>
            <span className="duration">July 2026</span>
          </div>
        </div>
        <div className="experience-content">
          <div className="tech-stack">
            <span className="tech-tag">Python</span>
            <span className="tech-tag">PostgreSQL</span>
            <span className="tech-tag">dbt</span>
            <span className="tech-tag">Streamlit</span>
            <span className="tech-tag">Open-Meteo</span>
            <span className="tech-tag">Prefect</span>
          </div>
          <div className="achievements">
            <h4>Key Achievements</h4>
            <ul>
              <li>Built an end-to-end surf analytics warehouse that ingests Open-Meteo marine and weather forecasts, stores raw rows in PostgreSQL, and models analytics-ready marts with dbt</li>
              <li>Modeled 1,008 raw forecast rows into daily spot condition facts, spot performance summaries, forecast-to-session quality views, and pipeline health reporting</li>
              <li>Deployed a Streamlit dashboard with a demo-mode fallback so the public app can run without local PostgreSQL while preserving the warehouse story</li>
            </ul>
          </div>
          <div className="experience-links">
            <a
              className="experience-link experience-link-primary"
              href="https://surf-session-warehouse.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Dashboard
            </a>
            <a
              className="experience-link"
              href="https://github.com/ssmitty/surf-session-warehouse"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repo
            </a>
          </div>
        </div>
      </div>

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
              <li>Designed the relational data model for a Milestones and Achievements feature in OutSystems O11, following 4-Layer Canvas architecture to improve module separation across a multi-module codebase</li>
              <li>Built upsert server and service actions for milestone group management, applying correct module visibility patterns to enable clean consumption across orchestrator and business logic modules</li>
              <li>Wrote injection-safe dynamic SQL queries to support real-time filtering by achievement type, status, and client visibility</li>
              <li>Built a bootstrap process to backfill milestone progress for all existing gym members across Attendance, Weekly Streaks, and Gym Anniversary groups</li>
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
