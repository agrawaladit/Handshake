const Sequelize = require('sequelize')
const db = require('../config/database')

const UserContact = db.define('user_contact',
    {
        id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        },
        email: {
        type: Sequelize.STRING
        },
        phone: {
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

module.exports = UserContact