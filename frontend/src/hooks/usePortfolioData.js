import { useEffect, useState } from 'react';
import { fallbackProfile, fallbackProjects } from '../data/fallback.js';
import { fetchProfile, fetchProjects } from '../services/api.js';

export const usePortfolioData = () => {
  const [profile, setProfile] = useState(fallbackProfile);
  const [projects, setProjects] = useState(fallbackProjects);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      setStatus('loading');
      try {
        const [profileResponse, projectsResponse] = await Promise.all([fetchProfile(), fetchProjects()]);
        if (!isMounted) return;
        setProfile(profileResponse);
        setProjects(projectsResponse);
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

  return { profile, projects, status, error };
};
