import { Helmet } from 'react-helmet-async';
import { resumeData } from '../data/resumeData';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image = '/og-image.jpg',
  url = window.location.href,
  type = 'website'
}) => {
  const { personal } = resumeData;
  const siteTitle = `${personal.name} - Front-End Developer Portfolio`;
  const metaDescription = description || personal.summary;
  const metaKeywords = keywords || 'Front-End Developer, React Developer, Flutter Developer, Web Developer, Portfolio';

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title ? `${title} | ${personal.name}` : siteTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content={personal.name} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title || siteTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${window.location.origin}${image}`} />
      <meta property="og:site_name" content={personal.name} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || siteTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={`${window.location.origin}${image}`} />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="theme-color" content="#2563eb" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      
      {/* Robots Meta */}
      <meta name="robots" content="index, follow" />
      
      {/* Language */}
      <html lang="en" />
    </Helmet>
  );
};

export default SEO;