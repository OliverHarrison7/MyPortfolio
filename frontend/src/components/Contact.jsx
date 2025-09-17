import { motion } from 'framer-motion';

export function Contact() {
  return (
    <section className="section" id="contact">
      <div className="section__header">
        <h2>Let&apos;s build</h2>
        <p>Ready for full-time opportunities or select freelance collaborations.</p>
      </div>
      <motion.div
        className="contact-card"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <p>
          Email me directly at <a href="mailto:hello@oliver.dev">hello@oliver.dev</a> or connect via the platforms below.
        </p>
        <div className="contact-links">
          <a className="contact-link" href="https://www.linkedin.com/in/oliver" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="contact-link" href="https://github.com/oliver" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="contact-link" href="https://dribbble.com/oliver" target="_blank" rel="noreferrer">
            Dribbble
          </a>
        </div>
      </motion.div>
    </section>
  );
}
