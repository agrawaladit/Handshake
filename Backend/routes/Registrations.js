const express = require('express');
const router = express.Router();
const cors = require('cors')
const Registration = require('../models/Registration')


router.use(cors())

router.post('/', (req, res) => {
    const appData = {
        student: (req.body.student_id),
        event: (req.body.event_id)
    }

    Registration.findOne({
        student: (req.body.student_id),
        event: (req.body.event_id),
    }, function (err, reg) {
        if (err) res.send(err);

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
    });

    // Registration.findOne({
    //     where: {
    //         student_id: (req.body.student_id),
    //         event_id: (req.body.event_id),
    //     }
    // })
    //     .then(reg => {
    //         if (!reg) {
    //             Registration.create(appData)
    //             .then(reg => {
    //                 res.json({ status: 'Added!' })
    //             })
    //             .catch(err => {
    //                 res.send('error: ' + err)
    //             })
    //         } else {
    //             res.json({ error: 'Already Registered' })
    //         }
    //     })
    //     .catch(err => {
    //         res.send('error: ' + err)
    //     })
})

router.get('/', (req, res) => {
    Registration.find()
    .populate('student')
    .populate('event')
    .exec(function(err, regs){
        if (err) res.send(err)
        res.send(regs)
    })
})

// router.get('/', (req, res) => Registration.findAll({
//     include: [User,Event]
// })
//     .then(regs => {
//         res.send(regs)
//     })
//     .catch(error => console.log(error))
// )

module.exports = router