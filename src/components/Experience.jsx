import { useEffect, useState } from 'react';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const Experience = ({ id, setActiveSection }) => {
  const [expandedExperience, setExpandedExperience] = useState(null);

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

    const experienceSection = document.getElementById(id);
    if (experienceSection) observer.observe(experienceSection);

    return () => {
      if (experienceSection) observer.unobserve(experienceSection);
    };
  }, [id, setActiveSection]);

  // Experience data - we'll enhance this with your actual experience
  const experiences = [
    {
      id: 1,
      title: "Front-End Developer",
      company: "Freelance",
      period: "2023 - Present",
      location: "Remote",
      description: "Developing responsive web applications using modern frameworks and best practices.",
      details: [
        "Built responsive web applications using React.js, HTML5, CSS3, and JavaScript",
        "Developed mobile applications with Flutter and React Native for cross-platform compatibility",
        "Implemented clean, maintainable code following industry best practices and design patterns",
        "Collaborated with clients to understand requirements and deliver tailored solutions",
        "Optimized applications for performance and accessibility standards"
      ],
      technologies: ["React.js", "Flutter", "JavaScript", "HTML/CSS", "Git", "REST APIs"],
      type: "work"
    },
    {
      id: 2,
      title: "Student Developer",
      company: "Personal Projects",
      period: "2022 - Present",
      location: "Islamabad, Pakistan",
      description: "Building full-stack applications to solve real-world problems and enhance technical skills.",
      details: [
        "Developed Iron Store Management System with ASP.NET MVC and Entity Framework",
        "Created Weather Application with Flutter and OpenWeather API integration",
        "Built Inventory Management System using Java Servlets and JSP",
        "Implemented role-based authentication and real-time data tracking",
        "Deployed applications with proper documentation and version control"
      ],
      technologies: ["ASP.NET MVC", "Java", "Flutter", "MySQL", "SQL Server", "Docker"],
      type: "project"
    }
  ];

  const toggleExperience = (id) => {
    setExpandedExperience(expandedExperience === id ? null : id);
  };

  return (
    <section id={id} className="experience section">
      <div className="container">
        <div className="section-header">
          <div className="section-icon">
            <Briefcase size={24} />
          </div>
          <h2 className="section-title">Experience & Projects</h2>
          <p className="section-subtitle">My professional journey and notable projects</p>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp) => (
            <div 
              key={exp.id} 
              className={`experience-item ${expandedExperience === exp.id ? 'expanded' : ''}`}
              data-type={exp.type}
            >
              <div className="experience-header" onClick={() => toggleExperience(exp.id)}>
                <div className="experience-icon">
                  <Briefcase size={20} />
                </div>
                <div className="experience-info">
                  <h3 className="experience-title">{exp.title}</h3>
                  <div className="experience-meta">
                    <span className="experience-company">{exp.company}</span>
                    <span className="experience-separator">•</span>
                    <span className="experience-period">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                    <span className="experience-separator">•</span>
                    <span className="experience-location">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                  </div>
                </div>
                <button className="experience-toggle">
                  {expandedExperience === exp.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
              </div>

              <div className="experience-content">
                <p className="experience-description">{exp.description}</p>
                
                {expandedExperience === exp.id && (
                  <div className="experience-details">
                    <h4 className="details-title">Responsibilities & Achievements</h4>
                    <ul className="details-list">
                      {exp.details.map((detail, index) => (
                        <li key={index} className="detail-item">
                          <span className="detail-bullet"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>

                    <div className="technologies-section">
                      <h4 className="technologies-title">Technologies Used</h4>
                      <div className="technologies-list">
                        {exp.technologies.map((tech, index) => (
                          <span key={index} className="technology-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {exp.type === 'project' && (
                      <div className="project-links">
                        <a 
                          href="#projects" 
                          className="project-link"
                          onClick={() => setActiveSection('projects')}
                        >
                          <span>View Project Details</span>
                          <ExternalLink size={16} />
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="experience-cta">
          <p className="cta-text">
            Want to see more detailed projects? Check out my projects section below!
          </p>
          <a 
            href="#projects" 
            className="btn btn-primary"
            onClick={() => setActiveSection('projects')}
          >
            <span>View All Projects</span>
            <ChevronDown size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;