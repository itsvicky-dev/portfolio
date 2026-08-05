import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Bot, Workflow, Sparkles, Webhook, GitBranch } from 'lucide-react';

interface Tech {
  name: string;
  icon: ReactNode;
  invertOnDark?: boolean;
}

const devicon = (slug: string, alt: string) => (
  <img
    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-original.svg`}
    alt={alt}
    width={24}
    height={24}
    loading="lazy"
  />
);

const techStacks: Record<string, Tech[]> = {
  Frontend: [
    { name: 'JavaScript', icon: devicon('javascript', 'JavaScript') },
    { name: 'TypeScript', icon: devicon('typescript', 'TypeScript') },
    { name: 'React', icon: devicon('react', 'React') },
    { name: 'Next.js', icon: devicon('nextjs', 'Next.js'), invertOnDark: true },
    { name: 'Redux', icon: devicon('redux', 'Redux') },
    { name: 'Tailwind CSS', icon: devicon('tailwindcss', 'Tailwind CSS') },
    { name: 'Material-UI', icon: devicon('materialui', 'Material-UI') },
  ],
  Backend: [
    { name: 'Node.js', icon: devicon('nodejs', 'Node.js') },
    { name: 'Express.js', icon: devicon('express', 'Express.js'), invertOnDark: true },
    // { name: 'Java', icon: devicon('java', 'Java') },
    // { name: 'Spring Boot', icon: devicon('spring', 'Spring Boot') },
    { name: 'REST APIs', icon: <Webhook size={24} className="text-black dark:text-white" /> },
  ],
  'AI & ML': [
    { name: 'OpenAI API', icon: <Bot size={24} className="text-black dark:text-white" /> },
    // { name: 'LangChain', icon: <Workflow size={24} className="text-black dark:text-white" /> },
    { name: 'Prompt Engineering', icon: <Sparkles size={24} className="text-black dark:text-white" /> },
  ],
  'Databases & Cloud': [
    { name: 'MySQL', icon: devicon('mysql', 'MySQL') },
    { name: 'MongoDB', icon: devicon('mongodb', 'MongoDB') },
    { name: 'Microsoft Azure', icon: devicon('azure', 'Microsoft Azure') },
    { name: 'Docker', icon: devicon('docker', 'Docker') },
    { name: 'Git', icon: devicon('git', 'Git') },
    { name: 'CI/CD Pipelines', icon: <GitBranch size={24} className="text-black dark:text-white" /> },
  ],
  Tools: [
    { name: 'VS Code', icon: devicon('vscode', 'VS Code') },
    { name: 'Figma', icon: devicon('figma', 'Figma') },
    { name: 'Postman', icon: devicon('postman', 'Postman') },
  ],
};

const rows = Object.entries(techStacks);

function TechPill({ tech }: { tech: Tech }) {
  return (
    <div className="flex shrink-0 items-center gap-2.5 border border-black/10 bg-white px-4 py-2.5 dark:border-white/10 dark:bg-black">
      <div className={`flex h-6 w-6 items-center justify-center ${tech.invertOnDark ? 'dark:invert' : ''}`}>{tech.icon}</div>
      <span className="whitespace-nowrap text-sm font-semibold text-black dark:text-white">{tech.name}</span>
    </div>
  );
}

function SkillRow({ category, techs, index }: { category: string; techs: Tech[]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="flex flex-col gap-4 border-t border-black/10 py-4 first:border-t-0 dark:border-white/10 sm:flex-row sm:items-center sm:gap-6"
    >
      <span className="w-32 shrink-0 text-xs font-bold uppercase tracking-[0.15em] text-black/40 dark:text-white/40 sm:w-40">
        {category}
      </span>

      <div className="flex flex-1 flex-wrap gap-3">
        {techs.map((tech) => (
          <TechPill key={tech.name} tech={tech} />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-neutral-50 py-24 dark:bg-black sm:py-32">
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <p className="section-eyebrow mb-4 justify-center">Toolkit</p>
          <h2 className="font-serif text-4xl font-bold sm:text-5xl">
            <span className="gradient-text">Technical Expertise</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-wine-900/60 dark:text-stone-400">
            A production-tested toolkit spanning full-stack development, cloud deployment, and AI integration
          </p>
        </motion.div>

        <div className="border-b border-black/10 dark:border-white/10">
          {rows.map(([category, techs], index) => (
            <SkillRow key={category} category={category} techs={techs} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
