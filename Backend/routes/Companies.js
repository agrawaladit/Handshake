const express = require('express');
const router = express.Router();
const cors = require('cors')
const Company = require('../models/Company')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

process.env.SECRET_KEY = 'secret'
router.use(cors())
//Get Company list
router.get('/', (req, res) => Company.find()
  .then(u => {
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
    location: req.body.location
  }

  Company.findOne({ email: req.body.email }, function (err, company) {
    if (err) res.send(err);

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
  });

  // Company.findOne({
  //   where: {
  //     email: req.body.email
  //   }
  // })
  //   //TODO bcrypt
  //   .then(company => {
  //     if (!company) {
  //       bcrypt.hash(req.body.password, 10, (err, hash) => {
  //         companyData.password = hash
  //         Company.create(companyData)
  //           .then(company => {
  //             console.log(company.email)
  //             res.json({ status: company.email + 'Registered!' })
  //           })
  //           .catch(err => {
  //             res.send('error: ' + err)
  //           })
  //       })
  //     } else {
  //       res.json({ error: 'Company already exists' })
  //     }
  //   })
  //   .catch(err => {
  //     res.send('error: ' + err)
  //   })
})

router.post('/login', (req, res) => {

  Company.findOne({ email: req.body.email }, function (err, company) {
    if (err) res.send(err);

    if (company) {
      if (bcrypt.compareSync(req.body.password, company.password)) {
        let token = jwt.sign(company.toJSON(), process.env.SECRET_KEY, {
          expiresIn: 1440
        })
        res.send(token)
      }
    } else {
      res.status(400).json({ error: 'Company does not exist' })
    }
  });


  // Company.findOne({
  //   where: {
  //     email: req.body.email
  //   }
  // })
  //   .then(company => {
  //     if (company) {
  //       if (bcrypt.compareSync(req.body.password, company.password)) {
  //         let token = jwt.sign(company.dataValues, process.env.SECRET_KEY, {
  //           expiresIn: 1440
  //         })
  //         res.send(token)
  //       }
  //     } else {
  //       res.status(400).json({ error: 'Company does not exist' })
  //     }
  //   })
  //   .catch(err => {
  //     res.status(400).json({ error: err })
  //   })
})

router.get('/profile', (req, res) => {
  //var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
  Company.findById(req.query.id, function (err, company) {
    if (err) res.send(err);

    if (company) {
      res.json(company)
    } else {
      res.send('Company does not exist')
    }
  });



  
  // Company.findOne({
  //   where: {
  //     id: decoded.id
  //   }
  // })
  //   .then(company => {
  //     if (company) {
  //       res.json(company)
  //     } else {
  //       res.send('Company does not exist')
  //     }
  //   })
  //   .catch(err => {
  //     res.send('error: ' + err)
  //   })
})

router.post('/update', (req, res) => {
  const companyData = {
    company: req.body.company,
    email: req.body.email,
    location: req.body.location,
    description: req.body.description
  }

  Company.findOneAndUpdate({ _id: req.body.id }, {$set:companyData}, { upsert: true }, function (err, doc) {
    if (err) return res.send(500, { error: err });
    return res.send('Succesfully saved.');
  });
})


module.exports = router