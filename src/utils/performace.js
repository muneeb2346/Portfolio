// Performance monitoring
export const measurePerformance = (componentName) => {
  if (process.env.NODE_ENV === 'development') {
    console.time(componentName);
    return () => console.timeEnd(componentName);
  }
  return () => {};
};

// Lazy load with performance tracking
export const lazyLoad = (importFunc, componentName) => {
  return React.lazy(() => {
    const startTime = performance.now();
    
    return importFunc().then(module => {
      const endTime = performance.now();
      console.log(`${componentName} loaded in ${(endTime - startTime).toFixed(2)}ms`);
      return module;
    });
  });
};

// Image optimization
export const getOptimizedImageUrl = (url, width, height) => {
  // For local images, you might want to use a CDN or image optimization service
  // This is a placeholder for future implementation
  return url;
};

// Bundle size analyzer (run in development)
export const analyzeBundle = () => {
  if (process.env.NODE_ENV === 'development') {
    // You can add bundle analyzer integration here
    console.log('Bundle size analysis available with: npm run analyze');
  }
};

// Cache control
export const cacheControl = {
  setCache: (key, data, ttl = 3600) => {
    const item = {
      data,
      timestamp: Date.now(),
      ttl: ttl * 1000
    };
    localStorage.setItem(key, JSON.stringify(item));
  },
  
  getCache: (key) => {
    const item = localStorage.getItem(key);
    if (!item) return null;
    
    const { data, timestamp, ttl } = JSON.parse(item);
    if (Date.now() - timestamp > ttl) {
      localStorage.removeItem(key);
      return null;
    }
    
    return data;
  },
  
  clearCache: (key) => {
    localStorage.removeItem(key);
  }
};