const express = require('express');
const router = express.Router();
const cors = require('cors')
const UserEducation = require('../models/UserEducation')

router.use(cors())

router.post('/', (req, res) => {
    const today = new Date()
    const userData = {
      school: req.body.school,
      id: req.body.id,
      major: req.body.major,
      minor: req.body.minor,
      start_date: req.body.start_date,
      end_date: req.body.end_date,
      created: today
    }

    UserEducation.create(userData)
    .then(user => {
      res.json({ status: user.school + ' Registered!' })
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

router.get('/', (req, res) => {
    UserEducation.findAll({
        where: {
        id: req.query.id
        }
    })
    .then(user => {
    if (user) {
        res.send(user)
    } else {
        res.send("No education found")
    }
    })
    .catch(err => {
    res.send('error: ' + err)
    })
})

module.exports = router