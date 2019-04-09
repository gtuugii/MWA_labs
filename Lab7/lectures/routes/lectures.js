const express = require('express');
const router = express.Router();
const joi = require('joi');
const jsonparser = express.json();

router.get('/', (req, res, next) => {
    req.db.collection('lectures')
        .find({})
        .toArray()
            .then(data => res.json(data))
            .catch(err => console.log(err));
});

router.get('/:id', (req, res, next) => {
    if(!req.params.id)
        return res.status(400).send("ID parameter is missing.");

    req.db.collection('lectures')
        .findOne({id: parseInt(req.params.id)}, (err, data) => {
            if(err) throw(err);
            res.json(data);
    });
});

router.delete('/:id', (req, res, next) => {
    if (!req.params.id)
        return res.status(400).send("Id parameter is missing.");

    req.db.collection('lectures')
        .deleteOne({ id: parseInt(req.params.id) }, (err, data) => {
            if (err) throw (err);
            res.json(data);
        });
});

router.post('/', jsonparser, (req, res, next) => {
    if(!req.body)
        return res.status(400).send("Request body is missing");
    
    let { err } = validateData(req.body);
    if (err) return res.status(400).send(error.details[0].message);

    req.db.collection('lectures')
        .insert(req.body, (err) => {
            if(err) throw(err);
            else res.send(req.body);
        });
    
});

router.put('/', (req, res) => {
    if (!req.body)
        return res.status(400).send("Request body is missing");
    let { err } = validateData(req.body);
    if (err) return res.status(400).send(error.details[0].message);


    req.db.collection('lectures')
        .update({ id: parseInt(req.params.id) }, req.body, (err) => {
            if (err) throw (err);
            else res.send(req.body);
        });
})

function validateData(data){
    const schema = {
        id: joi.number().integer().min(1).required(),
        course: joi.string().min(3).required(),
        lecture: joi.string().min(3).required()
    };

    return joi.validate(data);
};

module.exports = router;
