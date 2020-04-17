const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jobSchema = require('./Job')
const userSchema = require('./User')

const appSchema = new Schema({
    status: {
        type: String
    },
    job: {
        type: jobSchema
    },
    student: {
        type: userSchema
    }
},
    {
        timestamps: false
    }
)

const Application = mongoose.model('Application', appSchema);

module.exports = Application