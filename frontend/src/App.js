import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LenisProvider } from './context/LenisContext';
import { Toaster } from './components/ui/toaster';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <LenisProvider>
        <BrowserRouter>
          <Preloader />
          <CustomCursor />
          <div className="App">
            <Header />
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Education />
              <Contact />
            </main>
            <Footer />
            <Toaster />
          </div>
        </BrowserRouter>
      </LenisProvider>
    </ThemeProvider>
  );
}

export default App;
