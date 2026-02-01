import { useEffect, useState } from 'react';
import { Cpu, Code2, Database, Tool, Smartphone, Server, Layout, GitBranch } from 'lucide-react';
import { skillsData } from '../data/skillsData';

const Skills = ({ id, setActiveSection }) => {
  const [activeCategory, setActiveCategory] = useState('Programming Languages');

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

    const skillsSection = document.getElementById(id);
    if (skillsSection) observer.observe(skillsSection);

    return () => {
      if (skillsSection) observer.unobserve(skillsSection);
    };
  }, [id, setActiveSection]);

  // Skill category icons
  const categoryIcons = {
    'Programming Languages': <Code2 size={24} />,
    'Frameworks & Libraries': <Layout size={24} />,
    'Tools & Technologies': <Tool size={24} />,
    'Soft Skills': <Cpu size={24} />
  };

  // Get active category skills
  const activeSkills = skillsData.find(cat => cat.category === activeCategory)?.skills || [];

  return (
    <section id={id} className="skills section">
      <div className="container">
        <div className="section-header">
          <div className="section-icon">
            <Cpu size={24} />
          </div>
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">Technical proficiencies and tools I work with</p>
        </div>

        <div className="skills-container">
          {/* Skill Categories Navigation */}
          <div className="skills-categories">
            {skillsData.map((category) => (
              <button
                key={category.category}
                className={`category-btn ${activeCategory === category.category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.category)}
              >
                <span className="category-icon">
                  {categoryIcons[category.category] || <Code2 size={20} />}
                </span>
                <span className="category-name">{category.category}</span>
                <span className="category-count">{category.skills.length}</span>
              </button>
            ))}
          </div>

          {/* Skills Display Area */}
          <div className="skills-display">
            <div className="skills-header">
              <h3 className="skills-category-title">
                {categoryIcons[activeCategory]}
                <span>{activeCategory}</span>
              </h3>
              <p className="skills-category-description">
                {activeCategory === 'Programming Languages' && 'Core programming languages I use for development'}
                {activeCategory === 'Frameworks & Libraries' && 'Modern frameworks and libraries for building applications'}
                {activeCategory === 'Tools & Technologies' && 'Development tools, databases, and platforms I work with'}
                {activeCategory === 'Soft Skills' && 'Interpersonal skills and work methodologies'}
              </p>
            </div>

            <div className="skills-grid">
              {activeSkills.map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-info">
                    <div className="skill-name-container">
                      <span className="skill-name">{skill.name}</span>
                      {skill.icon && (
                        <span className="skill-icon">
                          {getSkillIcon(skill.icon)}
                        </span>
                      )}
                    </div>
                    <span className="skill-level">{skill.level}%</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${skill.level}%` }}
                      data-level={skill.level}
                    ></div>
                    <div className="progress-markers">
                      {[0, 25, 50, 75, 100].map((marker) => (
                        <span
                          key={marker}
                          className="progress-marker"
                          style={{ left: `${marker}%` }}
                        ></span>
                      ))}
                    </div>
                  </div>

                  {/* Skill Level Label */}
                  <div className="skill-level-label">
                    <span className={`level-dot ${getLevelClass(skill.level)}`}></span>
                    <span className="level-text">{getLevelText(skill.level)}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Skill Legend */}
            <div className="skill-legend">
              <div className="legend-item">
                <span className="legend-dot beginner"></span>
                <span>Beginner (0-40%)</span>
              </div>
              <div className="legend-item">
                <span className="legend-dot intermediate"></span>
                <span>Intermediate (41-70%)</span>
              </div>
              <div className="legend-item">
                <span className="legend-dot advanced"></span>
                <span>Advanced (71-90%)</span>
              </div>
              <div className="legend-item">
                <span className="legend-dot expert"></span>
                <span>Expert (91-100%)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Skills Info */}
        <div className="skills-summary">
          <div className="summary-card">
            <div className="summary-icon">
              <Smartphone size={24} />
            </div>
            <h4>Mobile Development</h4>
            <p>Cross-platform app development using Flutter with responsive UI design</p>
          </div>
          <div className="summary-card">
            <div className="summary-icon">
              <Server size={24} />
            </div>
            <h4>Backend Development</h4>
            <p>Building robust APIs and server-side logic with Java and ASP.NET</p>
          </div>
          <div className="summary-card">
            <div className="summary-icon">
              <Database size={24} />
            </div>
            <h4>Database Management</h4>
            <p>Designing and optimizing databases with MySQL and SQL Server</p>
          </div>
          <div className="summary-card">
            <div className="summary-icon">
              <GitBranch size={24} />
            </div>
            <h4>Version Control</h4>
            <p>Proficient in Git workflow and collaborative development</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper function to get skill icon
const getSkillIcon = (iconName) => {
  const icons = {
    java: <span className="icon-text">☕</span>,
    dart: <span className="icon-text">🎯</span>,
    javascript: <span className="icon-text">📜</span>,
    html: <span className="icon-text">🌐</span>,
    csharp: <span className="icon-text">#</span>,
    flutter: <span className="icon-text">💙</span>,
    react: <span className="icon-text">⚛️</span>,
    dotnet: <span className="icon-text">.NET</span>,
    spring: <span className="icon-text">🌱</span>,
    ef: <span className="icon-text">EF</span>,
    git: <span className="icon-text">📌</span>,
    mysql: <span className="icon-text">🐬</span>,
    sqlserver: <span className="icon-text">🗄️</span>,
    tomcat: <span className="icon-text">🐈</span>,
    vscode: <span className="icon-text">📝</span>,
    androidstudio: <span className="icon-text">🤖</span>,
    docker: <span className="icon-text">🐳</span>,
    postman: <span className="icon-text">📬</span>
  };

  return icons[iconName] || <Code2 size={16} />;
};

// Helper function to get level class
const getLevelClass = (level) => {
  if (level >= 90) return 'expert';
  if (level >= 70) return 'advanced';
  if (level >= 40) return 'intermediate';
  return 'beginner';
};

// Helper function to get level text
const getLevelText = (level) => {
  if (level >= 90) return 'Expert';
  if (level >= 70) return 'Advanced';
  if (level >= 40) return 'Intermediate';
  return 'Beginner';
};

export default Skills;