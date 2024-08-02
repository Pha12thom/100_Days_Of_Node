const http = require('http');


http.createServer(function(req, res) {


    res.writeHead(200, { 'Content-Type': 'text/html' });

    const url = req.url;

    if (url === '/about') {
        res.write(' Welcome to about us page');
        res.end();
    } else if (url === '/contact') {
        res.write(' Welcome to contact us page');
        res.end();
    } else {
        res.write('Hello World!');
        res.end();
    }
}).listen(3000, function() {

    console.log("server start at port 3000");
});