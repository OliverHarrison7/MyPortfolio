import { motion } from 'framer-motion';

const bioHighlights = [
  'Ships digital products from first sketch to production rollout',
  'Pairs interaction design with robust full-stack engineering',
  'Collaborates seamlessly with founders, designers, and engineering teams'
];

export function Bio({ profile }) {
  return (
    <section className="bio" id="bio">
      <motion.div
        className="bio__card"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <header className="bio__header">
          <h2 className="section-title">About Oliver</h2>
          <p className="bio__subtitle">Obsessed with crafting immersive software that feels effortless to use.</p>
        </header>
        <div className="bio__grid">
          <div className="bio__story">
            {profile.bio?.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <ul className="bio__highlights">
            {bioHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        {profile.contact?.socials?.length ? (
          <div className="bio__socials">
            {profile.contact.socials.map((social) => (
              <a key={social.label} href={social.url} target="_blank" rel="noreferrer" className="link-pill">
                {social.label}
              </a>
            ))}
          </div>
        ) : null}
      </motion.div>
    </section>
  );
}
