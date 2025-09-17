import { useEffect, useState } from 'react';
import {
  fallbackOverview,
  fallbackSkills,
  fallbackProjects,
  fallbackExperience
} from '../data/fallback.js';
import {
  fetchOverview,
  fetchSkills,
  fetchProjects,
  fetchExperience
} from '../services/api.js';

export const usePortfolioData = () => {
  const [overview, setOverview] = useState(fallbackOverview);
  const [skills, setSkills] = useState(fallbackSkills);
  const [projects, setProjects] = useState(fallbackProjects);
  const [experience, setExperience] = useState(fallbackExperience);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      setStatus('loading');
      try {
        const [overviewResponse, skillsResponse, projectsResponse, experienceResponse] = await Promise.all([
          fetchOverview(),
          fetchSkills(),
          fetchProjects(),
          fetchExperience()
        ]);

        if (!isMounted) return;

        setOverview(overviewResponse);
        setSkills(skillsResponse);
        setProjects(projectsResponse);
        setExperience(experienceResponse);
        setStatus('success');
      } catch (err) {
        console.warn('Falling back to baked-in data', err);
        if (!isMounted) return;
        setError(err);
        setStatus('fallback');
      }
    };

    loadData();

    return () => {
      isMounted = false;
    };
  }, []);

  return { overview, skills, projects, experience, status, error };
};
