const express = require('express');
const router = express.Router();
const cors = require('cors')
const Event = require('../models/Event')

router.use(cors())

router.post('/', (req, res) => {
    const today = new Date()
    const userData = {
        company_id: parseInt(req.body.company),
        name: req.body.name,
        description: req.body.description,
        time: req.body.time,
        date: req.body.date,
        location: req.body.location,
        eligibility: req.body.eligibility,
        created: today
    }

    Event.create(userData)
        .then(user => {
            res.json({ status: event.name + ' Updated!' })
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})

router.get('/', (req, res) => Event.findAll()
    .then(events => {
        res.send(events)
    })
    .catch(error => console.log(error))
)

module.exports = router