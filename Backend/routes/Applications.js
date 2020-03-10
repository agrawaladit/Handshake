const express = require('express');
const router = express.Router();
const cors = require('cors')
const Application = require('../models/Application')

router.use(cors())

router.post('/update', (req, res) => {
    const today = new Date()
    const appData = {
        id: req.body.id,
        status: req.body.status,
    }

    Application.upsert(appData)
    .then(app => {
        res.json({ status: 'Updated!' })
    })
    .catch(err => {
        res.send('error: ' + err)
    })
})

router.post('/', (req, res) => {
    const today = new Date()
    const appData = {
        student_id: parseInt(req.body.student_id),
        job_id: parseInt(req.body.job_id),
        student_name: req.body.student_name,
        status: req.body.status,
        created: today
    }

    Application.findOne({
        where: {
            student_id: parseInt(req.body.student_id),
            job_id: parseInt(req.body.job_id),
        }
    })
        .then(application => {
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
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})

router.get('/', (req, res) => Application.findAll()
    .then(apps => {
        res.send(apps)
    })
    .catch(error => console.log(error))
)

module.exports = router