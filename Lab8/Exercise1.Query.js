mongoimport--host mongodb - shard - 0 / mongodb - shard - 00 - 00 - 0besx.mongodb.net: 27017, mongodb - shard - 00 - 01 - 0besx.mongodb.net: 27017, mongodb - shard - 00 - 02 - 0besx.mongodb.net: 27017 --ssl--username test--password test--authenticationDatabase admin--db mwa--collection rest--type json --file / download / restaurants.json

mongo "mongodb+srv://mongodb-0besx.mongodb.net/mwa” --username test

1.  db.rest.find();
2.  db.rest.find({}, { restaurant_id: 1, name: 1, district: 1, cuisine: 1 })
3.  db.rest.find({}, { restaurant_id: 1, name: 1, district: 1, cuisine: 1, _id: 0 })
4.  db.rest.find({}, { restaurant_id: 1, name: 1, district: 1, "address.zipcode": 1, _id: 0 })
5.  db.rest.find({ district: "Bronx" })
6.  db.rest.find({ district: "Bronx" }).limit(5)
7.  db.rest.find({ district: "Bronx" }).skip(5).limit(5)
8.  db.rest.find({ "address.coord": { $lt: -95.754168 } }).pretty()
9.  db.rest.find({ cuisine: { $ne: 'American ' }, "grades.score": { $gt: 70 }, "address.coord": { $lt: -65.754168 } }).pretty()
10. db.rest.find({ name: { $regex: '$Wil' } }, { restaurant_id: 1, _id: 0, name: 1, district: 1, cuisine: 1 }).pretty()
11. db.rest.find({ name: { $regex: 'ces$' } }, { restaurant_id: 1, _id: 0, name: 1, district: 1, cuisine: 1 }).pretty()
12. db.rest.find({ name: { $regex: 'Reg' } }, { restaurant_id: 1, _id: 0, name: 1, district: 1, cuisine: 1 }).pretty()
13. db.rest.find({ district: "Bronx", cuisine: { $in: ["American ", "Chinese"] } }).pretty()
14. db.rest.find({ district: { $in: ["Staten Island", "Queens", "Bronx", "Brooklyn"] } }, { restaurant_id: 1, _id: 0, name: 1, district: 1, cuisine: 1 })
15. db.rest.find({ district: { $nin: ["Staten Island", "Queens", "Bronx", "Brooklyn"] } }, { restaurant_id: 1, _id: 0, name: 1, district: 1, cuisine: 1 })
16. db.rest.find({ "grades.score": { $lte: 10 } }, { restaurant_id: 1, _id: 0, name: 1, district: 1, cuisine: 1 })
17. db.rest.find({ "address.coord.1": { $gt: 42, $lt: 52 } }, { restaurant_id: 1, _id: 0, name: 1, address: 1 })
    //db.rest.find( { "address.coord.1": { $elemMatch: { $gt: 42, $lt: 52 } } } )
18. db.rest.find({}).sort({ name: 1 }).pretty()
19. db.rest.find({}).sort({ name: -1 }).pretty()
20. db.rest.find({}, { name: 1, district: 1, cuisine: 1, _id: 0 }).sort({ name: 1, cuisine: 1, district: -1 })
21. db.rest.find({ "address.street": { $exists: true } }).count() === db.restaurants.find({}).count()
22. db.rest.find({ "address.coord": {$type: "double"} }).count()
23. db.rest.find({ name: { $regex: '^Mad' } }, { name: 1, district: 1, cuisine: 1, 'address.coord': 1 })
