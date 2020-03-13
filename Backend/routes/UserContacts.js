const express = require('express');
const router = express.Router();
const cors = require('cors')
const {UserContact} = require('../models')
router.use(cors())

router.post('/', (req, res) => {
    const today = new Date()
    const userData = {
        id: req.body.id,
        email: req.body.email,
        phone: req.body.phone,
        created: today
    }

    UserContact.upsert(userData)
        .then(user => {
            res.json({ status: user.id + ' Updated!' })
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})

router.get('/', (req, res) => {
    var initUser = {
        email: "",
        phone: "",
        id: req.query.id
    }

    UserContact.findOne
        ({
            where: {
                id: req.query.id
            }
        })
        .then(user => {
            if (user) {
                res.send(user)
            }
            else {
                res.send(initUser)
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})

module.exports = router