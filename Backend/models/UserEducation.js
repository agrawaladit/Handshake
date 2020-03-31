const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserEducation = new Schema({
    school: {
        type: String
    },
    major: {
        type: String
    },
    location: {
        type: String
    },
    start_date: {
        type: String
    },
    end_date: {
        type: String
    },
    degree: {
        type: String
    },
    cgpa: {
        type: String
    }
},
    {
        timestamps: false,
        _id : false
    }
)

module.exports = UserEducation