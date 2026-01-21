import { useEffect } from 'react';
import { GraduationCap, BookOpen } from 'lucide-react';

const Education = ({ id, setActiveSection }) => {
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

  return (
    <section id={id} className="education section">
      <div className="container">
        <div className="section-header">
          <div className="section-icon">
            <GraduationCap size={24} />
          </div>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">My academic background and qualifications</p>
        </div>
        
        <div className="education-placeholder">
          <div className="placeholder-content">
            <BookOpen size={48} />
            <h3>Education Details Already in About Section</h3>
            <p>My education timeline is already displayed in the About section above.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;