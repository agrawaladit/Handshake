const express = require('express');
const router = express.Router();
const cors = require('cors')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

process.env.SECRET_KEY = 'secret'
router.use(cors())
//Get user list
router.get('/', (req, res) => User.find()
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

  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) res.send(err);

    if (!user) {
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        userData.password = hash

        const newUser = new User(userData)
        newUser.save()
          .then(user => {
            console.log(user.email)
            res.json({ status: user.email + ' Registered!' })
          })
          .catch(err => {
            res.send('error: ' + err)
          })
      })
    } else {
      res.json({ error: 'User already exists' })
    }
  });
})

router.post('/experience', (req, res) => {
  const experienceData = {
    company: req.body.company,
    title: req.body.title,
    description: req.body.description,
    location: req.body.location,
    start_date: req.body.start_date,
    end_date: req.body.end_date,
    duration: req.body.duration
  }

  User.findOneAndUpdate({ _id: req.body.id }, {$set:{experience:experienceData}}, { upsert: true }, function (err, doc) {
    if (err) return res.send(500, { error: err });
    return res.send('Succesfully saved.');
  });
})

router.post('/education', (req, res) => {
  const educationData = {
    location: req.body.location,
    degree: req.body.degree,
    start_date: req.body.start_date,
    end_date: req.body.end_date,
    school: req.body.school,
    major: req.body.major,
    cgpa: req.body.cgpa,
  }

  User.findOneAndUpdate({ _id: req.body.id }, {$set:{education:educationData}}, { upsert: true }, function (err, doc) {
    if (err) return res.send(500, { error: err });
    return res.send('Succesfully saved.');
  });
})

router.post('/contact', (req, res) => {
  const contactData = {
    email: req.body.email,
    phone: req.body.phone,
  }

  User.findOneAndUpdate({ _id: req.body.id }, {$set:{contact:contactData}}, { upsert: true }, function (err, doc) {
    if (err) return res.send(500, { error: err });
    return res.send('Succesfully saved.');
  });
})

router.post('/login', (req, res) => {

  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) res.send(err);

    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        let token = jwt.sign(user.toJSON(), process.env.SECRET_KEY, {
          expiresIn: 1440
        })
        res.send(token)
      }
    } else {
      res.status(400).json({ error: 'User does not exist' })
    }
  });
})

router.get('/profile', (req, res) => {

  User.findById(req.query.id, function (err, user) {
    if (err) res.send(err);

    else if (user) {
      res.send(user)
    } else {
      res.write("User not found")
    }
  });
})


module.exports = router