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
 * - Academic background with GPA and coursework details
 * - Athletic achievements as Division I soccer player
 * - Contact information with professional links
 * - Responsive grid layout for organized information display
 * - Visual elements including profile images
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
            <p className="degree">Bachelor of Science in Computer Science, Minor in Mathematics</p>
            <p className="gpa">Major GPA: 4.0 | Overall GPA: 3.93</p>
            <p className="graduation">Expected Graduation: May 2027</p>
            
            {/* Relevant coursework section */}
            <h4>Relevant Coursework</h4>
            
            {/* Grid layout for organizing coursework by category */}
            <div className="coursework-grid">
              
              {/* Computer Science courses */}
              <div className="course-category">
                <h5>Computer Science</h5>
                <ul>
                  <li>Introduction to Algorithms</li>
                  <li>Operating Systems</li>
                  <li>Database Systems</li>
                  <li>Systems Programming</li>
                  <li>Machine Organization and Assembly Language</li>
                  <li>Data Structures</li>
                  <li>Computer Science I and II</li>
                  <li>Intro to Software Engineering</li>
                </ul>
              </div>
              
              {/* Mathematics courses */}
              <div className="course-category">
                <h5>Mathematics</h5>
                <ul>
                  <li>Linear Algebra</li>
                  <li>Discrete Mathematics</li>
                  <li>Calculus 3</li>
                  <li>Probability and Statistics</li>
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
              
              {/* LinkedIn profile */}
              <div className="contact-item">
                <span className="contact-label">LinkedIn:</span>
                <a href="https://www.linkedin.com/in/sean-matthew-smith/" target="_blank" rel="noopener noreferrer" className="contact-link">
                  linkedin.com/in/sean-matthew-smith
                </a>
              </div>
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
            <p className="position">Center Back | August 2023 - Present</p>
            
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
              <li>Lead team to CAA Semi-Finals and first winning record since 2016</li>
              <li>Played 1,000+ minutes during the season</li>
              <li>Earned CAA Rookie of the Week honors (October 16-23, 2023)</li>
              <li>Balance full course load with competition, practice, travel, and film study</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 