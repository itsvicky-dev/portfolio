import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Highlights from './components/Highlights';
import Process from './components/Process';
import Insights from './components/Insights';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import { ThemeProvider } from './context/ThemeContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ThemeProvider>
      <ToastContainer />
      {/* {isLoading && <LoadingScreen onFinish={() => setIsLoading(false)} />} */}
      <div className="relative min-h-screen bg-white text-slate-700 dark:bg-slate-950 dark:text-slate-300 transition-colors duration-500 md:cursor-none">
        <CustomCursor />
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Highlights />
          <Process />
          <Projects />
          <Insights />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
