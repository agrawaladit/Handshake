const express = require('express');
const router = express.Router();
const cors = require('cors')
const UserEducation = require('../models/UserEducation')

router.use(cors())

router.post('/', (req, res) => {
  const today = new Date()
  const userData = {
    location: req.body.location,
    degree: req.body.degree,
    start_date: req.body.start_date,
    end_date: req.body.end_date,
    school: req.body.school,
    id: req.body.id,
    major: req.body.major,
    cgpa: req.body.cgpa,
    created: today
  }
  console.log(userData)

  UserEducation.create(userData)
    .then(user => {
      console.log(user.location)
      res.json({ status: user.school + ' Registered!' })
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

router.get('/', (req, res) => {

  initUser = {
    school: "",
    id: req.query.id,
    major: "",
    location: "",
    degree: "",
    start_date: "",
    end_date: "",
    cgpa: ""
  }
  UserEducation.findOne({
    where: {
      id: req.query.id
    }
  })
    .then(user => {
      if (user) {
        res.send(user)
      } else {
        res.send(initUser)
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

module.exports = router