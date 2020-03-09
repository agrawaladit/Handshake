const express = require('express');
const router = express.Router();
const cors = require('cors')
const UserExperience = require('../models/UserExperience')

router.use(cors())

router.post('/', (req, res) => {
    const today = new Date()
    const userData = {
      company: req.body.company,
      title: req.body.title,
      id: req.body.id,
      description: req.body.description,
      location: req.body.location,
      start_date: req.body.start_date,
      end_date: req.body.end_date,
      duration: req.body.duration,
      created: today
    }

    UserExperience.create(userData)
    .then(user => {
      res.json({ status: user.company + ' Registered!' })
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

router.get('/', (req, res) => {
    UserExperience.findAll({
        where: {
        id: req.body.id
        }
    })
    .then(user => {
    if (user) {
        res.send(user)
    } else {
        res.send('No Experience Present')
    }
    })
    .catch(err => {
    res.send('error: ' + err)
    })
})

module.exports = router