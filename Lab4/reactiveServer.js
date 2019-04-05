(function () {

    const http = require('http');
    const fs = require('fs');
    const url = require('url');
    const queryString = require('querystring');
    const { fork, exec } = require("child_process");

        // let qstring = queryString.stringify({
        //     name: 'Battuguldur',
        //     course: 'MWA'
        // });
        // console.log(qstring);
        // console.log(queryString.parse(qstring));

    const server = http.createServer(function (req, res) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        //res.write(req.url);
        let obj = url.parse(req.url, true);
        console.log(req.url);
        //?url=path/to/my/file.txt
        let ourl = obj.query.url || "";

        //res.write(ourl);

        if (ourl) {
            let childProcess = fork("childProcess.js");
            childProcess.send(ourl);
            childProcess.on("message", chunk => {
                if (chunk === null)
                    res.end();
                else
                    res.write(Buffer.from(chunk));
            })
        }
        else{
            res.write('File not found.');
            res.end();
        }
    });

    server.listen(5000, ()=>{console.log('Listening server port: 5000')});

})();
