const Admin = require("../Models/Admin");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();


router.get('/', async (req, res) => {
    console.log(req.body);
    const admin = await Admin.find();
    console.log(admin);
    res.send(admin);
});
router.post('/signup', async (req,res) => {
   /// console.log('pos55555ting');
    console.log(req.body);

    //look for an Admin with the same name || SSN;
    const result = await Admin.find({           
        $or:[{ SSN: req.body.SSN },
            { userName: req.body.name },
            { email: req.body.email }] });

    if (result.length > 0) {                
        console.log('already exists');
                   return res.status(400).send('Already  Exists');
    }
    let admin = new Admin({
        SSN: parseInt(req.body.SSN),
        email: req.body.email,
        password: req.body.password,
        userName: req.body.name,  
    });
    try {
        admin = await admin.save();
    } catch (error) {
        console.log(error)
    };
   
    res.status(200).send(admin);
    console.log(admin);
});
router.post('/login', async (req, res) => {
    console.log(req.body);
    result = await Admin.find({ userName: req.body.userName, password: req.body.password });
    //if found 
    if (result.length === 0) {
        console.log('not found');
        return res.status(404).send('Admin is not found');
    }
        console.log('AUTHORIZED');
        return res.status(200).send('AUTHORIZED');
});
module.exports = router;