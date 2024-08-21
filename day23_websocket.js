import express from 'express';
import http from 'http';
import WebSocket from 'ws';

const port = 3000;
const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server })

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(data) {
        wss.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(data);
            }
        })
    })
})

server.listen(port, function() {
    console.log(`Server is listening on ${port}!`)
})