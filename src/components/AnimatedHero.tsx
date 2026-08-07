import { motion } from 'framer-motion';

export type AnimatedHeroProps = {
  title: string;
  subtitle: string;
  ctaLabel: string;
};

/**
 * Main hero block with staggered animation timing tuned for quick first paint.
 */
export function AnimatedHero({ title, subtitle, ctaLabel }: AnimatedHeroProps) {
  return (
    <header className="hero">
      <motion.h1
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 160, damping: 16 }}
      >
        {title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.12 }}
      >
        {subtitle}
      </motion.p>
      {/* CTA animation remains opacity-only to avoid reflow during paint. */}
      <motion.button
        type="button"
        className="cta"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.22 }}
      >
        {ctaLabel}
      </motion.button>
    </header>
  );
}
