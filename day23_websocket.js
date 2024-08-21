import express from 'express';
import http from 'http';
import { WebSocketServer } from "ws";
import path from 'path';
import { fileURLToPath } from "url";


const port = 3000;
const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ noServer: true });


const __filename = fileURLToPath(
    import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));



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