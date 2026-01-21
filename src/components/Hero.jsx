import { useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const Hero = ({ id, setActiveSection }) => {
  const { personal } = resumeData;

  // Intersection Observer for active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const heroSection = document.getElementById(id);
    if (heroSection) observer.observe(heroSection);

    return () => {
      if (heroSection) observer.unobserve(heroSection);
    };
  }, [id, setActiveSection]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id={id} className="hero section">
      <div className="container">
        <div className="hero-content">
          {/* Greeting */}
          <div className="greeting">
            <span className="greeting-text">Hi, I'm</span>
          </div>

          {/* Name */}
          <h1 className="hero-title">
            <span className="name-gradient">{personal.name}</span>
          </h1>

          {/* Title */}
          <h2 className="hero-subtitle">
            {personal.title}
          </h2>

          {/* Summary */}
          <p className="hero-description">
            {personal.summary}
          </p>

          {/* CTA Buttons */}
          <div className="hero-buttons">
            <a 
              href="#contact" 
              className="btn btn-primary"
              onClick={() => setActiveSection('contact')}
            >
              <Mail size={18} />
              <span>Get In Touch</span>
            </a>
            <a 
              href="#projects" 
              className="btn btn-secondary"
              onClick={() => setActiveSection('projects')}
            >
              <span>View My Work</span>
              <ArrowDown size={18} />
            </a>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <div className="contact-item">
              <Mail size={16} />
              <span>{personal.email}</span>
            </div>
            <div className="contact-item">
              <Phone size={16} />
              <span>{personal.phone}</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="social-links">
            <a 
              href={`https://${personal.github}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href={`https://${personal.linkedin}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href={`mailto:${personal.email}`}
              className="social-link"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator" onClick={scrollToAbout}>
          <ArrowDown size={24} className="scroll-arrow" />
          <span className="scroll-text">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;