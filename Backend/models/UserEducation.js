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
        minor: {
        type: Sequelize.STRING
        },
        start_date: {
        type: Sequelize.DATE
        },
        end_date: {
        type: Sequelize.DATE
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