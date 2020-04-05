const express = require('express');
const router = express.Router();
const cors = require('cors')
const Application = require('../models/Application')


router.use(cors())

router.post('/update', (req, res) => {

    Application.findOneAndUpdate({ _id: req.body.id }, {$set:{status:req.body.status}}, { upsert: true }, function (err, doc) {
        if (err) return res.send(500, { error: err });
        return res.send('Succesfully updated.');
      });
})

router.post('/', (req, res) => {
    const appData = {
        student: (req.body.student_id),
        job: (req.body.job_id),
        status: req.body.status
    }

    Application.findOne({
        student: (req.body.student_id),
        job: (req.body.job_id),
    }, function (err, application) {
        if (err) res.send(err);

        if (!application) {
            Application.create(appData)
                .then(app => {
                    res.json({ status: 'Added!' })
                })
                .catch(err => {
                    res.send('error: ' + err)
                })
        } else {
            res.json({ error: 'Job Already Applied' })
        }
    });


    // Application.findOne({
    //     student_id: (req.body.student_id),
    //     job_id: (req.body.job_id),
    // })
    //     .then(application => {
    //         if (!application) {
    //             Application.create(appData)
    //                 .then(app => {
    //                     res.json({ status: 'Added!' })
    //                 })
    //                 .catch(err => {
    //                     res.send('error: ' + err)
    //                 })
    //         } else {
    //             res.json({ error: 'Job Already Applied' })
    //         }
    //     })
    //     .catch(err => {
    //         res.send('error: ' + err)
    //     })
})

router.get('/', (req, res) => {
    Application.find()
    .populate('student')
    .populate('job')
    .exec(function(err, apps){
        if (err) res.send(err)
        res.send(apps)
    })
})

module.exports = router