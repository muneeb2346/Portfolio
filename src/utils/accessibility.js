// Keyboard navigation handler
export const handleKeyboardNav = (e, callback) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    callback();
  }
};

// Focus trap for modal
export const createFocusTrap = (modalRef) => {
  const focusableElements = modalRef.current.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];
  
  const handleTabKey = (e) => {
    if (e.key === 'Tab') {
      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  };
  
  return handleTabKey;
};

// ARIA labels for interactive elements
export const getAriaLabels = {
  navItem: (label, isActive) => 
    `${label} ${isActive ? '(current section)' : ''}`,
    
  socialLink: (platform) => 
    `Visit my ${platform} profile (opens in new tab)`,
    
  projectCard: (title) => 
    `View details for ${title} project`,
    
  filterButton: (filterName, isActive) => 
    `${filterName} filter ${isActive ? ' (active)' : ''}`,
    
  formField: (fieldName, isRequired, error) => 
    `${fieldName} ${isRequired ? '(required)' : ''} ${error ? `Error: ${error}` : ''}`,
    
  submitButton: (isSubmitting) => 
    isSubmitting ? 'Sending message, please wait' : 'Send message',
    
  modalClose: 'Close modal (press Escape to close)',
  
  expandButton: (isExpanded, section) => 
    `${isExpanded ? 'Collapse' : 'Expand'} ${section} details`,
    
  progressBar: (skill, level) => 
    `${skill} proficiency level: ${level}%`
};

// Skip to content link
export const SkipToContent = () => (
  <a 
    href="#main-content" 
    className="skip-to-content"
  >
    Skip to main content
  </a>
);

// High contrast mode detection
export const prefersHighContrast = () => {
  return window.matchMedia('(prefers-contrast: high)').matches;
};

// Reduced motion detection
export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};