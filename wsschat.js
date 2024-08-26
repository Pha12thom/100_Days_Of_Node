import express from 'express';
import http from 'http';
import { WebSocketServer } from 'ws';

//web socket server chat all test
// Set up Express and HTTP server
const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

// Serve static files (like HTML, CSS, JS)
app.use(express.static('public'));

// Handle WebSocket connections
wss.on('connection', (ws) => {
    console.log('New client connected');

    // Broadcast incoming messages to all clients
    ws.on('message', (message) => {
        console.log(`Received: ${message}`);
        wss.clients.forEach((client) => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
