//INSERT
db.grades.insert(
[
	{ id: 1, name: 'Asaad Saad', course: "CS572", grade: 100 },
    { id: 2, name: 'Tuugii', course: "CS572", grade: 99 },
    { id: 3, name: 'Good man', course: "CS572", grade: 98 },
    { id: 4, name: 'Best Best', course: "CS572", grade: 97 },
    { id: 5, name: 'Unknown', course: "CS572", grade: 96 }
]
)

//SELECT * FROM users
db.grades.find() 
db.grades.find().pretty() 

//WHERE
db.grades.find({name: "Tuugii"})
db.grades.find({name: "Tuugii"}).pretty()

//UPDATE
db.grades.update({name: "Tuugii"}, { id: 2, name: 'Battuguldur', course: "CS572", grade: 99 });
db.grades.update({name: 'Battuguldur'}, {$inc:{grade: 1}})
db.grades.update({name: 'Battuguldur'}, {$set:{age: 36}})
db.grades.update({name: 'Battuguldur'}, {$unset: {age: 36}})
db.grades.update({name: "Tuugii"}, { id: 2, name: 'Tuugii', course: "CS572", grade: 99 }, {upsert: true});

db.grades.update({name: "Battuguldur"}, {$rename: {"gender": "sex"}})

//Delete
db.grades.update({name: "Battuguldur"})
db.grades.update({id: 1})

//
db.grades.update({name: 'Battuguldur'}, {$set:{address:{city: "IOWA"}}})
db.grades.find({"address.city": "IOWA"})

db.grades.find().sort({name: 1})
db.grades.find().sort({name: -1})

db.grades.find({name: "Battuguldur"}).count()

db.grades.find().limit(2).sort({name: 1})

db.grades.find().forEach(function(doc) {print("Customer Name: " + doc.name)})
db.grades.find().forEach((doc) => {print("Customer Name: " + doc.name)})

