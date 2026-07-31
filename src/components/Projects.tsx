import React from 'react';
import './Projects.css';

type Project = {
  title: string;
  summary: string;
  stack: string[];
  highlights: string[];
  githubUrl: string;
  liveUrl?: string;
  videoUrl?: string;
  videoTitle?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: 'Wave Vision',
    summary:
      'Deployed surf analytics app that analyzes fixed-camera beach footage with Streamlit, OpenCV, calibration overlays, weather context, and generated surf reports.',
    stack: ['Python', 'Streamlit', 'OpenCV', 'Open-Meteo', 'OpenAI API'],
    highlights: [
      'Accepts uploaded surf footage and calibrates horizon, shoreline, surf zone, and scale reference.',
      'Estimates wave count, height, velocity, set intervals, and confidence from video frames.',
      'Ships as a public Streamlit Cloud app recruiters can try directly from the portfolio.',
    ],
    githubUrl: 'https://github.com/ssmitty/wave-tracker',
    liveUrl: 'https://ssmitty-wave-tracker-app-ch6ihf.streamlit.app/',
    featured: true,
  },
  {
    title: 'Surf Session Warehouse',
    summary:
      'End-to-end surf analytics warehouse that models forecast conditions, spot performance, session logs, and pipeline health in a Streamlit dashboard.',
    stack: ['Python', 'PostgreSQL', 'dbt', 'Streamlit', 'Open-Meteo', 'Prefect'],
    highlights: [
      'Built ingestion, warehouse, and dashboard layers around surf spots, sessions, marine forecasts, and weather forecasts.',
      'Modeled 1,008 raw forecast rows into daily spot condition facts and analytics marts.',
      'Added deploy-safe demo mode so the public dashboard still runs when local PostgreSQL is unavailable.',
    ],
    githubUrl: 'https://github.com/ssmitty/surf-session-warehouse',
    liveUrl: 'https://surf-session-warehouse.streamlit.app/',
  },
  {
    title: 'Ticker Matcher API',
    summary:
      'Company lookup API for matching user-entered public company names to NASDAQ/NYSE entities and associated SEC filing data.',
    stack: ['Python', 'Flask', 'Pandas', 'NumPy', 'scikit-learn', 'AWS EC2', 'Docker'],
    highlights: [
      'Reached 97.4% precision, 97.3% recall, and 95.5% F1 across 10,000 test cases.',
      'Deployed on AWS EC2 with a load balancer for reliability and scale.',
      'Handles noisy two-word input with fast API responses.',
    ],
    githubUrl: 'https://github.com/ssmitty/traded_company_api',
    videoUrl: 'https://www.youtube.com/embed/4Ubmj8oPhc4',
    videoTitle: 'Ticker Matcher demo',
  },
  {
    title: 'twang.ai',
    summary:
      'AI-powered country lyric generator that turns quiz responses into personalized song lyrics through a polished web flow.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'AI API', 'GitHub Pages'],
    highlights: [
      'Built an interactive quiz for mood, tempo, theme, and story preferences.',
      'Connected form state to AI-powered lyric generation endpoints.',
      'Published as a static web app with responsive routing.',
    ],
    githubUrl: 'https://github.com/ssmitty/twang.ai',
    liveUrl: 'https://ssmitty.github.io/twang.ai/',
    videoUrl: 'https://www.youtube.com/embed/_w2WLCA_fL8?si=rhYWtZ6PVxj6pFTT',
    videoTitle: 'twang.ai demo',
  },
  {
    title: 'The Pink Path',
    summary:
      'Career assessment web app that combines multiple-choice and open-response inputs to recommend personalized career paths.',
    stack: ['TypeScript', 'HTML', 'CSS', 'OpenAI API'],
    highlights: [
      'Integrated AI career guidance from user responses.',
      'Built dynamic results pages, light and dark mode, progress tracking, and PDF export support.',
      'Added a completion celebration and assessment flow designed for first-time users.',
    ],
    githubUrl: 'https://github.com/emmajudd/CISC275-finalproject',
    liveUrl: 'https://emmajudd.github.io/CISC275-finalproject/',
    videoUrl: 'https://www.youtube.com/embed/lPtLkRL3sYc',
    videoTitle: 'The Pink Path demo',
  },
];

const Projects: React.FC = () => {
  return (
    <section className="projects">
      <div className="section-heading">
        <p className="section-kicker">Selected work</p>
        <h2>Projects</h2>
        <p>
          A mix of deployed apps, backend systems, and AI products, with links to
          the live experience and source code wherever available.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article
            className={[
              'project-card',
              project.featured ? 'project-card-featured' : '',
              project.videoUrl ? '' : 'project-card-no-demo',
            ].filter(Boolean).join(' ')}
            key={project.title}
          >
            <div className="project-main">
              <div className="project-header">
                {project.featured && <span className="project-badge">Live now</span>}
                <h3>{project.title}</h3>
                <p className="project-description">{project.summary}</p>
              </div>

              <div className="tech-stack" aria-label={`${project.title} tech stack`}>
                {project.stack.map((technology) => (
                  <span className="tech-tag" key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              <ul className="project-features">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>

              <div className="project-links">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-link-primary"
                  >
                    Live site
                  </a>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  GitHub
                </a>
              </div>
            </div>

            {project.videoUrl && (
              <div className="project-demo">
                <iframe
                  src={project.videoUrl}
                  title={project.videoTitle ?? `${project.title} demo`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="project-video"
                />
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
