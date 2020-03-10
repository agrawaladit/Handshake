const Sequelize = require('sequelize')
const db = require('../config/database')

const Application = db.define('job_application',
    {
        id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
        },
        student_id: {
        type: Sequelize.INTEGER
        },
        job_id: {
        type: Sequelize.INTEGER
        },
        student_name: {
        type: Sequelize.STRING
        },
        status: {
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

module.exports = Application