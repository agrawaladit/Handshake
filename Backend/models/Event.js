const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    time: {
        type: String
    },
    location: {
        type: String
    },
    date: {
        type: String
    },
    eligibility: {
        type: String
    },
    company: {
        type: Schema.Types.ObjectID,
        ref: 'Company'
    }
},
    {
        timestamps: false
    }
)

const Event = mongoose.model('Event', eventSchema);


module.exports = Event