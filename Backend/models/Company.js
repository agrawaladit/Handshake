const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companySchema = new Schema({
    company: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    location: {
        type: String
    },
    description: {
        type: String
    },
    image: {
        type: String
    }
},
    {
        timestamps: false
    }
)

const Company = mongoose.model('Company', companySchema);

module.exports = Company