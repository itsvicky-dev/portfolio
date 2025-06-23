import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Github, Linkedin, Send, MapPin } from 'lucide-react';
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Card,
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

  const [errors, setErrors] = useState({
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
    // Clear the error message when the user starts typing
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prevent submitting if already submitting
    if (isSubmitting) return;

    // Validate form fields
    if (!validateForm()) {
      return;
    }

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
    <Box
      id="contact"
      sx={{
        pt: { xs: 10, md: 12 }, // Add proper top padding to avoid header overlap
        pb: 8,
        bgcolor: 'black',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 800,
              background: 'linear-gradient(135deg, #34d399 0%, #3b82f6 50%, #8b5cf6 100%)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              mb: 2,
            }}
          >
            Let's Create Something Amazing
          </Typography>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{
              height: '4px',
              background: 'linear-gradient(90deg, #34d399, #3b82f6)',
              borderRadius: '2px',
              width: '120px',
              margin: '0 auto 2rem',
            }}
          />

          <Typography
            variant="h6"
            sx={{
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6,
              mb: 4,
            }}
          >
            Ready to bring your ideas to life? Let's discuss your next project and create digital experiences that make an impact.
          </Typography>
        </motion.div>

        <Grid container spacing={6}>
          {/* Enhanced Contact Info */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card
                sx={{
                  background: 'rgba(15, 15, 15, 0.8)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '24px',
                  p: 4,
                  position: 'relative',
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    background: 'linear-gradient(135deg, #34d399, #3b82f6)',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  Get In Touch
                </Typography>

                {/* Contact methods */}
                <Box sx={{ mb: 4 }}>
                  <motion.div
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Box display="flex" alignItems="center" sx={{ mb: 3, p: 2, borderRadius: '16px', background: 'rgba(52, 211, 153, 0.1)' }}>
                      <Mail size={24} color="#34d399" />
                      <Box ml={2}>
                        <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem' }}>
                          Email Me
                        </Typography>
                        <Typography
                          component="a"
                          href="mailto:vigneswari.coder@gmail.com"
                          sx={{
                            color: '#fff',
                            textDecoration: 'none',
                            fontWeight: 600,
                            '&:hover': { color: '#34d399' },
                            transition: 'color 0.3s',
                          }}
                        >
                          vigneswari.coder@gmail.com
                        </Typography>
                      </Box>
                    </Box>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Box display="flex" alignItems="center" sx={{ mb: 3, p: 2, borderRadius: '16px', background: 'rgba(59, 130, 246, 0.1)' }}>
                      <MapPin size={24} color="#3b82f6" />
                      <Box ml={2}>
                        <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem' }}>
                          Location
                        </Typography>
                        <Typography sx={{ color: '#fff', fontWeight: 600 }}>
                          Tamil Nadu, India
                        </Typography>
                      </Box>
                    </Box>
                  </motion.div>
                </Box>

                {/* Enhanced Social Links */}
                <Typography variant="h6" sx={{ color: '#fff', mb: 2, fontWeight: 600 }}>
                  Connect With Me
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  {[
                    { icon: Github, href: 'https://github.com/vigneswariCoder', color: '#fff' },
                    { icon: Linkedin, href: 'https://www.linkedin.com/in/vigneswaris', color: '#0077b5' },
                    { icon: Mail, href: 'mailto:vigneswari.coder@gmail.com', color: '#34d399' },
                  ].map(({ icon: Icon, href, color }, index) => (
                    <motion.a
                      key={index}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '50px',
                        height: '50px',
                        borderRadius: '16px',
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <Icon size={20} color={color} />
                    </motion.a>
                  ))}
                </Box>
              </Card>
            </motion.div>
          </Grid>

          {/* Enhanced Contact Form */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card
                sx={{
                  background: 'rgba(15, 15, 15, 0.8)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '24px',
                  p: 4,
                  position: 'relative',
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    color: '#fff',
                  }}
                >
                  Send Me a Message
                </Typography>

                <form onSubmit={handleSubmit}>
                  <Box sx={{ mb: 3 }}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Your Name"
                      InputLabelProps={{
                        style: { color: 'rgba(255, 255, 255, 0.7)' }
                      }}
                      InputProps={{
                        style: {
                          color: 'white',
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          borderRadius: '12px',
                        },
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: 'rgba(255, 255, 255, 0.2)',
                            borderRadius: '12px',
                          },
                          '&:hover fieldset': {
                            borderColor: 'rgba(52, 211, 153, 0.5)',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#34d399',
                            boxShadow: '0 0 0 2px rgba(52, 211, 153, 0.2)',
                          },
                        },
                      }}
                      value={formData.name}
                      onChange={handleChange}
                      name="name"
                      error={!!errors.name}
                      helperText={errors.name}
                    />
                  </Box>

                  <Box sx={{ mb: 3 }}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Your Email"
                      InputLabelProps={{
                        style: { color: 'rgba(255, 255, 255, 0.7)' }
                      }}
                      InputProps={{
                        style: {
                          color: 'white',
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          borderRadius: '12px',
                        },
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: 'rgba(255, 255, 255, 0.2)',
                            borderRadius: '12px',
                          },
                          '&:hover fieldset': {
                            borderColor: 'rgba(52, 211, 153, 0.5)',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#34d399',
                            boxShadow: '0 0 0 2px rgba(52, 211, 153, 0.2)',
                          },
                        },
                      }}
                      value={formData.email}
                      onChange={handleChange}
                      name="email"
                      error={!!errors.email}
                      helperText={errors.email}
                    />
                  </Box>

                  <Box sx={{ mb: 4 }}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Your Message"
                      multiline
                      rows={2}
                      InputLabelProps={{
                        style: { color: 'rgba(255, 255, 255, 0.7)' }
                      }}
                      InputProps={{
                        style: {
                          color: 'white',
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          borderRadius: '12px',
                        },
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: 'rgba(255, 255, 255, 0.2)',
                            borderRadius: '12px',
                          },
                          '&:hover fieldset': {
                            borderColor: 'rgba(52, 211, 153, 0.5)',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#34d399',
                            boxShadow: '0 0 0 2px rgba(52, 211, 153, 0.2)',
                          },
                        },
                      }}
                      value={formData.message}
                      onChange={handleChange}
                      name="message"
                      error={!!errors.message}
                      helperText={errors.message}
                    />
                  </Box>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      fullWidth
                      type="submit"
                      variant="contained"
                      disabled={isSubmitting}
                      sx={{
                        background: 'linear-gradient(135deg, #34d399, #22c55e)',
                        color: 'black',
                        fontWeight: 700,
                        fontSize: '1rem',
                        py: 2,
                        borderRadius: '16px',
                        border: 'none',
                        boxShadow: '0 10px 30px rgba(52, 211, 153, 0.3)',
                        '&:hover': {
                          background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                          boxShadow: '0 15px 40px rgba(52, 211, 153, 0.4)',
                        },
                        '&:disabled': {
                          background: 'rgba(52, 211, 153, 0.5)',
                          color: 'rgba(0, 0, 0, 0.5)',
                        },
                      }}
                      startIcon={<Send size={20} />}
                    >
                      {isSubmitting ? 'Sending Message...' : 'Send Message'}
                    </Button>
                  </motion.div>
                </form>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;