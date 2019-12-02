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
   /// console.log('posting');
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
    //if not found 
    if (result.length === 0) {
        console.log('not found');
        return res.status(404).send('Admin is not found');
    }
        console.log('AUTHORIZED');
        return res.status(200).send('AUTHORIZED');
});

///Edit Admin Email
router.put('/edit/email', async (req, res) => {
    console.log(req.body);

    const admin = await Admin.findOne({ userName: req.body.userName });
    // if admin is not found in DataBase
    
    if (!admin) return res.status(404).send('Not found');

    if (req.body.email) {

        let results = await Admin.find({ email: req.body.email });
        if (results.length>0) {

            console.log(results);
            console.log('Email already taken');
            return res.status(400).send('Email already taken');
        }
        console.log(results);
        await Admin.updateOne({ _id: admin._id }, { $set: { email: req.body.email } });
        
       
    } 
        
    const newadmin = await Admin.findOne({ userName: req.body.userName });
    console.log(newadmin);
    res.status(200).send(newadmin);






});
//Edit Phone Number
router.put('/edit/phone', async (req, res) => {

    const admin = await Admin.findOne({ userName: req.body.userName });
    // if admin is not found in DataBase
    if (!admin) {
        console.log('sss');

        return res.status(404).send('Not found');
    }
    if (req.body.phoneNumber) {
        

        await Admin.updateOne({ _id: admin._id }, { $set: { phoneNumber: req.body.phoneNumber } });

    }

    const newadmin = await Admin.findOne({ userName: req.body.userName });
    res.status(200).send(newadmin);

});
router.put('/edit/password', async (req, res) => {

    const admin = await Admin.findOne({ userName: req.body.userName, password: req.body.password });
    // if admin is not found in DataBase

    if (!admin) return res.status(404).send('wrong password');

    if (req.body.newPassword && req.body.newPassword !== req.body.password) {
        await Admin.updateOne({ _id: admin._id }, { $set: { password: req.body.newPassword } });
    }
    else {
        return res.status(400).send('Invalid password');
    }
    const newadmin = await Admin.findOne({ userName: req.body.userName });
    res.status(200).send(newadmin);






});
router.put('/edit/birthDate', async (req, res) => {
    console.log(req.body);
    const admin = await Admin.findOne({ userName: req.body.userName });
    // if admin is not found in DataBase
    if (!admin) {
              return res.status(404).send('Not found');
    }
    if (req.body.birthDate) {


        await Admin.updateOne({ _id: admin._id }, { $set: { birthDate: req.body.birthDate } });

    } else {
        return res.status(400).send('BirthDate is required !!');
    }

    const newadmin = await Admin.findOne({ userName: req.body.userName });
    res.status(200).send(newadmin);

});
module.exports = router;