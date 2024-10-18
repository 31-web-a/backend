import http from 'http';
import api from './api.js';

const PORT = 8000;

const server = http.createServer(api);

server.listen(PORT, () => {
  console.log('Server running', PORT);
});
