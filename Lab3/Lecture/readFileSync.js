(function(){

    let fs = require('fs');
    let path = require('path');

    fs.readFile(path.join(__dirname, '../HugeFile.mp4'),
                {encoding: 'utf-8'}, 
                function(err, data){
                    if(err) throw err;
                    console.log(data);
                }
            );
    
    fs.writeFile("")




})();
