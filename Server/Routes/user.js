const express = require('express')
const router = express.Router();
const jwt = require('jsonwebtoken')
const User = require('./db');

router.post('/register' , async (req , res) => {
    console.log("inside Register " );
    User.findOne({username : req.body.username}).then((response) => { 
        if (response != null)
        {   
            res.json({
                msg : "Already Register with that username ! "
            })
        }
        else 
        {
            User.create({
                username: req.body.username,
                password: req.body.password,
                appPass: req.body.appPass
            }).then((response2) => {
                let token = jwt.sign({
                    username : response2.username 
                } , "SecreteKey")
                res.status(200).json({
                    msg : "Succefully Registerd With Personalized Mailer ",
                    token : token
                })
            }).catch((error2) => {
                res.status(400).json({
                    msg : "Something Went Wrong "
                })
            });            
        }
    }).catch((error1) => {
        res.status(400).json({
            msg : "Something Went Wrong "
        })
    });   
})

router.post('/login' , async (req ,res) => {
    User.findOne({
        username : req.body.username
    }).then((response1) => {
        if (response1 == null)
        {
            res.status(400).json({
                msg : "User Not Found"
            })
        }
        else 
        {
            if (req.body.password == response1.password)
            {
                let token = jwt.sign({
                    username : response1.username 
                } , "SecreteKey")
                res.status(200).json({
                    msg : "Login Success"
                    ,token
                })
            }
        }
    })
})
module.exports = router