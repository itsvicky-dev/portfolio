import { motion } from 'framer-motion';
import { Bot, Layers, Gauge, ArrowUpRight } from 'lucide-react';

const posts = [
  {
    icon: Bot,
    title: 'Building AI Features Into a Production LMS',
    excerpt:
      'Notes on integrating AI-powered content assistance and recommendations into a real learning management platform — what worked, what didn’t.',
  },
  {
    icon: Layers,
    title: 'Full-Stack Architecture Choices That Age Well',
    excerpt:
      'How I decide between React/Next.js, Node.js, and Java Spring Boot depending on the shape of the problem, not just habit.',
  },
  {
    icon: Gauge,
    title: 'Performance Budgets for Real-World React Apps',
    excerpt:
      'Practical techniques for keeping full-stack applications fast and reliable as they grow past the prototype stage.',
  },
];

function PostRow({ post, index }: { post: (typeof posts)[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative grid grid-cols-[auto_1fr_auto] items-center gap-6 border-t border-black/10 py-7 transition-colors duration-300 last:border-b hover:bg-black dark:border-white/10 hover:dark:bg-white sm:gap-8 sm:px-6"
    >
      <span className="hidden text-sm font-bold text-black/25 transition-colors duration-300 group-hover:text-white/40 dark:text-white/25 dark:group-hover:text-black/40 sm:block">
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className="flex items-center gap-5">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/15 transition-colors duration-300 group-hover:border-white/30 dark:border-white/15 dark:group-hover:border-black/30">
          <post.icon size={18} className="text-black transition-colors duration-300 group-hover:text-white dark:text-white dark:group-hover:text-black" />
        </div>
        <div>
          <h3 className="font-serif text-lg font-bold leading-snug text-black transition-colors duration-300 group-hover:text-white dark:text-white dark:group-hover:text-black sm:text-xl">
            {post.title}
          </h3>
          <p className="mt-1 max-w-lg text-sm leading-relaxed text-wine-900/55 transition-colors duration-300 group-hover:text-white/70 dark:text-stone-400 dark:group-hover:text-black/70">
            {post.excerpt}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span className="chip-outline hidden transition-colors duration-300 group-hover:border-white/30 group-hover:text-white/60 dark:group-hover:border-black/30 dark:group-hover:text-black/60 sm:inline-flex">
          Coming Soon
        </span>
        <ArrowUpRight
          size={20}
          className="-translate-x-1 text-black/0 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-white group-hover:opacity-100 dark:group-hover:text-black"
        />
      </div>
    </motion.div>
  );
}

export default function Insights() {
  return (
    <section id="insights" className="relative overflow-hidden bg-white py-24 dark:bg-black sm:py-32">
      <div className="relative mx-auto max-w-5xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <p className="section-eyebrow mb-4 justify-center">Insights</p>
          <h2 className="font-serif text-4xl font-bold sm:text-5xl">
            Notes & <span className="gradient-text">Articles</span>
          </h2>
          <p className="mt-5 text-wine-900/60 dark:text-stone-400">
            Writing on AI integration, full-stack architecture, and production engineering — drafts in progress
          </p>
        </motion.div>

        <div>
          {posts.map((post, index) => (
            <PostRow key={post.title} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
