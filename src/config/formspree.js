import env from './env';

// Formspree configuration
export const FORMSPREE_CONFIG = {
  FORM_ID: env.formspreeId,
  ENDPOINT: 'https://formspree.io/f',
  
  SUCCESS_MESSAGE: 'Thank you for your message! I will get back to you soon.',
  ERROR_MESSAGE: 'Something went wrong. Please try again or contact me directly.',
  
  SETTINGS: {
    enableRecaptcha: false,
    hideFormOnSubmit: false,
    customMessage: true
  }
};

// Validate form ID
export const validateFormConfig = () => {
  if (!FORMSPREE_CONFIG.FORM_ID || FORMSPREE_CONFIG.FORM_ID === 'your_formspree_id_here') {
    if (env.isProduction) {
      console.error('Formspree ID is not configured! Contact form will not work.');
      return false;
    }
  }
  return true;
};

export const getFormUrl = () => {
  return `${FORMSPREE_CONFIG.ENDPOINT}/${FORMSPREE_CONFIG.FORM_ID}`;
};