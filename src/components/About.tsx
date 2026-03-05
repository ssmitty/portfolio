import React from 'react';
import './About.css';

/**
 * About Component
 * 
 * Displays comprehensive information about Sean Smith's academic background and
 * athletic achievements. This component showcases both academic excellence and
 * athletic success at the University of Delaware.
 * 
 * Features:
 * • Academic background with GPA and coursework details
 * • Athletic achievements as Division I soccer player
 * • Contact information with professional links
 * • Responsive grid layout for organized information display
 * • Visual elements including profile images
 * 
 * @component
 * @returns {JSX.Element} The about section with academic and athletic information
 */
const About: React.FC = () => {
  return (
    <div className="about">
      {/* Main grid container for organizing content sections */}
      <div className="about-grid">
        
        {/* Academic Background Section */}
        <div className="about-section">
          <h2>Academic Background</h2>
          
          {/* Content card containing academic information */}
          <div className="content-card">
            {/* University and degree information */}
            <h3>University of Delaware  College of Engineering</h3>
            <p className="degree">Bachelor of Science in Computer Science, Minor in Mathematics</p>
            <p className="gpa">Cumulative GPA: 3.91 | Major GPA: 4.0</p>
            <p className="graduation">Newark, DE Expected Graduation: May 2027</p>
            
            {/* Technical skills summary */}
            <h4>Technical Skills</h4>
            <p className="skills-summary">
              Advanced in Python (pandas, NumPy, scikit-learn, matplotlib, seaborn). Proficient in model selection and evaluation (precision, recall, F1, ROC-AUC), AWS, PostgreSQL, JavaScript, C, CSS, SQL, React, Node.js.
            </p>
            
            {/* Relevant coursework section */}
            <h4>Relevant Coursework</h4>
            
            {/* Grid layout for organizing coursework by category */}
            <div className="coursework-grid">
              
              {/* Computer Science courses */}
              <div className="course-category">
                <h5>Computer Science</h5>
                <ul>
                  <li>Algorithms</li>
                  <li>Data Mining</li>
                  <li>Automata Theory</li>
                  <li>Logic for Programming</li>
                  <li>Operating Systems</li>
                  <li>Computer Vision</li>
                  <li>Software Engineering</li>
                  <li>Machine Organization & Assembly Language</li>
                  <li>Data Structures</li>
                  <li>Database Systems</li>
                  <li>Systems Programming</li>
                  
                </ul>
              </div>
              
              {/* Mathematics courses */}
              <div className="course-category">
                <h5>Mathematics</h5>
                <ul>
                  <li>Computational Math</li>
                  <li>Linear Algebra</li>
                  <li>Discrete Mathematics</li>
                  <li>Probability Theory & Statistical Methods</li>
                  <li>Calculus 2</li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="about-section">
          <h2>Contact Information</h2>
          
          {/* Content card containing contact information */}
          <div className="content-card">
            <div className="contact-info">
              {/* Phone number */}
              <div className="contact-item">
                <span className="contact-label">Phone:</span>
                <a href="tel:+16098150282" className="contact-link">+1 (609) 815-0282</a>
              </div>
              
              {/* Email address */}
              <div className="contact-item">
                <span className="contact-label">Email:</span>
                <a href="mailto:ssmitty@udel.edu" className="contact-link">ssmitty@udel.edu</a>
              </div>
              
              {/* GitHub profile */}
              <div className="contact-item">
                <span className="contact-label">GitHub:</span>
                <a href="https://github.com/ssmitty" target="_blank" rel="noopener noreferrer" className="contact-link">
                  github.com/ssmitty
                </a>
              </div>
              
              {/* LinkedIn profile */}
              <div className="contact-item">
                <span className="contact-label">LinkedIn:</span>
                <a href="https://www.linkedin.com/in/sean-matthew-smith/" target="_blank" rel="noopener noreferrer" className="contact-link">
                  linkedin.com/in/sean-matthew-smith
                </a>
              </div>
            </div>
            
            {/* Note about repository privacy */}
            <div className="privacy-note">
              <p><em>Note: Some repositories may not be publicly visible due to privacy concerns or ongoing development.</em></p>
            </div>
          </div>
        </div>

        {/* Athletic Achievements Section */}
        <div className="about-section">
          <h2>Athletic Achievements</h2>
          
          {/* Content card containing athletic information */}
          <div className="content-card">
            {/* Soccer team and position information */}
            <h3>University of Delaware Division I Men's Soccer</h3>
            <p className="position">Defender | July 2023 - Present</p>
            
            {/* Container for athletic images */}
            <div className="athletics-images">
              {/* GPA celebration photo */}
              <img 
                src="./images/gpa_celebration.jpg" 
                alt="Sean Smith 4.0 GPA celebration" 
                className="athletics-pic" 
              />
              {/* Soccer action photo */}
              <img 
                src="./images/soccer_action.jpg" 
                alt="Sean Smith soccer action" 
                className="athletics-pic" 
              />
            </div>
            
            {/* List of athletic achievements and accomplishments */}
            <ul className="achievements">
              <li>2025 Summit League Championship All-Tournament Team – Awarded to the top 11 players in postseason</li>
              <li>2025 CSC Academic All-District honors – Player must have above a 3.5 cum GPA and start in 2/3 of games</li>
              <li>Named CAA Rookie of the Week (10/23/23) and made 19 appearances with 16 starts in first season</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 