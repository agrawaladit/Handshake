const Sequelize = require('sequelize')
const db = require('../config/database')

const Event = db.define('event_posting',
    {
        id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
        },
        name: {
        type: Sequelize.STRING
        },
        description: {
        type: Sequelize.STRING
        },
        time: {
        type: Sequelize.STRING
        },
        location: {
        type: Sequelize.STRING
        },
        date: {
        type: Sequelize.STRING
        },
        eligibility: {
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


module.exports = Event