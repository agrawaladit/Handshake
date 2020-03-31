const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserEducation = require('./UserEducation')
const UserExperience = require('./UserExperience')
const UserContact = require('./UserContact')

const userSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
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
    school: {
        type: String,
        required: true
    },
    contact: {
        type: UserContact
    },
    education: {
        type: UserEducation
    },
    experience: {
        type: UserExperience
    }
}, {
    timestamps: false,
});

const User = mongoose.model('User', userSchema);

module.exports = User;




// const Sequelize = require('sequelize')
// const db = require('../config/database')
// const Application = require('../models/Application')

// const User = db.define('user',
//     {
//         id: {
//             type: Sequelize.INTEGER,
//             primaryKey: true,
//             autoIncrement: true
//         },
//         first_name: {
//             type: Sequelize.STRING
//         },
//         last_name: {
//             type: Sequelize.STRING
//         },
//         email: {
//             type: Sequelize.STRING
//         },
//         password: {
//             type: Sequelize.STRING
//         },
//         school: {
//             type: Sequelize.STRING
//         },
//         created: {
//             type: Sequelize.DATE,
//             defaultValue: Sequelize.NOW
//         }
//     },
//     {
//         timestamps: false
//     }
// )


// module.exports = User