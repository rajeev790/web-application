import api from './api';

export const login = async (username, password) => {
  const response = await api.post('/api/login', { username, password });
  return response.data.token;
};

export const register = async (username, password) => {
  const response = await api.post('/api/register', { username, password });
  return response.data.token;
};