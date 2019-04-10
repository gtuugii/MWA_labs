let express = require('express');
let router = express.Router();
let Joi = require("Joi");

router.get('/', (req, res) => {
    req.db.collection("location")
        .find({})
        .toArray()
            .then(data => res.json(data))
            .catch(err => console.log(err));

});

router.get('/find/:long/:lat/:dist/:num', (req, res) => {
    let long = -91.963708;
    let lat = 41.017450;
    let num = 3;
    let dist = 2000;

    if (!req.params.num)    num = req.params.num;
    if (!req.params.long)   long = req.params.long;
    if (!req.params.lat)    lat = req.params.lat;
    if (!req.params.dist)   dist = req.params.dist;

    req.db.collection("location")
        .find({ location: { $near: [long, lat], $maxDistance: dist } }).limit(num)
        .toArray()
        .then(data => res.json(data))
        .catch(err => res.json(err));
});

router.delete('/:id', (req, res) => {
    if(!req.params.id) return res.status(400).send("Parameter ID is missing.");

    req.db.collection("location")
        .deleteOne({_id: req.params.id}, (err, data) => {
            if (err) throw (err);
            res.json(data);
        });
});
//long: "-91.963708", lat: "41.017450"
//{"name": "Recreation Center", "category": "MUM", "location": [-91.963708, 41.017450]}
router.post('/', (req, res) => {
    if(!req.body)
        return res.status(400).send("Body is missing.");
    
    //res.send(req.body);

    var { err } = validateBody(req.body);
    if(err) return res.status(400).send(err);

    req.db.collection("location")
        .insert(req.body, (err) => {
            if(err) return res.status(400).send(err);
            else res.send(req.body);
        });

});

router.put('/', (req, res) => {
    if (!req.body)
        return res.status(400).send("Body is missing.");

    var { err } = validateBody(req.body);
    if (err) return res.status(400).send(err);

    req.db.collection('location')
        .update({_id: req.body._id}, req.body, err => {
            if(err) return res.status(400).send(err);
            else    res.send(req.body);
        });
});

function validateBody(data){
    let schema = {
        name: Joi.string().min(2).required(),
        category: Joi.string().required(),
        location: Joi.array().required()
    };

    return Joi.validate(data, schema);
}

module.exports = router;
