const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient('mongodb+srv://test:test@mongodb-0besx.mongodb.net/mwa');
module.exports = client;
