const mongoose = require("mongoose");

//const client = new MongoClient('mongodb+srv://test:test@mongodb-0besx.mongodb.net/test');
mongoose.connect('mongodb+srv://test:test@mongodb-0besx.mongodb.net/mwa');

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

module.exports = mongoose.model('Lectures', lecturesSchema);
