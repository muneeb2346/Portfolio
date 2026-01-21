import { Github, Linkedin, Mail, Code2, Heart } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const Footer = () => {
  const { personal } = resumeData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Logo and Name */}
          <div className="footer-brand">
            <Code2 size={24} className="footer-logo" />
            <div className="footer-name">
              <h3 className="footer-title">{personal.name}</h3>
              <p className="footer-subtitle">Front-End Developer</p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="footer-contact">
            <h4 className="footer-heading">Get in Touch</h4>
            <div className="contact-links">
              <a href={`mailto:${personal.email}`} className="contact-link">
                <Mail size={16} />
                <span>{personal.email}</span>
              </a>
              <a href={`tel:${personal.phone}`} className="contact-link">
                <span>{personal.phone}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-nav">
              <li><a href="#home" className="footer-nav-link">Home</a></li>
              <li><a href="#about" className="footer-nav-link">About</a></li>
              <li><a href="#projects" className="footer-nav-link">Projects</a></li>
              <li><a href="#contact" className="footer-nav-link">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="footer-social">
            <h4 className="footer-heading">Connect</h4>
            <div className="social-icons">
              <a 
                href={`https://${personal.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href={`https://${personal.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href={`mailto:${personal.email}`}
                className="social-icon"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} {personal.name}. Made with <Heart size={14} className="heart-icon" /> using React.js
          </p>
          <p className="copyright-note">
            All projects and content are my own work.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;