import { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const Contact = ({ id, setActiveSection }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'
  const [touched, setTouched] = useState({});

  const { personal } = resumeData;

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

    const contactSection = document.getElementById(id);
    if (contactSection) observer.observe(contactSection);

    return () => {
      if (contactSection) observer.unobserve(contactSection);
    };
  }, [id, setActiveSection]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Handle blur (touch)
  const handleBlur = (field) => {
    setTouched(prev => ({
      ...prev,
      [field]: true
    }));
  };

  // Validate form
  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }
    
    return errors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      // Mark all fields as touched to show errors
      setTouched({
        name: true,
        email: true,
        subject: true,
        message: true
      });
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Using Formspree for form submission (free service)
      const response = await fetch('https://formspree.io/f/xvgobgop', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _subject: `Portfolio Contact: ${formData.subject}`,
          _replyto: formData.email
        }),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setTouched({});
        
        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      
      // Auto-hide error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Quick subject buttons
  const quickSubjects = [
    'Project Inquiry',
    'Job Opportunity',
    'Freelance Work',
    'Technical Consultation',
    'General Question'
  ];

  const handleQuickSubject = (subject) => {
    setFormData(prev => ({
      ...prev,
      subject
    }));
    
    // Focus on message field
    setTimeout(() => {
      document.getElementById('message').focus();
    }, 100);
  };

  return (
    <section id={id} className="contact section">
      <div className="container">
        <div className="section-header">
          <div className="section-icon">
            <Mail size={24} />
          </div>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Have a project in mind? Let's work together!</p>
        </div>

        <div className="contact-container">
          {/* Contact Information */}
          <div className="contact-info">
            <div className="contact-card">
              <h3 className="contact-card-title">Contact Information</h3>
              <p className="contact-card-description">
                Feel free to reach out for collaborations or just a friendly hello
              </p>
              
              <div className="contact-details">
                <div className="contact-detail">
                  <div className="detail-icon">
                    <Mail size={20} />
                  </div>
                  <div className="detail-content">
                    <h4>Email</h4>
                    <a href={`mailto:${personal.email}`} className="detail-link">
                      {personal.email}
                    </a>
                  </div>
                </div>
                
                <div className="contact-detail">
                  <div className="detail-icon">
                    <Phone size={20} />
                  </div>
                  <div className="detail-content">
                    <h4>Phone</h4>
                    <a href={`tel:${personal.phone}`} className="detail-link">
                      {personal.phone}
                    </a>
                  </div>
                </div>
                
                <div className="contact-detail">
                  <div className="detail-icon">
                    <MapPin size={20} />
                  </div>
                  <div className="detail-content">
                    <h4>Location</h4>
                    <p className="detail-text">{personal.location}</p>
                  </div>
                </div>
              </div>
              
              <div className="contact-note">
                <p>
                  <strong>Response Time:</strong> I typically respond within 24 hours
                </p>
                <p>
                  <strong>Availability:</strong> Open to freelance projects and full-time opportunities
                </p>
              </div>
            </div>
            
            {/* Quick Stats */}
            <div className="quick-stats">
              <div className="stat-item">
                <div className="stat-number">24h</div>
                <div className="stat-label">Avg. Response Time</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Project Completion</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">3+</div>
                <div className="stat-label">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="form-status success">
                  <CheckCircle size={20} />
                  <div>
                    <h4>Message Sent Successfully!</h4>
                    <p>Thank you for your message. I'll get back to you soon.</p>
                  </div>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="form-status error">
                  <AlertCircle size={20} />
                  <div>
                    <h4>Something went wrong</h4>
                    <p>Please try again or contact me directly via email.</p>
                  </div>
                </div>
              )}

              {/* Quick Subject Buttons */}
              <div className="quick-subjects">
                <p className="quick-subjects-label">Quick subjects:</p>
                <div className="subject-buttons">
                  {quickSubjects.map((subject, index) => (
                    <button
                      key={index}
                      type="button"
                      className={`subject-btn ${formData.subject === subject ? 'active' : ''}`}
                      onClick={() => handleQuickSubject(subject)}
                    >
                      {subject}
                    </button>
                  ))}
                </div>
              </div>

              {/* Form Fields */}
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onBlur={() => handleBlur('name')}
                  className={`form-input ${formErrors.name && touched.name ? 'error' : ''}`}
                  placeholder="Enter your full name"
                  disabled={isSubmitting}
                />
                {formErrors.name && touched.name && (
                  <div className="form-error">{formErrors.name}</div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onBlur={() => handleBlur('email')}
                  className={`form-input ${formErrors.email && touched.email ? 'error' : ''}`}
                  placeholder="Enter your email address"
                  disabled={isSubmitting}
                />
                {formErrors.email && touched.email && (
                  <div className="form-error">{formErrors.email}</div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  onBlur={() => handleBlur('subject')}
                  className={`form-input ${formErrors.subject && touched.subject ? 'error' : ''}`}
                  placeholder="What is this regarding?"
                  disabled={isSubmitting}
                />
                {formErrors.subject && touched.subject && (
                  <div className="form-error">{formErrors.subject}</div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onBlur={() => handleBlur('message')}
                  className={`form-textarea ${formErrors.message && touched.message ? 'error' : ''}`}
                  placeholder="Tell me about your project or inquiry..."
                  rows="6"
                  disabled={isSubmitting}
                ></textarea>
                <div className="textarea-footer">
                  {formErrors.message && touched.message ? (
                    <div className="form-error">{formErrors.message}</div>
                  ) : (
                    <div className="char-count">
                      {formData.message.length} characters
                    </div>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="form-actions">
                <button
                  type="submit"
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader size={18} className="spinner" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
                
                <p className="form-note">
                  * Required fields. Your information is secure and will only be used to respond to your inquiry.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;