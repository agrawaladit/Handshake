const Sequelize = require('sequelize')

module.exports = new Sequelize('nodejs', 'root', 'aditya', {
    host: '127.0.0.1',
    dialect: 'mysql',

  })


