import axios from 'axios';

const TrackerApi = axios.create({
  baseURL: 'https://2e5fbdb9aa9d.ngrok.io',
});

export const setTrackerAuthToken = (token: string | null) => {
  TrackerApi.defaults.headers.common.Authorization = token ? `Bearer ${token}` : null;
};

export default TrackerApi;
