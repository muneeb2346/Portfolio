import { Loader } from 'lucide-react';

const Loading = ({ fullPage = false, text = 'Loading...' }) => {
  if (fullPage) {
    return (
      <div className="loading-fullpage">
        <div className="loading-content">
          <Loader size={48} className="spinner" />
          <p>{text}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="loading-spinner">
      <Loader size={24} className="spinner" />
      <span>{text}</span>
    </div>
  );
};

export default Loading;