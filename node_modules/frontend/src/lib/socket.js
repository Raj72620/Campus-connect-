import { io } from 'socket.io-client';

let socket;

export function initSocket(token) {
  // In production, fallback to '/' relative path to use the Netlify proxy
  // In dev, fallback to localhost:5000
  const fallback = import.meta.env.DEV ? 'http://localhost:5000' : '/';
  socket = io(import.meta.env.VITE_API_URL || fallback, {
    auth: { token },
  });
  return socket;
}

export function getSocket() {
  return socket;
}