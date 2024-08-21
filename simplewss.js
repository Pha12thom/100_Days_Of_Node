import express from 'express';
import http from 'http';
import { WebSocketServer } from "ws";
import path from 'path';
import { fileURLToPath } from "url";

const wss = new WebSocketServer({ port: 3000 });

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        console.log('Received message:', message);
        ws.send('Server received your message: ' + message);
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

console.log('WebSocket server is running on port 3000');