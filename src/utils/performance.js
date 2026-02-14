// Performance monitoring utilities

// Measure component render time
export const measurePerformance = (componentName) => {
  if (process.env.NODE_ENV === 'development') {
    console.time(componentName);
    return () => {
      console.timeEnd(componentName);
    };
  }
  return () => {}; // Return empty function in production
};

// Lazy load with performance tracking
export const lazyLoad = (importFunc, componentName) => {
  const startTime = performance.now();
  
  return importFunc().then(module => {
    const endTime = performance.now();
    if (process.env.NODE_ENV === 'development') {
      console.log(`${componentName} loaded in ${(endTime - startTime).toFixed(2)}ms`);
    }
    return module;
  });
};

// Get optimized image URL (placeholder for now)
export const getOptimizedImageUrl = (url, width, height) => {
  return url; // Return original URL for now
};

// Cache utilities
export const cacheControl = {
  setCache: (key, data, ttl = 3600) => {
    try {
      const item = {
        data,
        timestamp: Date.now(),
        ttl: ttl * 1000
      };
      localStorage.setItem(key, JSON.stringify(item));
    } catch (error) {
      console.warn('Failed to set cache:', error);
    }
  },
  
  getCache: (key) => {
    try {
      const item = localStorage.getItem(key);
      if (!item) return null;
      
      const { data, timestamp, ttl } = JSON.parse(item);
      if (Date.now() - timestamp > ttl) {
        localStorage.removeItem(key);
        return null;
      }
      
      return data;
    } catch (error) {
      console.warn('Failed to get cache:', error);
      return null;
    }
  },
  
  clearCache: (key) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.warn('Failed to clear cache:', error);
    }
  }
};