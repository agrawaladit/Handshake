const Sequelize = require('sequelize')
const db = require('../config/database')

const Application = db.define('job_application',
    {
        id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
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

const Job = require('../models/Job')
// const User = require('../models/User')
// Job.hasMany(Application)
// Application.belongsTo(Job, {foreignKey: 'job_id'})
// Application.belongsTo(User, {foreignKey: 'student_id'})

//Application.belongsTo(Job, {foreignKey: 'job_id'})


//db.sync({ force: true });

module.exports = Application