import React, { useState, useEffect, useRef } from 'react';
import { Code2, Palette, Database, Globe2, Brain, Shield, Cpu, Cloud, Terminal, Headphones, Monitor, User, Server, Code, Calendar, ExternalLink, Github, Play, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import { Typography, Box } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
    title: string;
    description: string;
    icon: LucideIcon;
    image?: string;
    link: string;
    githubLink?: string;
    techStack: string[];
    category: string;
}

interface ProjectImageProps {
    project: Project;
    index: number;
    isActive: boolean;
}

const ProjectImage: React.FC<ProjectImageProps> = ({ project, index, isActive }) => {
    const { title, icon: Icon, image, link } = project;

    return (
        <motion.div
            className={`project-image-item ${isActive ? 'active' : ''}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
        >
            <div className="mac-window">
                {/* Mac Window Header */}
                <div className="mac-window-header">
                    <div className="mac-window-controls">
                        <div className="mac-control close"></div>
                        <div className="mac-control minimize"></div>
                        <div className="mac-control maximize"></div>
                    </div>
                    <div className="mac-window-title">{title}</div>
                    <div className="mac-window-spacer"></div>
                </div>

                {/* Browser Address Bar */}
                <div className="mac-address-bar">
                    <div className="address-bar-content">
                        <div className="address-bar-icon">🔒</div>
                        <div className="address-bar-url">{link}</div>
                        <div className="address-bar-refresh">⟳</div>
                    </div>
                </div>

                {/* Image Content */}
                <div className="image-container">
                    {image ? (
                        <img src='https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt={title} className="project-img" />
                    ) : (
                        <div className="image-placeholder">
                            <Icon size={64} className="placeholder-icon" />
                        </div>
                    )}
                    {/* <motion.div
                        className="image-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isActive ? 0.85 : 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        <div className="overlay-content">
                            <Icon size={32} className="overlay-icon" />
                            <span className="image-title">{title}</span>
                        </div>
                    </motion.div> */}
                </div>
            </div>
        </motion.div>
    );
};

const projects = [
    {
        title: 'E-commerce Platform',
        description: 'A comprehensive e-commerce solution with advanced features like real-time inventory, payment integration, and admin analytics.',
        icon: Globe2,
        image: '/api/placeholder/600/400',
        link: 'https://github.com/vigneswariCoder/zestkart-frontend',
        githubLink: 'https://github.com/vigneswariCoder/zestkart-frontend',
        techStack: ['React', 'Redux', 'Spring Boot', 'MongoDB', 'JWT', 'Stripe'],
        category: 'Full-Stack Application'
    },
    {
        title: 'Playpuse Music Platform',
        description: 'An interactive music streaming interface with modern UI/UX design and responsive layouts for seamless music discovery.',
        icon: Headphones,
        image: '/api/placeholder/600/400',
        link: 'https://github.com/vigneswariCoder/playpuse',
        githubLink: 'https://github.com/vigneswariCoder/playpuse',
        techStack: ['React', 'Material-UI', 'CSS3', 'JavaScript', 'Responsive Design'],
        category: 'Frontend Application'
    },
    {
        title: 'Admin Dashboard',
        description: 'A comprehensive admin panel with data visualization, user management, and real-time analytics for business insights.',
        icon: Monitor,
        image: '/api/placeholder/600/400',
        link: 'https://github.com/vigneswariCoder/admin-dashboard',
        githubLink: 'https://github.com/vigneswariCoder/admin-dashboard',
        techStack: ['React', 'TypeScript', 'Chart.js', 'Tailwind CSS', 'Data Visualization'],
        category: 'Dashboard Application'
    },
    {
        title: 'Portfolio Website',
        description: 'A modern, responsive portfolio showcasing full-stack development skills with interactive animations and smooth user experience.',
        icon: User,
        image: '/api/placeholder/600/400',
        link: 'https://github.com/vigneswariCoder/portfolio',
        githubLink: 'https://github.com/vigneswariCoder/portfolio',
        techStack: ['React', 'Framer Motion', 'TypeScript', 'Material-UI', 'Responsive Design'],
        category: 'Personal Portfolio'
    },
    {
        title: 'Zestkart Backend API',
        description: 'A robust REST API with microservices architecture, JWT authentication, and comprehensive documentation for scalable applications.',
        icon: Server,
        image: '/api/placeholder/600/400',
        link: 'https://github.com/vigneswariCoder/zestkart-backend',
        githubLink: 'https://github.com/vigneswariCoder/zestkart-backend',
        techStack: ['Java', 'Spring Boot', 'MySQL', 'Docker', 'JWT', 'Microservices'],
        category: 'Backend API'
    },
    {
        title: 'Hall Booking System',
        description: 'A smart booking platform with calendar integration, payment processing, and automated notifications for efficient management.',
        icon: Calendar,
        image: '/api/placeholder/600/400',
        link: 'https://github.com/vigneswariCoder/hall-booking',
        githubLink: 'https://github.com/vigneswariCoder/hall-booking',
        techStack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Calendar API', 'Payment Gateway'],
        category: 'Booking Platform'
    }
];



function Projects() {
    const [activeProject, setActiveProject] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    const isScrollingRef = useRef(false);
    const scrollTimeoutRef = useRef<NodeJS.Timeout>();
    const lastUpdateRef = useRef(0);
    const manualNavigationRef = useRef(false);

    // Detect mobile devices
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Keyboard navigation for mobile
    useEffect(() => {
        if (!isMobile) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                const prevIndex = activeProject > 0 ? activeProject - 1 : projects.length - 1;
                setActiveProject(prevIndex);
                manualNavigationRef.current = true;
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                const nextIndex = activeProject < projects.length - 1 ? activeProject + 1 : 0;
                setActiveProject(nextIndex);
                manualNavigationRef.current = true;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isMobile, activeProject, projects.length]);

    // Touch navigation for mobile
    useEffect(() => {
        if (!isMobile || !containerRef.current) return;

        let startX = 0;
        let startY = 0;

        const handleTouchStart = (e: TouchEvent) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        };

        const handleTouchEnd = (e: TouchEvent) => {
            if (!startX || !startY) return;

            const endX = e.changedTouches[0].clientX;
            const endY = e.changedTouches[0].clientY;
            const diffX = startX - endX;
            const diffY = startY - endY;

            // Only trigger if horizontal swipe is more significant than vertical
            if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
                if (diffX > 0) {
                    // Swipe left - next project
                    goToNextProject();
                } else {
                    // Swipe right - previous project
                    goToPrevProject();
                }
            }

            startX = 0;
            startY = 0;
        };

        const container = containerRef.current;
        container.addEventListener('touchstart', handleTouchStart, { passive: true });
        container.addEventListener('touchend', handleTouchEnd, { passive: true });

        return () => {
            container.removeEventListener('touchstart', handleTouchStart);
            container.removeEventListener('touchend', handleTouchEnd);
        };
    }, [isMobile]);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current || manualNavigationRef.current) return;

            // Clear existing timeout
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }

            // Set scrolling flag
            isScrollingRef.current = true;

            // Get viewport center
            const viewportHeight = window.innerHeight;
            const viewportCenter = viewportHeight / 2;

            let newActiveIndex = 0;
            let minDistance = Infinity;

            // Check each project's position
            projectRefs.current.forEach((ref, index) => {
                if (ref) {
                    const rect = ref.getBoundingClientRect();
                    const elementCenter = rect.top + rect.height / 2;
                    const distance = Math.abs(elementCenter - viewportCenter);

                    // Add threshold to prevent rapid switching
                    const threshold = 50;

                    if (distance < minDistance - threshold) {
                        minDistance = distance;
                        newActiveIndex = index;
                    }
                }
            });

            // Only update if the project actually changed and enough time has passed
            const now = Date.now();
            if (newActiveIndex !== activeProject && now - lastUpdateRef.current > 100) {
                lastUpdateRef.current = now;
                setIsTransitioning(true);
                setActiveProject(newActiveIndex);

                // Reset transition state after animation
                setTimeout(() => setIsTransitioning(false), 400);
            }

            // Set timeout to detect end of scrolling
            scrollTimeoutRef.current = setTimeout(() => {
                isScrollingRef.current = false;
                manualNavigationRef.current = false;
            }, 100);
        };

        // Throttle scroll events for better performance
        let ticking = false;
        const throttledScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', throttledScroll, { passive: true });
        handleScroll(); // Initial call

        return () => {
            window.removeEventListener('scroll', throttledScroll);
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }
        };
    }, [activeProject]);

    // Use Intersection Observer for even better performance
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (isScrollingRef.current) {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                            const index = projectRefs.current.findIndex(ref => ref === entry.target);
                            if (index !== -1 && index !== activeProject) {
                                setActiveProject(index);
                            }
                        }
                    });
                }
            },
            {
                threshold: [0.3, 0.5, 0.7],
                rootMargin: '-20% 0px -20% 0px'
            }
        );

        projectRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, [activeProject]);

    const currentProject = projects[activeProject];

    // Manual navigation functions
    const goToNextProject = () => {
        manualNavigationRef.current = true;
        const nextIndex = activeProject < projects.length - 1 ? activeProject + 1 : 0;
        setActiveProject(nextIndex);
        setIsTransitioning(true);
        setTimeout(() => setIsTransitioning(false), 400);
    };

    const goToPrevProject = () => {
        manualNavigationRef.current = true;
        const prevIndex = activeProject > 0 ? activeProject - 1 : projects.length - 1;
        setActiveProject(prevIndex);
        setIsTransitioning(true);
        setTimeout(() => setIsTransitioning(false), 400);
    };

    const goToProject = (index: number) => {
        manualNavigationRef.current = true;
        setActiveProject(index);
        setIsTransitioning(true);
        setTimeout(() => setIsTransitioning(false), 400);
        if (!isMobile) {
            projectRefs.current[index]?.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    };

    return (
        <Box
            id='projects'
            sx={{
                backgroundColor: '#000000',
                minHeight: '100vh',
                position: 'relative',
                paddingTop: '4rem'
            }}
        >
            {/* Header Section */}
            <motion.div
                className="projects-header"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
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

            {/* Split Layout */}
            <div className="projects-split-container" ref={containerRef}>
                {/* Left Side - Scrolling Images */}
                <div className="projects-images-section">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            ref={(el) => (projectRefs.current[index] = el)}
                            className="project-image-wrapper"
                        >
                            <ProjectImage
                                project={project}
                                index={index}
                                isActive={activeProject === index}
                            />
                        </div>
                    ))}
                </div>

                {/* Right Side - Fixed Content */}
                <div className="projects-content-section">
                    <div className="content-sticky">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeProject}
                                className="project-details"
                                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                                transition={{
                                    duration: 0.4,
                                    ease: [0.4, 0.0, 0.2, 1],
                                    type: "tween"
                                }}
                            >
                                <div className="project-meta">
                                    <span className="project-number">
                                        {String(activeProject + 1).padStart(2, '0')}
                                    </span>
                                    <span className="project-category">
                                        {currentProject.category}
                                    </span>
                                </div>

                                <h3 className="project-title">
                                    {currentProject.title}
                                </h3>

                                <p className="project-description">
                                    {currentProject.description}
                                </p>

                                <div className="project-tech-stack">
                                    <span className="tech-label">Tech Stack:</span>
                                    <div className="tech-list">
                                        {currentProject.techStack.map((tech, index) => (
                                            <span key={index} className="tech-item">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="project-actions">
                                    <motion.a
                                        href={currentProject.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="action-button primary"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <ExternalLink size={20} />
                                        View Project
                                    </motion.a>
                                    {currentProject.githubLink && (
                                        <motion.a
                                            href={currentProject.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="action-button secondary"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Github size={20} />
                                            View Code
                                        </motion.a>
                                    )}
                                </div>

                                <div className="project-navigation">
                                    {isMobile && (
                                        <div className="project-counter">
                                            <span className="counter-text">
                                                {activeProject + 1} / {projects.length}
                                            </span>
                                        </div>
                                    )}
                                    <div className="nav-controls">
                                        {isMobile && (
                                            <button
                                                className="nav-arrow prev"
                                                onClick={goToPrevProject}
                                                disabled={projects.length <= 1}
                                                aria-label="Previous project"
                                            >
                                                <ChevronLeft size={20} />
                                            </button>
                                        )}

                                        <div className="nav-dots">
                                            {projects.map((_, index) => (
                                                <button
                                                    key={index}
                                                    className={`nav-dot ${index === activeProject ? 'active' : ''}`}
                                                    onClick={() => goToProject(index)}
                                                    aria-label={`Go to project ${index + 1}`}
                                                />
                                            ))}
                                        </div>

                                        {isMobile && (
                                            <button
                                                className="nav-arrow next"
                                                onClick={goToNextProject}
                                                disabled={projects.length <= 1}
                                                aria-label="Next project"
                                            >
                                                <ChevronRight size={20} />
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Split Screen Layout Styles */}
            <style>{`
                .projects-header {
                    text-align: center;
                    // padding: 2rem;
                    max-width: 1200px;
                    margin: 0 auto;
                    position: relative;
                    z-index: 10;
                    background: linear-gradient(180deg, #000000 0%, #000000 80%, transparent 100%);
                }

                .projects-main-title {
                    fontSize: clamp(2rem, 5vw, 3rem);
                    fontWeight: bold;
                    background: linear-gradient(to right, #34d399, #3b82f6);
                    WebkitBackgroundClip: text;
                    color: transparent;
                    marginBottom: 2;
                }

                .projects-subtitle {
                    color: #d1d5db;
                    fontSize: clamp(16px, 3vw, 18px);
                    lineHeight: 1.5;
                }

                .section-badge {
                    display: inline-block;
                    padding: 8px 16px;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 24px;
                    font-size: 0.75rem;
                    font-weight: 600;
                    color: #94a3b8;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    margin-bottom: 1.5rem;
                    backdrop-filter: blur(8px);
                }

                .section-title {
                    font-size: clamp(2rem, 4vw, 3rem);
                    font-weight: 300;
                    color: #f8fafc;
                    margin: 0;
                    line-height: 1.2;
                }

                .projects-split-container {
                    display: flex;
                    min-height: 200vh;
                    position: relative;
                    scroll-behavior: smooth;
                }

                .projects-images-section {
                    flex: 1;
                    padding: 2rem;
                }

                .project-image-wrapper {
                    height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 2rem 0;
                }

                .project-image-wrapper:first-child {
                    padding-top: 4rem;
                }

                .project-image-item {
                    width: 100%;
                    max-width: 700px;
                    height: 450px;
                    position: relative;
                    transition: all 0.8s cubic-bezier(0.4, 0.0, 0.2, 1);
                    transform-origin: center;
                }

                .project-image-item.active {
                    transform: scale(1.05);
                    z-index: 2;
                }

                .project-image-item:not(.active) {
                    transform: scale(0.95);
                    opacity: 0.8;
                }

                .mac-window {
                    width: 100%;
                    height: 100%;
                    background: #1c1c1e;
                    border-radius: 16px;
                    overflow: hidden;
                    box-shadow: 
                        0 32px 64px rgba(0, 0, 0, 0.6),
                        0 8px 32px rgba(0, 0, 0, 0.4),
                        0 0 0 1px rgba(255, 255, 255, 0.08),
                        inset 0 1px 0 rgba(255, 255, 255, 0.1);
                    position: relative;
                    backdrop-filter: blur(20px);
                }

                .mac-window-header {
                    height: 40px;
                    background: rgba(28, 28, 30, 0.95);
                    backdrop-filter: blur(20px);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
                    display: flex;
                    align-items: center;
                    padding: 0 16px;
                    position: relative;
                }

                .mac-window-controls {
                    display: flex;
                    gap: 8px;
                    align-items: center;
                }

                .mac-control {
                    width: 13px;
                    height: 13px;
                    border-radius: 50%;
                    position: relative;
                    transition: all 0.2s ease;
                    cursor: pointer;
                }

                .mac-control:hover {
                    transform: scale(1.1);
                }

                .mac-control.close {
                    background: linear-gradient(135deg, #ff6b6b, #ee5a52);
                    box-shadow: 0 2px 8px rgba(255, 107, 107, 0.3);
                }

                .mac-control.minimize {
                    background: linear-gradient(135deg, #ffd93d, #ffcd02);
                    box-shadow: 0 2px 8px rgba(255, 217, 61, 0.3);
                }

                .mac-control.maximize {
                    background: linear-gradient(135deg, #6bcf7f, #57bb69);
                    box-shadow: 0 2px 8px rgba(107, 207, 127, 0.3);
                }

                .mac-window-title {
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    font-size: 14px;
                    font-weight: 600;
                    color: #ffffff;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    max-width: 250px;
                    letter-spacing: -0.2px;
                }

                .mac-window-spacer {
                    flex: 1;
                }

                .mac-address-bar {
                    height: 48px;
                    background: rgba(44, 44, 46, 0.95);
                    backdrop-filter: blur(20px);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
                    display: flex;
                    align-items: center;
                    padding: 0 20px;
                }

                .address-bar-content {
                    width: 100%;
                    height: 32px;
                    background: rgba(58, 58, 60, 0.8);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    padding: 0 14px;
                    gap: 10px;
                    backdrop-filter: blur(10px);
                    transition: all 0.2s ease;
                }

                .address-bar-content:hover {
                    background: rgba(58, 58, 60, 0.9);
                    border-color: rgba(255, 255, 255, 0.15);
                }

                .address-bar-icon {
                    font-size: 13px;
                    color: #00d4aa;
                    filter: drop-shadow(0 0 4px rgba(0, 212, 170, 0.3));
                }

                .address-bar-url {
                    flex: 1;
                    font-size: 13px;
                    color: #e5e5e7;
                    font-family: 'SF Mono', 'Monaco', 'Menlo', monospace;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    font-weight: 400;
                    letter-spacing: -0.1px;
                }

                .address-bar-refresh {
                    font-size: 16px;
                    color: #8e8e93;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    padding: 2px;
                    border-radius: 4px;
                }

                .address-bar-refresh:hover {
                    color: #ffffff;
                    background: rgba(255, 255, 255, 0.1);
                    transform: rotate(45deg);
                }

                .image-container {
                    width: 100%;
                    height: calc(100% - 88px);
                    position: relative;
                    overflow: hidden;
                    background: #000000;
                    border-radius: 0 0 16px 16px;
                }

                .project-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.6s ease;
                }

                .image-placeholder {
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(135deg, #1a1a1c, #2c2c2e);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    gap: 1.5rem;
                    position: relative;
                }

                .image-placeholder::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(circle at 30% 20%, rgba(0, 212, 170, 0.1) 0%, transparent 50%),
                                radial-gradient(circle at 70% 80%, rgba(255, 107, 107, 0.08) 0%, transparent 50%);
                    pointer-events: none;
                }

                .placeholder-icon {
                    color: #8e8e93;
                    filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3));
                    z-index: 1;
                    position: relative;
                }

                .image-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(135deg, 
                        rgba(0, 0, 0, 0.85) 0%, 
                        rgba(28, 28, 30, 0.8) 50%, 
                        rgba(0, 0, 0, 0.9) 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    gap: 1.5rem;
                    backdrop-filter: blur(8px) saturate(1.2);
                    border-radius: 0 0 16px 16px;
                }

                .overlay-content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1.5rem;
                    text-align: center;
                    z-index: 2;
                }

                .overlay-icon {
                    color: #ffffff;
                    filter: drop-shadow(0 4px 16px rgba(255, 255, 255, 0.2));
                    animation: pulse 2s ease-in-out infinite;
                }

                @keyframes pulse {
                    0%, 100% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.05); opacity: 0.9; }
                }

                .image-title {
                    color: #ffffff;
                    font-size: 1.4rem;
                    font-weight: 700;
                    text-align: center;
                    letter-spacing: -0.3px;
                    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
                    background: linear-gradient(135deg, #ffffff, #e5e5e7);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .projects-content-section {
                    flex: 1;
                    position: relative;
                }

                .content-sticky {
                    position: sticky;
                    top: calc(100vh - 88vh);
                    padding: 3rem;
                    height: fit-content;
                    max-height: 80vh;
                    display: flex;
                    align-items: flex-start;
                    padding-top: 4rem;
                }

                .project-details {
                    will-change: transform, opacity;
                }

                .project-meta {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    margin-bottom: 1.5rem;
                }

                .project-number {
                    font-size: 3rem;
                    font-weight: 200;
                    color: rgba(255, 255, 255, 0.3);
                    line-height: 1;
                }

                .project-category {
                    font-size: 0.875rem;
                    color: #64748b;
                    background: rgba(100, 116, 139, 0.1);
                    padding: 6px 12px;
                    border-radius: 20px;
                    border: 1px solid rgba(100, 116, 139, 0.2);
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    font-weight: 500;
                }

                .project-title {
                    font-size: 2.5rem;
                    font-weight: 300;
                    color: #f8fafc;
                    margin: 0 0 1.5rem 0;
                    line-height: 1.2;
                }

                .project-description {
                    color: #94a3b8;
                    font-size: 1.1rem;
                    line-height: 1.7;
                    margin-bottom: 2rem;
                }

                .project-tech-stack {
                    margin-bottom: 2.5rem;
                }

                .tech-label {
                    color: #cbd5e1;
                    font-size: 0.875rem;
                    font-weight: 600;
                    display: block;
                    margin-bottom: 0.75rem;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                .tech-list {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                }

                .tech-item {
                    font-size: 0.875rem;
                    color: #e2e8f0;
                    background: rgba(148, 163, 184, 0.1);
                    border: 1px solid rgba(148, 163, 184, 0.2);
                    padding: 6px 12px;
                    border-radius: 12px;
                    font-weight: 500;
                }

                .project-actions {
                    display: flex;
                    gap: 1rem;
                    margin-bottom: 3rem;
                }

                .action-button {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    padding: 12px 24px;
                    border-radius: 12px;
                    font-size: 0.95rem;
                    font-weight: 600;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    border: none;
                    cursor: pointer;
                }

                .action-button.primary {
                    background: #f8fafc;
                    color: #0f172a;
                }

                .action-button.primary:hover {
                    background: #e2e8f0;
                    box-shadow: 0 8px 25px rgba(248, 250, 252, 0.2);
                }

                .action-button.secondary {
                    background: rgba(248, 250, 252, 0.05);
                    color: #f8fafc;
                    border: 1px solid rgba(248, 250, 252, 0.15);
                }

                .action-button.secondary:hover {
                    background: rgba(248, 250, 252, 0.1);
                    border-color: rgba(248, 250, 252, 0.3);
                }

                .project-navigation {
                    margin-top: auto;
                }

                .project-counter {
                    text-align: center;
                    margin-bottom: 1rem;
                }

                .counter-text {
                    color: rgba(255, 255, 255, 0.6);
                    font-size: 0.875rem;
                    font-weight: 500;
                    letter-spacing: 0.5px;
                }

                .nav-controls {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 1.5rem;
                }

                @media (min-width: 769px) {
                    .nav-controls {
                        justify-content: center;
                    }
                }

                @media (max-width: 768px) {
                    .nav-controls {
                        justify-content: space-between;
                        width: 100%;
                        max-width: 300px;
                        margin: 0 auto;
                    }
                }

                .nav-arrow {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    border: 2px solid rgba(255, 255, 255, 0.2);
                    background: rgba(255, 255, 255, 0.05);
                    color: rgba(255, 255, 255, 0.7);
                    cursor: pointer;
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    backdrop-filter: blur(10px);
                }

                .nav-arrow:hover:not(:disabled) {
                    border-color: #10d9c4;
                    background: rgba(16, 217, 196, 0.1);
                    color: #10d9c4;
                    transform: scale(1.1);
                }

                .nav-arrow:disabled {
                    opacity: 0.3;
                    cursor: not-allowed;
                }

                .nav-dots {
                    display: flex;
                    gap: 0.75rem;
                    align-items: center;
                }

                .nav-dot {
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    border: 2px solid rgba(255, 255, 255, 0.3);
                    background: transparent;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    padding: 0;
                }

                .nav-dot.active {
                    background: #f8fafc;
                    border-color: #f8fafc;
                    transform: scale(1.2);
                }

                .nav-dot:hover:not(.active) {
                    border-color: rgba(255, 255, 255, 0.6);
                    transform: scale(1.1);
                }

                @media (max-width: 1024px) {
                    .projects-header {
                        padding: 1rem;
                        background: linear-gradient(180deg, #000000 0%, #000000 90%, transparent 100%);
                    }

                    .projects-split-container {
                        flex-direction: column;
                        min-height: auto;
                        margin-top: 2rem;
                        padding-top: 1rem;
                    }

                    .projects-images-section {
                        padding: 1rem;
                    }

                    .project-image-wrapper {
                        height: 60vh;
                        padding: 1rem 0;
                    }

                    .project-image-wrapper:first-child {
                        padding-top: 2rem;
                    }
                    .content-sticky {
                        position: relative;
                        top: auto;
                        padding: 2rem;
                        padding-top: 2rem;
                        max-height: none;
                        display: block;
                        align-items: flex-start;
                    }

                    .project-title {
                        font-size: 2rem;
                    }

                    .project-number {
                        font-size: 2rem;
                    }
                }

                @media (max-width: 768px) {
                    .projects-header {
                        padding: 1rem;
                        background: linear-gradient(180deg, #000000 0%, #000000 95%, transparent 100%);
                    }

                    .projects-split-container {
                        margin-top: 1rem;
                        padding-top: 0.5rem;
                    }

                    .projects-images-section {
                        display: none !important;
                    }

                    .projects-content-section {
                        flex: 1;
                        width: 100%;
                    }

                    .project-image-wrapper {
                        height: 50vh;
                    }

                    .project-image-wrapper:first-child {
                        padding-top: 1rem;
                    }

                    .project-image-item {
                        height: 320px;
                        max-width: 600px;
                    }

                    .mac-window-header {
                        height: 36px;
                        padding: 0 14px;
                    }

                    .mac-control {
                        width: 12px;
                        height: 12px;
                    }

                    .mac-window-title {
                        max-width: 180px;
                        font-size: 13px;
                        font-weight: 600;
                    }

                    .mac-address-bar {
                        height: 44px;
                        padding: 0 16px;
                    }

                    .address-bar-content {
                        height: 30px;
                        padding: 0 12px;
                        border-radius: 8px;
                    }

                    .address-bar-url {
                        font-size: 12px;
                    }

                    .image-container {
                        height: calc(100% - 80px);
                    }

                    .content-sticky {
                        padding: 1.5rem;
                        padding-top: 1.5rem;
                    }

                    .project-title {
                        font-size: 1.75rem;
                    }

                    .project-meta {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 0.75rem;
                    }

                    .project-actions {
                        flex-direction: column;
                        gap: 0.75rem;
                    }

                    .action-button {
                        justify-content: center;
                    }

                    .nav-controls {
                        gap: 1rem;
                    }

                    .nav-arrow {
                        width: 36px;
                        height: 36px;
                    }
                }

                @media (max-width: 480px) {
                    .project-image-wrapper {
                        height: 40vh;
                    }

                    .project-image-item {
                        height: 280px;
                        max-width: 100%;
                    }

                    .mac-window-header {
                        height: 34px;
                        padding: 0 12px;
                    }

                    .mac-control {
                        width: 11px;
                        height: 11px;
                    }

                    .mac-window-title {
                        font-size: 12px;
                        max-width: 140px;
                        font-weight: 600;
                    }

                    .mac-address-bar {
                        height: 40px;
                        padding: 0 14px;
                    }

                    .address-bar-content {
                        height: 28px;
                        padding: 0 10px;
                        border-radius: 8px;
                    }

                    .address-bar-icon {
                        font-size: 11px;
                    }

                    .address-bar-url {
                        font-size: 10px;
                    }

                    .address-bar-refresh {
                        font-size: 14px;
                    }

                    .image-container {
                        height: calc(100% - 74px);
                    }

                    .image-title {
                        font-size: 1.1rem;
                    }

                    .content-sticky {
                        padding: 1rem;
                    }

                    .project-title {
                        font-size: 1.5rem;
                    }

                    .nav-controls {
                        gap: 0.8rem;
                    }

                    .nav-arrow {
                        width: 32px;
                        height: 32px;
                    }

                    .nav-dots {
                        gap: 0.5rem;
                    }

                    .nav-dot {
                        width: 10px;
                        height: 10px;
                    }

                    .project-navigation {
                        padding: 1rem 0;
                    }
                }
            `}</style>
        </Box>
    );
}

export default Projects;