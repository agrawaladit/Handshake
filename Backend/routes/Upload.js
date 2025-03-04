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

router.post('/resume', (req, res) => {
    uploadResume(req, res, function (err) {
        console.log("Request file ---", req.file);
        console.log("Request data", req.body.id);

        try{
            const userData = {
                resume: req.file.filename
            }
    
            User.findOneAndUpdate({ _id: req.body.id }, {$set:{education:userData}}, { upsert: true }, function (err, doc) {
                if (err) return res.send(500, { error: err });
                return res.send('Succesfully saved.');
              });
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

router.post('/company', (req, res) => {
    uploadCompany(req, res, function (err) {
        console.log("Request file ---", req.file);
        console.log("Request data", req.body.id);
        try{
            Company.findOneAndUpdate({ _id: req.body.id }, {$set:{image:req.file.filename }}, { upsert: true }, function (err, doc) {
                if (err) return res.send(500, { error: err });
                return res.send('Succesfully saved.');
              });
        }
        catch(err){}
        

        if (!err) {
            return res.sendStatus(200).end();
        }
    })
})


module.exports = router