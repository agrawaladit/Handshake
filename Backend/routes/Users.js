const express = require('express');
const router = express.Router();
const cors = require('cors')
const {User,UserContact,UserEducation,UserExperience} = require('../models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

process.env.SECRET_KEY = 'secret'
router.use(cors())
//Get user list
router.get('/', (req, res) => User.findAll({
    include: [UserContact,UserEducation,UserExperience]
})
  .then(u => {
    res.send(u)
  })
  .catch(error => console.log(error))
)

router.post('/register', (req, res) => {
  const today = new Date()
  const userData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    school: req.body.school,
    created: today
  }

  User.findOne({
    where: {
      email: req.body.email
    }
  })
    //TODO bcrypt
    .then(user => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash
          User.create(userData)
            .then(user => {
              console.log(user.email)
              res.json({ status: user.email + 'Registered!' })
            })
            .catch(err => {
              res.send('error: ' + err)
            })
        })
      } else {
        res.json({ error: 'User already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

router.post('/login', (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
            expiresIn: 1440
          })
          res.send(token)
        }
      } else {
        res.status(400).json({ error: 'User does not exist' })
      }
    })
    .catch(err => {
      res.status(400).json({ error: err })
    })
})

router.get('/profile', (req, res) => {
  User.findOne({
    where: {
      id: req.query.id
    }
  })
    .then(user => {
      res.send(user)
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})


module.exports = router