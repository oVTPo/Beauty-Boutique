// Giả sử đây là file socket.js hoặc trong một component nào đó

import io from 'socket.io-client';

// Thay thế 'http://localhost:3001' bằng URL server trên Fly.io
const socket = io("https://server-still-cloud-6652.fly.dev", {
  transports: ['websocket'], // Sử dụng WebSocket để kết nối
});

// Tiếp tục với các sự kiện Socket.IO mà bạn muốn lắng nghe hoặc phát
socket.on('receiveOrder', (data) => {
  console.log('Received order:', data);
});

// Xuất socket nếu cần thiết
export default socket;
