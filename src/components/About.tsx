import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about">
      <div className="about-grid">
        <div className="about-section">
          <h2>Academic Background</h2>
          
          <div className="content-card">
            <h3>University of Delaware</h3>
            <p className="degree">B.S. Computer Science and B.S. Mathematics | Expected May 2027</p>
            <p className="degree">M.S. Applied Mathematics | Expected May 2028</p>
            <p className="gpa">Cumulative GPA: 3.91 | Major GPA: 4.0</p>
            <p className="graduation">Newark, DE</p>

            <h4>Technical Skills</h4>
            <div className="skills-list">
              <p className="skills-group"><span className="skills-label">Languages and Tools:</span> Python, TypeScript, JavaScript, SQL, HTML/CSS, C/C++, Docker</p>
              <p className="skills-group"><span className="skills-label">Technologies and Libraries:</span> React, AWS, PostgreSQL, DynamoDB, Lambda, EC2, dbt, Prefect, Streamlit, OpenCV, OutSystems O11, Git, Scikit-learn, Flask, OpenAI API, Pandas, NumPy</p>
              <p className="skills-group"><span className="skills-label">Concepts:</span> REST APIs, Data Modeling, Multithreading, Machine Learning, Databases, LLMs + RAG</p>
            </div>

            <h4>Certifications</h4>
            <p className="cert-title">Associate Developer O11, OutSystems | June 2026</p>
            <ul className="cert-details">
              <li>Validated proficiency building and deploying low-code apps on OutSystems O11.</li>
            </ul>

            <h4>Relevant Coursework</h4>
            
            <div className="coursework-grid">
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

        <div className="about-section">
          <h2>Contact Information</h2>
          
          <div className="content-card">
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-label">Email:</span>
                <a href="mailto:seansmitth1926@gmail.com" className="contact-link">seansmitth1926@gmail.com</a>
              </div>
              
              <div className="contact-item">
                <span className="contact-label">GitHub:</span>
                <a href="https://github.com/ssmitty" target="_blank" rel="noopener noreferrer" className="contact-link">
                  github.com/ssmitty
                </a>
              </div>
              
              <div className="contact-item">
                <span className="contact-label">LinkedIn:</span>
                <a href="https://www.linkedin.com/in/sean-matthew-smith/" target="_blank" rel="noopener noreferrer" className="contact-link">
                  linkedin.com/in/sean-matthew-smith
                </a>
              </div>
            </div>
            
            <div className="privacy-note">
              <p><em>Note: Some repositories may not be publicly visible due to privacy concerns or ongoing development.</em></p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>Athletic Achievements</h2>
          
          <div className="content-card">
            <h3>University of Delaware Division I Men's Soccer</h3>
            <p className="position">Defender | July 2023 to Present</p>
            
            <div className="athletics-images">
              <img 
                src="./images/gpa_celebration.jpg" 
                alt="Sean Smith 4.0 GPA celebration" 
                className="athletics-pic" 
              />
              <img 
                src="./images/soccer_action.jpg" 
                alt="Sean Smith soccer action" 
                className="athletics-pic" 
              />
            </div>
            
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
