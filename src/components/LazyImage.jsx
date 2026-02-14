import { useState, useEffect } from 'react';
import { Loader } from 'lucide-react';

const LazyImage = ({ src, alt, className, placeholderColor = '#f1f5f9' }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setImageSrc(src);
      setIsLoading(false);
    };
    
    img.onerror = () => {
      setError(true);
      setIsLoading(false);
    };
  }, [src]);

  if (error) {
    return (
      <div 
        className="lazy-image-error"
        style={{ backgroundColor: placeholderColor }}
      >
        <span>Failed to load image</span>
      </div>
    );
  }

  if (isLoading || !imageSrc) {
    return (
      <div 
        className="lazy-image-placeholder"
        style={{ backgroundColor: placeholderColor }}
      >
        <Loader size={24} className="spinner" />
      </div>
    );
  }

  return (
    <img 
      src={imageSrc} 
      alt={alt} 
      className={className}
      loading="lazy"
    />
  );
};

export default LazyImage;