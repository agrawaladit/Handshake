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
        location: {
        type: Sequelize.STRING
        },
        description: {
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

module.exports = UserExperience