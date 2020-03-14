const express = require('express');
const router = express.Router();
const cors = require('cors')
const { Job, Company } = require('../models')

router.use(cors())

router.post('/', (req, res) => {
  const today = new Date()
  var date = (today.getMonth() + 1) + '-' + today.getDate() + '-' + today.getFullYear();
  const userData = {
    company_id: req.body.company,
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
      res.json({ status: user.school + ' Updated!' })
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

router.get('/', (req, res) => Job.findAll({
  include: [Company]
})
  .then(jobs => {
    res.send(jobs)
  })
  .catch(error => console.log(error))
)

module.exports = router