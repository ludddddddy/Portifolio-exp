import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ubiquitous-space-halibut-5554qx47xgjfvprj-3000.app.github.dev/',
});

export default api;