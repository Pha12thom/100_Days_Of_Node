const apiKey = process.env.API_KEY;
const dbUrl = process.env.DB_URL;


console.log(`API Key: ${apiKey}`);
console.log(`Database URL: ${dbUrl}`);


const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`API Key: ${apiKey}\nDatabase URL: ${dbUrl}`);
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});