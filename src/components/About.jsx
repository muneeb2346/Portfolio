import { useEffect } from 'react';
import { User, MapPin, Calendar, Award, BookOpen } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const About = ({ id, setActiveSection }) => {
  const { personal, education } = resumeData;

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const aboutSection = document.getElementById(id);
    if (aboutSection) observer.observe(aboutSection);

    return () => {
      if (aboutSection) observer.unobserve(aboutSection);
    };
  }, [id, setActiveSection]);

  return (
    <section id={id} className="about section">
      <div className="container">
        <div className="section-header">
          <div className="section-icon">
            <User size={24} />
          </div>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know more about my background and journey</p>
        </div>

        <div className="about-grid">
          {/* Left Column - Personal Info */}
          <div className="about-card personal-info">
            <h3 className="about-card-title">Personal Information</h3>
            
            <div className="info-grid">
              <div className="info-item">
                <div className="info-label">
                  <User size={16} />
                  <span>Full Name</span>
                </div>
                <div className="info-value">{personal.name}</div>
              </div>

              <div className="info-item">
                <div className="info-label">
                  <MapPin size={16} />
                  <span>Location</span>
                </div>
                <div className="info-value">{personal.location}</div>
              </div>

              <div className="info-item">
                <div className="info-label">
                  <span>Email</span>
                </div>
                <div className="info-value">
                  <a href={`mailto:${personal.email}`} className="info-link">
                    {personal.email}
                  </a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-label">
                  <span>Phone</span>
                </div>
                <div className="info-value">
                  <a href={`tel:${personal.phone}`} className="info-link">
                    {personal.phone}
                  </a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-label">
                  <span>GitHub</span>
                </div>
                <div className="info-value">
                  <a 
                    href={`https://${personal.github}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="info-link"
                  >
                    {personal.github}
                  </a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-label">
                  <span>LinkedIn</span>
                </div>
                <div className="info-value">
                  <a 
                    href={`https://${personal.linkedin}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="info-link"
                  >
                    {personal.linkedin}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Education & Summary */}
          <div className="about-content">
            {/* Professional Summary */}
            <div className="about-card summary">
              <h3 className="about-card-title">Professional Summary</h3>
              <p className="summary-text">{personal.summary}</p>
            </div>

            {/* Education Timeline */}
            <div className="about-card education">
              <h3 className="about-card-title">
                <BookOpen size={20} />
                <span>Education</span>
              </h3>
              
              <div className="timeline">
                {education.map((edu, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <div className="timeline-header">
                        <h4 className="timeline-title">{edu.institution}</h4>
                        <span className="timeline-period">
                          <Calendar size={14} />
                          {edu.period}
                        </span>
                      </div>
                      <p className="timeline-degree">{edu.degree}</p>
                      
                      {edu.gpa && (
                        <div className="timeline-badge">
                          <Award size={14} />
                          <span>GPA: {edu.gpa}</span>
                        </div>
                      )}
                      
                      {edu.percentage && (
                        <div className="timeline-badge">
                          <Award size={14} />
                          <span>Percentage: {edu.percentage}</span>
                        </div>
                      )}
                      
                      <p className="timeline-description">{edu.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;