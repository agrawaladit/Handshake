const path = require("path");
const multer = require("multer");
const express = require('express');
const router = express.Router();
const cors = require('cors')
const { UserContact,Company } = require('../models')

router.use(cors())

const storage = multer.diskStorage({
    destination: "./public/uploads/user/image",
    filename: function (req, file, cb) {
        cb(null, "IMAGE-" + Date.now() + path.extname(file.originalname));
    }
});

upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 },
}).single("myImage");

router.post('/image', function (req, res) {
    upload(req, res, function (err) {
        console.log("Request file ---", req.file);
        console.log("Request data", req.body.id);
        try{
        const userData = {
            id: req.body.id,
            image: req.file.filename
        }

        UserContact.upsert(userData)
            .then(user => {
                console.log({ status: 'Photo Updated!' })
            })
            .catch(err => {
                console.log('error: ' + err)
            })
        }
        catch{
            console.log('Loading')
        }

        if (!err) {
            return res.sendStatus(200).end();
        }
    })
})

const storageResume = multer.diskStorage({
    destination: "./public/uploads/user/resume",
    filename: function (req, file, cb) {
        cb(null, "RESUME-" + Date.now() + path.extname(file.originalname));
    }
});

uploadResume = multer({
    storage: storageResume,
    limits: { fileSize: 1000000 },
}).single("myImage");

router.post('/resume', function (req, res) {
    uploadResume(req, res, function (err) {
        console.log("Request file ---", req.file);
        console.log("Request data", req.body.id);

        try{
            const userData = {
                id: req.body.id,
                resume: req.file.filename
            }
    
            UserContact.upsert(userData)
                .then(user => {
                    console.log({ status: 'Resume Updated!' })
                })
                .catch(err => {
                    console.log('error: ' + err)
                })
        }
        catch(err){}
        

        if (!err) {
            return res.sendStatus(200).end();
        }
    })
})

const storageCompany = multer.diskStorage({
    destination: "./public/uploads/company/image",
    filename: function (req, file, cb) {
        cb(null, "IMAGE-" + Date.now() + path.extname(file.originalname));
    }
});

uploadCompany = multer({
    storage: storageCompany,
    limits: { fileSize: 1000000 },
}).single("myImage");

router.post('/company', function (req, res) {
    uploadCompany(req, res, function (err) {
        console.log("Request file ---", req.file);
        console.log("Request data", req.body.id);
        try{
            const userData = {
                id: req.body.id,
                image: req.file.filename
            }
    
            Company.upsert(userData)
                .then(user => {
                    console.log({ status: 'Company image Updated!' })
                })
                .catch(err => {
                    console.log('error: ' + err)
                })
        }
        catch(err){}
        

        if (!err) {
            return res.sendStatus(200).end();
        }
    })
})


module.exports = router