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
        student_name: req.body.student_name,
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
})

router.get('/', (req, res) => {
    Application.find()
    .exec(function(err, apps){
        if (err) res.send(err)
        res.send(apps)
    })
})

module.exports = router
