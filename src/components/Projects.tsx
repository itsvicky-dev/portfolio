import React from 'react';
import { Code2, Palette, Database, Globe2, Brain, Shield, Cpu, Cloud, Terminal, Headphones, Monitor, User, Server, Code, Calendar } from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

interface ProjectCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    variant: 'primary' | 'white' | 'dark' | 'accent' | 'green' | 'blue';
    className?: string;
    link: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, icon: Icon, variant, link, className = '' }) => {
    return (
        <a href={link} target="_blank" style={{ textDecoration: 'none', color: 'inherit' }} rel="noopener noreferrer" className={`card ${variant} ${className}`}>
            <div className="card-content">
                <div className="header">
                    <h2>{title}</h2>
                    <Icon className="icon" />
                </div>
                <p className="description">{description}</p>
            </div>
        </a>
    );
}

const projects = [
    {
        title: 'E-commerce Platform',
        description: 'Modern e-commerce web application built with React, Redux, Java Spring Boot, and MongoDB.',
        icon: Globe2,
        variant: 'green' as const,
        link: 'https://github.com/vigneswariCoder/zestkart-frontend'  // Replace 'vigneswariCoder' with your actual GitHub username
    },
    {
        title: 'Playpuse Landing Page',
        description: 'A visually appealing music website landing page created using React and Material-UI.',
        icon: Headphones,
        variant: 'primary' as const,
        link: 'https://github.com/vigneswariCoder/playpuse'
    },
    {
        title: 'Admin Dashboard',
        description: 'React-based admin dashboard template for managing backend data and processes.',
        icon: Monitor,
        variant: 'blue' as const,
        link: 'https://github.com/vigneswariCoder/admin-dashboard'
    },
    {
        title: 'Portfolio Website',
        description: 'A personal portfolio showcasing skills, projects, and experiences as a full-stack developer.',
        icon: User,
        variant: 'accent' as const,
        link: 'https://github.com/vigneswariCoder/portfolio'
    },
    {
        title: 'Zestkart Backend',
        description: 'Backend service for e-commerce, built with Java and Spring Boot for managing products and transactions.',
        icon: Server,
        variant: 'dark' as const,
        link: 'https://github.com/vigneswariCoder/zestkart-backend'
    },
    {
        title: 'Zestkart Frontend',
        description: 'Frontend for the Zestkart e-commerce platform, utilizing React and Redux Toolkit for seamless user experience.',
        icon: Code,
        variant: 'white' as const,
        link: 'https://github.com/vigneswariCoder/zestkart-frontend'
    },
    {
        title: 'Hall Booking System',
        description: 'A web application for booking halls, providing a simple and efficient interface for users.',
        icon: Calendar,
        variant: 'primary' as const,
        link: 'https://github.com/vigneswariCoder/hall-booking'
    }
];



function App() {
    return (
        <Box sx={{ py: 7, bgcolor: '#000' }}>
            <Box sx={{ maxWidth: '1200px', mx: 'auto', px: 2, py: 5 }}>
                <motion.div
                    style={{ maxWidth: '768px', margin: '0 auto', textAlign: 'center', marginBottom: '80px' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        style={{
                            fontSize: '3rem',
                            fontWeight: 'bold',
                            background: 'linear-gradient(to right, #34d399, #3b82f6)',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent',
                            marginBottom: 2,
                        }}
                    >
                        Featured Projects
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
                <div className="grid">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            {...project}
                            className={index === 0 ? 'large-row' : index === 3 ? 'large-col' : ''}
                        />
                    ))}
                </div>
            </Box>
        </Box >
    );
}

export default App;