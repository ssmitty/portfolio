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
            <h3>University of Delaware</h3>
            <p className="degree">B.S. Computer Science and B.S. Mathematics | Aug 2023 to May 2027</p>
            <p className="degree">M.S. Applied Mathematics | Beginning Aug 2027</p>
            <p className="gpa">Cumulative GPA: 3.91 | Major GPA: 4.0</p>
            <p className="graduation">Newark, DE</p>

            {/* Technical skills summary */}
            <h4>Technical Skills</h4>
            <div className="skills-list">
              <p className="skills-group"><span className="skills-label">Languages:</span> Python, JavaScript, C, C++, SQL</p>
              <p className="skills-group"><span className="skills-label">Platforms and Cloud:</span> AWS, OutSystems</p>
              <p className="skills-group"><span className="skills-label">Methods:</span> Model Selection, Model Evaluation, Data Modeling, Web REST</p>
            </div>

            {/* Certifications section */}
            <h4>Certifications</h4>
            <p className="cert-title">Associate Developer O11, OutSystems | June 2026</p>
            <ul className="cert-details">
              <li>Reactive web development, data modeling, server-side logic, and application lifecycle management</li>
            </ul>

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
                  <li>Calculus 3</li>
                  <li>Differential Equations</li>
                  <li>Introduction to Proof</li>
                  <li>Math Techniques in Data Science</li>
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
            <p className="position">Defender | July 2023 to Present</p>
            
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
              <li>2025 Summit League Championship All-Tournament Team, awarded to the top 11 players in the postseason</li>
              <li>2025 CSC Academic All-District honors, requiring above a 3.5 cumulative GPA and starting in two-thirds of games</li>
              <li>Named CAA Rookie of the Week (10/23/23) and made 19 appearances with 16 starts in first season</li>
              <li>Logged over 2,000 minutes played across two seasons</li>
              <li>Contributed to team program record 10 single-season shutouts</li>
              <li>Conference USA Commissioner's Academic Medal recipient</li>
              <li>Conference USA Academic Honor Roll</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 