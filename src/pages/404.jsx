import { useEffect } from 'react';
import { Home, ArrowLeft, Frown } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  useEffect(() => {
    document.title = '404 - Page Not Found | Muhammad Muneeb';
  }, []);

  return (
    <div className="not-found">
      <div className="not-found-container">
        <div className="not-found-icon">
          <Frown size={80} />
        </div>
        
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Page Not Found</h2>
        
        <p className="not-found-message">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="not-found-actions">
          <Link to="/" className="btn btn-primary">
            <Home size={18} />
            <span>Go to Homepage</span>
          </Link>
          
          <button onClick={() => window.history.back()} className="btn btn-secondary">
            <ArrowLeft size={18} />
            <span>Go Back</span>
          </button>
        </div>
        
        <p className="not-found-help">
          If you believe this is an error, please{' '}
          <a href="mailto:muneeb327.mm@gmail.com">contact me</a>.
        </p>
      </div>
    </div>
  );
};

export default NotFound;