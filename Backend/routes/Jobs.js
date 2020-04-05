const express = require('express');
const router = express.Router();
const cors = require('cors')
const Job = require('../models/Job')

router.use(cors())

router.post('/', (req, res) => {
  const today = new Date()
  var date = (today.getMonth() + 1) + '-' + today.getDate() + '-' + today.getFullYear();
  const userData = {
    company: req.body.company,
    title: req.body.title,
    date: date,
    description: req.body.description,
    location: req.body.location,
    deadline: req.body.deadline,
    category: req.body.category,
    salary: req.body.salary
  }

  const newJob = new Job(userData)
  newJob.save()
    .then(job => {
      res.json({ status: job.title + ' Registered!' })
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

router.get('/', (req, res) => {
  Job.find()
  .populate('company')
  .exec(function(err, jobs){
      if (err) res.send(err)
      res.send(jobs)
  })
})


module.exports = router