import React from 'react';
import { motion } from 'framer-motion';
import { Code, Users, Award, Zap } from "lucide-react";
import { Box } from '@mui/material';

interface HighlightCardProps {
  icon: React.ComponentType<{ style?: React.CSSProperties }>;
  title: string;
  description: string;
  gradient: string;
  index: number;
}

function HighlightCard({ icon: Icon, title, description, gradient, index }: HighlightCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      style={{
        position: 'relative',
        borderRadius: '24px',
        overflow: 'hidden',
        border: '1px solid #3b82f6'
      }}
      className='highlights-cards'
    >
      <div
        // className='highlights-cards'
        style={{
          position: 'absolute',
          inset: '0.5px',
          background: 'linear-gradient(to right, #3b82f6, #34d399)',
          borderRadius: '24px',
          filter: 'blur(16px)',
          transition: 'all 0.3s',
        }}
      />
      <div
        style={{
          position: 'relative',
          background: 'rgba(0, 0, 0, 0.9)',
          borderRadius: '24px',
          padding: '32px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(16px)',
          height: '100%'
        }}
      >
        <div
          className="animated-gradient-orb"
          style={{
            position: 'absolute',
            top: '-80px',
            right: '-80px',
            width: '160px',
            height: '160px',
            borderRadius: '50%',
            background: gradient,
            opacity: 0.15,
            filter: 'blur(48px)',
            transition: 'all 0.5s',
          }}
        />

        <div style={{ position: 'relative', zIndex: 10 }}>
          <motion.div
            style={{ marginBottom: '24px', position: 'relative' }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                // background: 'linear-gradient(to right, #11397b, #058959)',
                background: 'transparent',
                borderRadius: '16px',
                filter: 'blur(4px)',
              }}
            />
            <div
              style={{
                display: 'flex',
                position: 'relative',
                background: 'rgba(0, 0, 0, 0.5)',
                padding: '16px',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <Icon style={{ width: '32px', height: '32px', color: 'white' }} />
              <motion.h3
              className='highlights-title'
                style={{
                  margin: '0 10px',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  backgroundImage: gradient,
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                {title}
              </motion.h3>
            </div>
          </motion.div>



          <motion.p
            style={{ color: 'rgba(200, 200, 200, 0.9)', lineHeight: '1.5', fontSize: '14px' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {description}
          </motion.p>
        </div>
        {/* Animated particles */}
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              animationDelay: `${i * 0.4}s`,
              left: `${Math.random() * 100}%`,
            }}
          ></div>
        ))}
      </div>
    </motion.div>
  );
}


const highlights = [
  {
    icon: Code,
    title: 'Innovative Solutions',
    description:
      'Pioneered groundbreaking solutions across 30+ projects, revolutionizing user experiences and workflow efficiency through cutting-edge UI implementations.',
    gradient: 'linear-gradient(135deg, #6366f1, #a855f7)',
  },
  {
    icon: Users,
    title: 'Team Synergy',
    description:
      'Orchestrated seamless collaboration between design and development teams, fostering innovation and delivering exceptional results.',
    gradient: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
  },
  {
    icon: Award,
    title: 'Excellence Achieved',
    description:
      'Garnered recognition for creating high-impact, visually stunning interfaces that transformed user engagement and operational efficiency.',
    gradient: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
  },
  {
    icon: Zap,
    title: 'Performance Mastery',
    description:
      'Engineered high-performance solutions that significantly enhanced application speed and user experience metrics.',
    gradient: 'linear-gradient(135deg, #6366f1, #2dd4bf)',
  },
];

export default function HighlightsSection() {
  return (
    <Box id='highlights' sx={{ paddingBottom: '100px', position: 'relative', backgroundColor: '#2a2a2a !important', background: 'radial-gradient(ellipse at bottom, rgba(34, 197, 94, 0.2), rgba(59, 130, 246, 0.2), #000 70%)', overflow: 'hidden' }}>
      <div style={{ position: 'relative', zIndex: 10, margin: '0 auto', maxWidth: '1200px', padding: '0 16px' }}>
        <motion.div
          style={{ maxWidth: '768px', margin: '0 auto', textAlign: 'center', marginBottom: '80px' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.h2
            style={{
              fontSize: '48px',
              fontWeight: 'bold',
              marginBottom: '24px',
              background: 'linear-gradient(to right, #34d399, #3b82f6)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Career Highlights
          </motion.h2>
          <motion.p
            style={{ color: '#d1d5db', fontSize: '18px', lineHeight: '1.5' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Transforming visions into impactful digital realities
          </motion.p>
        </motion.div>

        <motion.div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '32px' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {highlights.map((highlight, index) => (
            <HighlightCard key={index} {...highlight} index={index} />
          ))}
        </motion.div>
      </div>
    </Box>
  );
}
