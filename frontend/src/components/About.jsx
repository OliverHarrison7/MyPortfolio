import { motion } from 'framer-motion';

export function About() {
  return (
    <section className="section" id="about">
      <div className="section__header">
        <h2>About</h2>
        <p>Blending design intuition with engineering rigor for polished digital products.</p>
      </div>
      <div className="section__content section__content--split">
        <motion.article
          className="card card--highlight"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p>
            I am a full-stack engineer who thrives on building delightful, high-impact interfaces backed by
            solid systems. From concept to ship, I move quickly and deliver the details that make users
            remember their experience.
          </p>
          <p>
            Recent work includes designing product dashboards, scaling React design systems, and crafting
            immersive landing pages for growing startups.
          </p>
        </motion.article>
        <motion.ul
          className="about-list"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.1, duration: 0.5, ease: 'easeOut' }}
        >
          <li>⚡️ Frontend-first mindset with full-stack follow-through</li>
          <li>🧩 Strong in interaction design and micro-animations</li>
          <li>🛠 Prototyping wizard with production standards</li>
          <li>🤝 Collaborative, communicative, and client-friendly</li>
        </motion.ul>
      </div>
    </section>
  );
}
