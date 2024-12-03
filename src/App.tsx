import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Highlights from './components/Highlights';
import Contact from './components/Contact';
import Projects from './components/Projects';
import CustomCursor from './components/CustomCursor';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
      <ToastContainer />
      <div className="bg-black min-h-screen cursor-none">
        <div className="glowing-circle circle-2" />
        <CustomCursor />
        <Header />
        <Hero />
        <About />
        <Skills />
        <Highlights />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;