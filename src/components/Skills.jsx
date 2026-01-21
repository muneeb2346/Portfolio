import { useEffect } from 'react';
import { Cpu, Code2, Tool } from 'lucide-react';

const Skills = ({ id, setActiveSection }) => {
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
        
        <div className="skills-placeholder">
          <div className="placeholder-content">
            <Code2 size={48} />
            <h3>Skills Section Coming Tomorrow</h3>
            <p>This section will display my technical skills with progress bars and categories.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;