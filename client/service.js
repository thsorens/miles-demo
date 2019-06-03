import { create } from 'apisauce';

// define the api
const api = create({
  baseURL: 'https://fagmiles-api.azurewebsites.net/api',
  headers: { Accept: 'application/json' },
});

export const getTeams = () => api.get('teams');
export const getTeam = id => api.get(`teams/${id}`);
export const getMatches = () => api.get('matches');
export const getMatch = id => api.get(`matches/${id}`);
