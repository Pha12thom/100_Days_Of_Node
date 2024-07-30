const http = require('http');
const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    req.setHeader('content-Type', 'text/plain');
    if (req.url == '/') {
        req.end('welcome');
    } else {
        req.statusCode = 404;
        req.end("error");
    }

});


server.listen(port, hostname, () => {
    console.log("server running....");
});