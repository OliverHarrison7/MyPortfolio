import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const navVariants = {
  hidden: { opacity: 0, y: -16 },
  visible: { opacity: 1, y: 0 }
};

export function Header({ theme, onToggleTheme, sections }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth > 900 : false
  );

  useEffect(() => {
    if (isMenuOpen && !isDesktop) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen, isDesktop]);

  useEffect(() => {
    const handleResize = () => {
      const nextIsDesktop = window.innerWidth > 900;
      setIsDesktop(nextIsDesktop);
      if (nextIsDesktop) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (event, targetId) => {
    event.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const showMenu = isDesktop || isMenuOpen;

  return (
    <header className="site-header">
      <a href="#hero" className="logo" onClick={(event) => handleNavClick(event, 'hero')}>
        OH
      </a>
      <nav className="site-nav" aria-label="Primary navigation">
        <button
          className="nav-toggle"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((value) => !value)}
        >
          <span className="nav-toggle__bar" />
          <span className="nav-toggle__bar" />
          <span className="nav-toggle__bar" />
        </button>
        <AnimatePresence>
          {showMenu && (
            <motion.ul
              key="navigation"
              className={`nav-links ${isMenuOpen ? 'is-open' : ''}`}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={navVariants}
            >
              {sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} onClick={(event) => handleNavClick(event, section.id)}>
                    {section.label}
                  </a>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
      <button className="mode-toggle" type="button" onClick={onToggleTheme} aria-label="Toggle theme">
        <span className={`mode-toggle__icon ${theme === 'light' ? 'is-light' : ''}`} aria-hidden="true" />
      </button>
    </header>
  );
}
