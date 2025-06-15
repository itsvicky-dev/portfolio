import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Box, Typography } from '@mui/material';

const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);

      // Get current section in view
      const sections = navItems.map(item => item.toLowerCase());
      const sectionElements = sections.map(section =>
        document.getElementById(section) || document.querySelector(`#${section}`)
      );

      const currentSection = sectionElements.find((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        const sectionId = currentSection.id || sections[sectionElements.indexOf(currentSection)];
        setActiveSection(sectionId);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: '20px',
        left: '0',
        right: '0',
        display: 'flex',
        justifyContent: { xs: 'flex-end', md: 'center' },
        alignItems: 'center',
        zIndex: 1201,
        paddingRight: { xs: '20px', md: '0' },
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: scrolled
              ? 'rgba(255, 255, 255, 0.1)'
              : 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '26px',
            px: { xs: 2, sm: 3, md: 4 },
            py: { xs: 0.5, md: 0.5 },
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
              borderRadius: 'inherit',
              zIndex: -1,
            },
          }}
        >
          {/* Desktop Navigation */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap: '0.25rem',
            }}
          >
            {navItems.map((item, index) => {
              const isActive = activeSection === item.toLowerCase();
              return (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.1 + 0.2,
                    duration: 0.6,
                    ease: "easeOut"
                  }}
                  style={{
                    textDecoration: 'none',
                    color: isActive ? '#fff' : 'rgba(255, 255, 255, 0.9)',
                    fontSize: '0.9rem',
                    fontWeight: isActive ? 600 : 500,
                    padding: '8px 16px',
                    borderRadius: '30px',
                    backgroundColor: isActive
                      ? 'rgba(255, 255, 255, 0.12)'
                      : 'transparent',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = '#fff';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                    }
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)';
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.border = '1px solid transparent';
                      e.currentTarget.style.backdropFilter = 'none';
                      e.currentTarget.style.boxShadow = 'none';
                    }
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {item}
                </motion.a>
              );
            })}
          </Box>

          {/* Mobile Menu Button */}

          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={() => setIsOpen(!isOpen)}
            sx={{
              display: { md: 'none' },
              color: '#fff',
              borderRadius: '10px',
              padding: '0',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                transform: 'scale(1.05)',
              },
            }}
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </motion.div>
          </IconButton>
        </Box>

        {/* Mobile Drawer */}
        <Drawer
          anchor="right"
          open={isOpen}
          onClose={() => setIsOpen(false)}
          PaperProps={{
            sx: {
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              width: '280px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '16px 0 0 16px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
            },
          }}
        >
          <Box sx={{ pt: 4, pb: 2 }}>
            <List sx={{ px: 2 }}>
              {navItems.map((item, index) => {
                const isActive = activeSection === item.toLowerCase();
                return (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.4,
                      ease: "easeOut"
                    }}
                  >
                    <ListItem disablePadding sx={{ mb: 1 }}>
                      <ListItemButton
                        component="a"
                        href={`#${item.toLowerCase()}`}
                        onClick={() => setIsOpen(false)}
                        sx={{
                          borderRadius: '12px',
                          py: 1.5,
                          px: 2,
                          border: isActive
                            ? '1px solid rgba(255, 255, 255, 0.4)'
                            : '1px solid transparent',
                          backgroundColor: isActive
                            ? 'rgba(255, 255, 255, 0.2)'
                            : 'transparent',
                          backdropFilter: isActive ? 'blur(10px)' : 'none',
                          boxShadow: isActive
                            ? '0 4px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
                            : 'none',
                          transform: isActive ? 'translateX(4px)' : 'translateX(0)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: isActive
                              ? 'rgba(255, 255, 255, 0.25)'
                              : 'rgba(255, 255, 255, 0.15)',
                            border: '1px solid rgba(255, 255, 255, 0.3)',
                            backdropFilter: 'blur(10px)',
                            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                            transform: 'translateX(8px)',
                          },
                        }}
                      >
                        <ListItemText
                          primary={item}
                          primaryTypographyProps={{
                            sx: {
                              color: '#fff',
                              fontWeight: isActive ? 600 : 500,
                              fontSize: '1.1rem',
                              textShadow: isActive
                                ? '0 0 10px rgba(255, 255, 255, 0.5)'
                                : '0 1px 2px rgba(0, 0, 0, 0.5)',
                              transition: 'all 0.3s ease',
                            },
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                  </motion.div>
                );
              })}
            </List>
          </Box>
        </Drawer>
      </motion.div>
    </Box>
  );
}

export default Header;
