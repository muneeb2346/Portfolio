import { getFormUrl } from '../config/formspree';

/**
 * Submit form data to Formspree
 * @param {Object} formData - Form data object
 * @param {string} formData.name - User's name
 * @param {string} formData.email - User's email
 * @param {string} formData.subject - Message subject
 * @param {string} formData.message - Message content
 * @returns {Promise<Object>} Response object with success status and message
 */
export const submitForm = async (formData) => {
  try {
    const response = await fetch(getFormUrl(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        ...formData,
        _subject: `Portfolio Contact: ${formData.subject}`,
        _replyto: formData.email,
        _format: 'plain'
      })
    });

    if (response.ok) {
      const data = await response.json();
      return {
        success: true,
        message: 'Message sent successfully!',
        data
      };
    } else {
      throw new Error('Form submission failed');
    }
  } catch (error) {
    console.error('Form submission error:', error);
    return {
      success: false,
      message: 'Failed to send message. Please try again.',
      error: error.message
    };
  }
};

/**
 * Validate form data
 * @param {Object} formData - Form data to validate
 * @returns {Object} Object with errors (if any) and isValid flag
 */
export const validateFormData = (formData) => {
  const errors = {};
  let isValid = true;

  // Name validation
  if (!formData.name?.trim()) {
    errors.name = 'Name is required';
    isValid = false;
  } else if (formData.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
    isValid = false;
  } else if (formData.name.trim().length > 50) {
    errors.name = 'Name must be less than 50 characters';
    isValid = false;
  }

  // Email validation
  if (!formData.email?.trim()) {
    errors.email = 'Email is required';
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = 'Please enter a valid email address';
    isValid = false;
  }

  // Subject validation
  if (!formData.subject?.trim()) {
    errors.subject = 'Subject is required';
    isValid = false;
  } else if (formData.subject.trim().length < 3) {
    errors.subject = 'Subject must be at least 3 characters';
    isValid = false;
  } else if (formData.subject.trim().length > 100) {
    errors.subject = 'Subject must be less than 100 characters';
    isValid = false;
  }

  // Message validation
  if (!formData.message?.trim()) {
    errors.message = 'Message is required';
    isValid = false;
  } else if (formData.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
    isValid = false;
  } else if (formData.message.trim().length > 1000) {
    errors.message = 'Message must be less than 1000 characters';
    isValid = false;
  }

  return { errors, isValid };
};

/**
 * Format form data for submission
 * @param {Object} formData - Raw form data
 * @returns {Object} Formatted form data
 */
export const formatFormData = (formData) => {
  return {
    name: formData.name?.trim() || '',
    email: formData.email?.trim() || '',
    subject: formData.subject?.trim() || '',
    message: formData.message?.trim() || '',
    timestamp: new Date().toISOString(),
    source: 'portfolio-website'
  };
};

/**
 * Reset form data
 * @returns {Object} Empty form data object
 */
export const getInitialFormData = () => {
  return {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
};