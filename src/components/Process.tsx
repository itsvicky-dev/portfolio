import { motion } from 'framer-motion';
import { Search, Layout, Code2, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Ask "But Why?" A Lot',
    description:
      'I interrogate the problem like a nosy neighbor until it makes sense. Nine times out of ten, what everyone asked for isn’t actually what they need.',
  },
  {
    icon: Layout,
    title: 'Doodle On A Whiteboard',
    description:
      'Sketch the plan before touching the keyboard, mostly so future-me doesn’t have to untangle a mess made by past-me at 1am.',
  },
  {
    icon: Code2,
    title: 'Write Code, Break Things',
    description:
      'Build it in small pieces, break it in even smaller ones, then quietly fix it before anyone notices. Repeat until it stops fighting back.',
  },
  {
    icon: Rocket,
    title: 'Ship It & Sweat A Little',
    description:
      'Push to production, refresh the site way too many times, and pretend I’m not nervous. Then it actually works, and I act like that was always the plan.',
  },
];

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-neutral-50 py-24 dark:bg-black sm:py-32">
      <div className="glow-blob left-1/2 top-0 h-[380px] w-[600px] -translate-x-1/2 bg-wine-300/15 dark:bg-wine-600/10" />

      <div className="relative mx-auto max-w-5xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <p className="section-eyebrow mb-4 justify-center">How I (Actually) Work</p>
          <h2 className="font-serif text-4xl font-bold sm:text-5xl">
            From <span className="gradient-text">Concept</span> to Deployment
          </h2>
          <p className="mt-5 text-wine-900/60 dark:text-stone-400">
            Four steps, roughly one existential crisis, and somehow it always ships on time
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-black/10 bg-black/10 dark:border-white/10 dark:bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -4 }}
              className="group relative flex flex-col bg-white p-7 transition-colors duration-300 hover:bg-black dark:bg-black dark:hover:bg-white"
            >
              <span className="pointer-events-none absolute -right-2 -top-4 select-none text-7xl font-black leading-none text-black/[0.06] transition-colors duration-300 group-hover:text-white/10 dark:text-white/[0.08] dark:group-hover:text-black/10">
                {String(index + 1).padStart(2, '0')}
              </span>

              <step.icon
                size={26}
                className="relative mb-6 text-black transition-colors duration-300 group-hover:text-white dark:text-white dark:group-hover:text-black"
              />

              <h3 className="relative mb-2 text-lg font-bold text-wine-900 transition-colors duration-300 group-hover:text-white dark:text-parchment dark:group-hover:text-black">
                {step.title}
              </h3>
              <p className="relative text-sm leading-relaxed text-wine-900/60 transition-colors duration-300 group-hover:text-white/70 dark:text-stone-400 dark:group-hover:text-black/70">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
