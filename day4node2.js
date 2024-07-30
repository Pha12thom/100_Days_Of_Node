const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';

const port = 3000;

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        const filePath = path.join(__dirname, 'index.html');

        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Internal Server Error\n');
                return;
            }

            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        });
    } else if (req.method === 'POST' && req.url === '/submit') {
        let body = '';

        // Listen for data events to read the request body
        req.on('data', chunk => {
            body += chunk.toString();
        });

        // Listen for the end event to finish reading the request body
        req.on('end', () => {
            console.log('Received body:', body);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end('POST request received\n');
        });
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Page Not Found\n');

    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});