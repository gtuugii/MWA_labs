//Find all the zip codes in Washington state
db.zipcode.aggregate([
    { $match: { "state": "WA" } }
])
//Find all the zip codes with a population less than 5000
db.zipcode.aggregate([
    //{ $match: { "state": "WA" } },
    { $match: { "pop": { $lt: 5000 } } }
])
//Find all cities that have more than one zip code, sort the results by state and city name
db.zipcode.aggregate([
    //{ $match: { "state": "WA" } },
    //{ $match: { "pop": { $lt: 5000 } } },
    {
        $group: {
            _id: { state: "$state", city: "$city" },
            count: { $sum: 1 }
        }
    },
    { $project: { "city": "$_id.city", "count": 1, _id:0}},
    { $sort: {state: 1, city: 1}},
    { $match: { count: { $gt: 1 } } }
])

//Display the least populated city in each state
db.zipcode.aggregate([
    {
        $group: {
            _id: { state: "$state"},
            population: { $min: "$pop" }
        }
    },
    { $project: { _id: 0, "state": "$_id.state", "population": 1 } }
])





