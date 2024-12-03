import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Github, Linkedin } from 'lucide-react';
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  IconButton,
} from '@mui/material';
import { toast } from 'react-toastify';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prevent submitting if already submitting
    if (isSubmitting) return;

    setIsSubmitting(true);

    const form = new FormData();
    form.append('name', formData.name);
    form.append('email', formData.email);
    form.append('message', formData.message);

    try {
      const response = await fetch('https://formspree.io/f/mzzpzely', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: form,
      });

      if (response.status !== 200) {
        throw new Error('Network response was not ok');
      } else {
        toast.success('Message sent successfully!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to send message. Please try again later.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box id="contact" sx={{ py: 12, bgcolor: 'black', margin: 'auto' }}>
      <Container maxWidth="md">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 'bold',
              background: 'linear-gradient(to right, #34d399, #3b82f6)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              textAlign: 'center',
              mb: 2,
            }}
          >
            Get In Touch
          </Typography>

          <Grid container spacing={6}>
            {/* Contact Info */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card
                  sx={{
                    bgcolor: 'transparent',
                    backdropFilter: 'blur(10px)',
                    p: 3,
                    color: 'white',
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 'bold',
                      mb: 2,
                      backgroundImage: 'linear-gradient(to right, #34d399, #3b82f6)',
                      backgroundClip: 'text',
                      color: 'transparent',
                    }}
                  >
                    Let&apos;s Connect
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'gray', mb: 3 }}>
                    I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                  </Typography>

                  {/* Email */}
                  <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
                    <Mail style={{ color: '#34d399', marginRight: 2 }} />
                    <Typography
                      component="a"
                      href="mailto:vigneswaris2002@gmail.com"
                      sx={{
                        backgroundImage: 'linear-gradient(to right, #34d399, #3b82f6)',
                        backgroundClip: 'text',
                        color: 'transparent',
                        textDecoration: 'none',
                        ml: 1,
                        position: 'relative',
                        ':hover': {
                          '&::after': {
                            width: '100%',
                          },
                        },
                        '::after': {
                          content: '""',
                          position: 'absolute',
                          left: 0,
                          bottom: -2,
                          width: '0%',
                          height: '1px',
                          backgroundColor: '#34d399',
                          transition: 'width 0.5s ease-in-out',
                        },
                      }}
                    >
                      vigneswaris2002@gmail.com
                    </Typography>
                  </Box>

                  {/* Social Links */}
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <IconButton
                      component="a"
                      href="https://github.com/vigneswariCoder"
                      target="_blank"
                      sx={{
                        bgcolor: '#6e798b40',
                        ':hover': { bgcolor: '#d3e4ff40' },
                      }}
                    >
                      <Github style={{ color: '#34d399' }} />
                    </IconButton>
                    <IconButton
                      component="a"
                      href="https://www.linkedin.com/in/vigneswaris"
                      target="_blank"
                      sx={{
                        bgcolor: '#6e798b40',
                        ':hover': { bgcolor: '#d3e4ff40' },
                      }}
                    >
                      <Linkedin style={{ color: '#34d399' }} />
                    </IconButton>
                  </Box>
                </Card>
              </motion.div>
            </Grid>

            {/* Contact Form */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <form onSubmit={handleSubmit}>
                  <Box sx={{ mb: 3 }}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Your Name"
                      InputLabelProps={{ style: { color: 'gray' } }}
                      InputProps={{
                        style: {
                          color: 'white',
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        },
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: '#34d399',
                          },
                          '&:hover fieldset': {
                            borderColor: '#34d399',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#34d399',
                          },
                        },
                      }}
                      value={formData.name}
                      onChange={handleChange}
                      name="name"
                    />
                  </Box>
                  <Box sx={{ mb: 3 }}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Your Email"
                      InputLabelProps={{ style: { color: 'gray' } }}
                      InputProps={{
                        style: {
                          color: 'white',
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        },
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: '#34d399',
                          },
                          '&:hover fieldset': {
                            borderColor: '#34d399',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#34d399',
                          },
                        },
                      }}
                      value={formData.email}
                      onChange={handleChange}
                      name="email"
                    />
                  </Box>
                  <Box sx={{ mb: 3 }}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Your Message"
                      multiline
                      rows={4}
                      InputLabelProps={{ style: { color: 'gray' } }}
                      InputProps={{
                        style: {
                          color: 'white',
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        },
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: '#34d399',
                          },
                          '&:hover fieldset': {
                            borderColor: '#34d399',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#34d399',
                          },
                        },
                      }}
                      value={formData.message}
                      onChange={handleChange}
                      name="message"
                    />
                  </Box>
                  <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting}
                    sx={{
                      bgcolor: '#34d399',
                      ':hover': {
                        bgcolor: '#28a780',
                      },
                    }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact;
