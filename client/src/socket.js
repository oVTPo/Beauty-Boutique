import io from 'socket.io-client';

// Thay thế 'http://localhost:3001' bằng URL server trên Fly.io
export const socket = io("https://server-still-cloud-6652.fly.dev", {
  transports: ['websocket'], // Sử dụng WebSocket để kết nối
});
