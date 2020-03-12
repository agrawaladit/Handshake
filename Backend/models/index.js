const db = require('../config/database')

const Job = require('../models/Job')
const Application = require('../models/Application')
const User = require('../models/User')

Job.hasMany(Application, {foreignKey: 'job_id'})
Application.belongsTo(Job, {foreignKey: 'job_id'})
User.hasMany(Application, {foreignKey: 'student_id'})
Application.belongsTo(User, {foreignKey: 'student_id'})


db.sync()

module.exports = {Application, Job,User}