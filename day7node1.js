const http = require('http');


const routes = {
    '/': (req, res) => {
        res.statusCode = 200;
        res.end('Welcome to the Home Page!\n');
    },
    '/about': (req, res) => {
        res.statusCode = 200;
        res.end('Welcome to the About Page!\n');
    },
    '/contact': (req, res) => {
        res.statusCode = 200;
        res.end('Welcome to the Contact Page!\n');
    },
};

const server = http.createServer((req, res) => {
    const url = req.url;
    const routeHandler = routes[url];


    if (routeHandler) {
        routeHandler(req, res);
    } else {
        res.statusCode = 404;
        res.end('Page Not Found\n');
    }
});


const port = 3000;


server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});