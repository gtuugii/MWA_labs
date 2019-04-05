(function () {

    const http = require("http");
    const fs = require("fs");
    const path = require("path");
    const zlib = require("zlib");
    const gzip = zlib.createGzip();

    let smallFile = "../../mwa_course_overview.pdf";    //176 KB
    let bigFile   = "../../big.zip";    //766.6 MB
    let hugeFile = "../../huge.zip";    //1.41 GB

    const serverSync = http.createServer((req, res) => {
        // huge.zip-(3 requests) Memory: 3.85 GB =>  7.92 GB
        let file = fs.readFileSync(hugeFile);
        res.write(file);
        res.end();
    });

    const serverAsync = http.createServer((req, res) => {
        // huge.zip-(3 requests) Memory: 3.98 GB   => 9.30 GB
        fs.readFile(hugeFile, (err, data) => {
            if (err) throw err;
            res.write(data);
            res.end();
        });
    });

    const serverStream = http.createServer((req, res) => {
        // huge.zip-(3 requests) Memory: 4.06 GB => 4.16 GB
        fs.createReadStream(hugeFile)//.pipe(gzip)
            .pipe(res);
    });

    //serverSync.listen(8888);
    //serverAsync.listen(8888);
    serverStream.listen(8888);

})();