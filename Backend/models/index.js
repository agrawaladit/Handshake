const db = require('../config/database')

const Job = require('../models/Job')
const Application = require('../models/Application')
const User = require('../models/User')
const UserContact = require('../models/UserContact')
const UserEducation = require('../models/UserEducation')
const UserExperience = require('../models/UserExperience')


Job.hasMany(Application, {foreignKey: 'job_id'})
Application.belongsTo(Job, {foreignKey: 'job_id'})

User.hasMany(Application, {foreignKey: 'student_id'})
Application.belongsTo(User, {foreignKey: 'student_id'})

User.hasOne(UserContact, {foreignKey: 'id'})
UserContact.belongsTo(User, {foreignKey: 'id'})

User.hasOne(UserEducation, {foreignKey: 'id'})
UserEducation.belongsTo(User, {foreignKey: 'id'})

User.hasOne(UserExperience, {foreignKey: 'id'})
UserExperience.belongsTo(User, {foreignKey: 'id'})


db.sync()

module.exports = {Application, Job,User,UserContact,UserEducation,UserExperience}