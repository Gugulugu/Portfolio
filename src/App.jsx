import React from 'react';

// Import components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';

// Import styles
import './index.css'; // Global styles or reset

function App() {
  return (
    <div className="app">
      {/* This optional background div can hold animated effects if you like */}
      <div className="background-animation"></div>

      {/* Navigation bar at the top */}
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <Experience />
        <Education />
        <Skills />


      </main>
    </div>
  );
}

export default App;
