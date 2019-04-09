const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const joi = require('joi');

const jsonparser = express.json();

const client = new MongoClient('mongodb+srv://test:test@mongodb-0besx.mongodb.net/test');

router.get('/', (req, res, next) => {
    //res.send("This is a secret message");
    client.connect((err) => {
        const db = client.db('mwa');
        const collection = db.collection('lectures');
        collection.find({}, (err, doc) => {
            if(err) throw(err);

            console.dir(doc);
            res.send(doc);
            client.close();
        });
    });
});

router.get('/:id', (req, res, next) => {
    //console.log(req.params.id);
    client.connect((err) => {
        const db = client.db('mwa');
        const collection = db.collection('lectures');
        collection.findOne({ id: req.params.id }, (err, doc) => {
            if (err) throw (err);

            //console.dir(doc);
            res.send(doc);
            client.close();
        });
    });
});

router.delete('/:id', (req, res, next) => {
    //res.send(req.params.id);
    
});

router.post('/', jsonparser, (req, res, next) => {
    if(!req.body)
        return res.status(400).send("Request body is missing");
    
    let { err } = validateData(req.body);
    if (err) return res.status(400).send(error.details[0].message);

    //

});

function validateData(data){
    const schema = {
        id: joi.number().integer().min(1).required(),
        course: joi.string().min(3).required(),
        lecture: joi.string().min(3).required()
    };

    return joi.validate(data);
};

module.exports = router;
