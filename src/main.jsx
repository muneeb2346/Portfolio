import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';
import './styles/variables.css';
import './styles/global.css';
import './styles/App.css';
import './styles/components.css';

// Add Inter font
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
document.head.appendChild(link);

// Add meta theme color
const metaThemeColor = document.createElement('meta');
metaThemeColor.name = 'theme-color';
metaThemeColor.content = '#2563eb';
document.head.appendChild(metaThemeColor);

// Performance mark
if (process.env.NODE_ENV === 'development') {
  performance.mark('app-start');
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </HelmetProvider>
  </React.StrictMode>
);

// Performance measurement
if (process.env.NODE_ENV === 'development') {
  performance.mark('app-mounted');
  performance.measure('app-load', 'app-start', 'app-mounted');
  console.log('App load time:', 
    performance.getEntriesByName('app-load')[0].duration.toFixed(2) + 'ms'
  );
}