const Sequelize = require('sequelize')
const db = require('../config/database')

const Registration = db.define('event_registration',
    {
        id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
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


module.exports = Registration