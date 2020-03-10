const express = require('express');
const router = express.Router();
const cors = require('cors')
const Job = require('../models/Job')

router.use(cors())

router.post('/', (req, res) => {
  const today = new Date()
  var date = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();
  const userData = {
    company: req.body.company,
    title: req.body.title,
    date: date,
    description: req.body.description,
    location: req.body.location,
    deadline: req.body.deadline,
    category: req.body.category,
    salary: req.body.salary,
    created: today
  }

  Job.create(userData)
    .then(user => {
      console.log(user.location)
      res.json({ status: user.school + ' Updated!' })
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

router.get('/', (req, res) => {

  initJob = {
    id: req.query.id,
    company: ''
  }
  Job.findOne({
    where: {
      id: req.query.id
    }
  })
    .then(job => {
      if (job) {
        res.send(job)
      } else {
        res.send(initJob)
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

module.exports = router