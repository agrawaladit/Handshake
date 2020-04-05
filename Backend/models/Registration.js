const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const regSchema = new Schema({
    event: {
        type: Schema.Types.ObjectID,
        ref: 'Event'
    },
    student: {
        type: Schema.Types.ObjectID,
        ref: 'Student'
    }
},
    {
        timestamps: false
    }
)

const Registration = mongoose.model('Registration', regSchema);

module.exports = Registration