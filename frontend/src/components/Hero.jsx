import { motion, useReducedMotion } from 'framer-motion';

const heroVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const highlightsFromProfile = (profile) => {
  const chips = [profile.role, 'First-class BSc Computer Science', profile.availability];
  return chips.filter(Boolean);
};

const findGithubUrl = (profile) =>
  profile.contact?.socials?.find((social) => social.label.toLowerCase() === 'github')?.url;

export function Hero({ profile }) {
  const shouldReduceMotion = useReducedMotion();
  const highlights = highlightsFromProfile(profile);
  const githubUrl = findGithubUrl(profile);
  const email = profile.contact?.email;

  return (
    <section className="hero" id="top">
      <motion.div
        className="hero__content"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
        transition={shouldReduceMotion ? { duration: 0 } : undefined}
      >
        <span className="hero__overline">Design-forward engineering</span>
        <h1 className="hero__title">
          {profile.name}
          <span className="hero__halo" aria-hidden="true" />
        </h1>
        <p className="hero__tagline">{profile.tagline}</p>
        {highlights.length ? (
          <ul className="hero__highlights">
            {highlights.map((chip) => (
              <li key={chip}>{chip}</li>
            ))}
          </ul>
        ) : null}
        {(email || githubUrl) && (
          <div className="hero__actions">
            {email && (
              <a className="btn btn--primary" href={`mailto:${email}`}>
                Book a call
              </a>
            )}
            {githubUrl && (
              <a className="btn btn--ghost" href={githubUrl} target="_blank" rel="noreferrer">
                View GitHub
              </a>
            )}
          </div>
        )}
      </motion.div>
    </section>
  );
}
