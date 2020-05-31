const http = require('http');
const { readFile, readFileSync } = require('fs');
const { EventEmitter } = require('events');
const log = require('./log.js');

const server = http.createServer();

server.on('request', (req, res) => {
    res.statusCode = 200;
    res.setHeader('content-type', 'text/plain');
    res.end('Hello World\n');
});

server.listen(8080);

const eventEmmit = new EventEmitter();

eventEmmit.on('lunch', function (params) {
    console.log(txt);
});

eventEmmit.emit('lunch');

process.on('exit', function () {
    console.log('finish');
});
