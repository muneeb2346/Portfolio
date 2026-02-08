import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Layout from './components/Layout';

import './styles/variables.css';
import './styles/global.css';
import './styles/App.css';
import './styles/components.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

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
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <Layout>
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Hero id="home" setActiveSection={setActiveSection} />
        <About id="about" setActiveSection={setActiveSection} />
        <Experience id="experience" setActiveSection={setActiveSection} />
        <Projects id="projects" setActiveSection={setActiveSection} />
        <Skills id="skills" setActiveSection={setActiveSection} />
        <Contact id="contact" setActiveSection={setActiveSection} />
      </main>
      <Footer />
    </Layout>
  );
}

export default App;