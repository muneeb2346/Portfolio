// Formspree configuration
export const FORMSPREE_CONFIG = {
  // Your Formspree form ID (create one at https://formspree.io/)
  FORM_ID: 'xvgobgop', // This is a placeholder - you need to create your own

  // Formspree endpoint
  ENDPOINT: 'https://formspree.io/f',

  // Success message settings
  SUCCESS_MESSAGE: 'Thank you for your message! I will get back to you soon.',
  ERROR_MESSAGE: 'Something went wrong. Please try again or contact me directly.',

  // Redirect after successful submission (optional)
  REDIRECT_URL: null,

  // Additional form settings
  SETTINGS: {
    enableRecaptcha: false, // Set to true if you want to use reCAPTCHA
    hideFormOnSubmit: false,
    customMessage: true
  }
};

// Helper function to get form URL
export const getFormUrl = () => {
  return `${FORMSPREE_CONFIG.ENDPOINT}/${FORMSPREE_CONFIG.FORM_ID}`;
};

// Form validation patterns
export const VALIDATION_PATTERNS = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
  name: /^[a-zA-Z\s]{2,50}$/
};