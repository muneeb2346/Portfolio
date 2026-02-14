import { useState, useEffect, lazy, Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { initGA, trackPageView } from './utils/analytics';
import { measurePerformance } from './utils/performance';
import SEO from './components/SEO';
import Loading from './components/Loading';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Footer from './components/Footer';
import Layout from './components/Layout';
import SkipToContent  from './components/SkipToContent';
import env from './config/env';

import './styles/variables.css';
import './styles/global.css';
import './styles/App.css';
import './styles/components.css';

if (env.isProduction && env.enableAnalytics) {
  initGA();
}

const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const endMeasure = measurePerformance('App render');

  // Smooth scroll to section
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const target = e.target;
      if (target.hash && target.pathname === window.location.pathname) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    endMeasure();

    return () => document.removeEventListener('click', handleSmoothScroll);
  }, [endMeasure]);

  return (
     <HelmetProvider>
      <ErrorBoundary>
      <Layout>
        <SEO />
        <SkipToContent />
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main id="main-content">
          <Suspense fallback={<Loading fullPage text="Loading hero section..." />}>
            <Hero id="home" setActiveSection={setActiveSection} />
          </Suspense>
          
          <Suspense fallback={<Loading text="Loading about section..." />}>
            <About id="about" setActiveSection={setActiveSection} />
          </Suspense>
          
          <Suspense fallback={<Loading text="Loading experience..." />}>
            <Experience id="experience" setActiveSection={setActiveSection} />
          </Suspense>
          
          <Suspense fallback={<Loading text="Loading projects..." />}>
            <Projects id="projects" setActiveSection={setActiveSection} />
          </Suspense>
          
          <Suspense fallback={<Loading text="Loading skills..." />}>
            <Skills id="skills" setActiveSection={setActiveSection} />
          </Suspense>
          
          <Suspense fallback={<Loading text="Loading contact form..." />}>
            <Contact id="contact" setActiveSection={setActiveSection} />
          </Suspense>
        </main>
      <Footer />
    </Layout>
     </ErrorBoundary>
     </HelmetProvider>
     
    
  );
}

export default App;