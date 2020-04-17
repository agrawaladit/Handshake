const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appSchema = new Schema({
    status: {
        type: String
    },
    job: {
        type: Schema.Types.ObjectId,
        ref: 'Job'
    },
    student: {
        type: Schema.Types.ObjectId,
        ref: 'Student'
    },
    student_name: {
        type: String
    }
},
    {
        timestamps: false
    }
)

const Application = mongoose.model('Application', appSchema);

module.exports = Application