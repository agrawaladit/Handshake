const Sequelize = require('sequelize')
const db = require('../config/database')

const Job = db.define('job_posting',
    {
        id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
        },
        company: {
        type: Sequelize.STRING
        },
        title: {
        type: Sequelize.STRING
        },
        date: {
        type: Sequelize.STRING
        },
        deadline: {
        type: Sequelize.STRING
        },
        location: {
        type: Sequelize.STRING
        },
        salary: {
        type: Sequelize.STRING
        },
        description: {
        type: Sequelize.STRING
        },
        category: {
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

module.exports = Job