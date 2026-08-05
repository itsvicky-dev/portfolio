import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onFinish: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setVisible(false);
      onFinish();
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 16;
        return next > 100 ? 100 : next;
      });
    }, 130);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => setVisible(false), 550);
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  return (
    <AnimatePresence onExitComplete={onFinish}>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-noir"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.83, 0, 0.17, 1] }}
        >
          <div className="glow-blob left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 bg-wine-600/15" />

          <div className="relative z-10 w-full max-w-md px-8 text-center">
            <div className="overflow-hidden">
              <motion.span
                className="block text-5xl font-black tracking-tight text-parchment sm:text-6xl"
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: progress > 0 ? '0%' : '100%', opacity: progress > 0 ? 1 : 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                Vigneswari
              </motion.span>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mx-auto mt-6 h-px w-32 bg-gradient-to-r from-transparent via-gold-500/60 to-transparent"
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-5 text-[11px] uppercase tracking-[0.35em] text-stone-500"
            >
              Portfolio
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
