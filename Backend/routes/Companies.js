const express = require('express');
const router = express.Router();
const cors = require('cors')
const Company = require('../models/Company')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

process.env.SECRET_KEY = 'secret'
router.use(cors())
//Get Company list
router.get('/',(req,res) => Company.findAll()
    .then(u => {
        console.log(u)
        var Companys = u
        res.send(u)
    })
    .catch(error => console.log(error))
    )

router.post('/register', (req, res) => {
    const today = new Date()
    const companyData = {
      company: req.body.company,
      email: req.body.email,
      password: req.body.password,
      location: req.body.location,
      created: today
    }
  
    Company.findOne({
      where: {
        email: req.body.email
      }
    })
      //TODO bcrypt
      .then(company => {
        if (!company) {
          bcrypt.hash(req.body.password, 10, (err, hash) => {
            companyData.password = hash
            Company.create(companyData)
              .then(company => {
                console.log(company.email)
                res.json({ status: company.email + 'Registered!' })
              })
              .catch(err => {
                res.send('error: ' + err)
              })
          })
        } else {
          res.json({ error: 'Company already exists' })
        }
      })
      .catch(err => {
        res.send('error: ' + err)
      })
})

router.post('/login', (req, res) => {
    Company.findOne({
        where: {
        email: req.body.email
        }
    })
    .then(company => {
    if (company) {
        if (bcrypt.compareSync(req.body.password, company.password)) {
        let token = jwt.sign(company.dataValues, process.env.SECRET_KEY, {
            expiresIn: 1440
        })
        res.send(token)
        }
    } else {
        res.status(400).json({ error: 'Company does not exist' })
    }
    })
    .catch(err => {
    res.status(400).json({ error: err })
    })
})

router.get('/profile', (req, res) => {
    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
    Company.findOne({
        where: {
        id: decoded.id
        }
    })
    .then(company => {
    if (company) {
        res.json(company)
    } else {
        res.send('Company does not exist')
    }
    })
    .catch(err => {
    res.send('error: ' + err)
    })
})


module.exports = router