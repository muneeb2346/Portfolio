import { useEffect } from 'react';
import { GraduationCap, Award, Calendar, MapPin, BookOpen, ExternalLink } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const Education = ({ id, setActiveSection }) => {
  const { education } = resumeData;

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

    const educationSection = document.getElementById(id);
    if (educationSection) observer.observe(educationSection);

    return () => {
      if (educationSection) observer.unobserve(educationSection);
    };
  }, [id, setActiveSection]);

  // Calculate years of experience
  const experienceYears = new Date().getFullYear() - 2022; // Starting from 2022

  return (
    <section id={id} className="education section">
      <div className="container">
        <div className="section-header">
          <div className="section-icon">
            <GraduationCap size={24} />
          </div>
          <h2 className="section-title">Education & Qualifications</h2>
          <p className="section-subtitle">Academic background and professional development</p>
        </div>

        <div className="education-container">
          {/* Education Timeline */}
          <div className="education-timeline">
            {education.map((edu, index) => (
              <div key={index} className="education-card">
                <div className="education-header">
                  <div className="education-icon">
                    <BookOpen size={20} />
                  </div>
                  <div className="education-info">
                    <h3 className="education-degree">{edu.degree}</h3>
                    <h4 className="education-institution">{edu.institution}</h4>
                  </div>
                  <div className="education-badge">
                    {edu.gpa && (
                      <span className="gpa-badge">
                        <Award size={14} />
                        GPA: {edu.gpa}
                      </span>
                    )}
                    {edu.percentage && (
                      <span className="percentage-badge">
                        <Award size={14} />
                        {edu.percentage}
                      </span>
                    )}
                  </div>
                </div>

                <div className="education-details">
                  <div className="education-meta">
                    <div className="meta-item">
                      <Calendar size={16} />
                      <span>{edu.period}</span>
                    </div>
                    <div className="meta-item">
                      <MapPin size={16} />
                      <span>{edu.institution.includes('Islamabad') ? 'Islamabad' : 'Shorkot'}</span>
                    </div>
                  </div>

                  <p className="education-description">{edu.description}</p>

                  {index === 0 && (
                    <div className="current-status">
                      <div className="status-indicator"></div>
                      <span className="status-text">Currently Enrolled</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications & Achievements */}
          <div className="certifications">
            <div className="certifications-header">
              <h3>Certifications & Achievements</h3>
              <p>Professional certifications and notable achievements</p>
            </div>

            <div className="certification-list">
              <div className="certification-item">
                <div className="cert-icon">🏆</div>
                <div className="cert-content">
                  <h4>Matriculation Excellence</h4>
                  <p>Achieved 91.54% marks in Secondary School Examination</p>
                </div>
              </div>

              <div className="certification-item">
                <div className="cert-icon">🎯</div>
                <div className="cert-content">
                  <h4>Dean's List Honor</h4>
                  <p>Consistently maintained GPA above 3.7 in Computer Science</p>
                </div>
              </div>

              <div className="certification-item">
                <div className="cert-icon">🚀</div>
                <div className="cert-content">
                  <h4>Self-Taught Developer</h4>
                  <p>Mastered multiple frameworks and technologies through independent learning</p>
                </div>
              </div>

              <div className="certification-item">
                <div className="cert-icon">💻</div>
                <div className="cert-content">
                  <h4>Full-Stack Projects</h4>
                  <p>Successfully delivered 3+ full-stack applications from concept to deployment</p>
                </div>
              </div>
            </div>

            <div className="experience-summary">
              <h4>Professional Experience</h4>
              <div className="experience-metrics">
                <div className="metric">
                  <div className="metric-value">{experienceYears}+</div>
                  <div className="metric-label">Years Experience</div>
                </div>
                <div className="metric">
                  <div className="metric-value">3</div>
                  <div className="metric-label">Major Projects</div>
                </div>
                <div className="metric">
                  <div className="metric-value">5+</div>
                  <div className="metric-label">Technologies</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="education-cta">
          <div className="cta-content">
            <h3>Ready to Put My Skills to Work?</h3>
            <p>I'm currently seeking internship opportunities and freelance projects to further develop my expertise.</p>
          </div>
          <div className="cta-actions">
            <a
              href="#contact"
              className="btn btn-primary"
              onClick={() => setActiveSection('contact')}
            >
              <span>Contact Me</span>
              <ExternalLink size={18} />
            </a>
            <a
              href={`https://${resumeData.personal.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <span>View GitHub</span>
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;