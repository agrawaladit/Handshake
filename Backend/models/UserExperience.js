const Sequelize = require('sequelize')
const db = require('../config/database')

const UserExperience = db.define('user_experience',
    {
        id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        },
        company: {
        type: Sequelize.STRING
        },
        title: {
        type: Sequelize.STRING
        },
        location: {
        type: Sequelize.STRING
        },
        description: {
        type: Sequelize.STRING
        },
        duration: {
        type: Sequelize.STRING
        },
        start_date: {
        type: Sequelize.STRING
        },
        end_date: {
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

module.exports = UserExperience