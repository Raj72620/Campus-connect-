import { io } from 'socket.io-client';

let socket;

export function initSocket(token) {
  // In production, use '/' relative path to leverage Netlify proxy
  // In dev, use VITE_API_URL or localhost:5000
  const url = import.meta.env.DEV
    ? (import.meta.env.VITE_API_URL || 'http://localhost:5000')
    : '/';

  socket = io(url, {
    auth: { token },
  });
  return socket;
}

export function getSocket() {
  return socket;
}