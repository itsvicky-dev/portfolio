import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin, Mail, ArrowRight, ArrowDown } from 'lucide-react';
import heroImg from '../assets/images/hero-img.png';

const socials = [
  { Icon: Github, href: 'https://github.com/itsvicky-dev', label: 'GitHub' },
  { Icon: Linkedin, href: 'https://linkedin.com/in/vigneswaris', label: 'LinkedIn' },
  { Icon: Instagram, href: 'https://instagram.com/im_vi.ki', label: 'Instagram' },
  { Icon: Mail, href: 'mailto:vigneswari.coder@gmail.com', label: 'Email' },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-white pb-20 pt-32 dark:bg-black"
    >
      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-6 md:grid-cols-12 md:gap-8 md:px-8">
        <div className="md:col-span-7">
          <motion.p
            {...fadeUp}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-wine-900/60 dark:text-white/50"
          >
            <span className="h-px w-10 bg-black dark:bg-white" />
            Full Stack Developer
          </motion.p>

          <motion.h1
            {...fadeUp}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="whitespace-nowrap font-sans text-4xl font-black leading-[0.95] tracking-tight text-black dark:text-white sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Vigneswari
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 max-w-lg text-base leading-relaxed text-wine-900/60 dark:text-stone-400 sm:text-lg"
          >
            I build full-stack and AI-powered web applications — <strong className="font-semibold text-black dark:text-white">3+ years</strong> shipping
            production software with React, Node.js, and cloud-native architectures.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary group">
              Resume
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-ghost group"
            >
              View Work
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-10 flex items-center gap-3"
          >
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 text-black transition-all duration-300 hover:border-black hover:bg-black hover:text-white dark:border-white/15 dark:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-black"
              >
                <Icon size={16} />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="relative md:col-span-5"
        >
          <div className="group relative mx-auto aspect-[4/5] w-full max-w-sm bg-neutral-100 dark:border-white/10 dark:bg-neutral-950">
            <img
              src={heroImg}
              alt="Portrait of Vigneswari"
              className="h-full w-full object-cover grayscale "
            />
            <span className="pointer-events-none absolute -top-1.5 -left-3 bottom-1.5 right-3 border border-black/30 transition-all duration-500 ease-out group-hover:-top-3 group-hover:-left-4 group-hover:bottom-3 group-hover:right-4 group-hover:border-black/50 dark:border-white/30 dark:group-hover:border-white/50" />
            <span className="pointer-events-none absolute top-1.5 left-1.5 -bottom-2.5 -right-1 border border-black/15 transition-all delay-100 duration-700 ease-out group-hover:top-3 group-hover:left-3 group-hover:-bottom-4 group-hover:-right-2 group-hover:border-black/30 dark:border-white/15 dark:group-hover:border-white/30" />
          </div>
          {/* <span className="absolute -bottom-4 left-1/2 w-max -translate-x-1/2 whitespace-nowrap border border-black bg-white px-5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-black dark:border-white dark:bg-black dark:text-white sm:text-xs sm:tracking-[0.2em]">
            Let&apos;s Build Something
          </span> */}
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Scroll to About"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-wine-900/40 transition-colors hover:text-black dark:text-white/40 dark:hover:text-white sm:flex"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.3em]">Scroll</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}>
          <ArrowDown size={14} />
        </motion.span>
      </motion.button>
    </section>
  );
};

export default Hero;
