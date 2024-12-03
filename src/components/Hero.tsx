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
      {isLoading ? <LoadingScreen /> :
        <>
          <Box
            id="home"
            sx={{
              minHeight: '100vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              // position: 'relative',
              overflow: 'hidden',
              backgroundColor: '#000 !important',
              backgroundImage: 'url(assets/hero-bg.svg)',
              // background: 'linear-gradient(to right, rgba(34, 197, 94, 0.1), rgba(59, 130, 246, 0.1))',
              // background: 'linear-gradient(to bottom, #000, #42217a, #000)',
              //  background: 'radial-gradient(circle, #42217a 0%, #000 60%)'
            }}
          >
            <div className="glowing-circle circle-1" />
            <div className="glowing-circle circle-3" />
            <div className="glowing-circle circle-4" />
            <Container
              maxWidth="lg"
              sx={{
                zIndex: 10,
                textAlign: 'left',
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} md={10}>
                  <Box >
                    {/* Greeting */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <Typography variant="h5" sx={{ color: '#34d399', mb: 2 }}>
                        Hello, I'm
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
                        sx={{
                          fontWeight: 'bold',
                          color: 'white',
                          mb: 3,
                          fontSize: '6rem',
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
                        sx={{
                          color: '#cccccc',
                          mb: 4,
                        }}
                      >
                        Full Stack Developer & UI/UX Enthusiast
                      </Typography>
                      <Typography
                        variant="h1"
                        className='hero-title'
                        sx={{
                          color: '#fff',
                          fontSize: '2.7rem',
                          fontWeight: '600',
                          mb: 4,
                        }}
                      >
                        Crafting Digital
                        <span>{" "}Experiences{" "}</span>
                        Through Code
                      </Typography>

                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <Grid container justifyContent="left" spacing={2}>
                        {[
                          { Icon: Github, href: 'https://github.com/vigneswariCoder' },
                          { Icon: Linkedin, href: 'https://linkedin.com/in/vigneswaris' },
                          { Icon: Instagram, href: 'https://instagram.com/im_vi.ki' },
                          { Icon: Mail, href: 'mailto:contact@vigneswaris2002@gmail.com' },
                        ].map(({ Icon, href }, index) => (
                          <Grid item key={index}>
                            <IconButton
                              component="a"
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              sx={{
                                color: 'white',
                                '&:hover': { color: '#34d399' },
                              }}
                            >
                              <Icon size={24} />
                            </IconButton>
                          </Grid>
                        ))}
                      </Grid>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <Button
                        variant="outlined"
                        size="large"
                        sx={{
                          mt: 4,
                          borderColor: '#34d399',
                          color: '#34d399',
                          borderRadius: '3rem',
                        }}
                        component="a"
                        href="resume.pdf"
                        download="Vigneswari_Resume.pdf"
                      >
                        My Resume
                      </Button>
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

                  {/* Floating Icons */}
                  <Box position="relative" zIndex={10}>
                    <Code
                      style={{
                        position: "absolute",
                        top: "0",
                        right: "-10px",
                        color: "rgba(16, 185, 129, 1)", // emerald-400
                        width: "2rem",
                        height: "2rem",
                        animation: "float 3s infinite",
                      }}
                    />
                    <LayoutDashboard
                      style={{
                        position: "absolute",
                        top: "7rem",
                        right: "17rem",
                        color: "rgba(16, 185, 129, 1)", // emerald-400
                        width: "2rem",
                        height: "2rem",
                        animation: "float 3s infinite 500ms",
                      }}
                    />
                    <Rocket
                      style={{
                        position: "absolute",
                        top: "17rem",
                        right: "-2rem",
                        color: "rgba(16, 185, 129, 1)",
                        width: "2rem",
                        height: "2rem",
                        animation: "float 3s infinite 1s",
                      }}
                    />
                    <Sparkles
                      style={{
                        position: "absolute",
                        top: "-4rem",
                        right: "12rem",
                        color: "rgba(16, 185, 129, 1)", // emerald-400
                        width: "2rem",
                        height: "2rem",
                        animation: "float 3s infinite 1.5s",
                      }}
                    />
                    <Coffee
                      style={{
                        position: "absolute",
                        top: "22rem",
                        right: "13rem",
                        color: "rgba(16, 185, 129, 1)",
                        width: "2rem",
                        height: "2rem",
                        animation: "float 3s infinite 2s",
                      }}
                    />
                  </Box>

                  {/* Code Snippet Decoration */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: "55%",
                      right: "8%",
                      transform: "translateY(-50%)",
                      backgroundColor: "rgba(31, 41, 55, 0.5)",
                      padding: "1.5rem",
                      borderRadius: "0.5rem",
                      backdropFilter: "blur(8px)",
                      border: "1px solid rgba(16, 185, 129, 0.2)"
                    }}
                  >
                    <pre style={{ fontSize: "14px", color: "#dffff4" }}>
                      <code>{`const developer = {
  name: 'Vigneswari',
  skills: ['React', 'Java', 'UI/UX'],
  passion: 'Building web magic',
  coffee: Infinity
};`}</code>
                    </pre>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </>
      }
    </>
  );
}

export default Hero;