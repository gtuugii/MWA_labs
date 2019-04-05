var fs = require("fs");

process.on("message", ourl => {

    let readReadStream = fs.createReadStream(ourl);
    readReadStream.on("data", chunk => {
        process.send(chunk);
    })
    readReadStream.on("error", (error) => {
        process.send(null);
    });
    readReadStream.on("end", () => {
        process.send(null);
    });
});
