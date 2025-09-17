import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.5,
      ease: 'easeOut'
    }
  })
};

export function Experience({ experience }) {
  return (
    <section className="section section--alt" id="experience">
      <div className="section__header">
        <h2>Experience</h2>
        <p>Progression across ambitious teams delivering innovative products.</p>
      </div>
      <div className="timeline">
        {experience.map((item, index) => (
          <motion.article
            key={item.id}
            className="timeline-item"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={itemVariants}
          >
            <header className="timeline-item__header">
              <h3 className="timeline-item__role">{item.role}</h3>
              <span className="timeline-item__period">{item.period}</span>
            </header>
            <p className="timeline-item__company">{item.company}</p>
            <p className="timeline-item__description">{item.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
