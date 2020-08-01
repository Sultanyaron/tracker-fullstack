import axios from 'axios';

const TrackerApi = axios.create({
  baseURL: 'https://3f618d2da6c4.ngrok.io',
});

export const setTrackerAuthToken = (token: string | null) => {
  TrackerApi.defaults.headers.common.Authorization = token ? `Bearer ${token}` : null;
};

export default TrackerApi;
