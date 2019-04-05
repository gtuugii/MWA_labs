const http = require('http');
const {folk} = require('child_process');
const server = http.createServer();

server.on('request', (req, res)=>{
    const childProc = folk('longOperation.js');
    childProc.send('start');
    childProc.on('message', sum=>{
        res.end('Sum is ${sum}');
    });
});

server.listen(5000);
