let http = require('http');
let fs = require('fs');
let url = require('url');

const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello World!');
    res.end();
});

server.listen(5000);