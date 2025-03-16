import React from 'react';
import { Cloud, Code2, Database, Layout, Palette, Server, ShieldCheck, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';
import { Box, Typography, Grid } from '@mui/material';
import { LucideIcon } from 'lucide-react';

const skills = [
  {
    icon: Code2,
    title: 'Frontend Development',
    level: 5,
    description: 'Expert in React, Redux, TypeScript, JavaScript and responsive web design',
    color: 'linear-gradient(to bottom right, #4F46E5, #4338CA)',
  },
  {
    icon: Server,
    title: 'Backend Development',
    level: 4,
    description: 'Proficient in Java, Spring Boot, and building scalable RESTful APIs',
    color: 'linear-gradient(to bottom right, #6D28D9, #5B21B6)',
  },
  {
    icon: Database,
    title: 'Database Design',
    level: 4,
    description: 'Strong skills in MySQL, PostgreSQL, and optimized query handling',
    color: 'linear-gradient(to bottom right, #2563EB, #1D4ED8)',
  },
  {
    icon: Layout,
    title: 'UI/UX Design',
    level: 3,
    description: 'Experience in crafting user-friendly designs with Figma and CSS frameworks',
    color: 'linear-gradient(to bottom right, #8B5CF6, #7C3AED)',
  },
  {
    icon: ShieldCheck,
    title: 'Code Quality & Testing',
    level: 3,
    description: 'Familiar with unit testing, integration testing, and CI/CD pipelines',
    color: 'linear-gradient(to bottom right, #22C55E, #16A34A)',
  },
  {
    icon: Cloud,
    title: 'Cloud Computing',
    level: 2,
    description: 'Hands-on experience with AWS or Azure for deploying and managing applications',
    color: 'linear-gradient(to bottom right, #38BDF8, #0EA5E9)',
  },
];

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  level: number;
  description: string;
  color: string;
  index: number;
}

function SkillCard({ icon: Icon, title, level, description, color, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      style={{
        background: color,
        borderRadius: '16px',
        padding: '24px',
        overflow: 'hidden',
        position: 'relative',
        cursor: 'pointer',
      }}
    >
      {/* Animated Background Gradient */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.2,
        }}
      // animate={{
      //   background: [
      //     'radial-gradient(circle at 0% 0%, rgba(255,255,255,0.2) 0%, transparent 50%)',
      //     'radial-gradient(circle at 100% 100%, rgba(255,255,255,0.2) 0%, transparent 50%)',
      //     'radial-gradient(circle at 0% 0%, rgba(255,255,255,0.2) 0%, transparent 50%)',
      //   ],
      // }}
      // transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
      />
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 2,
          }}
        >
          <Box
            sx={{
              p: 1.5,
              bgcolor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              display: 'inline-flex',
            }}
          >
            <Icon size={24} />
          </Box>
          <Box sx={{ display: 'flex', gap: 0.5 }}>
            {[...Array(5)].map((_, i) => (
              <Box
                key={i}
                sx={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  bgcolor: i < level ? 'white' : 'rgba(255, 255, 255, 0.2)',
                }}
              />
            ))}
          </Box>
        </Box>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
          {description}
        </Typography>
      </Box>
    </motion.div>
  );
}


export default function SkillsSection() {
  return (
    <Box
      id='skills'
      sx={{
        py: 10,
        backgroundColor: '#2a2a2a !important',
        background: 'radial-gradient( #000 100%,rgba(59, 130, 246, 0.2), rgba(34, 197, 94, 0.2))',
        position: 'relative',
        overflow: 'hidden',
        color: 'white',
      }}
    >
      <Box sx={{ maxWidth: '1250px', mx: 'auto', }}>
        {/* Animated Background */}
        {/* <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.3,
        }}
        animate={{
          backgroundImage: [
            'radial-gradient(circle at 0% 0%, #4F46E5 0%, transparent 50%)',
            'radial-gradient(circle at 100% 100%, #7C3AED 0%, transparent 50%)',
            'radial-gradient(circle at 0% 100%, #4F46E5 0%, transparent 50%)',
            'radial-gradient(circle at 100% 0%, #7C3AED 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      /> */}

        <Box sx={{ position: 'relative', zIndex: 1, textAlign: 'center', mb: 6 }}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 'bold',
                background: 'linear-gradient(to right, #34d399, #3b82f6)',
                // background: 'linear-gradient(to right, #6366F1, #8B5CF6, #EC4899)',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                mb: 2,
              }}
            >
              Technical Expertise
            </Typography>
            <Typography variant="body1" sx={{ color: 'gray' }}>
              Crafting digital experiences with cutting-edge technologies
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={3} justifyContent="center">
          {skills.map((skill, index) => (
            <Grid className='skills-grid' item xs={12} sm={6} md={4} key={index}>
              <SkillCard {...skill} index={index} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
