import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: index * 0.08,
      duration: 0.55,
      ease: 'easeOut'
    }
  })
};

export function Portfolio({ projects }) {
  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio__header">
        <h2 className="section-title">Selected Work</h2>
        <p>Fewer slides. More substance. A cross-section of products built with craft and velocity.</p>
      </div>
      <div className="portfolio__grid">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            className="project-card"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            whileHover={{ y: -6 }}
          >
            <div className="project-card__head">
              <span className="project-card__period">{project.period}</span>
              <h3 className="project-card__title">{project.title}</h3>
            </div>
            <p className="project-card__description">{project.description}</p>
            <div className="project-card__meta">
              {project.tech.map((tool) => (
                <span key={tool} className="tech-chip">
                  {tool}
                </span>
              ))}
            </div>
            <a className="project-card__link" href={project.link} target="_blank" rel="noreferrer">
              View case study
              <span aria-hidden="true">→</span>
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
