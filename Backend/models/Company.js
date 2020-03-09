const Sequelize = require('sequelize')
const db = require('../config/database')

const Company = db.define('company',
    {
        id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
        },
        company: {
        type: Sequelize.STRING
        },
        email: {
        type: Sequelize.STRING
        },
        password: {
        type: Sequelize.STRING
        },
        location: {
        type: Sequelize.STRING
        },
        description: {
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

module.exports = Company