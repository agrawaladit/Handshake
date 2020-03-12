const express = require('express');
const router = express.Router();
const cors = require('cors')
const {Company} = require('../models')

router.use(cors())

router.post('/', (req, res) => {
  const today = new Date()
  const companyData = {
    company: req.body.company,
    email: req.body.email,
    location: req.body.location,
    id: req.body.id,
    description: req.body.description,
    created: today
  }
  console.log(companyData)

  Company.upsert(companyData)
    .then(company => {
      res.json({ status: company.company + ' Updated!' })
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

router.get('/', (req, res) => {

  initcompany = {
    company: "",
    email: "",
    id: req.query.id,
    password: "",
    location: "",
    description: ""
  }
  Company.findOne({
    where: {
      id: req.query.id
    }
  })
    .then(company => {
      if (company) {
        res.send(company)
      } else {
        res.send(initcompany)
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

module.exports = router