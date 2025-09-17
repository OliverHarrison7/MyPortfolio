import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.08,
      duration: 0.45,
      ease: 'easeOut'
    }
  })
};

export function Skills({ skills }) {
  return (
    <section className="section section--alt" id="skills">
      <div className="section__header">
        <h2>Skills</h2>
        <p>A modern stack tuned for shipping quickly without compromising quality.</p>
      </div>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.article
            key={skill.title}
            className="skill-card"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            <h3 className="skill-card__title">{skill.title}</h3>
            <p className="skill-card__tools">{skill.tools.join(' · ')}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
