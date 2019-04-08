let express = require('express');
let router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const encryptor = require('simple-encryptor');

//const client = new MongoClient('mongodb://localhost:27017');
const client = new MongoClient('mongodb://homework01:homework01@ds233806.mlab.com:33806/homework01');

router.get('/', (req, res, next)=>{
    //res.send("This is a secret message");
    client.connect((err) => {
        const db = client.db('homework01');
        const collection = db.collection('data');
        collection.findOne({}, (err, doc)=>{
            //console.dir(doc);
            //res.send(doc.message);
            var secret_message = encryptor(doc.key).decrypt(doc.message);
            res.send(secret_message);
            client.close();
            //Welcome to MongoDB week :)
        });
        //console.dir("Done");
    });
});

module.exports = router;