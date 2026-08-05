import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const navItems = ['Home', 'About', 'Skills', 'Highlights', 'Process', 'Projects', 'Insights', 'Contact'];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navItems.map((item) => item.toLowerCase());
      const sectionElements = sections.map((section) => document.getElementById(section));

      const currentSection = sectionElements.find((section) => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="fixed inset-x-0 top-4 z-[1202] px-4"
      >
        <div
          className={`mx-auto flex max-w-[800px] items-center justify-center gap-4 rounded-full border px-3 py-2.5 transition-all duration-500 ${
            scrolled
              ? 'border-black/10 bg-white/90 shadow-[0_10px_40px_-14px_rgba(0,0,0,0.25)] backdrop-blur-md dark:border-white/10 dark:bg-black/85'
              : 'border-black/10 bg-white/70 backdrop-blur-sm dark:border-white/10 dark:bg-black/50'
          }`}
        >
          {/* <a
            href="#home"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black text-sm font-black text-white dark:bg-white dark:text-black"
          >
            V
          </a> */}

          <ul className="hidden items-center gap-0.5 lg:flex">
            {navItems.map((item, index) => {
              const id = item.toLowerCase();
              const isActive = activeSection === id;
              return (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04 + 0.15, duration: 0.5 }}
                >
                  <a
                    href={`#${id}`}
                    className={`relative block rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.15em] transition-colors duration-300 ${
                      isActive
                        ? 'text-white dark:text-black'
                        : 'text-wine-900/50 hover:text-black dark:text-white/50 dark:hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-black dark:bg-white"
                        transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      />
                    )}
                    {item}
                  </a>
                </motion.li>
              );
            })}
          </ul>

          {/* <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-black/15 text-black transition-all duration-300 hover:border-black dark:border-white/15 dark:text-white dark:hover:border-white"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex"
                >
                  {theme === 'dark' ? <Moon size={15} /> : <Sun size={15} />}
                </motion.span>
              </AnimatePresence>
            </button>

            <button
              onClick={() => setIsOpen((v) => !v)}
              aria-label="Toggle menu"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-black/15 text-black transition-all duration-300 hover:border-black dark:border-white/15 dark:text-white lg:hidden"
            >
              <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className="flex">
                {isOpen ? <X size={16} /> : <Menu size={16} />}
              </motion.span>
            </button>
          </div> */}
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[1200] flex flex-col bg-white dark:bg-black lg:hidden"
            initial={{ clipPath: 'circle(0% at calc(100% - 2.5rem) 2.5rem)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 2.5rem) 2.5rem)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 2.5rem) 2.5rem)' }}
            transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
          >
            <div className="flex flex-1 flex-col justify-center px-8">
              <ul className="flex flex-col gap-2">
                {navItems.map((item, index) => {
                  const id = item.toLowerCase();
                  const isActive = activeSection === id;
                  return (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 + 0.15, duration: 0.4 }}
                    >
                      <a
                        href={`#${id}`}
                        onClick={() => setIsOpen(false)}
                        className={`block py-2 text-4xl font-black tracking-tight transition-colors duration-300 ${
                          isActive
                            ? 'text-black dark:text-white'
                            : 'text-black/25 hover:text-black dark:text-white/25 dark:hover:text-white'
                        }`}
                      >
                        {item}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
