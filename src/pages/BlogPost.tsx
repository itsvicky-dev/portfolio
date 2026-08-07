import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { getPostBySlug } from '../data/posts';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-white px-6 text-center dark:bg-black">
        <p className="font-serif text-3xl font-bold text-black dark:text-white">Note not found</p>
        <Link
          to="/"
          className="chip-outline inline-flex items-center gap-2 transition-colors duration-300 hover:border-black hover:text-black dark:hover:border-white dark:hover:text-white"
        >
          <ArrowLeft size={14} />
          Back to site
        </Link>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-white dark:bg-black">
      <div className="fixed inset-x-0 top-4 z-[1202] px-4">
        <div className="mx-auto flex max-w-[800px] items-center justify-between rounded-full border border-black/10 bg-white/80 px-5 py-3 backdrop-blur-md dark:border-white/10 dark:bg-black/70">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-wine-900/60 transition-colors duration-300 hover:text-black dark:text-white/60 dark:hover:text-white"
          >
            <ArrowLeft size={14} />
            Back to site
          </Link>
          <Link
            to="/#insights"
            className="text-[11px] font-semibold uppercase tracking-[0.15em] text-wine-900/60 transition-colors duration-300 hover:text-black dark:text-white/60 dark:hover:text-white"
          >
            Insights
          </Link>
        </div>
      </div>

      <article className="mx-auto max-w-3xl px-6 pb-32 pt-36 md:px-8 sm:pt-44">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/15 dark:border-white/15">
              <post.icon size={18} className="text-black dark:text-white" />
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="chip-outline">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <h1 className="font-serif text-4xl font-bold leading-tight text-black dark:text-white sm:text-5xl">
            {post.title}
          </h1>

          <p className="mt-4 text-sm font-medium uppercase tracking-[0.15em] text-wine-900/45 dark:text-stone-500">
            {post.date} · {post.readTime}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12 space-y-6"
        >
          {post.intro.map((para, i) => (
            <p
              key={i}
              className="text-lg leading-relaxed text-wine-900/75 dark:text-stone-300"
            >
              {para}
            </p>
          ))}
        </motion.div>

        <div className="mt-12 space-y-12">
          {post.sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
            >
              {section.heading && (
                <h2 className="font-serif text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  {section.heading}
                </h2>
              )}
              <div className="mt-4 space-y-5">
                {section.paragraphs.map((para, j) => (
                  <p key={j} className="leading-relaxed text-wine-900/70 dark:text-stone-400">
                    {para}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 space-y-5 border-t border-black/10 pt-10 dark:border-white/10"
        >
          {post.closing.map((para, i) => (
            <p key={i} className="text-lg leading-relaxed text-wine-900/75 dark:text-stone-300">
              {para}
            </p>
          ))}
        </motion.div>

        <div className="mt-16">
          <Link
            to="/#insights"
            className="btn-ghost inline-flex items-center gap-2"
          >
            <ArrowLeft size={14} />
            All notes
          </Link>
        </div>
      </article>
    </div>
  );
}
