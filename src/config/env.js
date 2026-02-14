// Environment configuration helper
export const env = {
  // Formspree
  formspreeId: import.meta.env.VITE_FORMSPREE_ID,
  
  // Site
  siteUrl: import.meta.env.VITE_SITE_URL || 'http://localhost:5173',
  
  // Contact
  contactEmail: import.meta.env.VITE_CONTACT_EMAIL || 'muneeb327.mm@gmail.com',
  contactPhone: import.meta.env.VITE_CONTACT_PHONE || '03277470990',
  
  // Analytics
  gaMeasurementId: import.meta.env.VITE_GA_MEASUREMENT_ID,
  enableAnalytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
  
  // Features
  enablePerformanceMonitoring: import.meta.env.VITE_ENABLE_PERFORMANCE_MONITORING === 'true',
  
  // Environment
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD,
  mode: import.meta.env.MODE
};

// Validate required env vars in production
if (env.isProduction) {
  const required = ['formspreeId'];
  
  required.forEach(key => {
    if (!env[key]) {
      console.warn(`Warning: Environment variable ${key} is not set in production`);
    }
  });
}

export default env;