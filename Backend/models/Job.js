const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    title: {
        type: String
    },
    date: {
        type: String
    },
    deadline: {
        type: String
    },
    location: {
        type: String
    },
    salary: {
        type: String
    },
    description: {
        type: String
    },
    category: {
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

const Job = mongoose.model('Job', jobSchema);
module.exports = jobSchema
module.exports = Job