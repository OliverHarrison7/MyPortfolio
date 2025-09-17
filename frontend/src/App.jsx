import { useMemo } from 'react';
import { Bio } from './components/Bio.jsx';
import { Header } from './components/Header.jsx';
import { Hero } from './components/Hero.jsx';
import { Loader } from './components/Loader.jsx';
import { Portfolio } from './components/Portfolio.jsx';
import { usePortfolioData } from './hooks/usePortfolioData.js';
import { useTheme } from './hooks/useTheme.js';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const { profile, projects, status } = usePortfolioData();

  const email = useMemo(() => profile.contact?.email ?? 'hello@oliver.dev', [profile]);

  return (
    <div className="page-shell">
      <div className="background" aria-hidden="true">
        <div className="background__gradient" />
        <div className="background__grid" />
        <div className="background__orb background__orb--one" />
        <div className="background__orb background__orb--two" />
        <div className="background__orb background__orb--three" />
      </div>
      <Header theme={theme} onToggleTheme={toggleTheme} email={email} />
      <main>
        {status === 'loading' && <Loader message="Dialling in your experience..." />}
        <Hero profile={profile} />
        <Bio profile={profile} />
        <Portfolio projects={projects} />
      </main>
      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Oliver Harrison</span>
        <span>Crafted with intention.</span>
      </footer>
    </div>
  );
}
