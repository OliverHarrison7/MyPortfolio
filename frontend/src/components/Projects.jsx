import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.98 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: index * 0.12,
      duration: 0.6,
      ease: 'easeOut'
    }
  })
};

export function Projects({ projects }) {
  return (
    <section className="section" id="projects">
      <div className="section__header">
        <h2>Projects</h2>
        <p>Real-world builds for early stage founders, startups, and agencies.</p>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            className="project-card"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            whileHover={{ y: -8 }}
          >
            <div className="project-card__content">
              <span className="project-card__period">{project.period}</span>
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__description">{project.description}</p>
              <div className="project-card__meta">
                {project.tech.map((tool) => (
                  <span key={tool} className="tech-tag">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div className="project-card__footer">
              <span>Case study</span>
              <a className="project-card__cta" href={project.link} target="_blank" rel="noreferrer">
                View project
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
