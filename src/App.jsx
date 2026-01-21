import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Layout from './components/Layout';

import './styles/variables.css';
import './styles/components.css';
import './styles/global.css';
import './styles/App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <Layout>
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Hero id="home" setActiveSection={setActiveSection} />
        <About id="about" setActiveSection={setActiveSection} />
        <Experience id="experience" setActiveSection={setActiveSection} />
        <Projects id="projects" setActiveSection={setActiveSection} />
        <Skills id="skills" setActiveSection={setActiveSection} />
        <Education id="education" setActiveSection={setActiveSection} />
        <Contact id="contact" setActiveSection={setActiveSection} />
      </main>
      <Footer />
    </Layout>
  );
}

export default App;