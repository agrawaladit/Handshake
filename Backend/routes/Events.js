const express = require('express');
const router = express.Router();
const cors = require('cors')
const Event = require('../models/Event')

router.use(cors())

router.post('/', (req, res) => {
    console.log(req.body)
    const userData = {
        company: req.body.company,
        name: req.body.name,
        description: req.body.description,
        time: req.body.time,
        date: req.body.date,
        location: req.body.location,
        eligibility: req.body.eligibility
    }
    
    const newEvent = new Event(userData)
    newEvent.save()
        .then(event => {
            res.json({ status: event.name + ' Registered!' })
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})


router.get('/', (req, res) => {
    Event.find()
        .populate('company')
        .exec(function (err, events) {
            if (err) res.send(err)
            res.send(events)
        })
})


module.exports = router