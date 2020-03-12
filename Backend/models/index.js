const db = require('../config/database')

const Job = require('../models/Job')
const Application = require('../models/Application')
const User = require('../models/User')
const UserContact = require('../models/UserContact')
const UserEducation = require('../models/UserEducation')
const UserExperience = require('../models/UserExperience')
const Event = require('../models/Event')
const Company = require('../models/Company')
const Registration = require('../models/Registration')


Job.hasMany(Application, {foreignKey: 'job_id'})
Application.belongsTo(Job, {foreignKey: 'job_id'})

Event.hasMany(Registration, {foreignKey: 'event_id'})
Registration.belongsTo(Event, {foreignKey: 'event_id'})

User.hasMany(Registration, {foreignKey: 'student_id'})
Registration.belongsTo(User, {foreignKey: 'student_id'})

User.hasMany(Application, {foreignKey: 'student_id'})
Application.belongsTo(User, {foreignKey: 'student_id'})

User.hasOne(UserContact, {foreignKey: 'id'})
UserContact.belongsTo(User, {foreignKey: 'id'})

User.hasOne(UserEducation, {foreignKey: 'id'})
UserEducation.belongsTo(User, {foreignKey: 'id'})

User.hasOne(UserExperience, {foreignKey: 'id'})
UserExperience.belongsTo(User, {foreignKey: 'id'})

Company.hasMany(Event, {foreignKey: 'company_id'})
Event.belongsTo(Company, {foreignKey: 'company_id'})

Company.hasMany(Job, {foreignKey: 'company_id'})
Job.belongsTo(Company, {foreignKey: 'company_id'})


db.sync()

module.exports = {Application, Job,User,UserContact,UserEducation,UserExperience,Company,Registration,Event}