const express = require('express');
const router = express.Router();
const cors = require('cors')
const Message = require('../models/Message')


router.use(cors())


router.post('/', (req, res) => {
    const appData = {
        student: req.body.student,
        company: req.body.company,
        messages: req.body.messages
    }

    Message.findOne({
        student: req.body.student,
        company: req.body.company,
    }, function (err, messages) {
        if (err) res.send(err);

        if (!messages) {
            Message.create(appData)
                .then(app => {
                    res.json({ status: 'Added!' })
                })
                .catch(err => {
                    res.send('error: ' + err)
                })
        } else {
            Message.findOneAndUpdate({ student: req.body.student}, {$push:{messages:req.body.messages}}, { upsert: true }, function (err, doc) {
                if (err) return res.send(500, { error: err });
                return res.send('Succesfully updated.');
              });
        }
    });
})

router.get('/', (req, res) => {
    Message.find()
    .exec(function(err, apps){
        if (err) res.send(err)
        res.send(apps)
    })
})

module.exports = router
