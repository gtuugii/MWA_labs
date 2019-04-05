(function(){
    
    const http = require('http');
    const server = http.createServer();

    const longOperation = () => {
        let sum = 0;
        for (let i = 0; i < 1e9; i++)
            sum += i;

        return sum;
    };

    server.on('request', (req, res) => {
        const sum = longOperation();
        return res.end('Sum is ${sum}');
    });

})();
