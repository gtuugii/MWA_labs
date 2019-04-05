(function () {

    let http = require('http');
    let fs = require('fs');
    let url = require('url');

    const server = http.createServer(function (req, res) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write(req.url);
        let obj = url.parse(req.url, true);
        console.log(req.url);
        //?url=path/to/my/file.txt
        let ourl = obj.query.url || "";

        //res.write(ourl);

        if (ourl != '')
            fs.readFileSync(ourl);
        
        res.end();
    });

    server.listen(5000, ()=>{console.log('Listening server port: 5000')});

})(); 