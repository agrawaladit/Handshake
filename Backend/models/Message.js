const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    student: {
        type: String
    },
    company: {
        type: String
    },
    messages: {
        type: [String]
    }
},
    {
        timestamps: false
    }
)

const Message = mongoose.model('Message', messageSchema);

module.exports = Message