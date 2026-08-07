import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';
import { ThemeProvider } from './context/ThemeContext';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';
import BlogPost from './pages/BlogPost';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <ThemeProvider>
      <ToastContainer />
      <BrowserRouter>
        <div className="relative min-h-screen bg-white text-slate-700 dark:bg-slate-950 dark:text-slate-300 transition-colors duration-500 md:cursor-none">
          <CustomCursor />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/insights/:slug" element={<BlogPost />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
