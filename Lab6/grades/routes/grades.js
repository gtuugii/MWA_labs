const express = require('express');
const router = express.Router();
const jsonParser = express.json();
const Joi = require('Joi');

const schema = {
    id: Joi.required(),
    name: Joi.string().min(3).required(),
    course: Joi.string().min(3).required(),
    grade: Joi.required()
};

const grades = [
    { id: 1, name: 'Asaad Saad', course: "CS572", grade: 100 },
    { id: 2, name: 'Tuugii', course: "CS572", grade: 99 },
    { id: 3, name: 'Good man', course: "CS572", grade: 98 },
    { id: 4, name: 'Best Best', course: "CS572", grade: 97 },
    { id: 5, name: 'Unknown', course: "CS572", grade: 96 }
];

//GET       app.get()       /api/grades
//GET       app.get()       /api/grades/:id
//PUT       app.put()       /api/grades/:id
//DELETE    app.delete()    /api/grades/:id
//POST      app.post()      /api/grades

router.get('/', (req, res, next) => {
    //console.log('router /grades');
    res.send(grades);
});

router.get('/:id', (req, res, next) => {
    //res.send(req.params.id);
    const grade = grades.find(g => parseInt(g.id) === parseInt(req.params.id));
    if(!grade) return res.status(404).send('The grade with the given ID was not found.');

    res.send(grade);
});

router.delete('/:id', (req, res, next) => {
    const grade = grades.find(g => parseInt(g.id) === parseInt(req.params.id));

    if(!grade)
        return res.status('400').send(`The grade with the given ID was not found: ${req.params.id}`);

    const index = grades.indexOf(grade);
    grades.splice(index, 1);
    res.send("This grade with id is deleted.");
});

router.post('/', jsonParser, (req, res, next) => {
    console.log(req.body);

    let joi = Joi.validate(req.body, schema);
    console.log(joi);
    
    if (parseInt(req.body.id) <= 0 || !req.body.id)
        return res.status('400').send(`This id is smaller then 0 or empty: ${req.body.id}`);
    if (!req.body.name)
        return res.status('400').send(`The name is empty!`);
    if (!req.body.grade)
        return res.status('400').send(`The grade is empty!`);
    if (!req.body.course)
        return res.status('400').send(`The course is empty!`);

    const grade = grades.find(g => parseInt(g.id) === parseInt(req.body.id));
    if (grade)
        return res.status('400').send(`This id is duplicated: ${req.body.id}`);

    const newGrade = {
        "id": parseInt(req.body.id),
        "name": req.body.name,
        "course": req.body.course,
        "grade": req.body.grade
    };
    grades.push(newGrade);
    res.send(grades);
});

router.put('/:id', (req, res, next) => {

    console.log(req.body);
    res.send('sdfsdf');
});

module.exports = router;
