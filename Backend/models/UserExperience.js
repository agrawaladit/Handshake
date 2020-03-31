const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserExperience = new Schema({
    company: {
        type: String
    },
    title: {
        type: String
    },
    location: {
        type: String
    },
    description: {
        type: String
    },
    duration: {
        type: String
    },
    start_date: {
        type: String
    },
    end_date: {
        type: String
    }
},
    {
        timestamps: false,
        _id : false
    }
)

module.exports = UserExperience