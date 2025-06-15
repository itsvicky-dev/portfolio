import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Divider, Chip } from '@mui/material';
import { Code, Package, Paintbrush, ExternalLink, Sparkles, Trophy, Target, Zap, ArrowRight, TrendingUp, Award, Globe, Users, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

// Professional Timeline Component
const TimelineItem = ({
  icon,
  title,
  subtitle,
  duration,
  description,
  skills,
  index,
  isLast = false
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  duration: string;
  description: string;
  skills: string[];
  index: number;
  isLast?: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2, duration: 0.6 }}
    style={{ position: 'relative' }}
  >
    {/* Timeline line */}
    {!isLast && (
      <Box
        sx={{
          position: 'absolute',
          left: '31px',
          top: '64px',
          bottom: '-40px',
          width: '2px',
          background: 'linear-gradient(to bottom, rgba(52, 211, 153, 0.5), rgba(52, 211, 153, 0.1))',
        }}
      />
    )}
    
    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3, mb: 6 }}>
      {/* Timeline dot */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        style={{
          minWidth: '64px',
          height: '64px',
          background: 'linear-gradient(135deg, rgba(52, 211, 153, 0.2), rgba(59, 130, 246, 0.2))',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '2px solid rgba(52, 211, 153, 0.3)',
          position: 'relative',
          zIndex: 1,
          backdropFilter: 'blur(10px)',
        }}
      >
        {icon}
      </motion.div>

      {/* Content */}
      <Box sx={{ flex: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
          <Typography
            variant="h6"
            sx={{
              color: 'white',
              fontWeight: 700,
              fontSize: '1.3rem',
            }}
          >
            {title}
          </Typography>
          <Chip
            label={duration}
            size="small"
            sx={{
              background: 'rgba(52, 211, 153, 0.15)',
              color: '#34d399',
              border: '1px solid rgba(52, 211, 153, 0.3)',
              fontWeight: 600,
            }}
          />
        </Box>
        
        <Typography
          variant="subtitle1"
          sx={{
            color: '#34d399',
            fontWeight: 600,
            mb: 2,
          }}
        >
          {subtitle}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: 'rgba(255, 255, 255, 0.8)',
            lineHeight: 1.7,
            mb: 3,
          }}
        >
          {description}
        </Typography>

        {/* Skills tags */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Chip
                label={skill}
                size="small"
                sx={{
                  background: 'rgba(59, 130, 246, 0.1)',
                  color: '#3b82f6',
                  border: '1px solid rgba(59, 130, 246, 0.2)',
                  '&:hover': {
                    background: 'rgba(59, 130, 246, 0.2)',
                  },
                }}
              />
            </motion.div>
          ))}
        </Box>
      </Box>
    </Box>
  </motion.div>
);

// Professional Stats Panel
const ProfessionalStatsPanel = () => {
  const achievements = [
    { label: 'Projects Delivered', value: '10+', icon: <Target size={20} />, color: '#34d399' },
    { label: 'Professional Certifications', value: '3', icon: <Award size={20} />, color: '#3b82f6' },
    { label: 'Years Experience', value: '2+', icon: <TrendingUp size={20} />, color: '#8b5cf6' },
    { label: 'Performance Boost', value: '40%', icon: <Zap size={20} />, color: '#f59e0b' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Card
        sx={{
          background: 'linear-gradient(135deg, rgba(15, 15, 15, 0.9), rgba(30, 30, 30, 0.8))',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '24px',
          p: 4,
          mb: 6,
        }}
      >
        <Grid container spacing={4}>
          {achievements.map((item, index) => (
            <Grid item xs={6} md={3} key={index}>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <Box sx={{ textAlign: 'center' }}>
                  <Box
                    sx={{
                      color: item.color,
                      mb: 2,
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography
                    variant="h4"
                    sx={{
                      color: 'white',
                      fontWeight: 800,
                      mb: 1,
                      fontSize: { xs: '1.8rem', md: '2.2rem' },
                    }}
                  >
                    {item.value}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.6)',
                      fontSize: '0.9rem',
                      fontWeight: 500,
                    }}
                  >
                    {item.label}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Card>
    </motion.div>
  );
};

// Professional Expertise Card
const ExpertiseCard = ({
  icon,
  title,
  description,
  technologies,
  index
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  technologies: string[];
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.15, duration: 0.6 }}
    whileHover={{ y: -8 }}
  >
    <Card
      sx={{
        background: 'linear-gradient(135deg, rgba(15, 15, 15, 0.9), rgba(25, 25, 25, 0.8))',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '20px',
        p: 4,
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        '&:hover': {
          border: '1px solid rgba(52, 211, 153, 0.3)',
          boxShadow: '0 25px 50px rgba(52, 211, 153, 0.1)',
        },
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {/* Subtle gradient overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100px',
          background: 'linear-gradient(135deg, rgba(52, 211, 153, 0.03), rgba(59, 130, 246, 0.03))',
          borderRadius: '20px 20px 0 0',
        }}
      />
      
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            color: '#34d399',
            mb: 3,
            p: 2,
            background: 'rgba(52, 211, 153, 0.1)',
            borderRadius: '16px',
            display: 'inline-flex',
            border: '1px solid rgba(52, 211, 153, 0.2)',
          }}
        >
          {icon}
        </Box>
        
        <Typography
          variant="h6"
          sx={{
            color: 'white',
            fontWeight: 700,
            mb: 3,
            fontSize: '1.4rem',
          }}
        >
          {title}
        </Typography>
        
        <Typography
          variant="body1"
          sx={{
            color: 'rgba(255, 255, 255, 0.75)',
            lineHeight: 1.7,
            mb: 4,
          }}
        >
          {description}
        </Typography>
        
        <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', mb: 3 }} />
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {technologies.map((tech, idx) => (
            <Chip
              key={idx}
              label={tech}
              size="small"
              sx={{
                background: 'rgba(255, 255, 255, 0.05)',
                color: 'rgba(255, 255, 255, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                fontSize: '0.75rem',
                '&:hover': {
                  background: 'rgba(52, 211, 153, 0.1)',
                  color: '#34d399',
                  border: '1px solid rgba(52, 211, 153, 0.3)',
                },
              }}
            />
          ))}
        </Box>
      </Box>
    </Card>
  </motion.div>
);

// About Component
const About: React.FC = () => {
  const timelineData = [
    {
      icon: <Trophy size={24} color="rgba(52, 211, 153, 1)" />,
      title: 'Junior Software Engineer',
      subtitle: 'HEPL - Hybrid Enterprise Private Limited',
      duration: '2 Years',
      description: 'Led development of enterprise-level applications, collaborated with cross-functional teams, and implemented scalable solutions meeting business requirements and industry standards. Focused on full-stack development using modern technologies.',
      skills: ['Java Spring Boot', 'React.js', 'MySQL', 'Enterprise Solutions', 'Team Collaboration']
    },
    {
      icon: <Award size={24} color="rgba(59, 130, 246, 1)" />,
      title: 'Professional Certifications',
      subtitle: 'Meta • IBM • CK-Edge',
      duration: 'Ongoing',
      description: 'Achieved multiple industry-recognized certifications to deepen expertise in both frontend and backend development, enabling creation of robust and scalable systems.',
      skills: ['Meta Front-End', 'IBM Full-Stack JavaScript', 'CK-Edge Full-Stack', 'Continuous Learning']
    },
    {
      icon: <Code size={24} color="rgba(139, 92, 246, 1)" />,
      title: 'Independent Projects',
      subtitle: 'Personal Work',
      duration: '10+ Projects',
      description: 'Developed intuitive, user-friendly interfaces and full-stack applications that streamline workflows and enhance user experiences. Focus on modern tech stack and performance optimization.',
      skills: ['MERN Stack', 'UI/UX Design', 'Performance Optimization', 'Client Relations']
    }
  ];

  const expertiseAreas = [
    {
      icon: <Code size={28} />,
      title: 'Full-Stack Development',
      description: 'End-to-end application development with modern frameworks and architectures, focusing on scalable and maintainable solutions.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'TypeScript']
    },
    {
      icon: <Globe size={28} />,
      title: 'Enterprise Solutions',
      description: 'Building robust enterprise applications with Java Spring Boot, implementing complex business logic and database management.',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'REST APIs', 'Microservices']
    },
    {
      icon: <Lightbulb size={28} />,
      title: 'UI/UX Engineering',
      description: 'Creating intuitive user interfaces with modern design principles, ensuring optimal user experience and accessibility.',
      technologies: ['Material-UI', 'Responsive Design', 'Framer Motion', 'CSS3', 'User Research']
    }
  ];

  return (
    <Box
      id="about"
      sx={{
        minHeight: '100vh',
        bgcolor: 'black',
        color: '#ccc',
        py: 8,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Sophisticated background pattern */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(52, 211, 153, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.06) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.04) 0%, transparent 50%)
          `,
        }}
      />

      <Box sx={{ maxWidth: '1400px', mx: 'auto', px: { xs: 3, md: 4 }, position: 'relative', zIndex: 1 }}>
        {/* Professional Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <Typography
            variant="h6"
            sx={{
              color: '#34d399',
              fontWeight: 600,
              mb: 2,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Professional Profile
          </Typography>
          
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              background: 'linear-gradient(135deg, #ffffff 0%, #34d399 50%, #3b82f6 100%)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              mb: 3,
              fontSize: { xs: '2.5rem', md: '3.8rem' },
              letterSpacing: '-0.02em',
            }}
          >
            About Me
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6,
              fontWeight: 400,
            }}
          >
            Passionate software engineer crafting innovative digital solutions with modern technologies and user-centric design principles
          </Typography>
        </motion.div>

        {/* Professional Stats Panel */}
        <ProfessionalStatsPanel />

        {/* Professional Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h4"
            sx={{
              color: 'white',
              fontWeight: 700,
              mb: 6,
              textAlign: 'center',
            }}
          >
            Professional Journey
          </Typography>
          
          <Box sx={{ maxWidth: '900px', mx: 'auto' }}>
            {timelineData.map((item, index) => (
              <TimelineItem
                key={index}
                {...item}
                index={index}
                isLast={index === timelineData.length - 1}
              />
            ))}
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default About;