const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserContact = new Schema({
    email: {
        type: String
    },
    phone: {
        type: String
    },
    image: {
        type: String
    },
    resume: {
        type: String
    }
},
    {
        timestamps: false,
        _id : false
    }
)

module.exports = UserContact