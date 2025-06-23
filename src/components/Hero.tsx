import { motion } from 'framer-motion';
import { Coffee, Github, Instagram, Linkedin, Mail, Twitter } from 'lucide-react';
import { Box, Container, Typography, Grid, IconButton, Button } from '@mui/material';
import BackgroundAnimations from './BackgroundAnimations';
import { useEffect, useState } from 'react';
import LoadingScreen from './LoadingScreen';
import GlowingOrbs from './GlowingOrbs';
import { Code, LayoutDashboard, Rocket, Sparkles } from "lucide-react";

const Hero: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Box
        id="home"
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          backgroundColor: '#000000 !important',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
          }
        }}
      >
        {/* Enhanced glowing orbs with proper dark theme colors */}
        <Box
          sx={{
            position: 'absolute',
            top: '10%',
            left: '10%',
            width: '350px',
            height: '350px',
            background: 'radial-gradient(circle, rgba(16, 217, 196, 0.12) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(50px)',
            animation: 'float 6s ease-in-out infinite',
            zIndex: 1,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '60%',
            right: '15%',
            width: '250px',
            height: '250px',
            background: 'radial-gradient(circle, rgba(16, 217, 196, 0.08) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(35px)',
            animation: 'float 8s ease-in-out infinite reverse',
            zIndex: 1,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '20%',
            left: '30%',
            width: '180px',
            height: '180px',
            background: 'radial-gradient(circle, rgba(16, 217, 196, 0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(30px)',
            animation: 'float 7s ease-in-out infinite',
            zIndex: 1,
          }}
        />
        <Container
          maxWidth={'xl'}
          sx={{
            zIndex: 10,
            maxWidth: '1250px !important',
            textAlign: 'left',
            position: 'relative',
          }}
        >
          <Grid container spacing={2} className='hero-grid'>
            <Grid item xs={12} md={10}>
              <Box >
                {/* Greeting */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      color: '#10d9c4',
                      mb: 2,
                      fontWeight: 500,
                      textShadow: '0 0 20px rgba(16, 217, 196, 0.3)',
                      fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' },
                    }}
                  >
                    👋 Hello, I'm
                  </Typography>
                </motion.div>

                {/* Name */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Typography
                    variant="h2"
                    className='hero-name'
                    sx={{
                      fontWeight: 800,
                      color: '#ffffff', // Fallback color for dark background
                      background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #ffffff 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      mb: 3,
                      fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '6rem' },
                      textShadow: '0 4px 20px rgba(255, 255, 255, 0.15)',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    Vigneswari
                  </Typography>
                </motion.div>

                {/* Subtitle */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Typography
                    variant="h4"
                    className='hero-desc'
                    sx={{
                      color: '#a8b2b9',
                      mb: 3,
                      fontWeight: 400,
                      fontSize: { xs: '1rem', sm: '1.1rem', md: '1.3rem' },
                    }}
                  >
                    Full Stack Developer & UI/UX Enthusiast
                  </Typography>
                  <Typography
                    variant="h1"
                    className='hero-title'
                    sx={{
                      color: '#ffffff',
                      fontSize: { xs: '1.5rem', sm: '2rem', md: '2.4rem', lg: '2.7rem' },
                      fontWeight: '600',
                      mb: 5,
                      lineHeight: 1.2,
                      '& span': {
                        background: 'linear-gradient(135deg, #10d9c4 0%, #34d399 100%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        textShadow: '0 0 30px rgba(16, 217, 196, 0.3)',
                      }
                    }}
                  >
                    Crafting Digital
                    <span>{" "}Experiences{" "}</span>
                    Through Code
                  </Typography>

                  {/* New tagline */}
                  <Box
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      backgroundColor: 'rgba(16, 217, 196, 0.1)',
                      border: '1px solid rgba(16, 217, 196, 0.2)',
                      borderRadius: '50px',
                      padding: '8px 20px',
                      mb: 4,
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    <Typography
                      sx={{
                        color: '#10d9c4',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                      }}
                    >
                      ✨ Available for new opportunities
                    </Typography>
                  </Box>

                </motion.div>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <Grid container justifyContent="left" spacing={1}>
                    {[
                      { Icon: Github, href: 'https://github.com/vigneswariCoder', label: 'GitHub' },
                      { Icon: Linkedin, href: 'https://linkedin.com/in/vigneswaris', label: 'LinkedIn' },
                      { Icon: Instagram, href: 'https://instagram.com/im_vi.ki', label: 'Instagram' },
                      { Icon: Mail, href: 'mailto:contact@vigneswaris2002@gmail.com', label: 'Email' },
                    ].map(({ Icon, href, label }, index) => (
                      <Grid item key={index}>
                        <IconButton
                          component="a"
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            color: '#a8b2b9',
                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '12px',
                            width: '48px',
                            height: '48px',
                            margin: '0 8px',
                            transition: 'all 0.3s ease',
                            backdropFilter: 'blur(10px)',
                            '&:hover': {
                              color: '#10d9c4',
                              backgroundColor: 'rgba(16, 217, 196, 0.1)',
                              borderColor: 'rgba(16, 217, 196, 0.3)',
                              transform: 'translateY(-2px)',
                              boxShadow: '0 8px 25px rgba(16, 217, 196, 0.2)',
                            },
                          }}
                        >
                          <Icon size={20} />
                        </IconButton>
                      </Grid>
                    ))}
                  </Grid>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 }}
                >
                  <Box sx={{ 
                    display: 'flex', 
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: { xs: 1.5, sm: 2 }, 
                    mt: 4,
                    alignItems: { xs: 'stretch', sm: 'center' }
                  }}>
                    <Button
                      variant="contained"
                      size="large"
                      sx={{
                        background: 'linear-gradient(135deg, #10d9c4 0%, #34d399 100%)',
                        color: '#000',
                        borderRadius: '50px',
                        px: { xs: 3, sm: 4 },
                        py: { xs: 1.2, sm: 1.5 },
                        fontWeight: 600,
                        textTransform: 'none',
                        fontSize: { xs: '0.9rem', sm: '1rem' },
                        boxShadow: '0 8px 25px rgba(16, 217, 196, 0.3)',
                        border: 'none',
                        minHeight: { xs: '44px', sm: '48px' },
                        '&:hover': {
                          background: 'linear-gradient(135deg, #0ec5b8 0%, #2dd284 100%)',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 12px 35px rgba(16, 217, 196, 0.4)',
                        },
                      }}
                      component="a"
                      target='_blank'
                      href="resume.pdf"
                    >
                      Download Resume
                    </Button>

                    <Button
                      variant="outlined"
                      size="large"
                      sx={{
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                        color: '#ffffff',
                        borderRadius: '50px',
                        px: { xs: 3, sm: 4 },
                        py: { xs: 1.2, sm: 1.5 },
                        fontWeight: 500,
                        textTransform: 'none',
                        fontSize: { xs: '0.9rem', sm: '1rem' },
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        minHeight: { xs: '44px', sm: '48px' },
                        '&:hover': {
                          borderColor: '#10d9c4',
                          color: '#10d9c4',
                          backgroundColor: 'rgba(16, 217, 196, 0.1)',
                          transform: 'translateY(-2px)',
                        },
                      }}
                      onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      View My Work
                    </Button>
                  </Box>
                </motion.div>
              </Box>
            </Grid>
            <Grid item xs={12} md={2}>
              {/* <Box
                    sx={{
                      position: "absolute",
                      top: "5rem",
                      right: "5rem",
                      width: "16rem",
                      height: "16rem",
                      backgroundColor: "rgba(16, 185, 129, 0.1)", // emerald-400/10
                      borderRadius: "50%",
                      animation: "pulse 2s infinite",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: "10rem",
                      right: "10rem",
                      width: "12rem",
                      height: "12rem",
                      backgroundColor: "rgba(16, 185, 129, 0.2)", // emerald-400/20
                      borderRadius: "50%",
                      animation: "pulse 2s infinite 300ms",
                    }}
                  /> */}

              {/* Enhanced Floating Icons */}
              <Box
                position="relative"
                zIndex={10}
                sx={{
                  '& > *': {
                    filter: 'drop-shadow(0 4px 12px rgba(16, 217, 196, 0.3))',
                  }
                }}
              >
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    position: "absolute",
                    top: "0",
                    right: "-10px",
                  }}
                >
                  <Code
                    style={{
                      color: "#10d9c4",
                      width: "2.5rem",
                      height: "2.5rem",
                    }}
                  />
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    x: [0, 5, 0]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  style={{
                    position: "absolute",
                    top: "7rem",
                    right: "17rem",
                  }}
                >
                  <LayoutDashboard
                    style={{
                      color: "#10d9c4",
                      width: "2.5rem",
                      height: "2.5rem",
                    }}
                  />
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, -12, 0],
                    rotate: [0, -8, 0]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  style={{
                    position: "absolute",
                    top: "17rem",
                    right: "-2rem",
                  }}
                >
                  <Rocket
                    style={{
                      color: "#10d9c4",
                      width: "2.5rem",
                      height: "2.5rem",
                    }}
                  />
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, -8, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5
                  }}
                  style={{
                    position: "absolute",
                    top: "-4rem",
                    right: "12rem",
                  }}
                >
                  <Sparkles
                    style={{
                      color: "#10d9c4",
                      width: "2.5rem",
                      height: "2.5rem",
                    }}
                  />
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, -14, 0],
                    x: [0, -3, 0]
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                  style={{
                    position: "absolute",
                    top: "22rem",
                    right: "13rem",
                  }}
                >
                  <Coffee
                    style={{
                      color: "#10d9c4",
                      width: "2.5rem",
                      height: "2.5rem",
                    }}
                  />
                </motion.div>
              </Box>

              {/* Mac-style Code Snippet Decoration */}
              {/* <Box
                className='code-snippet'
                sx={{
                  position: "absolute",
                  top: "55%",
                  right: "8%",
                  transform: "translateY(-50%)",
                  backgroundColor: "rgb(40, 44, 52)",
                  borderRadius: "8px",
                  backdropFilter: "blur(8px)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  overflow: "hidden",
                  minWidth: "300px"
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "rgb(55, 59, 69)",
                    padding: "12px 16px",
                    display: "flex",
                    alignItems: "center",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
                  }}
                >
                  <Box sx={{ display: "flex", gap: "8px", alignItems: "center" }}>
                    <Box
                      sx={{
                        width: "12px",
                        height: "12px",
                        borderRadius: "50%",
                        backgroundColor: "#ff5f57",
                        cursor: "pointer",
                        "&:hover": { backgroundColor: "#ff4136" }
                      }}
                    />
                    <Box
                      sx={{
                        width: "12px",
                        height: "12px",
                        borderRadius: "50%",
                        backgroundColor: "#ffbd2e",
                        cursor: "pointer",
                        "&:hover": { backgroundColor: "#ff851b" }
                      }}
                    />
                    <Box
                      sx={{
                        width: "12px",
                        height: "12px",
                        borderRadius: "50%",
                        backgroundColor: "#28ca42",
                        cursor: "pointer",
                        "&:hover": { backgroundColor: "#2ecc40" }
                      }}
                    />
                  </Box>
                  
                  <Typography
                    sx={{
                      color: "rgba(255, 255, 255, 0.7)",
                      fontSize: "13px",
                      fontFamily: "SF Pro Display, -apple-system, sans-serif",
                      fontWeight: 500,
                      marginLeft: "auto",
                      marginRight: "auto",
                      position: "absolute",
                      left: "50%",
                      transform: "translateX(-50%)"
                    }}
                  >
                    developer.js
                  </Typography>
                </Box>

                <Box sx={{ padding: "16px 20px" }}>
                  <pre style={{ 
                    fontSize: "14px", 
                    color: "#abb2bf",
                    fontFamily: "Fira Code, Monaco, Consolas, monospace",
                    margin: 0,
                    lineHeight: 1.5
                  }}>
                    <code>{`const developer = {
  name: 'Vigneswari',
  skills: ['React', 'Java', 'UI/UX'],
  passion: 'Building web magic',
  coffee: Infinity
};`}</code>
                  </pre>
                </Box>
              </Box> */}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Hero;