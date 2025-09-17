import { useMemo } from 'react';
import { About } from './components/About.jsx';
import { AnalyticsBar } from './components/AnalyticsBar.jsx';
import { Contact } from './components/Contact.jsx';
import { Experience } from './components/Experience.jsx';
import { Header } from './components/Header.jsx';
import { Hero } from './components/Hero.jsx';
import { Loader } from './components/Loader.jsx';
import { Projects } from './components/Projects.jsx';
import { ScrollProgress } from './components/ScrollProgress.jsx';
import { Skills } from './components/Skills.jsx';
import { usePortfolioData } from './hooks/usePortfolioData.js';
import { useTheme } from './hooks/useTheme.js';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' }
];

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const { overview, skills, projects, experience, status } = usePortfolioData();

  const metrics = useMemo(() => overview.metrics, [overview]);

  return (
    <>
      <ScrollProgress />
      <Header theme={theme} onToggleTheme={toggleTheme} sections={sections} />
      <main>
        {status === 'loading' && <Loader message="Pulling data from API..." />}
        <Hero metrics={metrics} />
        <About />
        <AnalyticsBar status={status} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Experience experience={experience} />
        <Contact />
      </main>
      <footer className="site-footer">
        © {new Date().getFullYear()} Oliver Harrison. Crafted with intention.
      </footer>
    </>
  );
}
