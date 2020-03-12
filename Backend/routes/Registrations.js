const express = require('express');
const router = express.Router();
const cors = require('cors')
const {User,Event,Registration} = require('../models')


router.use(cors())

router.post('/', (req, res) => {
    const today = new Date()
    const appData = {
        student_id: parseInt(req.body.student_id),
        event_id: parseInt(req.body.event_id),
        created: today
    }

    Registration.findOne({
        where: {
            student_id: parseInt(req.body.student_id),
            event_id: parseInt(req.body.event_id),
        }
    })
        .then(reg => {
            if (!reg) {
                Registration.create(appData)
                .then(reg => {
                    res.json({ status: 'Added!' })
                })
                .catch(err => {
                    res.send('error: ' + err)
                })
            } else {
                res.json({ error: 'Already Registered' })
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})

router.get('/', (req, res) => Registration.findAll({
    include: [User,Event]
})
    .then(regs => {
        res.send(regs)
    })
    .catch(error => console.log(error))
)

module.exports = router