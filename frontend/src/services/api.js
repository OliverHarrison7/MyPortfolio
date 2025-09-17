const API_BASE = import.meta.env.VITE_API_URL || '/api';

const parseResponse = async (response) => {
  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || `Request failed with ${response.status}`);
  }
  return response.json();
};

export const fetchProfile = async () => {
  const res = await fetch(`${API_BASE}/profile`);
  return parseResponse(res);
};

export const fetchProjects = async () => {
  const res = await fetch(`${API_BASE}/projects`);
  return parseResponse(res);
};
