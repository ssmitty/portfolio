import React from 'react';
import './Experience.css';

/**
 * Experience Component
 * 
 * Displays Sean Smith's professional experience and internship details with
 * comprehensive information about technical projects, achievements, and
 * technology stacks used. This component showcases real-world application
 * of technical skills in a professional setting.
 * 
 * Features:
 * • Professional experience timeline
 * • Technology stack for each role
 * • Detailed achievements and project descriptions
 * • Performance metrics and quantitative results
 * • Responsive design for organized information display
 * 
 * @component
 * @returns {JSX.Element} The experience section with professional details
 */
const Experience: React.FC = () => {
  return (
    <div className="experience">
      {/* Main experience section header */}
      <h2>Professional Experience</h2>
      
      {/* Experience card container */}
      <div className="experience-card">
        {/* Experience header with title and metadata */}
        <div className="experience-header">
          <h3>D2.ai • Data Engineer Internship</h3>
          {/* Location and duration metadata */}
          <div className="experience-meta">
            <span className="location">Long Beach Island, NJ</span>
            <span className="duration">July 2024</span>
          </div>
        </div>
        
        {/* Experience content with technology stack and achievements */}
        <div className="experience-content">
          {/* Technology stack used during the internship */}
          <div className="tech-stack">
            <span className="tech-tag">Python</span>
            <span className="tech-tag">Machine Learning</span>
            <span className="tech-tag">RapidFuzz</span>
            <span className="tech-tag">OpenAI API</span>
            <span className="tech-tag">XGBoost</span>
            <span className="tech-tag">SHAP</span>
          </div>
          
          {/* Detailed achievements and project descriptions */}
          <div className="achievements">
            <h4>Key Achievements</h4>
            <ul>
              {/* Entity Resolution System Project */}
              <li>
                <strong>Entity Resolution System:</strong> Developed a public company entity resolution system using fuzzy matching (RapidFuzz), exact matching, and OpenAI-augmented fallback logic
              </li>
              
              {/* Performance Evaluation Results */}
              <li>
                <strong>Performance Evaluation:</strong> Evaluated performance across 10,000+ test cases with 97.4% precision, 97.3% recall, and 95.5% F1 score, with 0.0206 mean lookup speed
              </li>
              
              {/* Model Benchmarking Project */}
              <li>
                <strong>Model Benchmarking:</strong> Benchmarked multiple models (RapidFuzz, Hybrid + AI, Baseline) across use cases (misspellings, fake names, exact) with metrics like mean lookup speed, specificity, and 95% confidence intervals
              </li>
              
              {/* Insurance Simulator Project */}
              <li>
                <strong>Insurance Simulator:</strong> Built a mock insurance quote simulator to analyze the impact of 33 rating features on pricing yearly
              </li>
              
              {/* Regression Models Project */}
              <li>
                <strong>Regression Models:</strong> Built and validated regression models (e.g., XGBoost, Lasso, Hybrid) with R² = 0.741 ± 0.004, cross-validation, and SHAP values to quantify per-feature contributions over time
              </li>
              
              {/* Data Visualization Project */}
              <li>
                <strong>Data Visualization:</strong> Created time-series dashboards and feature attribution visualizations to track evolving model behavior
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience; 