import React from 'react';
import './PrepU.css';

/**
 * PrepU Component
 * 
 * Dedicated page showcasing Sean Smith's alignment with Prep U's Data Science
 * Internship requirements. This component highlights technical skills, athletic
 * background, and specific experience that matches the internship needs.
 * 
 * Features:
 * • Detailed skill alignment with internship requirements
 * • Project examples demonstrating relevant experience
 * • Student-athlete perspective and background
 * • Contact information and availability
 * 
 * @component
 * @returns {JSX.Element} The Prep U internship alignment page
 */
const PrepU: React.FC = () => {
  return (
    <div className="prep-u">
      {/* Main header section */}
      <div className="prep-u-header">
        <h2>Wodify's Data Science/SWE Internship</h2>
        <p className="mission-statement">
          Aligning my technical expertise with Wodify
        </p>
      </div>

      {/* Availability section */}
      <div className="availability-card">
        <h3>Available for Summer 2026 Internship</h3>
        <div className="availability-details">
          <span>• May to August 2026</span>
          <span>• 4.0 Major GPA in Computer Science</span>
        </div>
      </div>

      {/* Skills alignment grid */}
      <div className="skills-grid">
        
        {/* AI/LLM Development */}
        <div className="skill-card">
          <h3>AI & LLM Development</h3>
          <div className="skill-content">
            <h4>Experience:</h4>
            <ul>
              <li>OpenAI API integration in twang.ai and Ticker Matcher projects</li>
              <li>Fine tuned language models for personalized content generation</li>
              <li>Prompt engineering for optimal AI responses</li>
              <li>Real time AI chat features and recommendation systems</li>
            </ul>
            <div className="tech-highlights">
              <span className="tech-tag">OpenAI GPT-4</span>
              <span className="tech-tag">API Integration</span>
              <span className="tech-tag">Prompt Engineering</span>
            </div>
          </div>
        </div>

        {/* Data Analysis & Insights */}
        <div className="skill-card">
          <h3>Data Analysis & Insights</h3>
          <div className="skill-content">
            <h4>Experience:</h4>
            <ul>
              <li>Achieved 95.3% F1 score in entity resolution system at D2.ai</li>
              <li>Analyzed 10,000+ test cases for performance evaluation</li>
              <li>User behavior analysis and platform data insights</li>
              <li>Data driven improvements for user experience</li>
            </ul>
            <div className="tech-highlights">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">Pandas</span>
              <span className="tech-tag">NumPy</span>
              <span className="tech-tag">SQL</span>
            </div>
          </div>
        </div>

        {/* Predictive Modeling */}
        <div className="skill-card">
          <h3>Predictive Modeling</h3>
          <div className="skill-content">
            <h4>Experience:</h4>
            <ul>
              <li>Built regression models (XGBoost, Lasso) with R² = 0.741 ± 0.004</li>
              <li>Cross validation and SHAP values for feature attribution</li>
              <li>Machine learning models for user engagement</li>
              <li>Personalized recommendation systems</li>
            </ul>
            <div className="tech-highlights">
              <span className="tech-tag">XGBoost</span>
              <span className="tech-tag">Scikit-learn</span>
              <span className="tech-tag">SHAP</span>
              <span className="tech-tag">Cross-validation</span>
            </div>
          </div>
        </div>

        {/* Data Pipelines & Infrastructure */}
        <div className="skill-card">
          <h3>Data Pipelines & Infrastructure</h3>
          <div className="skill-content">
            <h4>Experience:</h4>
            <ul>
              <li>AWS EC2 deployment with load balancer for scalability</li>
              <li>Docker containerization for consistent deployments</li>
              <li>API architecture and database management</li>
              <li>Model evaluation metrics and monitoring</li>
            </ul>
            <div className="tech-highlights">
              <span className="tech-tag">AWS EC2</span>
              <span className="tech-tag">Docker</span>
              <span className="tech-tag">Load Balancer</span>
              <span className="tech-tag">API Architecture</span>
            </div>
          </div>
        </div>

        {/* Full-Stack Development */}
        <div className="skill-card">
          <h3>Full Stack Development</h3>
          <div className="skill-content">
            <h4>Experience:</h4>
            <ul>
              <li>Deployed multiple projects using Node.js, React, and modern frameworks</li>
              <li>Database management and API integration</li>
              <li>Modern web frameworks and responsive design</li>
              <li>End to end solution development</li>
            </ul>
            <div className="tech-highlights">
              <span className="tech-tag">React</span>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">TypeScript</span>
              <span className="tech-tag">Next.js</span>
            </div>
          </div>
        </div>

        {/* Student-Athlete Perspective */}
        <div className="skill-card">
          <h3>Student Athlete Leadership</h3>
          <div className="skill-content">
            <h4>Experience:</h4>
            <ul>
              <li>Division I soccer player balancing athletics with technical coursework</li>
              <li>Lead team to CAA Semi-Finals and first winning record since 2016</li>
              <li>Earned CAA Rookie of the Week honors</li>
              <li>Demonstrated discipline, teamwork, and time management</li>
            </ul>
            <div className="tech-highlights">
              <span className="tech-tag">Leadership</span>
              <span className="tech-tag">Teamwork</span>
              <span className="tech-tag">Time Management</span>
              <span className="tech-tag">Discipline</span>
            </div>
          </div>
        </div>
      </div>

      {/* Application section */}
      <div className="application-section">
        <h3>Ready to Contribute to Wodify's Mission</h3>
        <div className="key-highlights">
          <h4>Key Highlights</h4>
          <ul>
            <li>4.0 Major GPA in Computer Science</li>
            <li>Real world AI/ML project experience</li>
            <li>Student athlete leadership background</li>
            <li>Remote work ready and flexible schedule</li>
            <li>Experience with cutting edge AI tools and cloud infrastructure</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PrepU; 