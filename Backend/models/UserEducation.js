const Sequelize = require('sequelize')
const db = require('../config/database')

const UserEducation = db.define('user_education',
    {
        id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        },
        school: {
        type: Sequelize.STRING
        },
        major: {
        type: Sequelize.STRING
        },
        location: {
        type: Sequelize.STRING
        },
        start_date: {
        type: Sequelize.STRING
        },
        end_date: {
        type: Sequelize.STRING
        },
        degree: {
        type: Sequelize.STRING
        },
        cgpa: {
        type: Sequelize.STRING
        },
        created: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
        }
    },
    {
        timestamps: false
    }
)

module.exports = UserEducation