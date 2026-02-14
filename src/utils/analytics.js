// Analytics utilities

// Initialize Google Analytics
export const initGA = () => {
  if (process.env.NODE_ENV === 'development') {
    console.log('Analytics initialized (development mode)');
    return;
  }
  
  // Only run in production
  if (typeof window !== 'undefined' && window.gtag) {
    console.log('Google Analytics is ready');
  }
};

// Track page view
export const trackPageView = (path) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`Page view: ${path}`);
    return;
  }
  
  // Track in production
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', import.meta.env.VITE_GA_MEASUREMENT_ID, {
      page_path: path
    });
  }
};

// Track event
export const trackEvent = (action, category, label, value) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`Event: ${action} - ${category} - ${label} - ${value}`);
    return;
  }
  
  // Track in production
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
};

// Track project view
export const trackProjectView = (projectTitle) => {
  trackEvent('view_project', 'Projects', projectTitle);
};

// Track form submission
export const trackFormSubmission = (status) => {
  trackEvent('form_submission', 'Contact', status);
};

// Track download
export const trackDownload = (fileName) => {
  trackEvent('download', 'Resume', fileName);
};

// Track social click
export const trackSocialClick = (platform) => {
  trackEvent('social_click', 'Social', platform);
};