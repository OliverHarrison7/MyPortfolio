const API_BASE = import.meta.env.VITE_API_URL || '/api';

const parseResponse = async (response) => {
  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || `Request failed with ${response.status}`);
  }
  return response.json();
};

export const fetchOverview = async () => {
  const res = await fetch(`${API_BASE}/overview`);
  return parseResponse(res);
};

export const fetchSkills = async () => {
  const res = await fetch(`${API_BASE}/skills`);
  return parseResponse(res);
};

export const fetchProjects = async () => {
  const res = await fetch(`${API_BASE}/projects`);
  return parseResponse(res);
};

export const fetchExperience = async () => {
  const res = await fetch(`${API_BASE}/experience`);
  return parseResponse(res);
};
