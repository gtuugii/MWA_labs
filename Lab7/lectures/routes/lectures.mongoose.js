const express = require('express');
const router = express.Router();
const lecturesModel = require('../models/lecture.mongoose.model');
const joi = require('joi');
const jsonparser = express.json();


router.get('/', (req, res, next) => {
    lecturesModel.find()
        .then(doc => {
            res.json(doc);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res, next) => {
    if (!req.params.id)
        return res.status(400).send("ID is missing.");
    
    lecturesModel.find({id: req.params.id})
        .then(doc => {
            res.json(doc);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

router.delete('/:id', (req, res, next) => {
    if(!req.params.id)
        return res.status(400).send('ID is missing.');
    
    lecturesModel.findOneAndRemove({ id: req.params.id })
        .then(doc => {
            res.json(doc);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

router.put('/', jsonparser, (req, res, next) => {
    if (!req.body)
        return res.status(400).send("Request body is missing.");

    let { err } = validateData(req.body);
    if (err) return res.status(400).send(error.details[0].message);

    lecturesModel.findOneAndUpdate({id: req.body.id}, req.body, (err, doc) => {
        if(err) return res.status(500).send(err);
        res.json(doc);
    });
});

router.post('/search/:q', (req, res) => {
    if(!req.params.q)
        return res.status(400).send("lecture name q parameter is missing.");
    
    lecturesModel.findOne({lecture: req.params.q})
        .then( doc => {
            res.send(doc);
        })
        .catch( err => {
            res.status(500).send(err);
        });
});

router.post('/', jsonparser, (req, res, next) => {
    if(!req.body)
        return res.status(400).send("Request body is missing.");
    
    let { err } = validateData(req.body);
    if (err) return res.status(400).send(error.details[0].message);

    let model = new lecturesModel(req.body);
    model.save()
        .then(doc=>{
            if(!doc || doc.length === 0){
                return res.status(500).send('doc');
            }

            res.status(201).send(doc);
        })
        .catch(err => {
            res.status(500).json(err);
        });

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
