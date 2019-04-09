const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient('mongodb+srv://test:test@mongodb-0besx.mongodb.net/test');

client.connect('mongodb+srv://test:test@mongodb-0besx.mongodb.net/test');

let lecturesSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    course: {
        type: String,
        required: true
    },
    lecture: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Lecures', lecturesSchema);
