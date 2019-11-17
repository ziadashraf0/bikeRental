const Admin = require("../Models/Admin");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();


router.get('/', async (req, res) => {
    const admin = await Admin.find();
    res.send(admin);
});
router.post('/signup', async (req, res) => {
    console.log('posting');
    console.log(req.body);
    const admin = new Admin({
        SSN: parseInt(req.body.SSN),
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.name,  
    });
   
        admins = await admin.save();
        
   
    res.send(admins);
    console.log(admins);
});
module.exports = router;