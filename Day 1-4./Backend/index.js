const http = require('node:http');
const fs = require('fs');
const path = require('path');

const host = '127.0.0.1';
const port = 5000;
let arrayofusers = [];

// Function to determine the content type based on file extension
const getContentType = (ext) => {
    switch (ext) {
        case '.html': return 'text/html';
        case '.css': return 'text/css';
        case '.js': return 'application/javascript';
        case '.png': return 'image/png';
        case '.jpg': return 'image/jpeg';
        case '.jpeg': return 'image/jpeg';
        case '.gif': return 'image/gif';
        default: return 'application/octet-stream';
    }
};

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }

    if (req.url === '/') {
        const filepath = path.join(__dirname, 'dist', 'index.html');
        fs.readFile(filepath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('500 Internal Server Error');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    }
    // Serve static files like CSS, JavaScript, images, etc.
    else if (req.url.match(/\.(css|js|png|jpg|jpeg|gif)$/)) {
        const ext = path.extname(req.url);
        const filepath = path.join(__dirname, 'dist', req.url);
        fs.readFile(filepath, (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('404 Not Found');
                return;
            }
            res.writeHead(200, { 'Content-Type': getContentType(ext) });
            res.end(data);
        });
    }
    else if (req.method === 'POST' && req.url === '/SignUp') {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const { username, password } = JSON.parse(body);
            if (!username || !password) {
                res.statusCode = 400;
                res.end(JSON.stringify({ message: 'Not a valid request' }));
                return;
            }
            arrayofusers.push({ username, password });
            fs.appendFile('abc.txt', `${username}\n`, (error) => { });
            res.statusCode = 200;
            res.end(JSON.stringify({ users: arrayofusers }));
        });
    }
    else if (req.method === 'PATCH' && req.url === '/Update') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const { oldusername, newusername } = JSON.parse(body);
            const userindex = arrayofusers.findIndex(usr => usr.username === oldusername);
            if (userindex === -1) {
                res.statusCode = 404;
                res.end(JSON.stringify({ message: 'User not found' }));
                return;
            }
            arrayofusers[userindex].username = newusername;
            res.statusCode = 200;
            res.end(JSON.stringify({ users: arrayofusers }));
        });
    }
    else {
        res.statusCode = 404;
        res.end('404 Not Found');
    }
});

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});
