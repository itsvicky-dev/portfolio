import React from 'react';
import { Box, Typography, Link, Divider } from '@mui/material';
import { Code, Package, Paintbrush } from 'lucide-react';

// Section Component
const Section = ({
  children,
  isLast = false,
}: {
  children: React.ReactNode;
  isLast?: boolean;
}) => {
  return (
    <Box
      sx={{
        position: 'relative',
        mb: isLast ? 0 : 4,
        animation: 'fade-in 0.5s ease-in-out',
      }}
    >
      <Box>{children}</Box>
      {!isLast && (
        <Divider
          className='about-line'
          orientation="vertical"
          sx={{
            position: 'absolute',
            left: '12px',
            top: '10px',
            height: 'calc(100% + 12rem)',
            background: '#50a3de',

          }}
        />
      )}
    </Box>
  );
};

// SectionTitle Component
const SectionTitle = ({
  title,
  icon,
  link,
}: {
  title: string;
  icon: React.ReactNode;
  link?: { text: string; url: string };
}) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
      <Box display="flex" alignItems="center" gap={1}>
        <Box position="relative">
          <Box
            sx={{
              position: 'absolute',
              left: '6px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '12px',
              height: '12px',
              backgroundColor: '#50a3de',
              borderRadius: '50%',
            }}
          />
        </Box>
        <Typography variant="h6" sx={{ color: '#fff', fontWeight: 'bold', marginLeft: 2 }}>
          {title}
        </Typography>
        {icon}
      </Box>
      {link && (
        <Link
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: 'gray',
            '&:hover': {
              color: '#fff',
            },
            transition: 'color 0.2s',
          }}
        >
          {link.text}
        </Link>
      )}
    </Box>
  );
};

// About Component
const About: React.FC = () => {
  return (
    <Box
      id="about"
      sx={{
        minHeight: '100vh',
        bgcolor: 'black',
        color: '#ccc',
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      <Box sx={{ maxWidth: '1000px', mx: 'auto', px: 2, py: 5 }}>
        {/* Header */}
        <Box mb={4}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 'bold',
              background: 'linear-gradient(to right, #34d399, #3b82f6)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              mb: 2,
              textAlign: 'center',
            }}
          >
            About Me
          </Typography>
        </Box>

        <Section>
          <SectionTitle
            title="Engineering & Development"
            icon={<Code style={{ width: 24, height: 24, color: '#2196f3' }} />}
            link={{ text: 'View Github', url: 'https://github.com/vigneswariCoder' }}
          />
          <Typography variant="body1" sx={{ pl: 4, lineHeight: 1.8 }}>
          As a software engineer, I have worked on over 15 projects, both within an organization and independently, focusing on developing intuitive, user-friendly interfaces that streamline workflows and enhance user experiences. With a strong foundation in MERN Stack (MongoDB, Express.js, React, Node.js), Java Spring Boot, and MySQL, I have contributed to building high-performance applications that meet both technical and business requirements. I am committed to continuous growth, currently expanding my expertise in modern design practices and development methodologies to stay ahead in an ever-evolving industry.
          </Typography>
        </Section>

        <Section>
          <SectionTitle
            title="Certifications & Training"
            icon={<Package style={{ width: 24, height: 24, color: '#9c27b0' }} />}
          // link={{ text: 'View Certifications', url: '#' }}
          />
          <Typography variant="body1" sx={{ pl: 4, lineHeight: 1.8 }}>
            I hold certifications in Meta Front-End Developer Professional Certificate, IBM Full-Stack JavaScript Developer Professional Certificate and CK-Edge Full-Stack PHP Certificate, which have allowed me to deepen my understanding of both frontend and backend development, enabling me to create more robust and scalable systems.This combination of training and hands-on experience allows me to approach projects with a holistic perspective, ensuring both the functionality and visual appeal of the applications I work on.
          </Typography>
        </Section>

        <Section isLast>
          <SectionTitle
            title="Design & User Experience"
            icon={<Paintbrush style={{ width: 24, height: 24, color: '#4caf50' }} />}
          // link={{ text: 'View Design Work', url: '#' }}
          />
          <Typography variant="body1" sx={{ pl: 4, lineHeight: 1.8 }}>
            My journey in design and development has led me to hone my skills in crafting user-centric, visually appealing interfaces. Although my focus is on building functional systems, I understand the importance of a seamless and engaging user experience. I’m committed to creating designs that are both aesthetically pleasing and intuitive, ensuring that each application I develop is optimized for ease of use, performance, and overall user satisfaction.
          </Typography>
        </Section>

      </Box>
    </Box>
  );
};

export default About;
