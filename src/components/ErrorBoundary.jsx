import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }
    
    // You can also send to error tracking service here
  }

  handleRefresh = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <div className="error-container">
            <div className="error-icon">
              <AlertTriangle size={64} />
            </div>
            
            <h1 className="error-title">Oops! Something went wrong</h1>
            
            <p className="error-message">
              We apologize for the inconvenience. Please try refreshing the page or come back later.
            </p>
            
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="error-details">
                <h3>Error Details (Development Only):</h3>
                <p className="error-text">{this.state.error.toString()}</p>
                <pre className="error-stack">
                  {this.state.errorInfo?.componentStack}
                </pre>
              </div>
            )}
            
            <div className="error-actions">
              <button onClick={this.handleRefresh} className="btn btn-primary">
                <RefreshCw size={18} />
                <span>Refresh Page</span>
              </button>
              
              <button onClick={this.handleGoHome} className="btn btn-secondary">
                <span>Go to Homepage</span>
              </button>
            </div>
            
            <p className="error-help">
              If the problem persists, please{' '}
              <a href="mailto:muneeb327.mm@gmail.com">contact me directly</a>.
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;