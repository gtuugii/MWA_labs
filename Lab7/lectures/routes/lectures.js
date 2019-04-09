let express = require('express');
let router = express.Router();
const MongoClient = require('mongodb').MongoClient;

//const client = new MongoClient('mongodb://localhost:27017');
//const client = new MongoClient('mongodb://homework01:homework01@ds233806.mlab.com:33806/homework01');
const client = new MongoClient('mongodb+srv://test:test@mongodb-0besx.mongodb.net/test');

router.get('/', (req, res, next) => {
    //res.send("This is a secret message");
    client.connect((err) => {
        const db = client.db('mwa');
        const collection = db.collection('lectures');
        collection.findOne({}, (err, doc) => {
            if(err) throw(err);

            console.dir(doc);
            res.send(doc);
            client.close();
        });
    });
});

module.exports = router;
