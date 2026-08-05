import { useState, useMemo } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  image?: string;
  link: string;
  githubLink?: string;
  techStack: string[];
  category: string;
}

const imageRatios = ['aspect-[3/4]', 'aspect-[4/5]', 'aspect-square', 'aspect-[3/4]', 'aspect-[4/5]', 'aspect-square'];
const tilts = ['hover:-rotate-1', 'hover:rotate-1', 'hover:rotate-0', 'hover:rotate-1', 'hover:-rotate-1', 'hover:rotate-0'];

const projects: Project[] = [
  {
    title: 'Nuvue - Social Media Application',
    description:
      'A full-featured social media platform inspired by Instagram, architected end-to-end with a Next.js/TypeScript frontend and a Node.js/Express backend. Implements real-time interactions via WebSocket, JWT-based authentication, and Redux-driven state management to power posts, comments, likes, reels, and stories at scale.',
    image: '/images/projects/nuvue.png',
    link: 'https://nuvuelive.vercel.app/',
    githubLink: 'https://github.com/itsvicky-dev/nuvue',
    techStack: ['Next.js', 'Typescript', 'Redux', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Websocket'],
    category: 'Full-Stack Application',
  },
  {
    title: 'Chatio - Chat Application',
    description:
      'A real-time messaging application supporting one-to-one and group conversations, media sharing, and live presence indicators. Built on a WebSocket-based messaging layer with JWT authentication and MongoDB persistence.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: 'https://github.com/itsvicky-dev/chatio',
    githubLink: 'https://github.com/itsvicky-dev/chatio',
    techStack: ['React.js', 'Typescript', 'Redux', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Websocket'],
    category: 'Full-Stack Application',
  },
  {
    title: 'Zestkart - E-commerce Application',
    description:
      'A full-featured e-commerce platform pairing a React/Redux storefront with a Java Spring Boot backend. Real-time inventory tracking, secure JWT checkout flows, and an admin analytics dashboard.',
    image: '/images/projects/zestkart.png',
    link: 'https://github.com/itsvicky-dev/zestkart-frontend',
    githubLink: 'https://github.com/itsvicky-dev/zestkart-frontend',
    techStack: ['React', 'Redux', 'Spring Boot', 'MongoDB', 'JWT'],
    category: 'Full-Stack Application',
  },
  {
    title: 'Nextflix - Netflix UI Clone',
    description:
      'A pixel-accurate, Netflix-inspired streaming interface. Recreates hero carousels, responsive movie grids, and a cinematic theme to showcase advanced component architecture and animation.',
    image: '/images/projects/nextflix.png',
    link: 'https://musify-music.onrender.com',
    githubLink: 'https://github.com/itsvicky-dev/playpuse',
    techStack: ['React', 'Material-UI', 'CSS3', 'JavaScript', 'Responsive Design'],
    category: 'Frontend Application',
  },
  {
    title: 'Meal Memoirs Website',
    description:
      'A polished marketing landing page for a food-focused brand. Combines Material-UI theming with custom scroll-triggered animations for a fast, conversion-focused experience.',
    image: '/images/projects/meal-memoirs.png',
    link: 'https://meal-memoirs.onrender.com',
    githubLink: 'https://github.com/itsvicky-dev/meal-memoirs',
    techStack: ['React', 'Framer Motion', 'TypeScript', 'Material-UI', 'Responsive Design'],
    category: 'Personal Portfolio',
  },
  {
    title: 'Lumo Craft - Landing Page',
    description:
      'A modern landing page for a game development studio, built for near-instant load times with a component-driven architecture built for scalability and easy content updates.',
    image: '/images/projects/lumocraft.png',
    link: 'https://lumocraft.onrender.com',
    githubLink: 'https://github.com/itsvicky-dev/lumo-craft',
    techStack: ['React', 'Material-UI', 'CSS3', 'JavaScript', 'Responsive Design'],
    category: 'Frontend Application',
  },
];

function ProjectCard({
  project,
  index,
  hoveredIndex,
  onHover,
}: {
  project: Project;
  index: number;
  hoveredIndex: number | null;
  onHover: (index: number | null) => void;
}) {
  const ratio = imageRatios[index % imageRatios.length];
  const tilt = tilts[index % tilts.length];
  const isHovered = hoveredIndex === index;
  const isDimmed = hoveredIndex !== null && !isHovered;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: isDimmed ? 0.12 : 1, y: 0, scale: isDimmed ? 0.97 : 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: isDimmed ? 0.12 : 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      style={{ pointerEvents: isDimmed ? 'none' : 'auto' }}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      className={`group relative mb-6 inline-block w-full break-inside-avoid overflow-hidden rounded-2xl border border-black/10 align-top transition-[opacity,transform,box-shadow,border-color] duration-500 ease-out hover:z-10 ${tilt} hover:border-black hover:shadow-[0_24px_60px_-20px_rgba(0,0,0,0.4)] dark:border-white/10 dark:hover:border-white dark:hover:shadow-[0_24px_60px_-20px_rgba(255,255,255,0.15)]`}
    >
      <div
        className={`relative overflow-hidden transition-[aspect-ratio] duration-500 ease-in-out ${isHovered ? '' : ratio}`}
        style={isHovered ? { aspectRatio: '16 / 9' } : undefined}
      >
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/0 transition-opacity duration-500" />

        {/* full-card link so the poster itself is clickable */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title}`}
          className="absolute inset-0 z-10"
        />

        {/* vertical category ribbon */}
        <div className="absolute inset-y-0 left-0 z-20 flex w-9 items-center justify-center border-r border-white/10 bg-black/40 backdrop-blur-sm">
          <span
            className="pointer-events-none whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.25em] text-white/70"
            style={{ writingMode: 'vertical-rl' }}
          >
            {project.category}
          </span>
        </div>

        <span className="pointer-events-none absolute right-4 top-4 z-20 text-xs font-bold tracking-[0.15em] text-white/60">
          {String(index + 1).padStart(2, '0')}
        </span>

        <div className="absolute inset-x-0 bottom-0 z-20 p-5 pl-12 sm:p-6 sm:pl-14">
          <h3 className="text-lg font-bold leading-tight text-white sm:text-xl">{project.title}</h3>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isHovered && (
          <motion.div
            key="details"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="overflow-hidden bg-white dark:bg-black"
          >
            <div className="p-5 sm:p-6">
              <p className="mb-4 text-sm leading-relaxed text-wine-900/70 dark:text-stone-300">
                {project.description}
              </p>

              <div className="mb-4 flex flex-wrap gap-1.5">
                {project.techStack.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-black/15 bg-black/5 px-2.5 py-1 text-[10px] font-medium text-wine-900/80 dark:border-white/20 dark:bg-white/10 dark:text-stone-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-black transition-opacity hover:opacity-70 dark:text-white"
                >
                  <ExternalLink size={13} />
                  View Project
                </a>
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-wine-900/60 transition-opacity hover:opacity-70 dark:text-stone-400"
                  >
                    <Github size={13} />
                    Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

function Projects() {
  const [active, setActive] = useState('All');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (active === 'All' ? projects : projects.filter((p) => p.category === active)),
    [active],
  );

  return (
    <section id="projects" className="relative bg-white py-24 dark:bg-black sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-3xl px-6 text-center md:px-8"
      >
        <p className="section-eyebrow mb-4 justify-center">Selected Work</p>
        <h2 className="font-sans text-4xl font-black text-black dark:text-white sm:text-5xl">
          Featured Projects
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-wine-900/60 dark:text-stone-400">
          Full-stack and frontend projects demonstrating production-grade architecture, from real-time systems to
          e-commerce platforms
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mx-auto mb-12 mt-10 flex max-w-6xl flex-wrap justify-center gap-2 px-6 md:px-8"
      >
        {/* {categories.map((cat) => {
          const isActive = active === cat;
          return (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] transition-all duration-300 ${
                isActive
                  ? 'border-black bg-black text-white dark:border-white dark:bg-white dark:text-black'
                  : 'border-black/15 text-wine-900/60 hover:border-black hover:text-black dark:border-white/15 dark:text-stone-400 dark:hover:border-white dark:hover:text-white'
              }`}
            >
              {cat}
            </button>
          );
        })} */}
      </motion.div>

      <div className="mx-auto max-w-6xl columns-1 px-6 sm:columns-2 sm:gap-6 xl:columns-3 md:px-8">
        <AnimatePresence>
          {filtered.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              hoveredIndex={hoveredIndex}
              onHover={setHoveredIndex}
            />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Projects;
