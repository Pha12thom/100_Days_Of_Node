const http = require('http');
const fs = require('fs');


http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const url = req.url;
    if (url === '/about') {
        fs.readFile('webview/about.html', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return;
            }
            res.write(data);
            res.end();
        });
    } else if (url === '/contact') {
        fs.readFile('webview/contact.html', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return;
            }
            res.write(data);
            res.end();
        });
    } else {
        res.write('${url} not found');
        res.end();
    }
}).listen(3000, () => {
    console.log("server start at port 3000");
});