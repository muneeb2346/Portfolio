import { useEffect, useState } from 'react';
import { 
  Code2, Filter, ExternalLink, Github, 
  Eye, X, ChevronRight, Layers, 
  Database, Smartphone, Globe, Server
} from 'lucide-react';
import { projects } from '../data/projectData';

const Projects = ({ id, setActiveSection }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);

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

    const projectsSection = document.getElementById(id);
    if (projectsSection) observer.observe(projectsSection);

    return () => {
      if (projectsSection) observer.unobserve(projectsSection);
    };
  }, [id, setActiveSection]);

  // Filter projects
  useEffect(() => {
    if (filter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter(project => 
          project.category.toLowerCase() === filter.toLowerCase() ||
          project.technologies.some(tech => 
            tech.toLowerCase().includes(filter.toLowerCase())
          )
        )
      );
    }
  }, [filter]);

  // Handle filter click
  const handleFilterClick = (category) => {
    setFilter(category);
  };

  // Handle project click for modal
  const handleProjectClick = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  };

  // Close modal
  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeModal();
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Category icons
  const categoryIcons = {
    'Full Stack': <Layers size={20} />,
    'Mobile': <Smartphone size={20} />,
    'Web': <Globe size={20} />,
    'Backend': <Server size={20} />,
    'Database': <Database size={20} />
  };

  // Filter categories
  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'full stack', label: 'Full Stack', count: projects.filter(p => p.category === 'Full Stack').length },
    { id: 'mobile', label: 'Mobile', count: projects.filter(p => p.category === 'Mobile').length }
  ];

  // Technology filter options
  const technologies = [
    'ASP.NET', 'Flutter', 'Java', 'React', 'MySQL', 'JavaScript'
  ];

  return (
    <section id={id} className="projects section">
      <div className="container">
        <div className="section-header">
          <div className="section-icon">
            <Code2 size={24} />
          </div>
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">Showcasing my work and technical expertise</p>
        </div>

        {/* Project Filters */}
        <div className="project-filters">
          <div className="filters-header">
            <Filter size={20} />
            <span>Filter by:</span>
          </div>
          
          <div className="filter-categories">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-btn ${filter === category.id ? 'active' : ''}`}
                onClick={() => handleFilterClick(category.id)}
              >
                <span className="filter-label">{category.label}</span>
                <span className="filter-count">{category.count}</span>
              </button>
            ))}
          </div>

          <div className="filter-technologies">
            {technologies.map((tech) => (
              <button
                key={tech}
                className={`tech-filter-btn ${filter === tech.toLowerCase() ? 'active' : ''}`}
                onClick={() => handleFilterClick(tech.toLowerCase())}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="project-card"
              onClick={() => handleProjectClick(project)}
            >
              <div className="project-image">
                <div className="project-category">
                  {categoryIcons[project.category] || <Code2 size={16} />}
                  <span>{project.category}</span>
                </div>
                <div className="project-overlay">
                  <button className="view-project-btn">
                    <Eye size={24} />
                    <span>View Details</span>
                  </button>
                </div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-actions">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-action-btn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.liveDemo && (
                      <a 
                        href={project.liveDemo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-action-btn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="tech-tag more">+{project.technologies.length - 4}</span>
                  )}
                </div>

                <div className="project-footer">
                  <button className="read-more-btn">
                    <span>Read More</span>
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <div className="no-results">
            <Code2 size={48} />
            <h3>No projects found</h3>
            <p>Try selecting a different filter</p>
            <button 
              className="btn btn-secondary"
              onClick={() => setFilter('all')}
            >
              Show All Projects
            </button>
          </div>
        )}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="project-modal">
          <div className="modal-overlay" onClick={closeModal}></div>
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>
              <X size={24} />
            </button>

            <div className="modal-header">
              <div className="modal-category">
                {categoryIcons[selectedProject.category] || <Code2 size={20} />}
                <span>{selectedProject.category} Project</span>
              </div>
              <h2 className="modal-title">{selectedProject.title}</h2>
              <div className="modal-links">
                {selectedProject.github && (
                  <a 
                    href={selectedProject.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="modal-link"
                  >
                    <Github size={20} />
                    <span>View Code</span>
                  </a>
                )}
                {selectedProject.liveDemo && (
                  <a 
                    href={selectedProject.liveDemo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="modal-link"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>

            <div className="modal-body">
              <div className="modal-description">
                <h3>Project Overview</h3>
                <p>{selectedProject.longDescription || selectedProject.description}</p>
              </div>

              <div className="modal-features">
                <h3>Key Features</h3>
                <ul className="features-list">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index} className="feature-item">
                      <ChevronRight size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-technologies">
                <h3>Technologies Used</h3>
                <div className="technologies-grid">
                  {selectedProject.technologies.map((tech, index) => (
                    <div key={index} className="modal-tech-tag">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={closeModal}>
                Close
              </button>
              {selectedProject.github && (
                <a 
                  href={selectedProject.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <Github size={18} />
                  <span>View on GitHub</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;