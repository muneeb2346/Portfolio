// Keyboard navigation handler
export const handleKeyboardNav = (e, callback) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    callback();
  }
};

// Focus trap handler (returns a function)
export const createFocusTrap = (modalRef) => {
  return (e) => {
    if (!modalRef || !modalRef.current) return;
    
    const focusableElements = modalRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    if (focusableElements.length === 0) return;
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
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
};

// ARIA labels
export const getAriaLabels = {
  navItem: (label, isActive) => `${label} ${isActive ? '(current section)' : ''}`,
  socialLink: (platform) => `Visit my ${platform} profile (opens in new tab)`,
  projectCard: (title) => `View details for ${title} project`,
  filterButton: (filterName, isActive) => `${filterName} filter ${isActive ? ' (active)' : ''}`,
  formField: (fieldName, isRequired, error) => `${fieldName} ${isRequired ? '(required)' : ''} ${error ? `Error: ${error}` : ''}`,
  submitButton: (isSubmitting) => isSubmitting ? 'Sending message, please wait' : 'Send message',
  modalClose: 'Close modal (press Escape to close)',
  expandButton: (isExpanded, section) => `${isExpanded ? 'Collapse' : 'Expand'} ${section} details`,
  progressBar: (skill, level) => `${skill} proficiency level: ${level}%`
};

// Media query helpers
export const prefersHighContrast = () => {
  return window.matchMedia('(prefers-contrast: high)').matches;
};

export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Focus helpers
export const setFocusToElement = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.focus();
  }
};