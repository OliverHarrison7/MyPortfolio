import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const orbVariants = {
  animate: {
    scale: [1, 1.05, 1],
    rotate: [0, 10, -6, 0],
    transition: { duration: 12, repeat: Infinity }
  }
};

export function Hero({ metrics }) {
  return (
    <section className="hero" id="hero">
      <motion.div className="hero__content" initial="hidden" animate="visible" variants={container}>
        <p className="hero__eyebrow">Full-stack Developer · Problem Solver · Maker</p>
        <h1 className="hero__title">
          Hey, I&apos;m <span>Oliver Harrison</span>.
        </h1>
        <p className="hero__subtitle">
          I craft bold digital experiences that balance sharp aesthetics with dependable engineering.
        </p>
        <div className="hero__cta">
          <a className="btn btn--primary" href="#projects">
            View Projects
          </a>
          <a className="btn btn--ghost" href="#contact">
            Hire Me
          </a>
        </div>
        <div className="hero__meta">
          <Metric label="Years Building" value={metrics?.years ?? '—'} />
          <Metric label="Projects Shipped" value={metrics?.projects ?? '—'} />
          <Metric label="Happy Clients" value={metrics?.clients ?? '—'} />
        </div>
      </motion.div>
      <div className="hero__visual">
        <motion.div
          className="hero__orb"
          variants={orbVariants}
          animate="animate"
          aria-hidden="true"
        />
        <motion.div
          className="hero__card"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p>Currently building</p>
          <strong>Immersive Web Apps</strong>
          <div className="hero__tags">
            <span className="hero__stack-tag">React</span>
            <span className="hero__stack-tag">TypeScript</span>
            <span className="hero__stack-tag">Node.js</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Metric({ label, value }) {
  return (
    <motion.div className="meta-card" whileHover={{ y: -4 }}>
      <span className="meta-card__value">{value}</span>
      <span className="meta-card__label">{label}</span>
    </motion.div>
  );
}
